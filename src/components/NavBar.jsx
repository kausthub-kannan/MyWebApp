import React ,{useState, useRef} from "react";
import {Link} from "react-router-dom"
import {FaFolder, FaFile, FaAddressCard, FaPhone, FaSms} from "react-icons/fa";
import {motion} from "framer-motion"

const NavBar = ()=>{

    const [click, setClick] = useState(false);
    const scrollRef = useRef(null);
    const contacts = () => {
        (click? setClick(false) : setClick(true));
        console.log(click)
    }

    return(
        <div className="navBar">
            <Link className="navLinks" to="/"><FaAddressCard className="navIcons"/>Profile</Link>
            <Link className="navLinks" to="/resume"><FaFile className="navIcons"/> Resume</Link>
            <Link className="navLinks" to="/projects"><FaFolder className="navIcons"/> Projects</Link>
            <Link className="navLinks"><button className="btn-contact" onClick ={contacts}><FaPhone /> Contact</button></Link>
            {(click? 
                <motion.div className="drop-down"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
                transition={{delay: 0.1}}>
                    <p><FaSms className="icons"/> : kausthubkannan961@gmail.com</p>
                </motion.div>: null)}
        </div>
    )
}

export default NavBar 