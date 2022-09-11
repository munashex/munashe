import React from 'react'
import Topnav from '../navigation/Topnav' 
import  '../style/Resume.css'




function Resume() {
  return (
    <div>
      <Topnav/>
 
       <br/>
      <h4 className="experience">Experience</h4>
      <div className='resume_container'>

      
        <ul className="skills_data">
          <li style={{marginTop: 10}}>Javascript</li> 
          <li style={{marginTop: 10, marginRight: 10}}>Typescript</li>
        </ul>

        <ul className="skills_data">
          <li style={{marginTop: 10}}>Golang</li> 
          <li style={{marginTop: 10, marginRight: 10}}>GraphQL</li>
        </ul>

        <ul className="skills_data">
          <li style={{marginTop: 20}}>API</li> 
          <li style={{marginTop: 20, marginRight: 10}}>React Native</li>
        </ul>

        <ul className="skills_data">
          <li style={{marginTop: 20}}>GIT</li> 
          <li style={{marginTop: 20, marginRight: 10}}>Firebase</li>
        </ul>

        <ul className="skills_data">
          <li style={{marginTop: 20}}>MongoDB</li> 
          <li style={{marginTop: 20, marginRight: 10}}>React</li>
        </ul>

        <ul className="skills_data">
          <li style={{marginTop: 20}}>Node</li> 
          <li style={{marginTop: 20, marginRight: 10}}>Express</li>
        </ul>
      </div>

    </div>
  )
}

export default Resume