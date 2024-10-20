'use client'

import React, { useEffect, useRef } from 'react'
import { Button } from './components/ui/button'
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react'
import { CandidateModal, CandidateTable, CriteriaForm, FileUpload } from './components';
import { useAppStore } from "@/app/store/useAppStore"

export default function Page() {
  const {
    candidates,
    uploadedResumes,
    criteria,
    currentPage,
    resumesPage,
    selectedCandidate,
    setCandidates,
    setUploadedResumes,
    setCriteria,
    setCurrentPage,
    setResumesPage,
    setSelectedCandidate,
  } = useAppStore()
  
  const modalRef = useRef<HTMLDivElement>(null)

  const itemsPerPage = 10

  // Handle criteria changes
  const handleCriteriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria({ ...criteria, [e.target.name]: e.target.value })
  }

  // Handle file upload and parsing
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const uploadedFiles = await mockUploadToGCS(files)
    setUploadedResumes(uploadedFiles.map(file => file.name))
    const parsedResumes = await mockParseResumes(uploadedFiles.map(file => file.url))
    console.log('Parsed resumes:', parsedResumes)
    alert(`${files.length} files uploaded and parsed.`)
  }

  // Screen resumes based on criteria
  const handleScreenResumes = () => {
    const skillsArray = criteria.skills.toLowerCase().split(/[,.\s]+/).filter(Boolean)
    const screenedCandidates = candidates.map(candidate => ({
      ...candidate,
      match: (
        skillsArray.some(skill => candidate.skills.toLowerCase().includes(skill)) &&
        parseInt(candidate.experience) >= parseInt(criteria.experience || '0') &&
        candidate.education.toLowerCase().includes(criteria.education.toLowerCase())
      )
    }))
    const sortedCandidates = screenedCandidates.sort((a, b) => (a.match === b.match ? 0 : a.match ? -1 : 1))
    setCandidates(sortedCandidates)
    mockSendNotification('recruiter@example.com')
    alert('Resumes screened based on criteria. Notification sent to recruiter.')
  }

  // View candidate details
  const handleViewCandidate = (candidate: Candidate) => {
    setSelectedCandidate(candidate)
  }

  // Export candidate details
  const handleExportCandidate = (candidate: Candidate) => {
    const candidateData = JSON.stringify(candidate, null, 2)
    const blob = new Blob([candidateData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${candidate.name.replace(' ', '_')}_resume.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  // Pagination logic for candidates and resumes
  const paginatedCandidates = candidates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const paginatedResumes = uploadedResumes.slice(
    (resumesPage - 1) * itemsPerPage,
    resumesPage * itemsPerPage
  )

  // Close candidate modal on "Escape" key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCandidate(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [setSelectedCandidate])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resume Screening and Analysis App</h1>

      <FileUpload onUpload={handleFileUpload} />

      {uploadedResumes.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Uploaded Resumes</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {paginatedResumes.map((resume, index) => (
              <div key={index} className="mb-1">{resume}</div>
            ))}
          </div>
          {uploadedResumes.length > itemsPerPage && (
            <div className="flex justify-between mt-2">
              <Button onClick={() => setResumesPage(Math.max(resumesPage - 1, 1))} disabled={resumesPage === 1}>
                <ChevronLeft className="w-4 h-4 mr-2" /> Previous
              </Button>
              <Button onClick={() => setResumesPage(Math.min(resumesPage + 1, Math.ceil(uploadedResumes.length / itemsPerPage)))} disabled={resumesPage === Math.ceil(uploadedResumes.length / itemsPerPage)}>
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      )}

      <CriteriaForm criteria={criteria} onCriteriaChange={handleCriteriaChange} />

      <Button onClick={handleScreenResumes} className="mb-4">
        <Upload className="w-4 h-4 mr-2" /> Screen Resumes
      </Button>

      <CandidateTable candidates={paginatedCandidates} onView={handleViewCandidate} onExport={handleExportCandidate} />

      <div className="flex justify-between mt-4">
        <Button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
          <ChevronLeft className="w-4 h-4 mr-2" /> Previous
        </Button>
        <Button onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(candidates.length / itemsPerPage)))} disabled={currentPage === Math.ceil(candidates.length / itemsPerPage)}>
          Next <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {selectedCandidate && (
        <CandidateModal candidate={selectedCandidate} onClose={() => setSelectedCandidate(null)} />
      )}
    </div>
  )
}
