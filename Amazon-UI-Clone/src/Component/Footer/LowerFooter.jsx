import React from 'react'
import logo from './../../Img/Logo/logo._TTD_ copy.png'
import './Footer.css'

function LowerFooter() {
    return (
        <div className='Main_Lower_Footer_Wrapper'>
            <div className='Logo_Wrapper '>
                <div><img src={logo} alt="Logo" /></div>
                <div><span>English</span></div>
                <div><span>$   USD - U.S Dollar</span></div>
                <div><span>United State</span></div>
            </div>
        </div>
    
    )
}

export default LowerFooter
