import React from 'react'

function IndividualSkill(props) {

    return (
    <div>
        
        {props.isHeld 
        ? <div onClick={() => props.Handler(props.id)} className="skill-individual-active skill-box-animation">
                <div className="skill-individual-title">
                    <h2>{props.Title}</h2>
                </div>
                <div className="skill-individual-box "> 
                    <ul>
                    {props.skills.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                    </ul>
                </div>
          </div>
        : <div onClick={() => props.Handler(props.id)} className="individual-skill skill-box-animation-active"> {props.Title}</div>
    }
    </div>
    )
}

export default IndividualSkill
