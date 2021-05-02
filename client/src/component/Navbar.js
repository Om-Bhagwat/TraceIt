/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import axios from 'axios';
import React, { useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import {Link} from 'react-router-dom';
import '../css_component/navbar.css';


const Navbar=(props)=>{

  const{handleLogout,name} = props
  

//   const [correct,setCor] = useState(false);
//   console.group(user);
//   console.log(email);

//   const logoutS = async(e)=>{

//     e.preventDefault();

//     const token = localStorage.getItem("token");
//     try{
//         const response = await axios.post('http://localhost:5000/users/logout',{
//           headers:{
//             'Authorization':`Basic ${token}`
//           }
//         }
//         );
//         console.log(token);
//         console.log("Logging Out");
//         setCor(true);
//     }catch(error){
//         console.log(error.response)
//     }

//     if(correct){
//         window.location.assign("http://localhost:3000");
//     }


// }


function ham(){
  const navbar = document.querySelector(".navbar");

  const brand = document.querySelector(".brand");
  
  const hamberger = document.querySelector(".hamburger");
  const line = document.querySelectorAll(".line");
  
  const options = document.querySelector(".options");
  const links = document.querySelectorAll(".options li");

  options.classList.toggle("open");
    line.forEach(whiteline => {
      whiteline.classList.toggle("whiteLine");
    });
    navbar.classList.toggle("purple");
    brand.classList.toggle("brandOpen");
  
    anime({
          targets: ".brand.brandOpen",
          translateX: 250,
      });

}





    return(
      <div className="navbar">
          <span className="brand">
            <a href="http://" target="_blank" rel="noopener noreferrer">TraceIt</a>
          </span>

          <div className="hamburger" onClick={ham}>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>

          <span className="options">
            <ul class="navlinks">
              <li><Link to="/"  >Home</Link></li>
              <li><Link to="/get"  >Get Details</Link></li>
              <li><Link to="/post" >Post</Link></li>
              <li><Link to="/get/travel"  >Update</Link></li>
              {/* <li><Link to="/">{name}</Link></li> */}
              <li><Link to="/" onClick={handleLogout}>LogOut</Link></li>
            </ul>
          </span>
    </div>
    );
}
export default Navbar;