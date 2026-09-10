import './App.css'
import Accordion from './components/Accordion'
import AcronymGenerator from './components/AcronymGenerator'
import BackToTop from './components/BackToTop'
import CharacterCount from './components/CharacterCount'
import DarkModeToggle from './components/DarkModeToggle'
import FaqAccordion from './components/FaqAccordion'
import InputFocus from './components/InputFocus'
import PasswordStrength from './components/PasswordStrength'
import Progressbar from './components/ProgressBar'
import RecipeFilterApp from './components/RecipeFilterApp'
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
     <CharacterCount />
     <PasswordStrength />
     <RecipeFilterApp />*/}
     <FaqAccordion />
    </>
  )
}

export default App
