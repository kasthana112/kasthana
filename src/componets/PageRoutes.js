import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
// import ContactMe from "./ContactMe";
// import AboutMe from "./AboutMe";
// import Projects from "./Projects";

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState("About Me");

    // const renderPage = () => {
    //     if (currentPage === "About Me") {
    //         return <AboutMe />;
    //     } else if (currentPage === "Projects") {
    //         return <Project />;
    //     } else if (currentPage === "Contact Me") {
    //         return <ContactMe />;
    // //     }
    // };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* {renderPage()} */}
            <Footer />
        </div>
    );
}

