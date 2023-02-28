import React from 'react';
import { importAll } from './images';
import { useNavigate } from "react-router-dom";
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default function Logout() {
    const navigate = useNavigate();
    const tancar = () => {
        localStorage.clear()
        navigate('/')
    }
    const reparations = () => {
        navigate('/reparacions')
    }
    return (
        <div>
            <h1>Vols tancar la sessio?</h1>
            <button className='btn btn-danger' onClick={()=> tancar()}>SI</button>
            <button className='btn btn-primary' onClick={()=> reparations()}>NO</button>
        </div>
    )
}