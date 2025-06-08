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
    <div className="card p-8 max-w-lg mx-auto animate-slide-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </div>
        <h3 className="font-heading text-3xl font-bold text-gray-900 mb-3">
          Claim Your <span className="gradient-text">Free SWAG!</span>
        </h3>
        <p className="text-gray-600 text-lg">
          Complete your details to receive your exclusive incident.io SWAG package.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
      
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
            Role *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
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

        <div className="flex items-start pt-2">
          <input
            type="checkbox"
            id="agreeToMarketing"
            name="agreeToMarketing"
            checked={formData.agreeToMarketing}
            onChange={handleChange}
            className="mt-1 h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="agreeToMarketing" className="ml-3 text-sm text-gray-600">
            I agree to receive marketing communications from incident.io
          </label>
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-8"
        >
          Claim My SWAG →
        </button>
        
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  )
}