/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-template-curly-in-string */
import React,{useState} from 'react';
import Web3 from 'web3';
import {projectAbi} from '../Abis';
import '../css_component/post.css';
import Trader from '../component/Bchain/trader.svg';
import Down from '../component/Bchain/download-icon.svg';
import Navbar from './Navbar';
import axios from 'axios';

const QRCode = require('qrcode.react');
//import Modal from "react-bootstrap/Modal";
//import "bootstrap/dist/css/bootstrap.min.css";


const web3 = new Web3(Web3.givenProvider);

const contractAddr = '0xf9534A0F4b9803E600c36519FE0f8350CEA473E0';
const Project = new web3.eth.Contract(projectAbi,contractAddr);



const Post=(props)=>{

  const{handleLogout,name} = props

  const [id,setid] = useState(0);
  const [p_name,setpname] = useState("");
  const [p_man,setpman] = useState("");
  const [p_exp,setpexp] = useState("");
  const [s_lat,setslat] = useState("");
  const [s_lon,setslon] = useState("");
  const [s_name,setsname] = useState("");
  const [feed,setFeed] = useState("");
  const [type,setType] = useState("");
  const [count,setCount] = useState(0);
  const [proddesc,setProdesc] = useState("");
  function getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition)
    }else{
      alert("Sorry! your browser is not supporting");
    }
  }

 function showPosition(position){

      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var lat_s = lat.toString();
      var lon_s = lon.toString();
      setslat(lat_s);
      setslon(lon_s);
      console.log(s_lat);
    console.log(s_lon);
  }

  const genID=async(e)=>{
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await Project.methods.getArr().estimateGas();
    const resultg = await  Project.methods.getArr().send({
      from :account,
      gas
    })
    const geId = await Project.methods.getArr().call();
    console.log(geId);
    console.log(resultg);
    setid(geId);
  }


  const handleset=async(e)=>{
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await Project.methods.setValue(id,p_name,p_man,p_exp,s_lat,s_lon,s_name).estimateGas();
    const result = await  Project.methods.setValue(id,p_name,p_man,p_exp,s_lat,s_lon,s_name).send({
      from :account,
      gas
    })
    console.log(result);

    const ide = id.toString();

    try{
      const resp = await axios.post('http://localhost:5000/users/post',{
        ide,
        type,
        count,
        proddesc,
      },);
      console.log(resp);
    }catch(error){
      console.log(error);
    }

    //handleShow();

    //window.location('/get');
  }
  return (
    <div id="bg">

		<Navbar handleLogout={handleLogout} name={name} />


		<div className="main1">
			<div className="topHeadin">
				<h1>Post Product Details</h1>
				<h2>Lots Of Midway Info Now Collectible</h2>
			</div>

			<div className="formArea">
				<div className="topImg"><img src={Trader} alt=""/></div>
				<div className="formfields">
					<form onSubmit={handleset}>
          <button type="button" onClick={genID}>Generate Unique ID.</button>
						<input type="text" id="sname" name="sName" value={s_name} onChange={e=>setsname(e.target.value)} placeholder="Supplier Name"/>
						<input type="text" id="pname" name="sName" value={p_name} onChange={e=>setpname(e.target.value)} placeholder="Product Name"/>
						<div className="inRow">
              <div className="oi">
                  <div>
                    <label>Manufacturing Date</label>
                  </div>
                  <input type="date" id="mdate" name="sName" value={p_man} onChange={e=>setpman(e.target.value)} placeholder="Manufacturing Date"/>
              </div>
              <div className="oi">
                  <div>
                    <label>Expiry Date</label>
                  </div>
                  <input type="date" id="exdate" name="sName" value={p_exp} onChange={e=>setpexp(e.target.value)} placeholder="Expirey Date"/>
              </div>
						</div>
						<input type="text" id="feedbcak" name="sName" value={feed} onChange={e=>setFeed(e.target.value)} placeholder="Feedback Link"/>
						<div class="inRow">
							<input type="text" id="type" name="sName" value={type} onChange={e=>setType(e.target.value)} placeholder="Type"/>
							<input type="Number" id="count" name="sName" value={count} onChange={e=>setCount(e.target.value)} placeholder="Count"/>
						</div>
						<input type="text" id="desc" name="sName" value={proddesc} onChange={e=>setProdesc(e.target.value)} placeholder="Product Description"/>
						<button onClick={getLocation}>Get Location</button>
						<button type="submit" value="submit">Submit</button>
					</form>
				</div>
			</div>

			<div className="topHeading qrhead">
				<h1>Scan/Download QR Code</h1>
			</div>

			<div className="qrFrame">
				<div className="qrcode"><QRCode value={id.toString()}  id="qrc"/></div>
        <a onClick={ ()=>{
                const canvas = document.getElementById('qrc');
                const pngUrl = canvas
                  .toDataURL("image/png")
                  .replace("image/png","image/octet-stream");
              let downloadLink = document.createElement("a");
              downloadLink.href = pngUrl;
              downloadLink.download = "om.png";
              document.body.appendChild(downloadLink);
              downloadLink.click();
              document.body.removeChild(downloadLink);
              } }><div className="dwnPNG">
              <img src={Down} alt=""/>
              <p>PNG</p>
            </div> </a>
			</div>
		</div>


		<div className="foot"></div>
	</div>
  );
}

export default Post;
