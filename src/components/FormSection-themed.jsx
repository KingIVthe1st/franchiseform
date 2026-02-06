import { motion } from 'framer-motion'
import FormField from './FormField-themed'

export default function FormSection({ section, formData, onChange, theme }) {
  return (
    <motion.div
      className="rounded-2xl p-8 md:p-12"
      style={{
        background: theme.colors.cardBg,
        border: `1px solid ${theme.colors.cardBorder}`,
        boxShadow: theme.colors.shadow,
        backdropFilter: theme.name === 'dark' ? 'blur(20px)' : 'none'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      whileHover={{
        boxShadow: theme.colors.shadowHover
      }}
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ 
              background: theme.colors.sectionNumberBg,
              boxShadow: theme.name === 'dark' ? '0 0 20px rgba(42, 197, 215, 0.2)' : 'none'
            }}
          >
            <span 
              className="font-bold text-lg"
              style={{ color: theme.colors.sectionNumberText }}
            >
              {section.number}
            </span>
          </div>
          <h2 
            className="text-2xl md:text-3xl font-bold"
            style={{ color: theme.colors.headerText }}
          >
            {section.title}
          </h2>
        </div>
        
        {section.description && (
          <p 
            className="leading-relaxed pl-15"
            style={{ color: theme.colors.bodyText }}
          >
            {section.description}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {section.fields && section.fields.map((field, index) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name] || ''}
            onChange={(value) => onChange(field.name, value)}
            index={index}
            theme={theme}
          />
        ))}
      </div>
    </motion.div>
  )
}
