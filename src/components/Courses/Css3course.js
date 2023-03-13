import React from "react";
import "./Css3course.css";

 const Css3course =()=>
 {
    return(
        <>
         <div className="css-course-box">
                <h1 className="css-course-details">Course Details</h1>
            </div>
            <div className="enroll-css">
                <div className="enroll-course-css">
                    <h5 className="trainer-css"> Trainer's Name <b className="trainer-name-css">Aman</b> </h5>
                    <h5 className="trainer-css"> Course Fee <b className="trainer-name-css">&nbsp;&nbsp;&nbsp;&nbsp;@Rs.999/-</b> </h5>
                    <h5 className="trainer-css"> Available Seats <b className="trainer-name-css">&nbsp;&nbsp;&nbsp;&nbsp;20</b> </h5>
                    <h5 className="trainer-css"> Schedule <b className="trainer-name-css">&nbsp;&nbsp;&nbsp;&nbsp;2.00 pm to 4.00 pm</b> </h5>
                    <button className="enroll-button-css">Enroll the Course</button>
                    <button className="download-button-css">Download PDF @Rs.199/-</button>
                </div>
            </div>



            <div className="box-css">
                <h1 className="css-course-outline"><u className="css-underline">Course Outline</u></h1>
                <details>
                    <summary className="dropdown-css"><b> Introduction of CSS3</b></summary>
                    <p className="cssintro"><b>CSS stands for Cascading Styles Sheets. CSS is used to apply the styles on html elements.<br/>
                                             It is widely used language on web like HTML. It is easy to learn and easy to use.<br/>
                                             The latest version of CSS3 was introduced in 2001<br/><br/>
                                             ADVANTAGE OF CSS3<br/>
                                                1. It supports all major browers/devices.<br/>
                                                2. It saves lots of development time.<br/>
                                                3. Performance is faster.<br/><br/>
                                                <b>DISADVANTAGE OF CSS3</b><br/>
                                                1. Needs to update all the version of CSS.<br/>
                                                2. Fragmentation.<br/></b></p>                   
                </details>




                <details>
                    <summary className="dropdown-css"><b> Types of CSS</b></summary>
                    <p className="cssintro"><b>Three Types of CSS:-<br/><br/>
                                                1. <u>Inline CSS</u>- If we want to apply unique style on single element then we need to use inline CSS. <br/><br/>

                                                2. <u>Internal CSS/Embedded CSS</u>- If we want to apply unique styles on a single web page then we need<br/> to use internal CSS using &lt;style&gt; tag.<br/><br/>
                                                3. <u>External CSS/Seperate CSS</u>- External CSS is used to change the look of the entire website by changing just one file.<br/>
                                                In external css we have two create two files. i.e ".html" and ".css" file. The external ".css" file should not contain any html tags. <br/></b>
                                                </p>                   
                </details>



                <details>
                    <summary className="dropdown-css"><b> CSS Background Property</b></summary>
                    <p className="cssintro"><b>The CSS background property is used to set the background in a web page.<br/>
                                                List of following background properties are.<br/>
                                               1. background-color <br/>
                                               2. background-image <br/>
                                               3. background-repeat <br/>
                                               4. background-size <br/>
                                               5. background-position <br/>
                                               6. background-attachment<br/>
                                               7. background-shorthand <br/>
                                               8. background-blend-mode <br/></b>
                                                </p>                   
                </details>




                <details>
                    <summary className="dropdown-css"><b> CSS Border Properties</b></summary>
                    <p className="cssintro"><b> The CSS border properties allows us to specify the style,width and color of an element's border.<br/>
                                               1.  <u> CSS BORDER STYLE</u><br/>
                                                        dotted ------ dotted border <br/>
                                                        dashed ------ dashed border <br/>
                                                        solid  ------ solid border  <br/>
                                                        double ------ double border <br/>
                                                        groove ------ groove border <br/>
                                                        ridge  ------ ridged border <br/>
                                                        inset  ------ 3D inset border <br/>
                                                        outset ------ 3D outset border <br/>
                                                        none   ------ no border <br/>
                                                        hidden ------ hidden border <br/><br/></b>

                                                <b> 2.  <u> CSS BORDER WIDTH:-</u> <br/>           
                                                        The CSS border-width property sets the width of an element's four borders.<br/>
                                                        The width can be set as a specific size like in px,pt,cm,em and etc.</b><br/><br/>  

                                                <b>3.   <u> CSS BORDER COLOR:-</u> <br/>           
                                                        The border-color property is used to set the color of four borders.<br/>
                                                        - With color name like red.<br/>
                                                        - With HEX value like #FFFF00.<br/>
                                                        - With RGB value  like rgb (255,0,0).	
                                                        - With HSL value like hsl(0,100%,50%).
                                                        </b>   <br/><br/>    

                                                <b>4. <u> CSS BORDER SHORTHAND PROPERTY </u><br/>
                                                It is used to shorthand the property.In order to make border shorthand property<br/>
                                                we need to using following below given order.<br/><br/>
                                                example:	<br/>
                                                border-style: solid;<br/>
                                                border-width: 2px;<br/>
                                                border-color: #FF0000;<br/>

                                                or <br/>

                                                border: 2px solid #FF0000;   <br/> </b></p>              
                </details>






                <details>
                    <summary className="dropdown-css"><b> *CSS MARGINS</b></summary>
                    <p className="cssintro"><b> CSS margin properties are used create space around elements <br/>,outside of defined border.
                    margins for each side of an element.<br/><br/>
                                               1. margin-top<br/>
                                               2. margin-right<br/>
                                               3. margin-bottom<br/>
                                               4. margin-left<br/><br/>

                                               *Margin properties can have following values. They are<br/><br/>
                                               1. Auto      - The browser calculates the margin.<br/>
                                               2. length    - It declare margin in px,pt,cm,em and etc.<br/>
                                               3. Percent   - It declare margin in percentage(%).<br/>
                                               4. Inherit   - It declare the margin should be inherited from parent element.<br/><br/>

                                               *MARGINS SHORTHAND PROPERTY <br/>
                                               1. margin-top:25px <br/>
                                               2. margin-right:50px <br/>
                                               3. margin-bottom:75px <br/>  
                                               4. margin-left:100px <br/><br/>
                                               or,<br/><br/>
                                               margin: 25px  50px  75px  100px;<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  top &nbsp;&nbsp;right&nbsp; bottom left </b></p>              
                </details>





                <details>
                    <summary className="dropdown-css"><b> *CSS PADDING</b></summary>
                    <p className="cssintro"><b> The CSS padding properties are used to generate space around elements content.<br/>
                                                We have following CSS properties for specifying padding for each side.<br/><br/>
                                               1. padding-top<br/>
                                               2. padding-right<br/>
                                               3. padding-bottom<br/>
                                               4. padding-left<br/><br/>
                                               Note:- Negative values are not allowed but in margin -ve values are allowed.<br/>
                                                      Margin is page/screen level and padding is a content level.<br/><br/>

                                               *PADDING SHORTHAND PROPERTY <br/>
                                               1. padding-top:25px <br/>
                                               2. padding-right:50px <br/>
                                               3. padding-bottom:75px <br/>  
                                               4. padding-left:100px <br/><br/>
                                               or,<br/><br/>
                                               padding: 25px  50px  75px  100px;<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  top &nbsp;&nbsp;right&nbsp; bottom left </b></p>              
                </details>

            </div>
        </>
    )
 }
 export default Css3course;