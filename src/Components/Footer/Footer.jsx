import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footerlogo from '../../Assets/Image/website-logo.png'




const Footer = () => {
  return (
   <div className="wrapper section-padding footer-bg">
        <footer>
          <div className="footer-social-icon">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          </div>
          <div className="footer-main-content">

            <div className='footer-content1'>
             <div className='d-flex  align-items-center gap-3'>
             <img src={footerlogo} alt="footer-logo" />
             <p className='m-0'><b>PlayPalooza</b></p>
             </div>
             <div>
              <p style={{color:"#667085"}}>Buy amazing toys for your young ones that create more happiness in your world.</p>
             </div>
            </div>

          <div className='footer-content-link'>
          <div className='footer-content2'>
               <div><b>Product</b></div>
                <ul>
                  <li><a href="#">Girls</a></li>
                  <li><a href="#">Boys</a></li>
                  <li><a href="#">Stationary </a></li>
                  <li><a href="#">Toys</a></li>
                  <li><a href="#">Carry Bags</a></li>
                  <li><a href="#">Hair accessories </a></li>
                </ul>
            </div>

            <div className='footer-content3'>
            <div><b>Resources</b></div>
                <ul>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Newsletter</a></li>
                  <li><a href="#">Help centre</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Shipping policy</a></li>
                  <li><a href="#">Refund policy</a></li>
                </ul>
            </div>
          </div>

            <div className='footer-content4'>
            <div><b>Stay up to date</b></div>
            <div className='subscribe-btn'>
              <input type="email" placeholder='Enter your email' />
              <button>Subscribe</button>
            </div>
            </div>
          </div>
          <div className="footer-bottom-content ">
            <div className='copyright'><p>© 2074 Kasper UI. All rights reserved.</p></div>
            <div className='condition'>
             <a href="#">Term</a>
             <a href="#">Privacy</a>
             <a href="#">Cookies</a>
            </div>
          </div>
        </footer>
   </div>
  )
}

export default Footer
