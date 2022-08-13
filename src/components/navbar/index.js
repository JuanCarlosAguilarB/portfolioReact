import "./index.css"
import React from 'react'


const Navbar = () => {
    return (
        <div class="main-container">
        <div class="conitainer-left"><span class="animate-charcter">Juan Carlos A</span></div>
        <div class="container-right">
            <ul>
            <li class="waviy"> <a target="_blank"  href="https://www.linkedin.com/in/juan-carlos-aguilar-bosiga-41b067192/">linkdin</a> </li>
            <li class="waviy"> <a target="_blank" href="https://github.com/JuanCarlosAguilarB">github</a> </li>
            <li class="waviy"> <a target="_blank" href="">Projects</a> </li>
        </ul>
        <buttton class="btn">Download CV</buttton>
        <buttton class="btn"> Contac </buttton>
        </div>
    </div>
    )
}

export default Navbar;
