// components/CriteriaForm.tsx
import React from 'react'
import { CriteriaFormProps } from '../types/component'

export const CriteriaForm = ({ criteria, onCriteriaChange }: CriteriaFormProps) => (
  <div className="grid grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
        Required Skills
      </label>
      <input
        type="text"
        id="skills"
        name="skills"
        value={criteria.skills}
        onChange={onCriteriaChange}
        placeholder="e.g., React, Node.js, Java"
      />
    </div>
    <div>
      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
        Minimum Experience (years)
      </label>
      <input
        type="number"
        id="experience"
        name="experience"
        value={criteria.experience}
        onChange={onCriteriaChange}
        placeholder="e.g., 3"
      />
    </div>
    <div>
      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
        Education Level
      </label>
      <input
        type="text"
        id="education"
        name="education"
        value={criteria.education}
        onChange={onCriteriaChange}
        placeholder="e.g., Bachelor"
      />
    </div>
  </div>
)
