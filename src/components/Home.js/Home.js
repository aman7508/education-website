import React from "react";
import About from "../About/About";
import Course from "../Courses/Course";
import Contact from "../Contact/Contact";
import "./Home.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Home =()=>
{
    const navigate = useNavigate();
    return(
        <>
     {/*   ------------Social icons--------- */}
     <section className="hero">
                <div className="social">
                    <i className="fab fa-youtube icon"></i>
                    <i className="fab fa-twitter icon"></i>
                    <i className="fab fa-instagram icon"></i>
                    <i className="fab fa-facebook-f icon"></i>
                </div>


                {/*-----------Front page ----------- */}
                <div className="container1">
                    <div className="course">
                        <h1 className="fronthead">Get The Best Free Online Courses</h1>
                        <p className="para"><b>Learn New Skills Online</b></p>
                        <p className="para">Upskill, reskill or pursue a passion with short courses across every subject, whether you’re a beginner or already an expert.</p>
                    </div>
                    <div className="signup">
                        <button onClick={()=> navigate('/signup')} className="btn btn-danger">Sign Up Now</button>
                    </div>
                </div>   
            </section>
            <About/>
            <Contact/>
            <Footer/>
           
    </>
    )
}
export default Home;