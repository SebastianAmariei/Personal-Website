import React from 'react'
import instagram from "../Images/instagram.webp"
import GitHub from "../Images/Github.png"
import LinkedIn from "../Images/LinkedIn.png"
import Laptop from "../Images/laptop.jpg"

function CardAboutMe() {
  return (
    <>
    <div className="space"></div>
        <div className="card-container">
          
          <img className="Card-Image" src={Laptop} ></img>
          
          <div className="card-info">
                <h1 className="card-title">Sebastian Amariei</h1>
                <h3 className="card-proffession">Computer Science Student</h3>

                <h3>Phone:</h3>
                <h4>07949192870</h4>

                <h3>Email:</h3>
                <h4>Sebastianamariei02@gmail.com</h4>

                <h3>Address:</h3>
                <h4>
                    Wembley, 
                    United Kingdom
                    </h4>
                <h3 id="AboutMe">Date Of Birth:</h3>
                <h4>21/03/2002</h4>
              
            </div>
        </div>
            <div className="card-footer">  
              <a href="https://www.instagram.com/seb__tb/?hl=en" ><img className="instagram" src={instagram} width="35px;" height="35px;"></img></a>
              <a href="https://github.com/SebastianAmariei" ><img src={GitHub} width="50px;" height="28px;"></img></a>
              <a href="https://www.linkedin.com/in/sebastian-amariei-96a5211b3/" ><img src={LinkedIn} width="60px;" height="38px;"></img></a>
            </div> 
    </>
    
  )
}

export default CardAboutMe
