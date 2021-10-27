/* Libraries */
import React, { useState } from "react";
import api from "../../services/api";
/* CSS */
import './index.css'


const AlterarAmigo = () => {
    const [values, setValues] = useState({
        name: '',
        divida: ''
    })

    const handleInputChange = e => setValues({ ...values, [e.target.name]: e.target.value })
    const handleChangeAmigoClick = e => {
        api.put(`/amigos/${values.name}`, {
            divida: values.divida
        }).then(response => {
            console.log(response)
            // Implementar atualização do estado do React para pegar os novos valores
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='put-amigo-container'>
            <div className="title-btn-container">
                <input
                    onChange={handleInputChange}
                    value={values.name}
                    className="nome-input"
                    name='name'
                    type="text"
                    placeholder='Nome do caloteiro'
                />
                <div>
                    <button
                        onClick={handleChangeAmigoClick}
                        className='add-amigo-button'
                    >Alterar Divida</button>
                </div>
            </div>
            <div className='description-container'>
                <input
                    name='divida'
                    className='divida-input'
                    value={values.divida}
                    type='text'
                    placeholder='Divida Atualizada'
                    onChange={handleInputChange}
                ></input>
            </div>
        </div>
    );
}

export default AlterarAmigo;