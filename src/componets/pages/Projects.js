import React from 'react';
import weather from './weather';
import quiz from './quiz';
import openlibrary from './openlibrary';
import notetaker from './notetaker';

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-container">
                <div className="project-card">
                    <h2>Weather App</h2>
                    <a href='https://github.com/kasthana112/weather'></a>
                    <p>This is a weather app that allows users to search for a city and display the current weather for that city.</p>
                    <img src={weather} alt="weather" />
                </div>
                <div className="project-card">
                    <h2>Quiz App</h2>
                    <p>This is a quiz app that allows users to answer the following questions.</p>
                    <img src={quiz} alt="quiz" />
                </div>
                <div className="project-card">
                    <h2>Open Library</h2>
                    <p>This is a library app that allows users to search for books and display the details of the book.</p>
                    </div>
                    </div>
                    </div>
    )
}

export default Projects;