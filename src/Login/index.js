import React,{useState} from "react";
import "./style.css";

const Login =() =>{
const[Username,setUserName] =useState('');
console.log({Username});
const [password,setPassword] =useState('');
console.log({password});

const handleSubmit =async (e)=>{
e.preventDefault();

const data ={
    Username: Username,
    password: password
}

try{
    const response =await fetch('https://dummyjson.com/auth/login',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.strigify(data)
        }) 
        const result =await response.json();
        console.log({result});
    }
    catch(error){
        console.log(error.message)
    }

    return(
        <div>
        <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input placeholder="Enter Username" type="text" />
        onChange={(e)=>{setUserName(e.target.value)}}
        <br/>
        <br/>
        <input placeholder="Enter password"type="password"/>
        onChange={(e)=>{setPassword(e.target.value)}}
        <br/>
        <br/>
        <button>Login</button>
        </form>


        </div>
      
      )
    }
   
}
export default Login;
