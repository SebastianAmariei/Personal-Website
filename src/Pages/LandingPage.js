
import '../App.css';
import React from "react";
import NavigationBar from "../Components/NavigationBar"
import CardAboutMe from "../Components/CardAboutMe"
import AboutMe from "../Components/AboutMe"
import Experience from "../Components/Experience"
import Education from "../Components/Education"
import Skills from "../Components/Skills/Skills"
import Projects from "../Components/Projects"
import Footer from "../Components/Footer"


function LandingPage(props) {
  return (
    <>
      <NavigationBar />
      <main>
        <CardAboutMe />
        <AboutMe height={props.height}/>
        <Experience height={props.height} />
        <Education height={props.height} />
        <Skills height={props.height} />
        <Projects height={props.height} />
        <Footer />
      </main>
    </>
  )
}

export default LandingPage
