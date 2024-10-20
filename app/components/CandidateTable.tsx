// components/CandidateTable.tsx
import React from 'react'
import { CandidateTableProps } from '../types/component'
import { Button } from './ui/button'
import { CheckCircle, XCircle, Eye, Download } from 'lucide-react'

export const CandidateTable = ({ candidates, onView, onExport }: CandidateTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Skills</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Match</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td className="px-6 py-4 whitespace-nowrap">{candidate.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{candidate.contact}</td>
              <td className="px-6 py-4 whitespace-nowrap">{candidate.skills}</td>
              <td className="px-6 py-4 whitespace-nowrap">{candidate.experience}</td>
              <td className="px-6 py-4 whitespace-nowrap">{candidate.education}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {candidate.match ? (
                  <CheckCircle className="text-green-500 w-6 h-6" />
                ) : (
                  <XCircle className="text-red-500 w-6 h-6" />
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Button variant="outline" size="sm" className="mr-2" onClick={() => onView(candidate)}>
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" onClick={() => onExport(candidate)}>
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
