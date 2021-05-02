/* eslint-disable default-case */
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './component/Homepage';
import Login from './component/Login.js';
import Get from './component/Get.js';
import Post from './component/Post';
import UpdateTravel from './component/UpdateTravel';
import fire from './Firebase/fire.js';
function App() {

  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailerr,setEmailErr] = useState('');
  const [passworderr, setPasswordErr] = useState('');
  const [hasAccount,sethasAccount]=useState(false);
  const [name,setName] = useState('');
  const [usertype, setUserType] = useState('Consumer');
  const [ispresent,setIspresent] = useState(false);

  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }

  const clearErrors=()=>{
    setEmailErr('');
    setPasswordErr('');
  }

  const handleLogin=()=>{
    clearErrors();
      fire.auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err)=>{
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailErr(err.message);
              break;

            case "auth/wrong-password":
              setPasswordErr(err.message);
              break; 
          }
      });

  }

  const handleSignup=()=>{
    clearErrors();
    fire.auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err)=>{
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailErr(err.message);
              break;

            case "auth/weak-password":
              setPasswordErr(err.message);
              break; 
          }
      });
  }

  const handleLogout=()=>{
    fire.auth().signOut();
  }

  const authListener=()=>{
    fire.auth().onAuthStateChanged(user=>{
        if(user){
          clearInputs();
          setUser(user);
        }else{
          setUser("");
        }
    })
  }

  useEffect(()=>{
    authListener();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
    {user?(
         <Router>
              <Route path="/" exact render={(props)=>(
                <Homepage {...props} handleLogout={handleLogout} name={name}/>
              )} />
              <Route path="/post" exact render={(props)=>(
                <Post {...props} handleLogout={handleLogout}  name={name}/>
              )} />
              <Route path="/get" exact render={(props)=>(
                <Get {...props} handleLogout={handleLogout}  name={name}  email={email}/>
              )}/>
              <Route path="/get/travel" exact render={(props)=>(
                <UpdateTravel {...props} handleLogout={handleLogout}  name={name}/>
              )}/>
        </Router>
    ):(
      <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin} 
      handleSignup={handleSignup} 
      hasAccount={hasAccount}
      sethasAccount={sethasAccount}
      emailerr={emailerr}
      passworderr={passworderr}
      name={name}
      setName={setName}
      usertype={usertype}
      setUserType={setUserType}
      ispresent={ispresent}
      setIspresent={setIspresent}
      />
    )}
  </div>
  );
}


export default App;
