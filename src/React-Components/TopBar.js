import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

function Navbar(props){

    if(props.dropdown === true){
    console.log("check",props.check) 

    var checkfun = props.check 

    if(props.check === undefined)
    {
        checkfun = (username)=>{
            
            if(!username)
            {
                return false
            }
            return true 
        }
    }

    const username = window.localStorage.getItem("login-amazon") 

    var displaytext = "Welcome , Please Sign In"

    var logedinornot = false 
    console.log("u",username)
    console.log("chefun",checkfun(username))
    if(username !== null && checkfun(username))
    {
        logedinornot = true 
        displaytext = "Welcome ," + window.localStorage.getItem('fname-amazon') + " "+window.localStorage.getItem('lname-amazon')
    }

    var mytext = "Sign In"
    var mylink = "/auth"
    if(logedinornot === true)
    {
        mytext = "Sign Out"
        mylink = "/"
    }

    props.dropdownoptions.push({"name":mytext,"href":mylink})

    var chars = []

    props.dropdownoptions.forEach((e)=>{
        if(!chars.includes(e))
        {
            chars.push(e)
        }
    })

}
    const navigate = useNavigate()
    const [tag,setTag] = useState("") 
    
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'darkblue'}}>
            <div className="container-fluid" style={{color:'white'}}>
                {/*Title Part Of The Tab Requires Passing An Argument  */}
                <a className="navbar-brand" href="/" style={{color:'white'}}>{props.title === null ? "": props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/" style={{color:'white'}}>Home</a>
                        </li>
                        
                        {props.dropdown === true ? <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
                                {displaytext}
                            </a>
                            <ul className="dropdown-menu">
                                {chars.map((e)=>{
                                    if(e.name === "Sign Out") 
                                    {
                                        return(
                                            <li><a className="dropdown-item" href={e.href} key={e.name} onClick={()=>{
                                                window.localStorage.removeItem("login-amazon")
                                                window.localStorage.removeItem("password-amazon")
                                            }} >{e.name}</a></li>
                                        )
                                        
                                    }
                                    return(
                                        <li><a className="dropdown-item" href={e.href} key={e.name} >{e.name}</a></li>
                                    )
                                })}
                            </ul>
                        </li>:""}

                    </ul>

                    {props.searchbar === true ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searched" value={tag} onChange={(e)=>{setTag(e.target.value)}}/>
                        {console.log(tag)} 
                        <button className="btn btn-outline-warning" style={{width:'35%'}} onClick={(e)=>{e.preventDefault();navigate("/search",{state:{tagid:tag}})}}>{props.searchtitle}</button>
                    </form> : ""}
                </div>
            </div>
        </nav>
    )
}

export default Navbar 