import React from 'react';
import { SocialIcon } from 'react-social-icons';



function Footer() {
  return (
    <>
        <footer className="footer-cont">
        
            <div className="footer-child">
                <ul className="footer-list">
                    <li><SocialIcon url="https://twitter.com/IbiyemiModupe" bgColor="#918E9B" style={{width: 30, height:30}}/></li>
                    <li><SocialIcon url="https://web.facebook.com/ibiyemi.modupedeborah" bgColor="#918E9B"style={{width: 30, height:30}}/></li>
                    <li><SocialIcon url="https://www.instagram.com/dimstiches_/" bgColor="#918E9B" style={{width: 30, height:30}} /></li>
                    <li><SocialIcon url="https://www.linkedin.com/in/oluwamodupe-ibiyemi-495867244"  bgColor="#918E9B"style={{width: 30, height:30}}/></li>
                    <li><SocialIcon url="https://github.com/Deborah423/"  bgColor="#918E9B"style={{width: 30, height:30}}/></li>
                </ul>
            </div>
            <hr />
            <p>&copy;Copyright {new Date().getFullYear()} || Oluwamodupe Ibiyemi</p>
            
        </footer>
      
    </>
  )
}

export default Footer
