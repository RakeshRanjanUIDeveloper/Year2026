import './App.css'
import Accordion from './components/Accordion'
import AcronymGenerator from './components/AcronymGenerator'
import BackToTop from './components/BackToTop'
import CharacterCount from './components/CharacterCount'
import DarkModeToggle from './components/DarkModeToggle'
import InputFocus from './components/InputFocus'
import PasswordStrength from './components/PasswordStrength'
import Progressbar from './components/ProgressBar'
import TabSwitcher from './components/TabSwitcher'
import URLValidator from './components/URLValidator'

function App() {
  return (
    <>
     {/* <DarkModeToggle /> 
     <Accordion />
     <Progressbar />
     <InputFocus />
     <AcronymGenerator />
     <URLValidator />
     <TabSwitcher />
     <BackToTop />
     <CharacterCount />*/}
     <PasswordStrength />
    </>
  )
}

export default App
