import React from 'react'
import SkillsData from "./SkillsData"
import IndividualSkill from './IndividualSkill';

function Skills(props) {
  
  const [skillsInfo, setSkillsInfo] = React.useState(SkillsData);
  

  const displaySkills = skillsInfo.map((skill) => (
    <IndividualSkill 
      key={skill.id}
      {...skill}
      Handler={onHoverSkill}
    />
  ))

  function onHoverSkill(id) {
    setSkillsInfo(skillsInfo.map((skill) => {
      return id === skill.id ? {...skill, isHeld: !skill.isHeld} : skill
    }))
  }

  return (
    <div className="skill-container div-margin">
        <div className="skill-title">
            <h2>Skills</h2>
        </div>
        <div className="skill-box ">
          {displaySkills}
        </div>
      <br /><br /><br />
    </div>
  )
}

export default Skills
