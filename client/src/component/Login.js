import React,{useState} from 'react';
import axios from 'axios';
import '../css_component/login.css';

const Login =(props)=>{

    const {email, setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,sethasAccount,emailerr, passworderr,name,setName,usertype,setUserType,ispresent,setIspresent} = props

    const [addrtype, setAddrtype] = useState(["Consumer", "Production","Tranporter"]);
    // const [usertype, setUserType] = useState('Normal');

    const Add = addrtype.map(Add => Add)

    const handleAddrTypeChange = (e) => { 
        console.clear(); 
        console.log((addrtype[e.target.value])); 
        setUserType(addrtype[e.target.value]) 
    }

    const [correct,setCorrect] = useState(false);
    const regSub = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/users/register',{
                name,
                email,
                password,
                usertype
            },);

            console.log(response);
            setCorrect(true);
        }catch(error){
            console.log(error);
        }
    }



    const logSub = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/users/login',{
                email,
                password
            },);
            var n = response.data.user.name;
            var emaile = response.data.user.email;
            setEmail(emaile);
            setName(n)
            console.log(name);
            setCorrect(true);
        }catch(error){
            console.log(error);
        }
    }
    
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [err,setErr] = useState('');
    
    // const [correct,setCorrect] = useState(false);
    // const[nxtcrt,setNexcrt] = useState(false);

    // const loginSub = async(e)=>{

    //     e.preventDefault();


    //     try{

    //         const response = await axios.post('http://localhost:5000/users/login',{
    //             email,
    //             password,
    //         },
    //         );
    //         setCorrect(true);
    //         localStorage.setItem('token',response.data.token);
    //         console.log(response.data.token);
    //         console.log(response);
    //     }catch(error){
    //         console.log(error.response.data.message);
    //         console.log(error.response);
    //         setErr(error.response.data.message);
    //         setCorrect(false);
    //     }

    //     if(correct){
    //         const token = localStorage.getItem("token");
    //         try{

    //             const resp = await axios.post('http://localhost:5000/users/me',{},{
    //                 headers:{
    //                     "Access-Control-Allow-Origin" : "*",
    //                     "Content-type": "Application/json",
    //                     "Authorization": `Bearer ${token}`
    //                 }
    //             }
    //             );
    //             console.log("Successful");
    //             console.log(resp);
    //             nxtcrt(true);
    //         }catch(error){
    //             console.log(error);
    //             setNexcrt(false);
    //         }

    //         if(nxtcrt){
                
    //            // window.location.assign(`http://localhost:3000/${email}`);
    //         }
    //     }


    // }

    return(
        <div className="backgroundeimg">
            <div className="abs">
                <div className="login-form">
                    <div className="ae">
                            {hasAccount?(
                                <>
                                <form onSubmit={logSub}>
                                   <u><b><h3 style={{marginBottom:"15px"}} className="text-center">Sign In</h3></b></u>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Email" 
                                            required 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)}>
                                        </input>
                                        <p className="text-center" style={{color:"red"}}>{emailerr}</p>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="password" 
                                            placeholder="Password" 
                                            className="form-control" 
                                            required 
                                            value={password} 
                                            onChange={(e)=>setPassword(e.target.value)}>
                                        </input>
                                        <p className="text-center" style={{color:"red"}}>{passworderr}</p>
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-block" onClick={handleLogin}>Sign in</button>
                                    <br></br>
                                    <p className="text-center" style={{color:"#52734d"}}>Don't have a account? <span className="hg" style={{color:"blue"}} onClick={()=>sethasAccount(!hasAccount)}>Sign up</span></p>
                                    </div>
                                </form>
                                </>
                            ):(
                                <>
                                <form onSubmit={regSub}>
                                    <u><b><h3 style={{marginBottom:"15px"}} className="text-center">Sign Up</h3></b></u>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Name" 
                                            required 
                                            value={name} 
                                            onChange={(e)=>setName(e.target.value)}>
                                        </input>
                                        <p className="text-center" style={{color:"red"}}>{emailerr}</p>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Email" 
                                            required 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)}>
                                        </input>
                                        <p className="text-center" style={{color:"red"}}>{emailerr}</p>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="password" 
                                            placeholder="Password" 
                                            className="form-control" 
                                            required 
                                            value={password} 
                                            onChange={(e)=>setPassword(e.target.value)}>
                                        </input>
                                        <p className="text-center" style={{color:"red"}}>{passworderr}</p>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            onChange={e => handleAddrTypeChange(e)}
                                            className="browser-default custom-select" >
                                            {
                                                Add.map((address, key) => <option key={key} value={key}>{address} 
                                                </option>)
                                            }
                                        </select >
                                        <p className="text-center" style={{color:"red"}}>{passworderr}</p>
                                    </div>
                                    <div className="form-group">
                                    <button type="submit"  className="btn btn-block" onClick={handleSignup}>Sign up</button>
                                    <br></br>
                                    <p className="text-center" style={{color:"#52734d"}}>Have an account? <span className="hg" style={{color:"blue"}} onClick={()=>sethasAccount(!hasAccount)}>Sign in</span></p></div>
                                </form>
                                </>
                            )}         
                    </div> 
                </div>
            </div>
        </div>  
     
    );
}

export default Login;