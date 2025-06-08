'use client'

import { useEffect, useRef } from 'react'

interface HubSpotFormProps {
  onSubmit?: () => void
}

declare global {
  interface Window {
    hbspt: any
  }
}

export default function HubSpotForm({ onSubmit }: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load HubSpot script if not already loaded
    if (!window.hbspt) {
      const script = document.createElement('script')
      script.src = 'https://js.hsforms.net/forms/embed/v2.js'
      script.async = true
      script.onload = () => {
        createForm()
      }
      document.body.appendChild(script)
    } else {
      createForm()
    }

    function createForm() {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId: '242999486',
          formId: '85533d24-ae80-495a-ba83-c81fba4cb3de',
          target: formRef.current,
          onFormSubmitted: () => {
            if (onSubmit) {
              onSubmit()
            }
          },
          onFormReady: () => {
            // Apply custom styling after form loads
            styleHubSpotForm()
          }
        })
      }
    }

    function styleHubSpotForm() {
      // Wait a bit for the form to fully render
      setTimeout(() => {
        const formContainer = formRef.current?.querySelector('.hbspt-form')
        if (formContainer) {
          // Apply our custom styles
          const style = document.createElement('style')
          style.textContent = `
            .hbspt-form {
              font-family: 'Inter', system-ui, sans-serif !important;
            }
            
            .hbspt-form .hs-form-field {
              margin-bottom: 1.5rem !important;
            }
            
            .hbspt-form label {
              display: block !important;
              font-size: 0.875rem !important;
              font-weight: 600 !important;
              color: #374151 !important;
              margin-bottom: 0.5rem !important;
            }
            
            .hbspt-form input[type="text"],
            .hbspt-form input[type="email"],
            .hbspt-form input[type="tel"],
            .hbspt-form select,
            .hbspt-form textarea {
              width: 100% !important;
              padding: 0.75rem 1rem !important;
              border: 2px solid #e5e7eb !important;
              border-radius: 0.75rem !important;
              font-size: 1rem !important;
              background-color: #ffffff !important;
              transition: all 0.2s ease-in-out !important;
              box-sizing: border-box !important;
            }
            
            .hbspt-form input[type="text"]:focus,
            .hbspt-form input[type="email"]:focus,
            .hbspt-form input[type="tel"]:focus,
            .hbspt-form select:focus,
            .hbspt-form textarea:focus {
              outline: none !important;
              border-color: #4d65ff !important;
              box-shadow: 0 0 0 3px rgba(77, 101, 255, 0.1) !important;
            }
            
            .hbspt-form .hs-button {
              background: linear-gradient(135deg, #4d65ff 0%, #818cf8 100%) !important;
              color: white !important;
              border: none !important;
              padding: 1rem 2rem !important;
              border-radius: 0.75rem !important;
              font-size: 1rem !important;
              font-weight: 600 !important;
              cursor: pointer !important;
              transition: all 0.3s ease-out !important;
              width: 100% !important;
              margin-top: 1rem !important;
            }
            
            .hbspt-form .hs-button:hover {
              transform: scale(1.05) !important;
              box-shadow: 0 10px 25px rgba(77, 101, 255, 0.3) !important;
            }
            
            .hbspt-form .hs-error-msgs {
              color: #ef4444 !important;
              font-size: 0.875rem !important;
              margin-top: 0.25rem !important;
            }
            
            .hbspt-form .hs-form-required {
              color: #ef4444 !important;
            }
            
            .hbspt-form .hs-richtext {
              font-size: 0.875rem !important;
              color: #6b7280 !important;
              line-height: 1.5 !important;
            }
            
            .hbspt-form .legal-consent-container {
              margin-top: 1rem !important;
            }
            
            .hbspt-form .hs-form-booleancheckbox {
              display: flex !important;
              align-items: flex-start !important;
              gap: 0.75rem !important;
            }
            
            .hbspt-form .hs-form-booleancheckbox input[type="checkbox"] {
              width: 1.25rem !important;
              height: 1.25rem !important;
              margin: 0 !important;
              accent-color: #4d65ff !important;
            }
            
            .hbspt-form .hs-form-booleancheckbox label {
              margin: 0 !important;
              font-size: 0.875rem !important;
              color: #6b7280 !important;
              font-weight: 400 !important;
            }
          `
          document.head.appendChild(style)
        }
      }, 500)
    }
  }, [onSubmit])

  return (
    <div className="w-full">
      <div ref={formRef} className="hubspot-form-container" />
    </div>
  )
}