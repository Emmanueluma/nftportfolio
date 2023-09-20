import React from 'react'
import Home from './pages/home/Home';
import About from './pages/about/About'
import Services from './pages/services/Services';
import Create from './pages/create/Create'; 
import Footer from './pages/footer/Footer'; 
import Question from './pages/question/Question';

const Mainapp = () => {
  return (
    <>
      <Home />
      <main>
        <About />
        <Services />
        <Question />
        <Create />
      </main>
      <Footer />
    </>  
  )
}

export default Mainapp
