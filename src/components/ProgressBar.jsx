import { motion } from 'framer-motion'

export default function ProgressBar({ progress, currentSection, totalSections }) {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-gray-600">
          Section {currentSection} of {totalSections}
        </span>
        <span className="text-sm font-medium text-brand-primary">
          {Math.round(progress)}% Complete
        </span>
      </div>
      
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-primary to-brand-primary/80 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
      </div>
    </div>
  )
}
