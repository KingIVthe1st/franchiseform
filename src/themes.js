// Theme configurations for light and dark versions

export const lightTheme = {
  name: 'light',
  colors: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e8f9fc 100%)',
    cardBg: 'white',
    cardBorder: '#e5e7eb',
    headerBg: '#ffffff',
    headerText: '#0F1B2D',
    bodyText: '#374151',
    labelText: '#4b5563',
    inputBorder: '#e5e7eb',
    inputBorderFocus: '#2AC5D7',
    inputBg: 'white',
    buttonPrimary: '#2AC5D7',
    buttonPrimaryHover: '#24afc0',
    buttonSecondary: 'white',
    buttonSecondaryBorder: '#e5e7eb',
    progressBg: '#f3f4f6',
    progressFill: '#2AC5D7',
    sectionNumberBg: 'rgba(42, 197, 215, 0.1)',
    sectionNumberText: '#2AC5D7',
    shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
    shadowHover: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
  },
  logo: '/franchiseform/logo.jpg',
  logoStyle: {
    filter: 'none',
    background: 'white',
    padding: '0.5rem',
    borderRadius: '0.5rem',
  }
}

export const darkTheme = {
  name: 'dark',
  colors: {
    background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1b2d 50%, #1a2332 100%)',
    cardBg: 'rgba(255, 255, 255, 0.03)',
    cardBorder: 'rgba(42, 197, 215, 0.15)',
    headerBg: 'rgba(0, 0, 0, 0.4)',
    headerText: '#ffffff',
    bodyText: '#e5e7eb',
    labelText: '#d1d5db',
    inputBorder: 'rgba(255, 255, 255, 0.1)',
    inputBorderFocus: '#2AC5D7',
    inputBg: 'rgba(255, 255, 255, 0.05)',
    buttonPrimary: '#2AC5D7',
    buttonPrimaryHover: '#24afc0',
    buttonSecondary: 'rgba(255, 255, 255, 0.1)',
    buttonSecondaryBorder: 'rgba(255, 255, 255, 0.2)',
    progressBg: 'rgba(255, 255, 255, 0.1)',
    progressFill: 'linear-gradient(90deg, #2AC5D7 0%, #1ea5b5 100%)',
    sectionNumberBg: 'rgba(42, 197, 215, 0.2)',
    sectionNumberText: '#2AC5D7',
    shadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(42, 197, 215, 0.1)',
    shadowHover: '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(42, 197, 215, 0.2)',
  },
  logo: '/franchiseform/logo-dark.jpg',
  logoStyle: {
    filter: 'drop-shadow(0 10px 30px rgba(42, 197, 215, 0.3))',
    background: 'transparent',
  }
}
