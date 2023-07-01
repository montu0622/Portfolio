import React from "react";
import { Link } from "react-router-dom";
import {  FaFacebookF, FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";


const Footer = () => {
    return (
        <>

            <div className="footer-wrapper row">
                <div className="footer-box col-lg-4 col-md-6 col-sm-12">
                    <h2>About ME</h2>
                    <p
                    >Do you want to be even more successful?
                        Learn to love learning and growth. The more effort you put into improving your skills,
                    </p>

                </div>

                <div className="footer-box col-lg-4 col-md-6 col-sm-12">
                    <h2>Newsletter</h2>
                    <p>
                        Stay updated with our latest trends
                    </p>

                    <div class="input-group input-group-lg">
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Send Email Address"/>
                    <button type="button" className="btn btn-outline-primary"><BsArrowRight/></button>

                    </div>
                   

                </div>

                <div className="footer-box col-lg-4 col-md-6 col-sm-12">
                    <h2>Follow Me</h2>
                    <p>
                        Let us be social
                    </p>
                    <div>
                        <span className=' footer-icons'><Link to="/"><FaFacebookF /></Link></span>
                        <span className=' footer-icons'><Link to='https://github.com/montu0622'><FaGithub /></Link></span>
                        <span className=' footer-icons'><Link to='https://www.linkedin.com/in/montu-kumar-95905a263/'><FaLinkedinIn /></Link></span>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer;