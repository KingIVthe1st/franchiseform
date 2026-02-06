import { motion } from 'framer-motion'

export default function FormField({ field, value, onChange, index, theme }) {
  const handleChange = (e) => {
    if (field.type === 'file') {
      onChange(e.target.files[0])
    } else if (field.type === 'checkbox') {
      onChange(e.target.checked)
    } else {
      onChange(e.target.value)
    }
  }

  const inputStyles = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: `2px solid ${theme.colors.inputBorder}`,
    borderRadius: '0.5rem',
    outline: 'none',
    transition: 'all 0.2s',
    background: theme.colors.inputBg,
    color: theme.colors.bodyText,
  }

  const renderInput = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.name}
            value={value}
            onChange={handleChange}
            placeholder={field.placeholder}
            rows={field.rows || 4}
            style={inputStyles}
            className="resize-none focus-ring"
            required={field.required}
            onFocus={(e) => {
              e.target.style.borderColor = theme.colors.inputBorderFocus
              e.target.style.boxShadow = `0 0 0 4px ${theme.colors.inputBorderFocus}1A`
            }}
            onBlur={(e) => {
              e.target.style.borderColor = theme.colors.inputBorder
              e.target.style.boxShadow = 'none'
            }}
          />
        )
      
      case 'select':
        return (
          <select
            id={field.name}
            value={value}
            onChange={handleChange}
            style={inputStyles}
            className="focus-ring"
            required={field.required}
            onFocus={(e) => {
              e.target.style.borderColor = theme.colors.inputBorderFocus
              e.target.style.boxShadow = `0 0 0 4px ${theme.colors.inputBorderFocus}1A`
            }}
            onBlur={(e) => {
              e.target.style.borderColor = theme.colors.inputBorder
              e.target.style.boxShadow = 'none'
            }}
          >
            <option value="">Select an option</option>
            {field.options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )
      
      case 'radio':
        return (
          <div className="space-y-3">
            {field.options.map(option => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name={field.name}
                  value={option}
                  checked={value === option}
                  onChange={handleChange}
                  className="w-5 h-5"
                  style={{
                    accentColor: theme.colors.buttonPrimary
                  }}
                  required={field.required}
                />
                <span 
                  className="transition-colors"
                  style={{ color: theme.colors.bodyText }}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        )
      
      case 'checkbox':
        return (
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={value}
              onChange={handleChange}
              className="mt-1 w-5 h-5 rounded"
              style={{
                accentColor: theme.colors.buttonPrimary
              }}
            />
            <span 
              className="transition-colors"
              style={{ color: theme.colors.bodyText }}
            >
              {field.label}
            </span>
          </label>
        )
      
      case 'file':
        return (
          <div 
            className="border-2 border-dashed rounded-lg p-6 transition-colors"
            style={{
              borderColor: theme.colors.inputBorder,
              background: theme.colors.inputBg
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.colors.inputBorderFocus
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.colors.inputBorder
            }}
          >
            <input
              type="file"
              id={field.name}
              onChange={handleChange}
              accept={field.accept}
              className="hidden"
              required={field.required}
            />
            <label
              htmlFor={field.name}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: theme.colors.sectionNumberBg }}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke={theme.colors.buttonPrimary} 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div className="text-center">
                <span 
                  className="font-medium"
                  style={{ color: theme.colors.buttonPrimary }}
                >
                  Click to upload
                </span>
                <span 
                  className="text-sm block mt-1"
                  style={{ color: theme.colors.labelText }}
                >
                  {value ? value.name : field.placeholder || 'No file chosen'}
                </span>
              </div>
            </label>
          </div>
        )
      
      default:
        return (
          <input
            type={field.type || 'text'}
            id={field.name}
            value={value}
            onChange={handleChange}
            placeholder={field.placeholder}
            style={inputStyles}
            className="focus-ring"
            required={field.required}
            onFocus={(e) => {
              e.target.style.borderColor = theme.colors.inputBorderFocus
              e.target.style.boxShadow = `0 0 0 4px ${theme.colors.inputBorderFocus}1A`
            }}
            onBlur={(e) => {
              e.target.style.borderColor = theme.colors.inputBorder
              e.target.style.boxShadow = 'none'
            }}
          />
        )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="space-y-2"
    >
      {field.label && field.type !== 'checkbox' && (
        <label 
          htmlFor={field.name} 
          className="block text-sm font-medium mb-2"
          style={{ color: theme.colors.labelText }}
        >
          {field.label}
          {field.required && <span style={{ color: '#ef4444' }} className="ml-1">*</span>}
        </label>
      )}
      
      {field.helpText && (
        <p className="text-sm mb-2" style={{ color: theme.colors.labelText, opacity: 0.7 }}>
          {field.helpText}
        </p>
      )}
      
      {renderInput()}
    </motion.div>
  )
}
