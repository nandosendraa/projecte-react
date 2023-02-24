import React, { useState, useEffect } from 'react'
import '../css/reparacions.css';
import { importAll } from './images';
import { useNavigate } from "react-router-dom";
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


export default function Reparacions() {
    const [reparaciones, setReparaciones] = useState([]);
    const [fecha, setFecha] = useState([]);
    const [estat, setEstat] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [id, setId] = useState(localStorage.getItem('userId'));
    const navigate = useNavigate()

    const obtenerUsuario = async function () {
        if (token == null) {
            navigate('/login');
        }
        const response = await fetch('http://api/api/users/' + id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        obtenerReparaciones(data);

    }

    useEffect(() => {
        obtenerUsuario()
    }, [])

    const obtenerReparaciones = (user) => {
        if (user.role === 'ROLE_USER') {
            setReparaciones([...user.reparations]);
        }
        else if (user.role === 'ROLE_WORKER') {
            setReparaciones([...user.repairs]);
        }
    }


return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>REPARACIONS</h2>
                </div>
            </div>
        </div>
        <div className="container">
        </div>
        {reparaciones.map((item, ind) => {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-6 titol-rep">
                            <h3>REPARACIO {ind + 1}</h3>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                    <div className="row fila">
                        <div className="col-6 descripcio">
                            <p>{item.description}
                            </p>
                        </div>
                        <div className="col-6 detalls">
                            <p><label>PRODUCTE:</label> {item.name}</p>
                            <p className="reparacio"><label>ESTAT: </label> {item.status}</p>
                            <p><label>FECHA PREVISTA:</label> {item.date}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </main>
)
}