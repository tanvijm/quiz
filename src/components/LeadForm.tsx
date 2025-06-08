'use client'

import { useState } from 'react'

interface LeadFormProps {
  onSubmit: (data: LeadData) => void
}

export interface LeadData {
  name: string
  email: string
  company: string
  role: string
  agreeToMarketing: boolean
}

export default function LeadForm({ onSubmit }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    company: '',
    role: '',
    agreeToMarketing: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Claim Your Free SWAG!
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        Fill out your details to receive your incident.io SWAG package.
      </p>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-incident-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-incident-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-incident-500"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Role *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-incident-500"
          >
            <option value="">Select your role</option>
            <option value="Engineering Manager">Engineering Manager</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Site Reliability Engineer">Site Reliability Engineer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="CTO">CTO</option>
            <option value="VP of Engineering">VP of Engineering</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="agreeToMarketing"
            name="agreeToMarketing"
            checked={formData.agreeToMarketing}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-incident-600 focus:ring-incident-500 border-gray-300 rounded"
          />
          <label htmlFor="agreeToMarketing" className="ml-2 text-sm text-gray-700">
            I agree to receive marketing communications from incident.io
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-incident-500 text-white py-3 px-4 rounded-md font-semibold hover:bg-incident-600 transition-colors"
      >
        Claim My SWAG
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}