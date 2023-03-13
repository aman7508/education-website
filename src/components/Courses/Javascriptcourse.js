import React from "react";
import "./Javascriptcourse.css";

const Javascriptcourse = () => {
    return (
        <>
            <div className="javascript-course-box">
                <h1 className="javascript-course-details">Course Details</h1>
            </div>
            <div className="enroll-javascript">
                <div className="javascript-enroll-course">
                    <h5 className="javascript-trainer"> Trainer's Name <b className="javascript-trainer-name">Aman</b> </h5>
                    <h5 className="javascript-trainer"> Course Fee <b className="javascript-trainer-name">&nbsp;&nbsp;&nbsp;&nbsp;@Rs.999/-</b> </h5>
                    <h5 className="javascript-trainer"> Available Seats <b className="javascript-trainer-name">&nbsp;&nbsp;&nbsp;&nbsp;20</b> </h5>
                    <h5 className="javascript-trainer"> Schedule <b className="javascript-trainer-name">&nbsp;&nbsp;&nbsp;&nbsp;2.00 pm to 4.00 pm</b> </h5>
                    <button className="javascript-enroll-button">Enroll the Course</button>
                    <button className="javascript-download-button">Download PDF @Rs.199/-</button>
                </div>
            </div>

            <div className="box-javascript">
                <h1 className="javascript-course-outline"><u className="javascript-underline">Course Outline</u></h1>
                <details>
                    <summary className="dropdown-css"><b> Introduction of Javascript</b></summary>
                    <p className="javascriptintro"><b>Javascript is a weakly/loosely typed checking language.<br/>
                        It is a object based programming language.<br/>
                        It is a scripting language.<br/>
                        JavaScript can't run individually.<br/>
                        It is widely used language on web like HTML. It is easy to learn and easy to use.<br />
                        Orginal name of javascript is livescript which was developed by using c language syntax's.<br/>
                        If we see the syntax of javascript, it is similar to c language.<br/><br/>
                        <b>ADVANTAGE OF Javascript</b><br />
                        1. It is a case sensitive language.<br/>
                        2. It saves lots of development time.<br/>
                        3. It is used to create interactive web pages.<br/>
                        4. It is used to perform client side form validation.<br/>
                        5. It supports drag and drop menu.<br/>
                        6. It supports Date and Time.<br/>
                        7. It is used to display dialog boxes and popup boxes.<br/>
                        </b></p>
                </details>



                <details>
                    <summary className="dropdown-css"><b>Output Statements in Javascript</b></summary>
                    <p className="javascriptintro"><b>We have two types of output statements.<br />
                        1. document.writeln() :- It is used to display the output on browser window.<br/>
                        2. console.log() :- It is used to display the output on browser console.<br/>
                        </b></p>
                </details>

                <details>
                    <summary className="dropdown-css"><b>JavaScript Comments</b></summary>
                    <p className="javascriptintro"><b>Comments are used to improve readability of our code.<br/>
                        Comments will not be displayed on a browser window.<br/>
                        Comments can be used before and after of the statements.<br /><br />
                        We have two types of comments.<br/>
                        1. Single Line Comment :-It is used to comment a single line.<br/>
                        2. Multiple Line Comment :-It is used to comment single line and multiple lines.<br/>
	                        It is more convenient when compare to single line comment.
                        </b></p>
                </details>

                <details>
                    <summary className="dropdown-css"><b>JavaScript Engine</b></summary>
                    <p className="javascriptintro"><b>Javascript engine is used to execute javascript code in a browser window.<br/>
                        Javascript engine is responsible to convert user understandable scripting language to<br/>
                        machine understandable scripting language.<br /><br />
                        <u>BROWSER</u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>JavaScript Engine</u><br/><br/>
                        Chrome&nbsp; ------------- &nbsp;&nbsp;V8 Engine <br/>
                        Firefox&nbsp;&nbsp; ------------ &nbsp;&nbsp;Spider Monkey <br/>
                        Safari&nbsp;&nbsp;&nbsp;&nbsp; -------------&nbsp;&nbsp; JavaScriptCore <br/>
                        Edge &nbsp;&nbsp;&nbsp;&nbsp;  -------------&nbsp;&nbsp; Chakra <br/>
                        </b></p>
                </details>


                <details>
                    <summary className="dropdown-css"><b>Types of JavaScript</b></summary>
                    <p className="javascriptintro"><b>Two types of Javascript<br/><br/>
                        1. Internal javascript / Embedded javascript:- In internal javascript<br/>
                          we will write html code and javascript code inside ".html" file. <br/><br/>
                        2. External javascript / Seperate javascript:- In external javscript,<br/>
                         we need to write html code in ".html" file and javascript codein ".js"<br/>
                          file seperately <br/>
                        </b></p>
                </details>

                <details>
                    <summary className="dropdown-css"><b>JavaScript Variables</b></summary>
                    <p className="javascriptintro"><b>A name which is given to a memory location is called variable.<br/>
                                                    Purpose of a variable is used to store the data.<br/>
                                                    In javascript , variables are also known as identifiers.<br/>
                                                    There are some rules while declaring a javascript variables.<br/><br/>

                                                    In javascript, we have two types of variables.<br/><br/>
                                                    1. Local Variables:- If we declare any variable inside blocks or<br/>
                                                    functions is called local variable.<br/><br/>
                                                    2. Global Variables:- If we declare any variable outside of the<br/>
                                                     function is called global variable.
                        </b></p>
                </details>
            </div>





            
        </>
    )
}
export default Javascriptcourse;
