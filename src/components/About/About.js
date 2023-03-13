import React from "react";
import "./About.css";
import pic1 from "./home3.jpg"

const About =()=>
{
    return(
        <>
        {/*------------About us-------------*/}
                <div className="container-xxl py-5" id="about">
                       <div className="container mt-5">
                           <div className="row g-5">
                               <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" >
                                   <div className="position-relative h-100">
                                       <img className="img-fluid position-absolute w-100 h-100" src={pic1} alt="" />
                                   </div>
                               </div>
                               <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                   <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                                   <h1 className="mb-4">Welcome to OnlineLEARNING</h1>
                                   <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                                   <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                   <div className="row gy-2 gx-4 mb-4">
                                       <div className="col-sm-6">
                                           <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Html5 Course</p>
                                       </div>
                                       <div className="col-sm-6">
                                           <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>CSS3 Course</p>
                                       </div>
                                       <div className="col-sm-6">
                                           <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Javascript Course</p>
                                       </div>
                                       <div className="col-sm-6">
                                           <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>BootStrap5 Course</p>
                                       </div>
                                       <div className="col-sm-6">
                                           <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>ReactJS Course</p>
                                       </div>
                                       <div className="col-sm-6">
                                           <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Python Course</p>
                                       </div>
                                   </div>
                                   <a className="btn btn-danger py-3 px-5 mt-2" href="">Read More</a>
                               </div>
                           </div>
                       </div>
                   </div>
   
   
       </>
     )
   }
   
export default About;