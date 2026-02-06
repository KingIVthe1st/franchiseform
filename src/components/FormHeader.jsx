import { motion } from 'framer-motion'

export default function FormHeader() {
  return (
    <motion.header 
      className="bg-brand-dark shadow-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-center gap-4">
          <img 
            src="/logo.jpg" 
            alt="MyFranchiseMachine" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="text-center mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Franchise Disclosure Document Questionnaire
          </h1>
          <p className="text-brand-light/80 text-lg max-w-2xl mx-auto">
            Help us prepare your FDD quickly and efficiently. All information provided is confidential.
          </p>
        </div>
      </div>
    </motion.header>
  )
}
