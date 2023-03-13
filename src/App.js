import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Course from "./components/Courses/Course";
import Home from "./components/Home.js/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Htmlcourse from "./components/Courses/Htmlcourse";
import Css3course from "./components/Courses/Css3course";
import Signup from "./components/Home.js/Signup";
import Javascriptcourse from "./components/Courses/Javascriptcourse";







const App = () => {
  return (
    <>
       
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/courses' element={<Course/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login' element={<Htmlcourse/>}/>
            <Route path="/htmlcourse" element={<Htmlcourse/>}/>
            <Route path="/css3course" element={<Css3course/>}/>
            <Route path="/javascriptcourse" element={<Javascriptcourse/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
