export const applyDocumentTheme = (isDark) => {
  const root = document.documentElement

  root.classList.toggle('dark-theme', isDark)
  root.style.backgroundColor = isDark ? '#000000' : '#ffffff'
  root.style.colorScheme = isDark ? 'dark' : 'light'

  document.body.classList.toggle('dark-theme', isDark)

  const profileLight = document.getElementById('profileLight')
  const profileDark = document.getElementById('profileDark')
  
  if (profileLight && profileDark) {
    profileLight.style.opacity = isDark ? '0' : '1'
    profileDark.style.opacity = isDark ? '1' : '0'
  }
}

export const getSavedTheme = () => localStorage.getItem('portfolio-theme') === 'dark'
