/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import Web3 from 'web3';
import QrcodeDecoder from 'qrcode-decoder';
import {projectAbi} from '../Abis';
import Down from '../component/Bchain/download-icon.svg';
import Transport from '../component/Bchain/transport.svg';
import Navbar from './Navbar';
import '../css_component/tranport.css';

const QRCode = require('qrcode.react');
const web3 = new Web3(Web3.givenProvider);

const contractAddr = '0xf9534A0F4b9803E600c36519FE0f8350CEA473E0';
const Project = new web3.eth.Contract(projectAbi,contractAddr);

const UpdateTravel=(props)=>{

    const{handleLogout,name}=props

    const[err,seterr]=useState("");
    const[id,setid]=useState(0);
    const[t_name,settname]=useState("");
    const[t_lat,settlat]=useState("");
    const[t_lon,settlon]=useState("");
    const[tr_id,setTrId]=useState(0);
    const[add,setadd]=useState("");
    const[feed,setfeed] = useState("");
    const[comp,setcomp] = useState("");
    const[result,setresult] = useState('');
    const[compID,setCompId] = useState("");
    const[typeo,setTypeo] = useState("");
    const [count,setCount] = useState(0);
    const[startdate,setStart] = useState("");
    const[endDate,setEndDate] = useState("");

    function previewImage(e){
        var reader = new FileReader();
        reader.onload = function(){
            //var output = document.getElementById('output_image');
            //output.src=reader.result;
            var qr = new QrcodeDecoder();
            qr.decodeFromImage(reader.result).then((res) => {
                setid(res.data);
            });
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    
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
          settlat(lat_s);
          settlon(lon_s);
      }

        const genUnId=async(e)=>{
            e.preventDefault();
            const accounts = await window.ethereum.enable();
            const account = accounts[0];
            const gas = await Project.methods.getTran().estimateGas();
                const result = await  Project.methods.getTran().send({
                    from :account,
                    gas
            })

            console.log(result);
            const trId = await Project.methods.getTran().call();
            console.log(trId);
            setTrId(trId);

        }

        const travelSet=async(e)=>{
            e.preventDefault();
                const accounts = await window.ethereum.enable();
                const account = accounts[0];

                //genrate unique tranport id=>_id; 

                let res1 = id.concat("+");
                let res2 = res1.concat(tr_id.toString());

                setCompId(res2);
                console.log(compID);               

                const gas = await Project.methods.updateMulTranVal(id,tr_id,t_name,t_lat,t_lon,add,feed,comp).estimateGas();
                const result = await  Project.methods.updateMulTranVal(id,tr_id,t_name,t_lat,t_lon,add,feed,comp).send({
                    from :account,
                    gas
                })
            console.log(result);
                seterr("");
               // window.location("/")
        }

        console.log(result);
        return(
            <div id="bg">

            <Navbar handleLogout={handleLogout} name={name} />
    
    
            <div className="ma">
                <div className="topHeadi">
                    <h1>Update Transports Details</h1>
                    <h2>Lots Of Midway Info Now Collectible</h2>
                </div>
    
                <div className="formArea">
                    <div className="topImg"><img src={Transport} alt=""/></div>
                    <div className="formfields">
                    <input type="file" accept="image/*" onChange={previewImage} name="file" id = "ok" />
                        <form onSubmit={travelSet}>
                        <button type="button" onClick={genUnId}>Generate Unique Transport ID.</button>
                            <input type="text" id="sname" name="sName" value={t_name} onChange={e=>settname(e.target.value)} placeholder="Transporter Name"/>
                            <input type="text" id="pname" name="sName" value={add} onChange={e=>setadd(e.target.value)} placeholder="Address"/>
                            <div className="inRow">
                                <span>Start Date</span>
                                <input type="date" id="mdate" name="sName" value={startdate} onChange={e=>setStart(e.target.value)}   placeholder="Start date"/>
                                <span>Expected Delivery</span>
                                <input type="date" id="mdate" name="sName" value={endDate} onChange={e=>setEndDate(e.target.value)}  placeholder="Expected date"/>
                            </div>
                            <input type="text" id="feedbcak" name="sName" value={feed} onChange={e=>setfeed(e.target.value)} placeholder="Feedback Link"/>
                            <input type="text" id="feedbcak" name="sName" value={comp} onChange={e=>setcomp(e.target.value)} placeholder="Compliants Link"/>
                            <div className="inRow">
                                <input type="text" id="type" name="sName" value={typeo} onChange={e=>setTypeo(e.target.value)}  placeholder="Type"/>
                                <input type="text" id="count" name="sName" value={count} onChange={e=>setCount(e.target.value)}  placeholder="Count"/>
                            </div>
                            <button type="button" onClick={getLocation}>Get Location.</button>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
    
                <div className="topHeading qrhead">
                    <h1>Scan/Download QR Code</h1>
                </div>
    
                <div className="qrFrame">
                    <div className="qrcode"><QRCode value={compID.toString()}  id="qrc"/></div>
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
                            </div> 
                        </a>
			    </div>
            </div>
    
    
            <div className="foot"></div>
        </div>
        );
}

export default UpdateTravel;