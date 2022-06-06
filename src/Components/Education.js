import React from 'react'

function Education(props) {

    const education1 = () => {
        return(
            <div className="education-one">
                <h3 className="education-info-date">2020 - 2023</h3>
                <p className="education-paragraph">
                I am currently studying in the third year for a computer science Bachelor's 
                degree at Queen Mary University. <br /> Overall grade for the first year 
                averaged out at 72.75%. <br />Overall grade for the second year is pending. 
                </p>
            </div>
        )
    }
    const education2 = () => {
        return(
            <div className="education-two">
                <h3 className="education-info-date">2018 - 2020</h3>
                <p className="education-paragraph">
                At Sixth Form i studied A-level Maths, A-Level Business and BTEC IT.
                <br />Mathematics - A <br />Business - B <br />Information Techology - 
                Distinction*
                </p>
            </div>
        )
    }
    const education3 = () => {
        return(
            <div className="education-three">
                <h3 className="education-info-date">2012 - 2018</h3>
                <p className="education-paragraph">
                10 GCSEs where grades range from 4-9 (C - A*) including: 
                <br /> Mathematics - 8 (A*) <br /> Information Techology - B
                </p>
            </div>
        )
    }

  return (
    <div className="education-container div-margin">
        <div className="education-header">
            <h2> Education</h2>
        </div>

        <div className="education-info exed-margin">
            <div className="education-titles">
                <h2 className="education-top">Queen Mary University of London</h2>
                <h4 className="education-first-role">Bachelor's Degree</h4>
                {education1()}
                <h2  className="text-align">Preston Manor Sixth Form</h2>
                <h4 className="education-second-role">A-Levels</h4>
                {education2()}
                <h2 className="text-align">Preston Manor High School</h2>
                <h4>GCSEs</h4>
                {education3()}
            </div>

            <div className="education-paragraph">
                {education1()}
                {education2()}
                {education3()}
            </div>
            <div className="education-seperator-container">
                <div className="vertical-line">
                    <div className="education-dot education-dot-first"></div>
                    <div className="education-dot education-dot-second"></div>
                    <div id="Skills" className="education-dot"></div>
                </div>
            </div>
            <div className="education-spacer"></div>
        </div>
    </div>
  )
}

export default Education