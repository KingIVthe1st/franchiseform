import { motion } from 'framer-motion'

export default function FormField({ field, value, onChange, index }) {
  const handleChange = (e) => {
    if (field.type === 'file') {
      onChange(e.target.files[0])
    } else if (field.type === 'checkbox') {
      onChange(e.target.checked)
    } else {
      onChange(e.target.value)
    }
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
            className="input-field resize-none"
            required={field.required}
          />
        )
      
      case 'select':
        return (
          <select
            id={field.name}
            value={value}
            onChange={handleChange}
            className="input-field"
            required={field.required}
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
                  className="w-5 h-5 text-brand-primary focus:ring-brand-primary focus:ring-2"
                  required={field.required}
                />
                <span className="text-gray-700 group-hover:text-brand-primary transition-colors">
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
              className="mt-1 w-5 h-5 text-brand-primary focus:ring-brand-primary focus:ring-2 rounded"
            />
            <span className="text-gray-700 group-hover:text-brand-primary transition-colors">
              {field.label}
            </span>
          </label>
        )
      
      case 'file':
        return (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-primary transition-colors">
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
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div className="text-center">
                <span className="text-brand-primary font-medium">Click to upload</span>
                <span className="text-gray-500 text-sm block mt-1">
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
            className="input-field"
            required={field.required}
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
        <label htmlFor={field.name} className="label-text">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {field.helpText && (
        <p className="text-sm text-gray-500 mb-2">{field.helpText}</p>
      )}
      
      {renderInput()}
    </motion.div>
  )
}
