import React, { useState } from "react"

import Navbar from "../React-Components/TopBar"

import { useNavigate } from "react-router-dom"

import { signInWithEmailAndPassword } from "firebase/auth"
import { app, auth } from "../Data/firebase-info"
import { getDatabase, ref,get , child} from "firebase/database"


const LoginPage = ()=>{

    const navigate = useNavigate() 

    const [emailID,setIDMail] = useState(window.localStorage.getItem("login-amazon") === null ? "":window.localStorage.getItem("login-amazon"))
    const [password,setPassword] = useState("") 
    

    const check = (username,password)=>{
        signInWithEmailAndPassword(auth,username,password).then(()=>{
            // Take entered username as the database entry 
            var takename = emailID.replace("@","")
            takename = takename.replace(".","") 
            const reference = ref(getDatabase(app)) 
            
            window.localStorage.setItem("login-amazon",emailID)
            get(child(reference,'/user/'+takename+'/')).then(
                (snapshot)=>{
                    snapshot.forEach((element)=>{
                        var [mylol] = element.val() 
                        window.localStorage.setItem("fname-amazon",mylol.First) 
                        window.localStorage.setItem("lname-amazon",mylol.Last) 
                    })
                    
                    navigate('/')
                    window.location.reload() 
                }
            ).catch((err)=>{
                console.log("error : ",err) 
            })

            navigate('/')
        }).catch((err)=>{
            console.log("error : ",err) 
            alert("Login Failed") 
        })

    }
    const submit = (e)=>{
        e.preventDefault() 
        check(emailID,password) 
        
    }
    return(
        <div className="container" onSubmit = {submit}>
        <Navbar title="Login To Page" searchbar={false} dropdown={false} />
        <form className="card p-3 bg-light my-3" style={{justifyContent:'center'}}>
            
            <h3 style={{textAlign:'center'}}>Login To The Page</h3>

            <div className="input-group mb-3 my-5">
                <span className="input-group-text" id="email">Your Email ID :</span>
                <input type="text" className="form-control" placeholder="example@abc.com" aria-label="Username" aria-describedby="basic-addon1" value={emailID} onChange={(e)=>setIDMail(e.target.value)}/>
                {console.log(emailID)} 
            </div>
            <div className="form-floating my-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder=" Your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                {console.log(password)}
                <label htmlFor="floatingPassword">Enter Your Password Here</label>
            </div>
            <button type="submit" className="btn btn-outline-info">Submit</button>
        </form>
        <div className="container my-3">
            <p>New To This Page ? Create an account <a href="/signup">here</a></p>
        </div>
        </div>
    )
}

export default LoginPage 