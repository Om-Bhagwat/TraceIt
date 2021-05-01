import React,{useState} from 'react';
import axios from 'axios';

function Register(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [correct,setCorrect] = useState(true);

    const [addrtype, setAddrtype] = useState(["Consumer", "Production","Tranporter"])

    const [usertype, setUserType] = useState('Normal')
    
    const [err,setErr] = useState('');

    const Add = addrtype.map(Add => Add)

    const regsub = async(e)=>{

        e.preventDefault();


        try{

            const response = await axios.post('http://localhost:5000/users/register',{
                name,
                email,
                password,
                usertype,
            },
            );
            console.log(response);
        }catch(error){
            console.log(error.response.data.message);
            setErr(error.response.data.message);
            setCorrect(false);
        }

        if(correct){
            window.location.assign("http://localhost:3000/users/login");
        }


    }

    const handleAddrTypeChange = (e) => { 
        console.clear(); 
        console.log((addrtype[e.target.value])); 
        setUserType(addrtype[e.target.value]) 
          }

    return(
        <div>
            This is RegisterPage.
            <form onSubmit={regsub}>
                <input type="text" onChange={e=>setName(e.target.value)} value={name} placeholder="name" required/>
                <input type="email" onChange={e=>setEmail(e.target.value)} value={email} placeholder="email" required />
                <input type="password" onChange={e=>setPassword(e.target.value)} value={password} placeholder="password" required />
                < select
                    onChange={e => handleAddrTypeChange(e)}
                    className="browser-default custom-select" >
                    {
                        Add.map((address, key) => <option key={key} value={key}>{address} 
                        </option>)
                    }
                </select >
                <input type="submit" value="submit"/>
                <div>{err}</div>
            </form>
        </div>
    );
}

export default Register;