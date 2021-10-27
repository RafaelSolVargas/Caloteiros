/* Libraries */
import React, { useState } from "react";
import api from "../../services/api";
/* CSS */
import './index.css'


const DeletarAmigo = () => {
    const [name, setName] = useState('')

    const handleInputChange = e => setName(e.target.value)
    const handleDeletarAmigoInput = e => {
        api.delete(`/amigos/${name}`).then(response => {
            console.log(response)
            // Implementar atualização do estado do React para pegar os novos valores
        }).catch(err => {
            if (err.response.message) return console.log(err.response.message)
            console.log(err.response)
        })
    }

    return (
        <div className='delete-amigo-container'>
            <div className="title-btn-container">
                <input
                    onChange={handleInputChange}
                    value={name}
                    className="nome-input"
                    name='name'
                    type="text"
                    placeholder='Nome do caloteiro perdoado'
                />
                <div>
                    <button
                        onClick={handleDeletarAmigoInput}
                        className='add-amigo-button'
                    >Perdoar um caloteiro</button>
                </div>
            </div>
        </div>
    );
}

export default DeletarAmigo;