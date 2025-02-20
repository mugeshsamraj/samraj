import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Sections/Home/Home';  
import About from './Sections/About/About';
import Header from './Sections/Header/Header';
import Contact from './Sections/Contact/Contact';
import Project from './Sections/Project/Project';
import Footer from './Sections/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;