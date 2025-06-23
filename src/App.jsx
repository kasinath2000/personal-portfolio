import Navbar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import "./App.css";
function App() {
  return (
    <div className="bg-primaryBg text-white min-h-screen" style={{ overflowX: 'hidden' }}>

      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;




