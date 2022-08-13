import "./index.css"
import React from 'react'


const Navbar = () => {
    return (
        <div className="main-container">
        <div className="conitainer-left"><span className="animate-charcter">Juan Carlos A</span></div>
        <div className="container-right">
            <ul>
            <li className="waviy"> <a target="_blank"  href="https://www.linkedin.com/in/juan-carlos-aguilar-bosiga-41b067192/">linkdin</a> </li>
            <li className="waviy"> <a target="_blank" href="https://github.com/JuanCarlosAguilarB">github</a> </li>
            <li className="waviy"> <a target="_blank" href="">Projects</a> </li>
        </ul>
        <buttton className="btn">Download CV</buttton>
        <buttton className="btn"> Contac </buttton>
        </div>
    </div>
    )
}

export default Navbar;
