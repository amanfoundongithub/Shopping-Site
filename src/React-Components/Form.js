import React from "react"


const Form = (props)=>{
    return(
        <div class="container">
            <h3>{props.title}</h3>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"></span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}

export default Form 