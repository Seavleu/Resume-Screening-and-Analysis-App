import React from 'react'
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';
import { FileUploadProps } from '../types/component';

export const FileUpload = ({ onUpload }: FileUploadProps) => {
  return (
    <div className="mb-4">
      <Label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
        Upload Resumes (up to 100)
      </Label>
      <Input
        id="file-upload"
        type="file"
        multiple
        accept=".pdf,.doc,.docx"
        onChange={onUpload}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  )
}
