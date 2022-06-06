import React, { useState } from 'react'

function NavigationBar() {

  const [openNavBar, setOpenNavBar] = useState(false)

  function handleClick() {
    if (openNavBar) {
      setOpenNavBar(false)
    } else { 
      setOpenNavBar(true)
    }
  }

  function optionClicked() {
    setOpenNavBar(false)
  }

  return (
    <>
      <div className="navigation-container">
        <nav className="navigation">
          <a href="#Top" className="navigation-title"><h1>Sebastian Amariei</h1></a>
          <div className="navigation-right">
            <div onClick={handleClick}>
              <div className="hamburger-icon-item"></div>
              <div className="hamburger-icon-item"></div>
              <div className="hamburger-icon-item"></div>
            </div>
            <a onClick={optionClicked} href="#AboutMe" className="navigation-option"><h2>About Me</h2></a>
            <a onClick={optionClicked} href="#Experience" className="navigation-option"><h2>Experience</h2></a>
            <a onClick={optionClicked} href="#Education" className="navigation-option"><h2>Education</h2></a>
            <a onClick={optionClicked} href="#Skills" className="navigation-option"><h2>Skills</h2></a>  
            <a onClick={optionClicked} href="#Projects" className="navigation-option"><h2>Projects</h2></a> 
            <a onClick={optionClicked} hred="#ContactMe" className="navigation-option navigation-end"><h2>Contact Me</h2></a>
          </div>
          
         </nav>
        </div>
        <div className={`navigation-options ${openNavBar ? "top-bottom-animation" : "bottom-top-animation"}`}>
          <a onClick={optionClicked} href="#AboutMe" className="navigation-option-small navigation-first"><h2>About Me</h2></a>
          <a onClick={optionClicked} href="#Experience" className="navigation-option-small"><h2>Experience</h2></a>
          <a onClick={optionClicked} href="#Education" className="navigation-option-small"><h2>Education</h2></a>
          <a onClick={optionClicked} href="#Skills" className="navigation-option-small"><h2>Skills</h2></a>  
          <a onClick={optionClicked} href="#Projects" className="navigation-option-small navigation-end"><h2>Projects</h2></a> 
        </div>
    </>
  )
}

export default NavigationBar
