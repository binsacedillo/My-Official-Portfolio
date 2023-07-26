import Portfolio from "./components/Portfolio"
import ProjectSection from "./components/Projects"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"
import './styles/App.css'

export default function App() {  
  return (  
    <>
      <ProgressBar />
      <Portfolio />
      <ProjectSection />
      <AboutMe />
      <Footer />
    </>
  )  
} 