import Navbar from "../React-Components/TopBar"
import React, { useState } from "react"
import { location,contactno,emailid } from "../Data/contact-info"
import SelectMenu from "../React-Components/SelectMenu"
import ContactApplet from "../React-Components/ContactApplet"

const Contact = ()=>{

    // State update ke liye
    const [call,setCall] = useState(true) 
    const [email,setEmail] = useState(false) 
    const [mail,setMail] = useState(false) 
    const list = [
        {
            "name":'Via Call',
            "active":call,
            },
        {
        "name":'Via Email',
        "active":email,
        },
    {
        "name":'Via Mail',
        "active":mail,
    }
    ]

    // Functions to update states when needed 
    const updateToCall = ()=>{
        setCall(true) 
        setEmail(false)
        setMail(false)
    }

    const updateToEmail = ()=>{
        setCall(false) 
        setEmail(true) 
        setMail(false)
    }

    const updateToMail = ()=>{
        setCall(false)
        setEmail(false)
        setMail(true)
    }

    // List of descriptions for each of the methods
    const mobdesc = "You can contact our Customer Care Team By Using Any Of The Following Contact Numbers: "
    const emaildesc= "You can contact us by using any of the following emailID(s) given below. Replies will\nbe given within 48 hours."
    const maildesc = "You can also send a Mail to us on the following address: "

    return(
        <div className="container">
            <Navbar title="Contact Us" searchbar={false} dropdown={false}/>
            <img src={"https://www.kindpng.com/picc/m/573-5738088_contact-us-png-free-commercial-use-images-graphic.png"} style={{width:"20%",height:"30%",alignContent:"center"}} alt="LOL"/>
            <h3 style={{textAlign:"center"}}>You Want To Contact Us?</h3>
            <p className="h4" style={{textAlign:"center"}}>Whether its Complaints (or Compliments), you can always contact using
            <br></br>the following methods:</p>

            {/*
            Contact by calling: Requires contact no
             */}
             <SelectMenu options={list} call={updateToCall} email={updateToEmail} mail={updateToMail}/> 
             {
                call === true ? <ContactApplet contactno={contactno} description={mobdesc}/>:""
             }
             {
                email === true ? <ContactApplet contactno={emailid} description={emaildesc} />:""
             }
             {
                mail === true ? <ContactApplet contactno={location} description={maildesc}/>:""
             }
        </div>
    )
}

export default Contact 