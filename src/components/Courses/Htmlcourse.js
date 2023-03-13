import React from "react";
import "./Htmlcourse.css";


const Htmlcourse = () => {
    return (
        <>
            <div className="html-course-box">
                <h1 className="html-course-details">Course Details</h1>
            </div>
            <div className="enroll-html">
                <div className="html-enroll-course">
                    <h5 className="html-trainer"> Trainer's Name <b className="html-trainer-name">Aman</b> </h5>
                    <h5 className="html-trainer"> Course Fee <b className="html-trainer-name">&nbsp;&nbsp;&nbsp;&nbsp;@Rs.999/-</b> </h5>
                    <h5 className="html-trainer"> Available Seats <b className="html-trainer-name">&nbsp;&nbsp;&nbsp;&nbsp;20</b> </h5>
                    <h5 className="html-trainer"> Schedule <b className="html-trainer-name">&nbsp;&nbsp;&nbsp;&nbsp;2.00 pm to 4.00 pm</b> </h5>
                    <button className="html-enroll-button">Enroll the Course</button>
                    <button className="html-download-button">Download PDF @Rs.199/-</button>
                </div>
            </div>

            <div className="box-html">
                <h1 className="html-course-outline"><u className="html-underline">Course Outline</u></h1>
                <details>
                    <summary className="dropdown-html"><b> Introduction of HTML5</b></summary>
                    <p className="htmlintro"><b>HTML-HTML stands for hypertext markup language.It is developed by "Berners Lee" in late 1991.<br />
                        It is widely used language on web to develop web pages and web applications.<br />
                        It is a tag based language.<br />
                        example:- <br />
                        &lt;html&gt;<br />
                        &lt;head&gt;<br />
                        &lt;body&gt;<br />
                        It is a case insensitive language.<br />
                        example:- <br />
                        &lt;html&gt;  (lower case)<br />
                        &lt;HTML&gt;  (upper case)<br />
                        Every tag may contains opening and closing tag.<br />
                        example:-<br />
                        &lt;html&gt; ----------opening tag<br />
                        &lt;/html&gt; ---------closing tag</b></p>
                </details>



                <details>
                    <summary className="dropdown-html"><b> Simple HTML Skelton document</b></summary>
                    <div className="dropdown-box-html">
                        &lt;!DOCTYPE&gt;<br />
                        &lt;html&gt;<br />
                        &lt;head&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-// head related tags
                        <br />&lt;/head&gt;<br />
                        &lt;body&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-// body related tags
                        <br />&lt;/body&gt;<br />
                        &lt;/html&gt;<br />

                        &lt;!DOCTYPE&gt; is used to represent HTML document.<br />
                        &lt;!DOCTYPE html&gt; is used represent HTML5 document.<br />
                    </div>
                </details>



                <details>
                    <summary className="dropdown-html"><b> Add Background color to a Webpage</b></summary>
                    <p className="htmlintro"><b>In webpage we need to use "bgcolor" attribute of &lt;body&gt; tag</b></p>
                    <div className="dropdown-box-html">
                        &lt;!DOCTYPE html&gt;<br />
                        &lt;html&gt;<br />
                        &lt;head&gt;<br />
                        &lt;title&gt;Add Background Color&lt;/title&gt;<br />
                        &lt;/head&gt;<br />
                        &lt;body  bgcolor="red"&gt;<br />
                        Welcome to My Website<br />
                        &lt;br&gt;<br />
                        &lt;/body&gt;<br />
                        &lt;/html&gt;
                    </div>
                </details>



                <details>
                    <summary className="dropdown-html"><b> Add Background Image in a Webpage</b></summary>
                    <p className="htmlintro"><b>In webpage we need to use "background" attribute of &lt;body&gt; tag</b></p>
                    <div className="dropdown-box-html">
                        &lt;!DOCTYPE html&gt;<br />
                        &lt;html&gt;<br />
                        &lt;head&gt;<br />
                        &lt;title&gt;Add Background Image&lt;/title&gt;<br />
                        &lt;/head&gt;<br />
                        &lt;body  background="image/pic.jpg"&gt;<br />
                        Welcome to My Website<br />
                        &lt;br&gt;<br />
                        &lt;/body&gt;<br />
                        &lt;/html&gt;
                    </div>
                </details>


                <details>
                    <summary className="dropdown-html"><b> Meta tag in HTML</b></summary>
                    <p className="htmlintro"><b>A &lt;meta&gt; tag is used inside &lt;head&gt; tag.<br />
                        Metatag is used by browser window,search engine and other web services.<br />
                        6 types of &lt;meta&gt; data we can declare.<br />
                        1. Description<br />
                        2. Author<br />
                        3. Keywords<br />
                        4. Viewport<br />
                        5. Refresh<br />
                        6. Copyright<br /></b></p>
                </details>

                <details>
                    <summary className="dropdown-html"><b> Heading Tags</b></summary>
                    <p className="htmlintro"><b>We have 6 heading tags from h1 to h6</b></p>
                    <div className="dropdown-box-html">
                        &lt;!DOCTYPE&gt;<br />
                        &lt;head&gt;<br />
                        &lt;/head&gt;<br />

                        &lt;body&gt;<br />
                        &lt;h1&gt;First Heading&lt;/h1&gt;<br />
                        &lt;h2&gt;First Heading&lt;/h2&gt;<br />
                        &lt;h3&gt;First Heading&lt;/h3&gt;<br />
                        &lt;h4&gt;First Heading&lt;/h4&gt;<br />
                        &lt;h5&gt;First Heading&lt;/h5&gt;<br />
                        &lt;h6&gt;First Heading&lt;/h6&gt;<br />
                        &lt;/body&gt;<br />
                    </div>
                </details>



                <details>
                    <summary className="dropdown-html"><b> HTML Tags</b></summary>
                    <p className="htmlintro"><b>1. &lt;p&gt; paragraph tag  &lt;/p&gt;<br />
                        2. &lt;b&gt; bold tag  &lt;/b&gt;<br />
                        3. &lt;strong&gt; strong tag  &lt;/strong&gt;<br />
                        4. &lt;i&gt; italic tag  &lt;/i&gt;<br />
                        5. &lt;em&gt; emphasize tag  &lt;/em&gt;<br />
                        6. &lt;br&gt; breakline tag  &lt;/br&gt;<br />
                        7. &lt;hr&gt; Horizontal line tag  &lt;/hr&gt;<br />
                        8. &lt;marquee&gt;  marquee tag  &lt;/marquee&gt;<br />
                        9. &lt;font&gt; font tag  &lt;/font&gt;<br />
                        10. &lt;center&gt; center tag  &lt;/center&gt;<br />
                        11. &lt;u&gt; underline tag  &lt;/u&gt;<br />
                    </b></p>

                    <br />
                </details>





            </div>

        </>
    )
}
export default Htmlcourse;