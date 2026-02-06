import { motion } from 'framer-motion'

export default function ProgressBar({ progress, currentSection, totalSections, theme }) {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium" style={{ color: theme.colors.labelText }}>
          Section {currentSection} of {totalSections}
        </span>
        <span className="text-sm font-medium" style={{ color: theme.colors.buttonPrimary }}>
          {Math.round(progress)}% Complete
        </span>
      </div>
      
      <div 
        className="h-3 rounded-full overflow-hidden"
        style={{ 
          background: theme.colors.progressBg,
          boxShadow: theme.name === 'dark' ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : 'inset 0 2px 4px rgba(0,0,0,0.05)'
        }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ 
            background: theme.colors.progressFill,
            boxShadow: theme.name === 'dark' 
              ? '0 0 20px rgba(42, 197, 215, 0.5)' 
              : '0 2px 4px rgba(42, 197, 215, 0.3)'
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
      </div>
    </div>
  )
}
