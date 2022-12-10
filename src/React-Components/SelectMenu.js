import React from "react"


const SelectMenu = (props)=>{

    return(
        <ul className="nav nav-tabs">
            {props.options.map(
                (e)=>{
                    return(
                        e.active === false ?
                        (<li className="nav-item">
                            {e.name === "Via Mail"? <a className="nav-link" onClick={props.mail} >{e.name}</a>:
                            e.name === "Via Email"? <a className="nav-link" onClick={props.email} >{e.name}</a>:
                            e.name === "Via Call"? <a className="nav-link" onClick={props.call} >{e.name}</a>:
                            ""}
                        </li>):(
                            <li className="nav-item">
                            {e.name === "Via Mail"? <a className="nav-link active" onClick={props.mail} >{e.name}</a>:
                            e.name === "Via Email"? <a className="nav-link active" onClick={props.email} >{e.name}</a>:
                            e.name === "Via Call"? <a className="nav-link active" onClick={props.call} >{e.name}</a>:
                            ""}
                        </li>
                        )
                    )
                }
            )}
        </ul>

    )
}

export default SelectMenu 