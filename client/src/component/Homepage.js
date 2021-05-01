/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Intro from './Bchain/IntroImg.svg';
import Why1 from './Bchain/why1.svg';
import Why2 from './Bchain/why2.svg';
import Base from './Bchain/base.svg';
import What1 from './Bchain/what1.svg';
import What2 from './Bchain/what2.svg';
import '../css_component/homepage.css';
import $ from 'jquery';

const Homepage=(props)=>{

    // const [user,setUser] = useState(false);
    // const [email,setEmail] = useState('');

    // window.onload=()=>{
    //     var email = window.location.pathname;
    //     if(email.length===1){
    //         setUser(false);
    //     }else{
    //         var ans =   email.slice(1,email.length);
    //         console.log(ans);
    //         setEmail(ans);
    //         setUser(true);
    //     }
    // }

	const{handleLogout,name} = props;

    return(
        <div className="container-fluid" style={{paddingLeft:"0"}}>


		<div id="bg">

			<Navbar handleLogout={handleLogout} name={name} />
			
			<div className="main">
				<div className="topHeading">
					<h1>
						Revolutionizing Consumer-Producer Market&nbsp;Using
						<p>Blockchain</p>
						<h2>Benefiting Both, Consumer&nbsp;&&nbsp;Producer</h2>
					</h1>
				</div>
				<div className="topImg"><img src={Intro} alt=""/></div>
			</div>
		</div>



		<div className="subheading">
			<h1>Why&nbsp;You&nbsp;Should Use&nbsp;TraceIt</h1>
		</div>
		<div className="ro row1">

			<div className="left blk">
				<img src={Why1} alt=""/>
			</div>
			<div className="right blk">
				<h2>Know Important Dates&nbsp;&&nbsp;Details</h2>
				<p>Expirey Date</p>
				<p>Average Customer Rating</p>
			</div>

			<div className="left blk">
				<img src={Why2} alt=""/>
			</div>
			<div className="right blk">
				<h2>Know Your Food's Origin&nbsp;&&nbsp;Transport&nbsp;History</h2>
				<p>Location Of Production</p>
				<p>Transporter Details</p>
			</div>
		</div>
		<div className="base"><img src={Base} alt=""/></div>




		<div className="subheading sub2">
			<h1>What Info TraceIt Provides</h1>
		</div>
		<div className="ro row2">
			<div className="right blk">
				<h2>Facilities For Consumers</h2>
				<p>Trust & Transparency</p>
				<p>Product Tracebility</p>
				<p>Safety & Hygiene</p>
			</div>
			<div className="left blk">
				<img src={What1} alt="" srcset=""/>
			</div>
			<div className="right blk">
				<h2>Facilities For Producers</h2>
				<p>More Data for Product Analysis</p>
				<p>Reach Of Your Products</p>
				<p>Amount of Product that Expires</p>
			</div>
			<div className="left blk">
				<img src={What2} alt="" srcset=""/>
			</div>
		</div>

		<div className="footer1"></div>

	</div>
    );
}

export default Homepage;