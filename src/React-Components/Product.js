import React from "react"
import { app} from "../Data/firebase-info"
import '../Styles/img.css'
import { getDatabase, ref,push , get, child , remove } from "firebase/database";

function ProductCard(props){


    const submit = (e)=>{

        var emailID = window.localStorage.getItem("login-amazon") 

        if(!emailID)
        {
            alert("To Add To Cart, Please Sign In With Your Account")
            return 
        }

        var tikname = emailID.replace("@","") 

        tikname = tikname.replace(".","") 
        // Now add to the database
        var db = getDatabase(app) 

        console.log(emailID)
        console.log(e) 
        const reference = ref(db,'/cart/' + tikname+ '/')
        var list = [{
            emailID:emailID,
            productid:e,
        }]
        
        push(reference,list) 

    }

    const order = (e)=>{
        const output = window.confirm("Are you sure you want to place your order? Your Order will be placed by the system...")
        
        if(output === false)
        {
            return 
        }
        if(props.whom === "App")
        {
            var emailID = window.localStorage.getItem("login-amazon") 

        if(!emailID)
        {
            alert("To Add To Cart, Please Sign In With Your Account")
            return 
        }

        var tikname = emailID.replace("@","") 

        tikname = tikname.replace(".","") 
        // Now add to the database
        var db = getDatabase(app) 

        console.log(emailID)
        console.log(e) 
        const reference = ref(db,'/order/' + tikname+ '/')
        var list = [{
            emailID:emailID,
            productid:e,
        }]
        
        push(reference,list) 
        }
        else if(props.whom === "Cart")
        {
            var reference = ref(getDatabase(app))

    get(child(child(reference,'cart/' + tikname + "/"),'/')).then(
       
      (snapshot)=>{
        console.log("snapshot",snapshot) 
        snapshot.forEach((element)=>{
          console.log("Element",element) 
          var [mylol] = element.val()
          console.log("mylol: ",mylol)
          console.log("e : ",e) 
          if(mylol.productid === e)
          {
            var list = [{
                emailID:emailID,
                productid:e,
            }]
            push(ref(db,'/order/' + tikname+ '/'),list) 

            remove('cart/'+tikname+'/'+element.key)
          }
        })
    })
    }
}

    return(
        <div className="card mx-2 my-2" style={{width: "18rem"}}>
            <img src={props.details.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.details.title}</h5>
                <p className="card-text">{props.details.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                {console.log(props.details.manufactured, props.details.retailer)}
                {/* <li className="list-group-item">Manufactured By : {props.details.manufactured}</li> */}
                <li className="list-group-item">Sold By : {props.details.retailer}</li>
                <li className="list-group-item">Price : &#8377; {props.details.price}</li>
                { props.addtocart === true ?
                <button type="button" className="btn btn-outline-primary" onClick={()=>{submit(props.details.itemcode)}} >Add To Cart</button>
: ""}
                { props.addtoorder === true ?
                <button type="button" className="btn btn-outline-success my-3" onClick={()=>{order(props.details.itemcode)}} >Place My Order</button>
: ""}
            </ul>
        </div>
    )
}


export default ProductCard