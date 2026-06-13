import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '../theme/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* Routes go here in Phase 3 */}
        <div>EMS App — scaffold ready</div>
      </BrowserRouter>
    </ThemeProvider>
  )
}