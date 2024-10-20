import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Candidate = {
  id: number
  name: string
  contact: string
  skills: string
  experience: string
  education: string
  match: boolean
}

type AppState = {
  candidates: Candidate[]
  uploadedResumes: string[]
  criteria: { skills: string; experience: string; education: string }
  currentPage: number
  resumesPage: number
  selectedCandidate: Candidate | null
  setCandidates: (candidates: Candidate[]) => void
  setUploadedResumes: (resumes: string[]) => void
  setCriteria: (criteria: AppState['criteria']) => void
  setCurrentPage: (page: number) => void
  setResumesPage: (page: number) => void
  setSelectedCandidate: (candidate: Candidate | null) => void
}

const initialCandidates: Candidate[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Candidate ${i + 1}`,
  contact: `candidate${i + 1}@example.com`,
  skills: ['React', 'Node.js', 'Java', 'Spring', 'Python'][Math.floor(Math.random() * 5)],
  experience: `${Math.floor(Math.random() * 10 + 1)} years`,
  education: ['Bachelor in CS', 'Master in AI', 'PhD in SE'][Math.floor(Math.random() * 3)],
  match: Math.random() > 0.5
}))

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        candidates: initialCandidates,
        uploadedResumes: [],
        criteria: { skills: '', experience: '', education: '' },
        currentPage: 1,
        resumesPage: 1,
        selectedCandidate: null,
        setCandidates: (candidates) => set({ candidates }),
        setUploadedResumes: (resumes) => set({ uploadedResumes: resumes }),
        setCriteria: (criteria) => set({ criteria }),
        setCurrentPage: (page) => set({ currentPage: page }),
        setResumesPage: (page) => set({ resumesPage: page }),
        setSelectedCandidate: (candidate) => set({ selectedCandidate: candidate }),
      }),
      {
        name: 'resume-screening-storage',
      }
    )
  )
)
