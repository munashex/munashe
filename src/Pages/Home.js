import React from 'react'
import '../style/Home.css'
import Topnav from '../navigation/Topnav'
import muna from  '../images/muna.jpg'
import {useNavigate} from 'react-router-dom'
import {BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {Button}  from 'react-bootstrap'

function Home() {

  let navigate = useNavigate() 

  return (
    <div>
      <Topnav/>

      <div className="home_container">
       
      <div className="about_me_bg_box">
      
      </div>
       
      <div className='about_me_box'> 
     <img src={muna} alt="munashe" className="munasheImage"/> 
     <h1 className="name">Munashe</h1>
     <h1 className="name surname">Mugonda</h1>

     <div className='underline'></div> 

     <div className="resume_and_projects"> 
      <Button variant="dark" onClick={() => navigate('/resume')}>SKILLS</Button>
      <Button variant="outline-dark" onClick={() => navigate('/projects')} style={{marginLeft: 30}}>PROJECTS</Button>
     </div>

     <div className="media_links">
      
     <a href="https://github.com/munashex"> 
      <BsGithub color="black" size={22} style={{marginRight: 10}}/>
     </a> 

     <a href="https://twitter.com/munashe8"> 
      <BsTwitter color="black" size={22}/>
     </a>

     <a href="https://instagram.com/muna_codes">
       <BsInstagram color="black" size={22} style={{marginLeft: 10}}/>
     </a>
     


    
      </div>

      </div>
       
       
     <div className="more_about_me shadow-bg">
      <h1 className="hello">Hello</h1> 

      <h6 className="about_me_title">Hello I'm Munashe, a Software </h6>
      <h6 className="about_me_title">Engineer and Content Creator</h6>
      <h6 className="about_me_title">based in South Africa</h6>

      <p></p>
      <br></br>

      <h6 className="about_me_title">I enjoy programming Typescript</h6> 
      <h6 className="about_me_title">and Golang applications and</h6> 
      <h6 className="about_me_title">creating videos on</h6> 
      <h6 className="about_me_title">Twitch</h6>
      


      
     </div>


     <div className="social_media_links">
     <h2 className="follow">Follow</h2>

     <div className='media_icons'>
     <a href="https://github.com/munashex"> 
      <BsGithub color="black" size={22} style={{marginRight: 10}}/>
     </a> 

     <a href="https://twitter.com/munashe8"> 
      <BsTwitter color="black" size={22}/>
     </a>

     <a href="https://instagram.com/muna_codes">
       <BsInstagram color="black" size={22} style={{marginLeft: 10}}/>
     </a>
     </div>

     </div>

     <div className='emailContainer'>
      <h2 className="email">Email</h2> 
      <a  href="mailto:munashemugondaa@gmail.com">
      <AiOutlineMail size={22} className="email_icon" color="black"/> 
      </a>
      </div>
      
      </div>

      </div>

  )
}

export default Home