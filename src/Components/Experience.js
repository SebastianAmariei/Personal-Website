import React from 'react'

function Experience(props) {

    const experience1 = () => {
        return(
            <div className="experience-one">
                <h3 className="experience-info-date">August 2021 - Present</h3>
                <p className="experience-paragraph">Responsible for efficiently delivering
                    multiple packages to customers within a specific time period. Ensure that
                    the planned routes are precise to increase the efficiency of the current
                    route to allow me to deliver packages earlier.Spontaneously adapt 
                    to any unpredictable traffic, road works or construction.
                    
                    
                    </p>
            </div>
        )
    }
    const experience2 = () => {
        return(
            <div className="experience-two">
                <h3 className="experience-info-date">January 2021 - May 2021</h3>
                <p className="experience-paragraph">
                    I was in charge of the back of the store aswell as the stock rooms when 
                    the main manager was not in. Some duties include loading and unloading 
                    big vans full of cargo, after the goods were unloaded i had to ensure
                    that they were placed in the correct section of the stock rooms. Lastly
                    i had to log all of the incoming and outgoing goods on the system.
                    Other responsibilites included working on the shop floor and making
                    sure that customers were having a great shopping experience by providing
                    a positive and energetic attitude towards customer service.
                </p>
            </div>
        )
    }
    const experience3 = () => {
        return(
            <div className="experience-three">
                <h3 className="experience-info-date">January 2020 - March 2020</h3>
                <p className="experience-paragraph" >
                    I was given the opportunity to do my work experience as a Full Stack Developer
                    at a youth club where we were split into different groups which were intrest dependant,
                    and were assigned a experienced group leader. I was in a 4 person group and our job
                    over a 3 month period was to create a landing page and a e-commerce User Interface.
                    We used HTML, CSS, React and JavaScript in order to create the application front end.
                    We then used firebase to add items to the database and display items from the database.
                    Finally I was tasked in helping the group leader in creating .env files to anonymise
                    sensitive data.
                </p>
            </div>
        )
    }

  return (
    <div className="experience-container div-margin">
        <div className="experience-header">
            <h2> Experience</h2>
        </div>

        <div className="experience-info exed-margin">
            <div className="experience-titles">
                <h2 className="experience-top">Amazon </h2>
                <h4 className="experience-first-role">Delivery Driver</h4>
                {experience1()}
                <h2>Sainsburys</h2>
                <h4 className="experience-second-role">Retail Assistant</h4>
                {experience2()}
                <h2>Granville Plus Centre</h2>
                <h4>Full Stack Developer</h4>
                {experience3()}
            </div>

            <div className="experience-paragraph">
                {experience1()}
                {experience2()}
                {experience3()}
            </div>
            <div className="experience-seperator-container">
                <div className="vertical-line">
                    <div className="experience-dot experience-dot-first"></div>
                    <div className="experience-dot experience-dot-second"></div>
                    <div id="Education" className="experience-dot"></div>
                </div>
            </div>
            <div className="experience-spacer"></div>
        </div>
    </div>
  )
}

export default Experience
