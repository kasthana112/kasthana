import React, { useState } from "react";
import NavBar from './componets/NavBar';
import Footer from './componets/Footer';
import AboutMe from './componets/pages/About';
import Contact from './componets/pages/Contact';
import Projects from './componets/pages/Projects';



function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
      if (currentPage === "About Me") {
          return <AboutMe />;
      } else if (currentPage === "Projects") {
          return <Projects />;
      } else if (currentPage === "Contact") {
          return <Contact />;
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          <Footer />
      </div>
  );
}

export default App;