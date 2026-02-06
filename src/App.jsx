import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import FormHeader from './components/FormHeader'
import ProgressBar from './components/ProgressBar'
import FormSection from './components/FormSection'
import { formSections } from './data/formSections'

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [formData, setFormData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fdd-form-data')
    if (saved) {
      setFormData(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('fdd-form-data', JSON.stringify(formData))
  }, [formData])

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNext = () => {
    if (currentSection < formSections.length - 1) {
      setCurrentSection(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Prepare form data for submission
    const formDataToSend = new FormData()
    
    // Add all form fields
    Object.keys(formData).forEach(key => {
      if (formData[key] instanceof File) {
        formDataToSend.append(key, formData[key])
      } else if (Array.isArray(formData[key])) {
        formDataToSend.append(key, JSON.stringify(formData[key]))
      } else {
        formDataToSend.append(key, formData[key])
      }
    })
    
    // Add Web3Forms access key (free form backend)
    formDataToSend.append('access_key', 'YOUR_WEB3FORMS_KEY')
    formDataToSend.append('subject', 'New FDD Questionnaire Submission')
    formDataToSend.append('from_name', 'MyFranchiseMachine Intake Form')
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })
      
      const data = await response.json()
      
      if (data.success) {
        alert('Form submitted successfully! We will be in touch soon.')
        localStorage.removeItem('fdd-form-data')
        setFormData({})
        setCurrentSection(0)
      } else {
        alert('There was an error submitting the form. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const progress = ((currentSection + 1) / formSections.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/30">
      <FormHeader />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <ProgressBar progress={progress} currentSection={currentSection + 1} totalSections={formSections.length} />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          >
            <FormSection
              section={formSections[currentSection]}
              formData={formData}
              onChange={handleFieldChange}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-12 gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentSection === 0}
            className={`btn-secondary ${currentSection === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          
          {currentSection < formSections.length - 1 ? (
            <button onClick={handleNext} className="btn-primary">
              Next Section
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </main>
      
      <footer className="text-center py-8 text-gray-500 text-sm">
        © 2026 MyFranchiseMachine. All rights reserved.
      </footer>
    </div>
  )
}

export default App
