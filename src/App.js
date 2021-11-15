import React from "react";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
// import Work from "./Components/Work/Work";
import "./App.css";
import Contact from "./Components/Contact/Contact";
// import Mail from "./Components/Mail/Mail";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router } from 'react-router-dom'
import SideNav from "./Components/SideNav/SideNav";
import { connect } from "react-redux";

import {AnimatePresence} from 'framer-motion'



const App = ({ isOpen }) => {


  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">

      <Router>
      <AnimatePresence  exitBeforeEnter>
        {isOpen ? (<SideNav />) : null}
      </AnimatePresence>
        <Header />
        <Hero />
        <About />
        <Services />
        {/* <Work /> */}
        <Contact />
        <Footer />
      </Router>

    </div>
  );
}




const mapStateToProps = (state) => {

  return {
    ...state
  }

}

export default connect(mapStateToProps)(App);
