
import React from 'react'
import  "./index.css"

const Banner = () => {
    return (
        <div className='banner-info'>
        <div className='banner-info-left'>
        <span> Wencome my portfolio</span>
        <h1>{`Hi! I'm Juan Carlos Aguilar`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Junior Frontend Developer" ]'></span></h1>
                  <p>Developer of python and node js software. I focus on backend development, but I have some knowledge of frontend development</p>
        </div>
        
        
        <div className='banner-info-right'>
            <img src="https://static.teamtreehouse.com/assets/views/library/library-4ce8bae163e506844b74a0691d942c161af7f7456bb52dbb74e7a7fdee28c29e.png" alt="" />
        </div>
            
            
                  
        </div>
    )
}

export default Banner;
