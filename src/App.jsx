import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main_section from "./Components/Main_section/Main_section";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Feature from "./Components/Feature/Feature";
import How from "./Components/How/How";
import Contact from "./Components/Contact/Contact";


function App() {
  const [page, setPage] = useState("home"); // State to track active page

  return (
    <>
      <Navbar setPage={setPage} /> {/* Pass setPage to Navbar */}

      {page === "home" && (
        <>
          <div className="header" id="Home">
            <Main_section />
          </div>
          <div className="feature">
            <Feature />
          </div>
          <div className="how" id="how">
            <How />
          </div>
          <div className="about" id="about">
            <About />
          </div>
        </>
      )}

      {page === "Contact" && <Contact></Contact>} 

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
