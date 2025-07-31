import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills.jsx';
import ExpEdu from './Components/Experience/ExpEdu.jsx';
import Project from './Components/Projects/Project.jsx';
import Contact from './Components/Contact/Contact.jsx';

 const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <ExpEdu />
      <Project />
      <Contact />
    </div>
  )
}
export default App;