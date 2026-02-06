import { motion } from 'framer-motion'
import FormField from './FormField'

export default function FormSection({ section, formData, onChange }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
            <span className="text-brand-primary font-bold text-lg">
              {section.number}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
            {section.title}
          </h2>
        </div>
        
        {section.description && (
          <p className="text-gray-600 leading-relaxed pl-15">
            {section.description}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {section.fields.map((field, index) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name] || ''}
            onChange={(value) => onChange(field.name, value)}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}
