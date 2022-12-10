import React  from "react"


const ContactApplet = (props)=>{

    return(
        <div className="container">
        <h4>{props.description}</h4>
        {props.contactno.map(
            (element)=>{
                return <p className="lead" key={element} style={{fontSize:'30px'}}>{element}</p>
            }
        )}
        </div>
    )
}

export default ContactApplet