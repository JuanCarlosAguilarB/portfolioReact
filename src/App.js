
import './App.css';

// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

import Navbar from "./components/navbar"
import Projects from './components/projects';
import Banner from "./components/banner"

function App() {
  return (
    <div className="App">
    
      <Navbar></Navbar>

      {/* <NavBar /> */}
      <Banner />
      <Skills />
      <Projects/>

      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
