import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
     <section className='footer'>
		<div className='social'>
			<a href='#'><i className='fab fa-facebook'></i></a>
			<a href='#'><i className='fab fa-instagram'></i></a>
			<a href='#'><i className='fab fa-twitter'></i></a>
			<a href='#'><i className='fab fa-youtube'></i></a>
		</div>

		<ul className='list'>
			<li>
				<a href='#'>Home</a>
			</li>
			<li>
				<a href='#'>About us</a>
			</li>
			<li>
				<a href='Courses'>Courses</a>
			</li>
			<li>
				<a href='Contact us'>Contact us</a>
			</li>
			<li>
				<a href='#'>Project</a>
			</li>
		</ul>
		<p className='copyright'>
			Online learning @ 2023
		</p>
	 </section>
    </>
  )
}
export default Footer;