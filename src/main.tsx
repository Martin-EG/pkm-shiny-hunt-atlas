import { GlobalStyles } from 'glamui-react'
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App.tsx'
import './index.css'
import { daisyThemeToGlamuiTheme, type DaisyThemeName } from './theme/glamuiThemes'

function Root() {
  const [daisyTheme] = useState<DaisyThemeName>('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', daisyTheme)
  }, [daisyTheme])

  return (
    <ThemeProvider theme={daisyThemeToGlamuiTheme[daisyTheme]}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
