import { motion } from 'framer-motion'

export default function FormHeader({ theme }) {
  return (
    <motion.header 
      style={{
        background: theme.colors.headerBg,
        backdropFilter: theme.name === 'dark' ? 'blur(20px)' : 'none',
        boxShadow: theme.colors.shadow
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-center gap-4">
          <img 
            src={theme.logo}
            alt="MyFranchiseMachine" 
            className="h-16 w-auto"
            style={theme.logoStyle}
          />
        </div>
        
        <div className="text-center mt-6">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: theme.colors.headerText }}
          >
            Franchise Disclosure Document Questionnaire
          </h1>
          <p 
            className="text-base max-w-3xl mx-auto leading-relaxed"
            style={{ 
              color: theme.name === 'dark' 
                ? 'rgba(229, 231, 235, 0.8)' 
                : 'rgba(107, 114, 128, 1)' 
            }}
          >
            Welcome to The Franchise Firm LLP. This Questionnaire is designed to gather the information that we will need in order to prepare the Franchise Disclosure Document (or "FDD") for your franchise program in accordance with the Federal Trade Commission's ("FTC") amended Franchise Rule and applicable state law. While the Questionnaire is lengthy, it is important for you to provide as much relevant and responsive information as possible. Your completion of the Questionnaire will assist us in preparing your FDD quickly and efficiently. Please feel free to contact us if you are not sure how to answer a particular question or would like to discuss a particular response in detail. (The franchising company is referred to in the Questionnaire as the "Franchisor," "you" or "your.")
          </p>
        </div>
      </div>
    </motion.header>
  )
}
