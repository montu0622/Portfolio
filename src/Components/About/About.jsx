import React, { useState, useEffect } from "react";

import "../About/About.css"

import { Link } from 'react-router-dom';
import profile from '../../Assets/Images/profile.jpeg';
import { FaPhoneAlt, FaFacebookF, FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { BsCalendar2Day, BsFillDatabaseFill, BsLayoutTextSidebarReverse, BsFillPeopleFill, BsList, BsArrowRight } from "react-icons/bs";
import { ImHome ,ImCross} from "react-icons/im";

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Education from '../Education/Eduction';
import Experiences from '../Education/Experiens';
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";



const About = () => {

     //Navbar setter
     const [navBarSetter, setNavbarSetter] =useState({})
     //navBarCaceleToggle
     const [navBarToggle, setNavBarToggle] =useState(false)

    //window viewport width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //scoller 
    const [scrolled, setScrolled] = useState(false);


    //window on and exist
    const [countOn, setCountOn] = useState(false)

    //background color or buttons

    const [bgColor, setBgColoer] = useState("#fff");
    const [bgColorEduc, setBgColoerEduc] = useState("#8fcbff");
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
            top:"62px",
           }
        );
        setNavBarToggle(!navBarToggle);   
       
    }

    const HandleNavbarCancel=()=>{
        setNavbarSetter({
            navBarSetter,
            top:"-231px",
        })
        setNavBarToggle(false)
    }
    //BackGround Color Change OnClick
    const handleExp = () => {
        setBgColoer("#fff");
        setBgColoerEduc("#8fcbff");
        setBgToggle(!bgToggle)



    }

    const handleEduc = () => {

        setBgColoerEduc("#fff");
        setBgColoer("#8fcbff")
        setBgToggle(false)


    }

    return (
        <>
            <div className="main-cantainer-about">
                <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>

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
                                                        <li className='item-right barIcon1' onClick={()=>HandleNavbarCancel()}><Link><ImCross /></Link> </li>
                                                       </>
                                                        :
                                                        <>
                                                         <li className='item-right barIcon' onClick={()=>HandleNavbar()}><Link><BsList /></Link> </li>
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
                                    <h1>About Us</h1>
                                    <div className="inner-box-information">

                                        <div className="item-About"><Link to="/Home"><h3>Home <BsArrowRight /></h3></Link></div>
                                        <div className="item-About routename"><Link to="/About"><h3 >About</h3></Link></div>
                                    </div>

                                </div>

                                {windowWidth < 1124 ? <>
                                    <div className='About-responsive'>
                                        <div className='profile_img'>
                                            <img src={profile} alt='my profile image' />

                                            <p className='top_element'> HELLO EVERYBODY, I AM</p>
                                            <h1>MONTU KUMAR</h1>
                                            <span><b>FULL STACK DEVELOPER</b></span>

                                            <p className='new_item'>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
                                            <span className='icons1'><Link to="/"><h3> <BsCalendar2Day /> 05th April 2000</h3></Link></span><br />
                                            <span className='icons1'><Link to="/"><h3><FaPhoneAlt /> +91 7988917376</h3></Link></span><br />
                                            <span className='icons1'><Link to="/"><h3><ImHome /> Yamuna Nagar Haryana</h3></Link></span><br />
                                            <div className='social-icons'>
                                                <span className='socia_one'><Link to="/"><FaFacebookF /></Link></span>
                                                <span className='socia_one'><Link to='https://github.com/montu0622'><FaGithub /></Link></span>
                                                <span className='socia_one'><Link to='https://www.linkedin.com/in/montu-kumar-95905a263/'><FaLinkedinIn /></Link></span>
                                            </div>
                                        </div>

                                    </div>

                                </>
                                    :
                                    <>
                                        <div className='home_banner_area1'>
                                            <div className='profile_img'>
                                                <img src={profile} alt='my profile image' />
                                            </div>

                                            <div className='media'>
                                                <p className='top_element'> HELLO EVERYBODY, I AM</p>
                                                <h1>MONTU KUMAR</h1>
                                                <span><b>FULL STACK DEVELOPER</b></span>

                                                <p className='new_item'>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
                                                <span className='icons1'><Link to="/"><h3> <BsCalendar2Day /> 05th April 2000</h3></Link></span><br />
                                                <span className='icons1'><Link to="/"><h3><FaPhoneAlt /> +91 7988917376</h3></Link></span><br />
                                                <span className='icons1'><Link to="/"><h3><ImHome /> Yamuna Nagar Haryana</h3></Link></span><br />
                                                <div className='social-icons'>
                                                    <span className='socia_one'><Link to="/"><FaFacebookF /></Link></span>
                                                    <span className='socia_one'><Link to='https://github.com/montu0622'><FaGithub /></Link></span>
                                                    <span className='socia_one'><Link to='https://www.linkedin.com/in/montu-kumar-95905a263/'><FaLinkedinIn /></Link></span>
                                                </div>
                                            </div>
                                        </div>

                                    </>}



                            </div>
                        </header>
                    </section>

                    <section className='wrapper-about1'>

                        <div className=' about-count row'>
                            <div className='about-inner-wrapper  col-lg-6 col-sm-12 '>
                                <h1>ABOUT MYSELF</h1>
                                <p>inappropriate behavior is often laughed off as “boys will be
                                    boys,” women face higher conduct standards especially in the workplace. That’s why it’s
                                    crucial that, as women, our
                                    behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                                <div className='CountUpPage '>

                                    <div className='countBox'>
                                        <h3><BsFillDatabaseFill className='iconsProjects' /></h3>
                                        <h2>{countOn && <CountUp start={0} end={23} duration={2} delay={0} />}+</h2>

                                        <p>Total Donation</p>
                                    </div>

                                    <div className='countBox'>
                                        <h3><BsLayoutTextSidebarReverse className='iconsProjects' /></h3>
                                        <h2>{countOn && <CountUp start={0} end={49} duration={2} delay={0} />}+</h2>

                                        <p>Total Projects</p>
                                    </div>

                                    <div className='countBox'>
                                        <h3><BsFillPeopleFill className='iconsProjects' /></h3>
                                        <h2>{countOn && <CountUp start={0} end={24} duration={2} delay={0} />}+</h2>

                                        <p>Total Volunteers</p>
                                    </div>

                                </div>
                            </div>


                            <div className='skills col-lg-6 col-sm-12'>
                                <div className='skillContainer '>
                                    <div className='skillName HtmlSkills'>
                                        <span><h2>HTML5</h2></span>
                                        <span><h2><CountUp start={0} end={80} duration={2} delay={0} />%</h2></span>

                                    </div>
                                    <div className='skills-graf'>
                                        <div className='skillsGrafLoader'>
                                            <div className='skillFille'></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='skillContainer'>
                                    <div className='skillName'>
                                        <span><h2>CSS3</h2></span>
                                        <span><h2><CountUp start={0} end={80} duration={2} delay={0} />%</h2></span>

                                    </div>
                                    <div className='skills-graf'>
                                        <div className='skillsGrafLoader'>
                                            <div className='skillFille'></div>
                                        </div>
                                    </div>
                                </div>


                                <div className='skillContainer'>
                                    <div className='skillName'>
                                        <span><h2>JAVASCRIPT</h2></span>
                                        <span><h2><CountUp start={0} end={70} duration={2} delay={0} />%</h2></span>

                                    </div>
                                    <div className='skills-graf'>
                                        <div className='skillsGrafLoader'>
                                            <div className='skillFille skillsJava'></div>
                                        </div>
                                    </div>
                                </div>



                                <div className='skillContainer'>
                                    <div className='skillName'>
                                        <span><h2>React.js</h2></span>
                                        <span><h2><CountUp start={0} end={50} duration={2} delay={0} />%</h2></span>

                                    </div>
                                    <div className='skills-graf'>
                                        <div className='skillsGrafLoader'>
                                            <div className='skillFille skillReact'></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='skillContainer'>
                                    <div className='skillName '>
                                        <span><h2>Node.js</h2></span>
                                        <span><h2><CountUp start={0} end={50} duration={2} delay={0} />%</h2></span>

                                    </div>
                                    <div className='skills-graf'>
                                        <div className='skillsGrafLoader'>
                                            <div className='skillFille skillReact'></div>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>


                    </section>

                    <section>
                        <div className='side-cantainer'>
                            <div className='slider-box'>
                                <Slider />
                            </div>

                        </div>
                    </section>

                    <section>
                        <footer>
                            <div className='footer-container'>
                                <Footer />
                            </div>
                        </footer>
                    </section>
                </ScrollTrigger>
            </div>

        </>
    )
}


export default About;