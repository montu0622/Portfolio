import React, { useState, useEffect } from "react";

import "../About/About.css"

import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaFacebookF, FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { BsList, BsArrowRight, BsCalendar2Day } from "react-icons/bs";
import { ImCross, ImHome } from "react-icons/im";

import Footer from "../Footer/Footer";
import axios from "axios";
const ComeingData ={
    name:"",
    email:"",
    subject:"",
    openion:""
};
const Contact = () => {
    

    const [intialInputdata, setIntialInputData] = useState(ComeingData);

    const [dataToggle, setDataToggle] =useState(false)
    

    //Navbar setter
    const [navBarSetter, setNavbarSetter] = useState({})
    //navBarCaceleToggle
    const [navBarToggle, setNavBarToggle] = useState(false)

    //window viewport width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //scoller 
    const [scrolled, setScrolled] = useState(false);


    //background color or buttons


    const [bgToggle, setBgToggle] = useState(false)

    useEffect(() => {
        // Update the windowWidth state when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

 
    // scroller counte

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //navbar function on responsive
    const HandleNavbar = () => {

        setNavbarSetter(
            {
                navBarSetter,
                top: "62px",
            }
        );
        setNavBarToggle(!navBarToggle);

    }

    const HandleNavbarCancel = () => {
        setNavbarSetter({
            navBarSetter,
            top: "-231px",
        })
        setNavBarToggle(false)
    }

const handleRecevingData=(e)=>{
//  switch(e.target.name){
//      case "name":
//          setIntialInputData((prev) => ({ ...prev, name: e.target.value }))
//      break;

//      case "email":
//         setIntialInputData((prev)=>({...prev, email: e.target.value}))
//         break;
//     case "subject":
//         setIntialInputData((prev)=>({...prev, subject: e.target.value}))
//         break;
//     case "openion":
//         setIntialInputData((prev)=>({...prev, openion: e.target.value}))
//         break;
//  }
}


    const SubmitReceingData =()=>{
    // axios.post("http://localhost:5000/recevingData", intialInputdata).then((res)=>{
    //     console.log("resspone from api", res.data);
    //     setDataToggle(!dataToggle)
      
    // }).catch((error)=>{
    //     console.log("error from api", error)
    // })
}

    return (
        <>
            <div className="main-cantainer-about">


                <section>
                    <header>
                        <div className='header_cantainer-about'>
                            <nav>{scrolled || windowWidth < 1120
                                ?

                                <>
                                    <div className='nav-bar-conatiner-sticky'>
                                        <ul>
                                            <li className='item-left' ><Link to="/Home"><h2>MEETME</h2></Link></li>
                                            {windowWidth < 1120 ?

                                                <>
                                                    {navBarToggle ?
                                                        <>
                                                            <li className='item-right barIcon1' onClick={() => HandleNavbarCancel()}><Link><ImCross /></Link> </li>
                                                        </>
                                                        :
                                                        <>
                                                            <li className='item-right barIcon' onClick={() => HandleNavbar()}><Link><BsList /></Link> </li>
                                                        </>
                                                    }
                                                    <div className='setterVavBar' style={navBarSetter}>
                                                        <ul>
                                                            <Link to="/Home"><li className=''>Home</li></Link>
                                                            <Link to="/About"><li className=''>About</li></Link>
                                                            <Link to="/Services"><li className=''>Services</li></Link>
                                                            <Link to="/Contact"><li className=''>Contact</li></Link>
                                                        </ul>
                                                    </div>
                                                </>

                                                :
                                                <>
                                                    <li className='item-right'><Link to="/Home">Home</Link></li>
                                                    <li className='item-right'><Link to="/About">About</Link></li>
                                                    <li className='item-right'><Link to="/Services">Services</Link></li>
                                                    <li className='item-right'><Link to="/Contact">Contact</Link></li>
                                                </>
                                            }

                                        </ul>
                                    </div>
                                </>

                                :

                                <>
                                    <div className='nav-bar-conatiner'>
                                        <ul>
                                            <li className='item-left' ><Link to="/Home"><h2>MEETME</h2></Link></li>
                                            <li className='item-right'><Link to="/Home">Home</Link></li>
                                            <li className='item-right'><Link to="/About">About</Link></li>
                                            <li className='item-right'><Link to="/Services">Services</Link></li>
                                            <li className='item-right'><Link to="/Contact">Contact</Link></li>
                                        </ul>
                                    </div>


                                </>

                            }

                            </nav>

                            <div className="about-box-information">
                                <h1>Contact</h1>
                                <div className="inner-box-information">

                                    <div className="item-About"><Link to="/Home"><h3>Home <BsArrowRight /></h3></Link></div>
                                    <div className="item-About"><Link to="/Contact"><h3>Contact</h3></Link></div>
                                </div>

                            </div>




                        </div>
                    </header>
                </section>

                <section>
                    <div className="Contact-map">
                        <div className="map-box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.286077020925!2d77.03359842307786!3d28.62118693460018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0538e656e33d%3A0x268702b7d158d3f!2sRama%20Park%2C%20Nawada%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1687703708469!5m2!1sen!2sin"
                                width="800"
                                height="600"
                                style={{ border: 0, height: "40rem", width: "90%" }}
                                allowfullscreen="true"
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div className="cantact-addres-box row">
                            <div className="address-box col-lag-4 col-md-6 col-sm-12">
                                <span className='icons1'><Link to="/"><h3> <BsCalendar2Day /> 05th April 2000</h3></Link></span><br />
                                <span className='icons1'><Link to="/"><h3><FaPhoneAlt /> +91 7988917376</h3></Link></span><br />
                                <span className='icons1'><Link to="/"><h3><ImHome /> Yamuna Nagar Haryana</h3></Link></span><br />
                            </div>

                            <div className="address-box col-lag-4 col-md-6 col-sm-12">
                                <input type="text" name="name" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(e)=>handleRecevingData(e)} placeholder="Enter Your Name" /><br />
                                <input type="email" name="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(e)=>handleRecevingData(e)} placeholder="Enter Email Address" /><br />
                                <input type="text" name="subject" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(e)=>handleRecevingData(e)} placeholder="Enter Your Subject" /><br></br>
                            </div>

                            <div className="address-box col-lag-4 col-md-6 col-sm-12">
                            <div>
                                <input type="text" name="openion" class="form-control messge-box" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"  onChange={(e)=>handleRecevingData(e)} placeholder="Enter Message" /><br></br>

                            </div>
                            <button type="submit" className="btn submitbutton" onClick={()=>SubmitReceingData()}>Send Message</button>
                        </div>

                        </div>

                        


                    </div>

                </section>


                <section className="contact-footer">
                    <footer>
                        <div className='footer-container'>
                            <Footer />
                        </div>
                    </footer>
                </section> 
               

            </div>

         

        </>
    )
}

export default Contact;