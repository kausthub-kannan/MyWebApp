import React, {useRef} from "react";
import {Link} from "react-router-dom"
import {FaGithub, FaInstagram, FaLinkedin, FaMobile} from"react-icons/fa"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {motion} from "framer-motion"

const Home = ()=>{

  const scrollRef = useRef(null);

    return (
      <motion.div className="homePage"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        transition={{delay: 0.30}}>
        <NavBar />
        <img className="cat-logo" src="image/cat.png" alt="mew!!" />
        <h4 className="sub-heading">Wild Guest Appeared . . .</h4>
        <h1 className="main-heading">Yo! I am Kausthub</h1>
        <p className="main-content">I am a developer and love working on unique projects. I have an appreciable experince with 
        web developmet. Connect with me for project collabs and web development.</p>
        <motion.div
        whileHover={{scale: 1.03}}>
          <img className="cat-card" src="image/catFace.png" alt="mew!!" />
          <div className="card">
            <h2>Connect @ 
              <a href="https://github.com/kausthub-kannan"><FaGithub className="icons" /></a>
              <a href="https://linkedin.com/in/kausthub-kannan-dev007kk"><FaLinkedin className="icons"/></a>
              <a href="https://www.instagram.com/kausthub_kannan?r=nametag"><FaInstagram className="icons"/></a>
            </h2>
            <p className="click-connect">Click to Connect</p>
          </div>
        </motion.div>
        <Footer />
      </motion.div>
    );
  }
export default Home;