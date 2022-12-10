import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { useNavigate} from "react-router-dom"
import { app, auth } from "../Data/firebase-info"
import Navbar from "../React-Components/TopBar"
import { getDatabase, ref,push} from "firebase/database"




const SignUp = ()=>{
    const navigate = useNavigate() 

    const [emailID,setIDMail] = useState(window.localStorage.getItem("login-amazon") === null ? "":window.localStorage.getItem("login-amazon"))
    const [password,setPassword] = useState(window.localStorage.getItem("password-amazon") === null ? "":window.localStorage.getItem("password-amazon")) 
    const [confirm,setConfirm] = useState("")
    const [fname,setfname] = useState("")
    const [lname,setlname] = useState("")
    const [gender,setGender] = useState("Male")  
    const [confirmedornot,setIt] = useState(false) 
    const [date,setDate] = useState(new Date()) 

    const check = (username,password)=>{
        createUserWithEmailAndPassword(auth,username,password).then(()=>{
            var tikname = emailID.replace("@","") 

        tikname = tikname.replace(".","") 
            const database = ref(getDatabase(app),'/user/'+tikname+"/")
            const data = [{
                Gender:gender,
                First:fname,
                Last:lname,
                DOB:date,
            }]

            push(database,data) 

            alert("Your Account Has Been Created Successfully\nYou can now go and Log In to the system") 
            navigate('/auth')
    }).catch((err)=>{
        console.log("An unexpected error occured while creating account.\nPlease try again!!!") 
    })

    }
    const submit = (e)=>{
        e.preventDefault()
        if(!lname || !fname)
        {
            alert("Please do not leave the name box empty!")
            return 
        } 
        if(password !== confirm)
        {
            alert("Password and Confirm Your Password does not match!\nPlease Try Again!!!\n") 
            return 
        }
        check(emailID,password,fname,lname) 
        
    }
    return(
        <div className="container" onSubmit = {submit}>
        <Navbar title="Login To Page" searchbar={false} dropdown={false} />
        <form className="card p-3 bg-light my-3" style={{justifyContent:'center'}}>
            
            <h3 style={{textAlign:'center'}}>Sign Up For The Page</h3>
            <div className="input-group my-3" >
  <span className="input-group-text">First and Last Name: </span>
  <input type="text" aria-label="First name" className="form-control" value={fname} onChange={(e)=>setfname(e.target.value)}/> 
  <input type="text" aria-label="Last name" className="form-control" value={lname} onChange={(e)=>setlname(e.target.value)}/>
</div>
<div className="input-group mb-3 my-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Your Gender: </label>
  <select className="form-select" id="inputGroupSelect01" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
    <option selected value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Transgender">Transgender</option>
    <option value="Rather not say">Rather not say</option>
    {console.log(gender)} 
  </select>
</div>
  <div className="form-floating my-3">
  <input type="date" className="date form-control" id="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
  <label htmlFor="date" >Enter Your Date Of Birth: </label>
  {console.log(date)} 
  </div>
            <div className="input-group mb-3 my-5">
                <span className="input-group-text" id="email">Enter Your Email ID: </span>
                <input type="text" className="form-control" placeholder="example@abc.com" aria-label="Username" aria-describedby="basic-addon1" value={emailID} onChange={(e)=>setIDMail(e.target.value)}/>
            </div>
            <div className="form-floating my-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
               
                <label htmlFor="floatingPassword">Enter Your Password Here</label>
            </div>
            <div className="form-floating my-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" value={confirm} onChange={(e)=>{setConfirm(e.target.value)}}/>
            
                <label htmlFor="floatingPassword">Confirm Your Password Here</label>
            </div>
            <div class="form-check my-3" >
  <input className="form-check-input" type="checkbox" value={confirmedornot} id="flexCheckDefault" onChange={(e)=>setIt(e.target.value)} />
  {console.log(confirmedornot)}
  <label className="form-check-label" htmlFor="flexCheckDefault">
    I agree to the terms and conditions of the Site
  </label>
</div>
            <button type="submit" className="btn btn-outline-info">Submit</button>
        </form>
        </div>
    )
}

export default SignUp 