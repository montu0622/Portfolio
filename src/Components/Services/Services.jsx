import React,{useState, useEffect} from "react";

import "../About/About.css"

import { Link } from 'react-router-dom';
import {  BsList, BsArrowRight } from "react-icons/bs";
import { ImCross} from "react-icons/im";

import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import Design from "../Design/Design";


const Services=()=>{

     //Navbar setter
     const [navBarSetter, setNavbarSetter] =useState({})
     //navBarCaceleToggle
     const [navBarToggle, setNavBarToggle] =useState(false)

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
   
   

  


    return(
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
                                    <h1>Services</h1>
                                    <div className="inner-box-information">

                                        <div className="item-About"><Link to="/Home"><h3>Home <BsArrowRight /></h3></Link></div>
                                        <div className="item-About"><Link to="/Services"><h3>Services</h3></Link></div>
                                    </div>

                                </div>




                            </div>
                        </header>
                    </section>

                    <section>
                        <div className='client'>
                            <div className='webDesign'>
                                <div className='titleName'>
                                    <h1>FONTEND DEVELOPER</h1>
                                    <p>Highly motivated and passionate Front-End Developer seeking an opportunity to leverage my skills and knowledge to contribute to the success of a dynamic organization. Eager to apply my expertise in HTML, CSS, JavaScript, and modern front-end frameworks to create visually appealing and user-friendly web applications.</p>
                                </div>


                              <Design/>
                              <Design/>


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
               
            </div>

    
        </>
    )
}

export default Services;