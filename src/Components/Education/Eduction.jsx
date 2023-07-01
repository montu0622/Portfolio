import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Education=()=>{
    return(
        <>
        <div className="new">
            <div className="Eduction-year">
                <div className="eductionData">
                        <ul>
                            <li> <p>July 2022 To June 2023</p> <BsArrowRight/></li>
                            <li> <p>May 2019 To June 2021</p> <BsArrowRight/></li>
                            <li> <p>Aril 2017 To March 2019</p> <BsArrowRight/> </li>
                            <li> <p>April 2014 To March 2015</p> <BsArrowRight/></li>
                            
                        </ul>
                </div>
                <div className="eductionInstitudion">
                    <ul>
                        <li><h1>Web Designing</h1>
                        <p>Full Stack Course from Dice Academy</p>
                        </li>
                        <li><h1>Bachelor of Computer Application (BCA)</h1>
                        <p>Seth Jai Parkash Mukand Lal Institute of <br/>Engineering and Technology. Radur</p>
                        </li>
                        <li><h1>Secondary School</h1>
                        <p>Mukand Lal National Senior Secondary School<br/>Yamuna Nagar</p>
                        </li>
                        <li><h1>High school</h1>
                        <p>Mukand Lal National Senior Secondary School <br/>Yamuna Nagar</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        </>
    )
}

export default Education;