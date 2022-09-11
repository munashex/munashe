import React from 'react'
import Topnav from '../navigation/Topnav'
import '../style/Projects.css'
import projectData from '../ProjectData/data'
import {Button} from 'react-bootstrap'

function Projects() {

  

  return (
    <div>
      <Topnav/>

      <div className="projects_container"> 

      <div className="box_and_project">
      <div className="project_small_box"/> 
      <h5 className="project_name">Projects</h5> 
      </div>

      <div className="description_about_project">
        <h6>Check out some of my projects down</h6> 
      </div>

      <div className="project_data">
       {
        projectData && projectData.map((item, index) => {

          return (
            <div key={index} className="data_container"> 
            <h3 className="data_name" style={{marginTop: 10}}>{item.name}</h3>
            <h4 className="data_tech" style={{color: "blue"}}>
              <small className="small_tech">Technologies</small>
              {item.Technologies}</h4>
              <img src={item.image} className="data_image" alt="data"/>
              <a href={item.link}>
              <Button className="data_link" variant='outline-primary'>Check it Out!</Button>
              </a>
            </div>
          )
        })
       }
      </div>
      </div>

      

    </div>
  )
}

export default Projects