import React from "react";
import {  FaCode } from "react-icons/fa";


const Design=()=>{
    return(
        <>
        <div className="mutliDesignBox row">
            <div className="col-lg-4 col-md-6 col-sm-12 DesignBox">
                <div>
                    <div ><FaCode className="design-icon"/></div>
                    <div  className="desinName"><h2>FRONTEND DEVELOPER</h2></div>
                    <div className="aboutDesign"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto nisi ullam eius accusamus ad! Magni, tenetur consequatur ad,
                         quia neque ex et soluta quibusdam, eligendi officia commodi. Aspernatur, incidunt.</p></div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 DesignBox">
                <div>
                    <div ><FaCode className="design-icon"/></div>
                    <div className="desinName"><h2>FRONTEND DEVELOPER</h2></div>
                    <div className="aboutDesign"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto nisi ullam eius accusamus ad! Magni, tenetur consequatur ad,
                         quia neque ex et soluta quibusdam, eligendi officia commodi. Aspernatur, incidunt.</p></div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 DesignBox">
                <div>
                    <div  ><FaCode className="design-icon"/></div>
                    <div   className="desinName"><h2>FRONTEND DEVELOPER</h2></div>
                    <div className="aboutDesign"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto nisi ullam eius accusamus ad! Magni, tenetur consequatur ad,
                         quia neque ex et soluta quibusdam, eligendi officia commodi. Aspernatur, incidunt.</p></div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Design;