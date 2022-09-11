import React, {useState} from 'react'
import '../style/Home.css'
import { FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import {Modal} from 'react-bootstrap';


function Topnav() {

let navigate = useNavigate()

const [show, setShow] = useState(false)

const handleShow = () => setShow(true)  
const  handleClose = () => setShow(false)


    
  return (
    <div>
        <div className="box_and_name"> 
            <div>
            <div className="small_box"></div> 
            <h3 className="my_name">Munashe Mugonda</h3> 

            <div className="nav_context">
             <h5 style={{marginRight: 34}} onClick={() => navigate('/')}>ABOUT ME</h5>
             <h5 onClick={() => navigate('/projects')}>PROJECTS</h5> 
             <h5 style={{marginLeft: 34}} onClick={() => navigate('/resume')}>SKILLS</h5>
              </div> 

             </div>
             <FaBars onClick={handleShow} color='blue' className='iconTop' size={25} />
              
             <Modal show={show} onHide={handleClose} fullscreen={true}
              style={{backgroundColor: "yellow"}}> 
              <div className='modalContainer'> 
              
              
              <AiOutlineClose size={35} onClick={handleClose} className="closeIcon"/>

             <Modal.Title className="title" onClick={() => navigate('/')}>ABOUT ME</Modal.Title>
             <Modal.Title className="title" onClick={() => navigate('/projects')}>PROJECTS</Modal.Title> 
             <Modal.Title className="title" onClick={() => navigate('/resume')}>SKILLS</Modal.Title>
             

            </div>

             </Modal>

        </div>  


        <h3 className='occupation' onClick={handleShow}>Software Engineer</h3> 
 
          
          
    </div>
  )
}

export default Topnav