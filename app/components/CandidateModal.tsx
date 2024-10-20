import React from 'react'
import { CandidateModalProps } from '../types/component'
import { Button } from './ui/button'

export const CandidateModal = ({ candidate, onClose }: CandidateModalProps) => {
  if (!candidate) return null

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{candidate.name}</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Contact: {candidate.contact}<br />
              Skills: {candidate.skills}<br />
              Experience: {candidate.experience}<br />
              Education: {candidate.education}<br />
              Match: {candidate.match ? 'Yes' : 'No'}
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
