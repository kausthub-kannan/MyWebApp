import React, {useRef} from "react";
import {Link} from "react-router-dom"
import {FaGithub, FaInstagram, FaLinkedin, FaMobile} from"react-icons/fa"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {motion} from "framer-motion"

const Resume = ()=>{

  const scrollRef = useRef(null);

    return (
      <motion.div className="resumePage"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        transition={{delay: 0.30}}>
        <NavBar />
          <h2>Resume</h2>
          <div className="rows">
            <img className="cat-icon" src="image/catSit.png" alt="" />
            <div className="teach-cards card-1">
              <img className="web-img" src="image/web.png" alt="web" />
              <p className="card-heading">Web Dev</p>
              <p>Worked on several web dev projects. I have worked on frontend designs and backend too. I have experince with -</p>
              <h5>React | NodeJS | SQL | Non-SQL</h5>
            </div>

            <div className="teach-cards card-2">
              <h2>Certificates</h2>
              <img className="certificates" src="image/Certificate-1.jpg" alt="Udemy" />
            </div>

            <div className="teach-cards card-3">
              <img className="web-img" src="image/computer.png" alt="web" />
              <p className="card-heading">Languages</p>
              <p>I am persuing my CS major in DSCE, Bengaluru. Hence, I have a good hold over programming languages</p>
              <h5>Python | JS | C | C++</h5>
            </div>
          </div>


        <Footer />
      </motion.div>
    );
  }
export default Resume;