import React from 'react';
import "./Footer.css";
import FooterLogo from "../../assets/footer_logo.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import IconButton from '@mui/material/IconButton';


const Footer = () => {
    return (
        <div className="footer">

            <div className="footer__container">

                <div className="left">
                    <img src={FooterLogo} alt="" className="footer__logo" />
                    <h5>Famkura Drillers - All rights reserved</h5>
                </div>

                <div className="right">
                    <button className="get__quote">Get Quote</button>
                    <div className="socials">

                    
                        <FacebookIcon />

                        <WhatsAppIcon />
                        

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer
