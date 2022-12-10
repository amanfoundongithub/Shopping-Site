import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { app} from "../Data/firebase-info"
import Navbar from "../React-Components/TopBar"
import { getDatabase, ref,get , child} from "firebase/database";
import ProductCard from "../React-Components/Product";
import {products} from '../Data/products'


const MyCart = ()=>{
    
    const navigate = useNavigate() 

    const [newarr,setNewArr] = useState([])
    // Get username from local storage
    var username = window.localStorage.getItem("login-amazon") 
    

    // If not set, ask user to log in

    const dropdownoptions = [
        {
          "name":'Contact Us',
          "href":'/contact',
        },
        {
          "name":'Your Cart',
          "href":'/cart',
        },
        {
          "name":'Your Orders',
          "href":'/order',
        }
      ]
    
      const check = (username)=>{
        if(!username)
            {
                return false 
            }
            return true 
      }
    
      var emailID = username 
    if(emailID){
    var reference = ref(getDatabase(app))

    var items = []

    var tempa =[] 

    var tikname = emailID.replace("@","")

    tikname = tikname.replace(".","") 

    get(child(reference,'cart/' + tikname + "/")).then(
      (snapshot)=>{

        snapshot.forEach((element)=>{
          
          var [mylol] = element.val()
          items.push(mylol) 
        })



        var check = []

        for(const value of items.values())
        {
        for(const prod of products.values())
        {
           
          
          if(prod.itemcode === value.productid)
          {
            check.push(prod.itemcode)
            tempa.push({...prod,quantity:1}) 
          }
        
        }
      }

        var counts = {}
        for(const num of tempa)
        {
          counts[num] = counts[num] ? counts[num] + 1 : 1;
        }

        console.log("counts : ",counts) 

        if(newarr.length === 0)
        setNewArr(tempa)
      }
        
    
    )
    }

    // console.log("loda  :",newarr) 
    const dropdownname = 'Options' 
    if(!username || check(username) === false)
    {
        return(
            <div className="container" style={{justifyContent:'center',textAlign:'center'}}>
                <Navbar title="My Cart" searchbar={false} dropdown={true} dropdownoptions={dropdownoptions} dropdownname ={dropdownname} check={check}/>
                <p style={{textAlign:'center'}}>Sorry , you need to Sign In if you want to Check The Cart</p>
                <button type="button" className="btn btn-outline-primary" onClick={()=>navigate('/auth')} style={{textAlign:'center'}}>Sign In</button> 
                <br></br>
                <img src="https://cdn.dribbble.com/users/1812146/screenshots/6968881/media/6f0414445451d903e9d4ab56f85bc573.png?compress=1&resize=400x300" alt="Background"/>
            </div>
        )
    }
    else 
    {
        return(
            <div className="container">
                <Navbar title="My Cart" searchbar={false} dropdown={true} dropdownoptions={dropdownoptions} dropdownname ={dropdownname} addtocart = {false}/>
                <h1 style={{textAlign:'center'}}>Cart Of {username}</h1>
                <div className="row">
                {newarr.map((element)=>{
                  console.log("element in product card: ",element)
                  return <ProductCard details={element} addtoorder={true} whom={"Cart"}/> 
                })}
                </div>
            </div>
        )
    }

}
export default MyCart 