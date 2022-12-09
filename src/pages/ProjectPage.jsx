import React, {useRef} from "react";
import {Link} from "react-router-dom";
import {FaGithub, FaInstagram, FaLinkedin, FaMobile} from"react-icons/fa"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {motion} from "framer-motion"

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
            <img className="cat-icon cat-on-project" src="image/catStare'.png" alt="mew!" />
            <h2 ><div className="project-name">01 : DevAssist</div><button className="progress-btn in-progress">In Progress</button></h2>
            <p>DevAssist is a developer support application. The web app provides a platform to provide analysis on the projects.
              The User can manage multiple projects, related documnents and the database too. Developers can connect with others to
              build unique projects. The application serves dual purpose support, project coordinator and database analyzer. AI based 
              prediction is used to provide database analysis. 
            </p>
            <h3>Tech Stalk : <img className="tech-logo" src="image/firebase.png" alt="firebase" />
            <img className="tech-logo" src="image/React.png" alt="firebase" />
            <img className="tech-logo" src="image/NodeJS.png" alt="firebase" /></h3>
          </div>

          <div className="Project">
            <img className="cat-icon cat-on-project" src="image/catStare'.png" alt="mew!" />
            <h2 ><div className="project-name">02 : NGO Portal</div><button className="progress-btn completed">Completed</button></h2>
            <p>NGO Volunteer Portal is developed for volunteer management in NGOs. Tracking volunteers and maintaining the social spirit
              is difficult in NGOs. The web app provides a platform for the NGOs to maintain volunteers, program coordinators. Along with this
              the volunteer can earn points to become coordinators. Admin maintains the events and assigining the volunteers as program coordinators.
              Reports are sent to admin by volunteers and program coordinators.
            </p>
            <h3>Tech Stalk : <img className="tech-logo" src="image/firebase.png" alt="firebase" />
            <img className="tech-logo" src="image/React.png" alt="firebase" />
            <img className="tech-logo" src="image/NodeJS.png" alt="firebase" /></h3>
          </div>
        </div>
        <Footer />
      </motion.div>
    );
  }
export default Project;