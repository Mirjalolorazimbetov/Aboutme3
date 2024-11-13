import React from 'react'
import facebook from '../images/facebook.png'
import instagram from '../images//instagram.png'
import telegram from '../images/telegram.png'
import gmail from '../images//gmail.png'
import whatsApp from '../images//whatsApp.png'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div class="container">
                <h2 class="footer_title">Связаться со мной</h2>
                <div class="footer_box">
                    <a href="https://www.facebook.com/">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#!">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#!">
                        <img src={telegram} alt="" />
                    </a>
                    <a href="mailto:mirjalolorazimbetov@gmail.com">
                        <img src={gmail} alt="" />
                    </a>
                    <a href="tel:+998913001868">
                        <img src={whatsApp} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
