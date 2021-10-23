/* Libraries */
import React, { useState } from "react";
import api from "../../services/api";
/* CSS */
import './index.css'


const AddAmigo = () => {
    const [values, setValues] = useState({
        name: '',
        divida: ''
    })

    const handleInputChange = e => setValues({ ...values, [e.target.name]: e.target.value })
    const handleAddAmigoInput = e => {
        api.post('/amigos', values).then(response => {
            console.log(response)
            // Implementar atualização do estado do React para pegar os novos valores
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='add-amigo-container'>
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
                        onClick={handleAddAmigoInput}
                        className='add-amigo-button'
                    >Adicionar um caloteiro</button>
                </div>
            </div>
            <div className='description-container'>
                <input
                    name='divida'
                    className='divida-input'
                    value={values.divida}
                    type='text'
                    placeholder='Quanto ele te deve'
                    onChange={handleInputChange}
                ></input>
            </div>
        </div>
    );
}

export default AddAmigo;