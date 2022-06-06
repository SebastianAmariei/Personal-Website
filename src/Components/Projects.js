import React from 'react'
import { NavLink } from 'react-router-dom';

function Projects(props) {


    
  return (
    <div  id="Projects" className="projects-container div-margin"> 
      <div className="projects-header">
            <h2> Projects</h2>
        </div>
        <div className="projects-info">
            <div className="projects-individual">
                <a href="https://github.com/SebastianAmariei/Adventure_Game">Text Game</a>
                <p>Game created using object-oriented Java code where the player is able to fight different creatures depending
                on the level of difficulty they choose. The game utilised random number generators and complex maths
                equations to calculate block chance, critical hit chance, damage done and absorption. Furthermore each
                creature had different statistics such as health, damage, attack styles and specials.
                </p>
            </div>
            <div className="projects-individual">
                <a href="https://github.com/SebastianAmariei/Examination-Application">Examination Application</a>
                <p>A website where you are able to create exams, attempt created exams, check your grades, log in and a forums
                page. Creating exams, users or forums will be saved onto a database on firestore. Data is then retrieved from
                the firestore and used to display a variety of data like grades or exam questions. This project I used React,
                Javascript, HTML and CSS.
                </p>
            </div>
            <div className="projects-individual">
                <a href="https://github.com/SebastianAmariei/Personal-Website">Personal Website</a>
                <p>
                    This Project uses HTML, CSS, react and javascript. A website that acts as a CV,
                    This website tells employers my background in more detail, and allows them to 
                    see some of the projects I have created. Employers are also able to find my Social
                    Media accounts and contact me at the bottom.
                </p>
            </div>
            <div className="projects-individual">
                <a href="https://github.com/SebastianAmariei/Weather-Application">Weather Application</a>
                <p>
                    This project was made using HTML, CSS, React, Javascript and a free API. Users 
                    are able to select any lcoation they wish into the search bar, the Application
                    will then take then to a page where the details of the weather will be displayed.
                    Users are also able to select specific dates and get more details about a specific day.
                    
                </p>
            </div>
            <div className="projects-individual">
                <a href="https://github.com/SebastianAmariei/Web-Quiz">Web Quiz</a>
                <p>This project uses HTML, CSS, React, Javascript and an API. The purpose of this 
                    project is to get 5 completly random questions from an API, and turn them into a quiz. The project
                    allows the user to answer 5 questions and get marked at the end of the exam.
                    correct and wrong answers will be displayed at the end.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Projects
