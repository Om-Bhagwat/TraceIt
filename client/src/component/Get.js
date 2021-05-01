import React,{useState} from 'react';
import Web3 from 'web3';
import {projectAbi} from '../Abis';
import QrcodeDecoder from 'qrcode-decoder';

const web3 = new Web3(Web3.givenProvider);

const contractAddr = '0xf9534A0F4b9803E600c36519FE0f8350CEA473E0';
const Project = new web3.eth.Contract(projectAbi,contractAddr);

function Get(){

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
    const[head_tr,setheadtr]=useState("");
    const[trad_name,settrname]=useState("");
    const[trad_lat,settrlat]=useState("");
    const[trad_lon,settrlon]=useState("");
    const[err,seterr]=useState("");
    const[newID,setNewID] = useState("");


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

               
    }

    return(
        <div>
            <input type="file" accept="image/*" onChange={previewImage} name="file" id = "ok" />
            <form onSubmit={handleGet}>
                <input type="number" value={id} onChange={e=>setid(e.target.value)} placeholder="enter the ID" />
                <input type="number" value={tr_id} onChange={e=>setTrId(e.target.value)} placeholder="Enter Transport ID"/>
                <input type="submit" value="submit" placeholder="submit" />
            </form>

            <h2>Details are</h2>
            <div>{err}</div><br></br>
            <div>{p_name}</div><br></br>
            <div>{p_man}</div><br></br>
            <div>{p_exp}</div><br></br>
            <div>{s_lat}</div><br></br>
            <div>{s_lon}</div><br></br>
            <div>{s_name}</div><br></br>
            <div>{head}</div><br></br>
            <div>{t_name}</div><br></br>
            <div>{t_lon}</div><br></br>
            <div>{t_lat}</div><br></br>
            <div>{t_add}</div>
            <div>{t_feed}</div>
            <div>{t_comp}</div>
            <div>{head_tr}</div><br></br>
            <div>{trad_name}</div><br></br>
            <div>{trad_lat}</div><br></br>
            <div>{trad_lon}</div><br></br>
        </div>
    );
}

export default Get;