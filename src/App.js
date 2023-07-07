import Home from './pages/home/Home';
import About from './pages/about/About'
import Services from './pages/services/Services';
import Lastest from './pages/lastest/Lastest';
import Create from './pages/create/Create';
import Contact from './pages/contact/Contact'; 
import Footer from './pages/footer/Footer'; 

function App() {
  return (
    <>
      <Home />
      <main>
        <About />
        <Services />
        <Lastest />
        <Create />
        <Contact />
      </main>
      <Footer />
    </>  
  );
}

export default App;
