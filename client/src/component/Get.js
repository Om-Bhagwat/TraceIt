/* eslint-disable no-undef */
import React,{useState} from 'react';
import Web3 from 'web3';
import {projectAbi} from '../Abis';
import QrcodeDecoder from 'qrcode-decoder';
import axios from 'axios';
import Datapoints from '../component/Bchain/DataPoints.svg';
import '../css_component/get.css';

import '../css_component/get.css';
import Navbar from './Navbar';

const web3 = new Web3(Web3.givenProvider);

const contractAddr = '0xf9534A0F4b9803E600c36519FE0f8350CEA473E0';
const Project = new web3.eth.Contract(projectAbi,contractAddr);

const Get=(props)=>{

    const{handleLogout,name,email} = props

    const [id,setid] = useState(0);
    const [p_name,setpname] = useState("");
    const [p_man,setpman] = useState("");
    const [p_exp,setpexp] = useState("");
    const [s_lat,setslat] = useState("");
    const [s_lon,setslon] = useState("");
    const [s_name,setsname] = useState("");
    const[tr_id,setTrId]=useState(0);
    const [t_name,settname]=useState("");
    const[t_lat,settlat] = useState("");
    const[t_lon,settlon]=useState("");
    const[t_add,settradd] = useState("");
    const[t_feed,setfeed] = useState("");
    const[t_comp,setcomp] = useState("");
    const[head,sethead]=useState("");
    const[err,seterr]=useState("");
    const[companyid,setNewID] = useState("");
    const[canAdd,setCanAdd] = useState(false);
    const[comment,setcomm] = useState("");
    const[leng,setLen] = useState(0);
    const[items,setItems] = useState([]);
    const[edi,setEdi] = useState("");

    function previewImage(e){
        var reader = new FileReader();
        reader.onload = function(){
            //var output = document.getElementById('output_image');
            //output.src=reader.result;
            var qr = new QrcodeDecoder();
            qr.decodeFromImage(reader.result).then((res) => {
                setNewID(res.data);
                console.log(res.data);
                let ae = res.data;
                setEdi(ae);
                setid(ae[0]);
                setTrId(ae[2]);
                //console.log(ae[2]);
            });
        }

        // var compId = newID;
        // var ans1 ="";
        // var ans2 = "";
        /*for(let i =0;i<compId.length;i++){
            if(compId[i]!=="+"){
                ans1.concat(compId[i]);
            }
            else{
                for(let j = i;j<compId.length;j++){
                    ans2.concat(compId[j]);
                }
                break;
            }
        }*/
        // setTrId(ans2);
        // setid(ans1);
        // console.log(newID);
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleGet=async(e)=>{
        e.preventDefault();
            const result_id = await Project.methods.getId(id).call();
            const result_p_name = await Project.methods.getPname(id).call();
            const result_p_man = await Project.methods.getPman(id).call();
            const result_p_exp = await Project.methods.getPexp(id).call();
            const result_s_lat = await Project.methods.getSlat(id).call();
            const result_s_lon = await Project.methods.getSlon(id).call();
            const result_s_name = await Project.methods.getSname(id).call();
            setid(result_id);
            setpname(result_p_name);
            setpman(result_p_man);
            setpexp(result_p_exp);
            setslat(result_s_lat);
            setslon(result_s_lon);
            setsname(result_s_name);
            console.log(result_id);
            console.log(result_p_name);
            console.log(result_p_man);
            console.log(result_p_exp);
            console.log(result_s_lat);
            console.log(result_s_lon);
            console.log(result_s_name);
            const travel_name = await Project.methods.getMultiname(id,tr_id).call();
                const travel_lon = await Project.methods.getMultilon(id,tr_id).call();
                const travel_lat = await Project.methods.getMultilat(id,tr_id).call();
                const travel_add = await Project.methods.getMultitraddress(id,tr_id).call();
                const travel_feed = await Project.methods.getMultifeed(id,tr_id).call();
                const travel_comp = await Project.methods.getMulticomp(id,tr_id).call();

                sethead("Transport info");
                settname(travel_name);
                settlon(travel_lon);
                settlat(travel_lat);
                setcomp(travel_comp)
                setfeed(travel_feed)
                settradd(travel_add);

                setCanAdd(true);
                try{
                    const comres = await axios.post('http://localhost:5000/users/getcomment',{
                        companyid,
                    },);
                    console.log(comres);
                    var allCom = comres.data.comment1.length;
                    setLen(allCom);
                    setItems(comres.data.comment1);

                    console.log(allCom);
                }catch(error){
                    console.log(error);
                }

                try{
                    const prod = await axios.post('http://localhost:5000/users/update',{
                        id,
                    },);

                    console.log(prod);
                }catch(error){
                    console.log(error);
                }

                try{
                    const tran = await axios.post('http://localhost:5000/users/update',{
                        edi,
                    },);
                    console.log(tran);
                }catch(error){
                    console.log(error);
                }
    }

    const comm = async(e)=>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(comment);
        console.log(companyid);
        try{
            const response = await axios.post('http://localhost:5000/users/addcomment',{
                email,
                name,
                comment,
                companyid, 
            },);
            

            console.log(response);
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div id="bg">

            <Navbar handleLogout={handleLogout} name={name}/>

            <div className="m">
                <div className="topH">
                    <h1>Get Product Details</h1>
                    <h2>Buy Products With Trust, Transparency & Tracebility</h2>
                </div>

                <div className="topImg"><img src={Datapoints} alt=""/></div>
                
                <div class="uploadQR">
                        <form onSubmit={handleGet}>
                                <label for="ok">
                                    <input type="file" accept="image/*" onChange={previewImage} name="file" id="ok"/>
                                            <p>
                                                Choose&nbsp;File
                                            </p>
                                    </label>
                                    <button>Upload&nbsp;QR</button>
                        </form>
                </div>


                {canAdd?(
                        <div>
                            <div className="details">
                                <h2>Product Details</h2>
                                <div className="dataSets">
                                    <div className="set">
                                        <h3>Supplier Name</h3>
                                        <p>{s_name}</p>
                                    </div>
                                    <div className="set">
                                        <h3>Product Name</h3>
                                        <p>{p_name}</p>
                                    </div>
                                    <div className="inRow">
                                        <div className="set">
                                            <h3>Manufacturing Date</h3>
                                            <p>{p_man}</p>
                                        </div>
                                        <div className="set">
                                            <h3>Expirey Date</h3>
                                            <p>{p_exp}</p>
                                        </div>
                                    </div>
                                    <div className="set">
                                        <h3>Feedback Link</h3>
                                        <p>www.something.com</p>
                                    </div>
                                    <div className="inRow">
                                        <div className="set">
                                            <h3>Type</h3>
                                            <p>Buiscuit</p>
                                        </div>
                                        <div className="set">
                                            <h3>Count</h3>
                                            <p>100000</p>
                                        </div>
                                    </div>
                                    <div className="set">
                                        <h3>Product Description</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae consequatur quisquam molestias earum unde odio et. Obcaecati nihil facilis reiciendis ab ea, suscipit, iste illo quidem, tempore veritatis quibusdam?</p>
                                    </div>
                            </div>
                            <div className="details">
                                <h2>Transport Details</h2>
                                <div className="dataSets">
                                    <div className="set">
                                        <h3>Transport&nbsp;Company</h3>
                                        <p>{t_name}</p>
                                    </div>
                                    <div className="set">
                                        <h3>Transport&nbsp;Address</h3>
                                        <p>{t_add}</p>
                                    </div>
                            <div className="set">
                                <h3>FeedBack&nbsp;At</h3>
                                <p>{t_feed}</p>
                            </div>
                            <div className="set">
                                <h3>Compliants&nbsp;At</h3>
                                <p>{t_comp}</p>
                            </div>
                        </div>
                    </div>
                    <div className="locationMap">

                    </div>

                    <div className="cmntDiv">
                    <h2>Comment Section</h2>
                    {items.map((item) => (
                                    <div class="cmntBox">
                                        <h3 key={item.id} class="name">
                                            User:{item.name}
                                        </h3>
                                        <h4 key={item.id} class="comment">
                                            Review:{item.comment}
                                        </h4>
                                    </div>
                                    
                        ))}
                    <div class="addcmnt">
                        <form className="tr" onSubmit={comm}>
                            <textarea name="commentBox" id="commentbox" cols="100%" rows="5"></textarea>
                            <button value="submit">Add&nbsp;Comment</button>
                        </form>
                    </div>
            </div>

                </div>    
            </div>
                    ):(
                        <div></div>
                    )}
            </div>


            <div className="foot"></div>
	</div>
    );
}

export default Get;