import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Contact from "./pages/Contact"
import AboutMe from "./pages/About";
import Projects from "./pages/Projects";

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState("About Me");

    const renderPage = () => {
        if (currentPage === "About Me") {
            return <AboutMe />;
        } else if (currentPage === "Projects") {
            return <Project />;
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

