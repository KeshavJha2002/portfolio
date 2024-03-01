import { BrowserRouter as Router } from 'react-router-dom'
import {Contact, Profile, Achievements, Experience, Education, HeroSection, Navbar, Tech, Project, Content, Footer } from "./components/index";
import { StarsCanvas } from './components/canvas/index';

const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <HeroSection/>
        </div>
        <Content />
        <Education />
        <Project />
        <Experience />
        <Achievements />
        <Profile/>
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
