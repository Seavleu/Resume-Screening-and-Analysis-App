// src/types/component.ts

export interface Candidate {
    id: number
    name: string
    contact: string
    skills: string
    experience: string
    education: string
    match: boolean
  }
  
  export interface Criteria {
    skills: string
    experience: string
    education: string
  }
  
  export interface FileUploadProps {
    onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  export interface CriteriaFormProps {
    criteria: Criteria
    onCriteriaChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  export interface CandidateTableProps {
    candidates: Candidate[]
    onView: (candidate: Candidate) => void
    onExport: (candidate: Candidate) => void
  }
  
  export interface CandidateModalProps {
    candidate: Candidate | null
    onClose: () => void
  }
  