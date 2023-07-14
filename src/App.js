import Home from './pages/home/Home';
import About from './pages/about/About'
import Services from './pages/services/Services';
import Create from './pages/create/Create';
import Contact from './pages/contact/Contact'; 
import Footer from './pages/footer/Footer'; 
import Question from './pages/question/Question';

function App() {
  return (
    <>
      <Home />
      <main>
        <About />
        <Services />
        <Question />
        <Create />
        <Contact />
      </main>
      <Footer />
    </>  
  );
}

export default App;
