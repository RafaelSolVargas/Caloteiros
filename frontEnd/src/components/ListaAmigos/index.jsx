import { useEffect, useState } from 'react';
import api from '../../services/api';
import Amigo from '../Amigo';
import './index.css'

const ListaAmigos = () => {
    const [loaded, setLoaded] = useState(false)
    const [amigos, setAmigos] = useState([])

    useEffect(() => {
        api.get('/amigos').then(response => {
            if (response.data.message) return
            setLoaded(true)
            setAmigos(response.data)
        }).catch(err => {
            if (err.response.message) return console.log(err.response.message)
        })
    }, [])


    return (
        <div className='lista-amigos'>
            <>
                {loaded ?
                    <>
                        {amigos.map(amigo =>
                            <Amigo
                                key={amigo._id}
                                amigo={amigo}
                            />)}
                    </>
                    :
                    null}
            </>
        </div>
    );
}

export default ListaAmigos;