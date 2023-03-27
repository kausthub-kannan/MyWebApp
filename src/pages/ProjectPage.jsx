import React, {useRef} from "react";
import {Link} from "react-router-dom";
import {FaGithub, FaInstagram, FaLinkedin, FaMobile} from"react-icons/fa"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {motion} from "framer-motion"

import catStare from "../image/catStare'.png"
import firebase from "../image/firebase.png"
import react from "../image/React.png"
import node from "../image/NodeJS.png"

const Project = ()=>{

  const scrollRef = useRef(null);

    return (
      <motion.div className="projectPage"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        transition={{delay: 0.30}}>
        <NavBar />
        <h2>Projects</h2>
        <div className="row-2">
          <div className="Project">
            <img className="cat-icon cat-on-project" src={catStare} alt="mew!" />
            <h2 ><div className="project-name">01 : Pneumonia Detection using CNN</div><button className="progress-btn completed">Completed</button></h2>
            <p>Utilizing neural networks for medicine is one of most intresting applications of AI. 
              Pneumonia Detection can be done via a well built CNN netowrk using any of the libraries. 
              This project utilizes a open source Kaggle XRay dataset to detect the presence of Pneumonia in a patient. 
              Transfer Learning approach is used in order to attain accuracy. 
            </p>
            <p>GitHub Repository : <a  style={{textDecoration:"none", color:"#F7DB6A"}} href="https://github.com/kausthub-kannan/pneumonia_detection_CNN">Pneumonia Detection using CNN - VGG16</a></p>
          </div>

          <div className="Project">
            <img className="cat-icon cat-on-project" style={{top:"-20.5%"}} src={catStare} alt="mew!" />
            <h2 ><div className="project-name">02 : NGO Portal</div><button className="progress-btn completed">Completed</button></h2>
            <p>NGO Volunteer Portal is developed for volunteer management in NGOs. Tracking volunteers and maintaining the social spirit
              is difficult in NGOs. The web app provides a platform for the NGOs to maintain volunteers, program coordinators. Along with this
              the volunteer can earn points to become coordinators. Admin maintains the events and assigining the volunteers as program coordinators.
              Reports are sent to admin by volunteers and program coordinators.
            </p>
            <p>GitHub Repository : <a  style={{textDecoration:"none", color:"#F7DB6A"}} href="https://github.com/kausthub-kannan/ngov-Portal">NGO Volunteer Portal</a></p>
            <h3>Tech Stalk : <img className="tech-logo" src={firebase} alt="firebase" />
            <img className="tech-logo" src={react} alt="firebase" />
            <img className="tech-logo" src={node} alt="firebase" /></h3>
          </div>
        </div>
        <Footer />
      </motion.div>
    );
  }
export default Project;