import React from "react";
import { useNavigate } from "react-router-dom";
import "./Course.css";

const Course =()=>
{
    const navigate = useNavigate();
    return(
        <>
   
                {/*-----------Courses----------- */}
                <div className="our-courses">
                    <h1 className="our-course-box">Our Courses</h1>
                </div>
                
                <div className="categories" id="courses">
                </div>
                <div className="container">
                    <div className="title"><img className="image" src="https://www.arcskill.com/v2/static/images/courses/1600413021_-_html.jpg" />
                    <button className="title2" onClick={()=> navigate('/htmlcourse')}>HTML5 Course</button></div>

                    <div className="title"><img className="image" src="https://gbcdn.mrgcdn.ru/uploads/geekbrains/public/ckeditor_assets/pictures/8975/retina-5df8bc110901350173f8be719ce2ea1d.png" />
                    <button className="title2" onClick={()=> navigate('/Css3course')}><span>CSS3 Course</span></button></div>

                    <div className="title"><img className="image" src="https://myiotlab.in/storage/category/javascript.JPG" />
                    <button className="title2" onClick={()=> navigate('/javascriptcourse')}> <span>JavaScript Course</span></button></div>

                    <div className="title"><img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZL_ST-vqpuo-5CcWVx3CPa6-l2pgDPvcfUDGKMigMabJf6-3r09qgbU7FYFaP05suFA&usqp=CAU" />
                    <button className="title2"> <span>BootStrap Course</span></button></div>

                    <div className="title"><img className="image" src="https://www.pragimtech.com/wp-content/uploads/2021/03/ReactJS.jpg" />
                    <button className="title2"><span>React.js Course</span></button></div>

                    <div className="title"><img className="image" src="https://www.papasiddhi.com/wp-content/uploads/2022/02/python.jpg" />
                    <button className="title2"><span>Python Course</span></button></div>

                    <div className="title"><img className="image" src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?w=2000" />
                    <button className="title2"><span>Digital Marketing</span></button></div>

                    <div className="title"><img className="image" src="https://t3.ftcdn.net/jpg/03/20/09/50/360_F_320095027_Vpyu0V1vZZqyB3elyKuzQrPELizzPo2l.jpg" />
                    <button className="title2"><span>DevOps Course</span></button></div>

                </div>

   </>
    )
}
export default Course;