import React, {useRef} from "react";
import {Link} from "react-router-dom"
import {FaGithub, FaInstagram, FaLinkedin, FaMobile} from"react-icons/fa"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {motion} from "framer-motion"

import catSit from "../image/catSit.png"
import web from "../image/web.png"
import certificate_1 from "../image/Certificate-1.jpg"
import computer from "../image/computer.png"

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
            <img className="cat-icon" src={catSit} alt="" />
            <div className="teach-cards card-1">
              <img className="web-img" src={web} alt="web" />
              <p className="card-heading">Web Dev</p>
              <p>Worked on several web dev projects. I have worked on frontend designs and backend too. I have experince with -</p>
              <h5>React | NodeJS | SQL | Non-SQL</h5>
            </div>

            <div className="teach-cards card-2">
              <h2>Certificates</h2>
              <img className="certificates" src={certificate_1} alt="Udemy" />
            </div>

            <div className="teach-cards card-3">
              <img className="web-img" src={computer} alt="web" />
              <p className="card-heading">Data Science</p>
              <p>I have wokred on Neural Network Project such as CNN, NLP and others. Most of my projects Tensorflow open source library.</p>
              <h5>Python | JS | C | C++</h5>
            </div>
          </div>


        <Footer />
      </motion.div>
    );
  }
export default Resume;