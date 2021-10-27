/* Libraries */
import React from "react";
/* CSS */
import './index.css'

const Amigo = ({ amigo }) => {
    return (
        <div className='friend-container'>
            <h1 className='friend-name'>{amigo.name && amigo.name}</h1>
            <h1 className='friend-divida'>R$ {amigo.divida && amigo.divida}</h1>
        </div >
    )
}

export default Amigo;