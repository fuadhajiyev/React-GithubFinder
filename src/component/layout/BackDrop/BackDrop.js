import React from 'react';
import "./BackDrop.css"
// import {GoX} from 'react-icons/go'


const BackDrop =  (props) => {

        return (
            <div className="backdrop" onClick={props.backDropHandler}>
         
            </div>
        )
    
}

export default BackDrop