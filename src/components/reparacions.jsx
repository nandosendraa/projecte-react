import React, { useState, useEffect } from 'react'
import '../css/reparacions.css';
import { importAll } from './images';
import { useNavigate } from "react-router-dom";
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


export default function Reparacions() {
    const [reparaciones, setReparaciones] = useState([]);
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [id, setId] = useState(localStorage.getItem('userId'));
    const navigate = useNavigate()

    const obtenerUsuario  = () => {
        if(token == null){
            navigate('/login');
        }
        fetch('http://api/api/users/'+id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+token,
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(data => {
                setUser(data);
                obtenerReparaciones();
            })
    }
    useEffect(() => {
        obtenerUsuario();
    }, [])

    const obtenerReparaciones = () => {
        if (user.role == 'ROLE_USER'){
            console.log(user.reparations);
        }
        else if (user.role == 'ROLE_WORKER'){
            console.log(user.repairs);
        }
    }

    return (
        <main>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>REPARACIONS </h2>
                </div>    
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 cercador">
                    <input type="text" placeholder=" INTRODUEIX NOM O NUMERO DE REPARACIÓ" />
                </div>    
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-6 titol-rep">
                    <h3>REPARACIO 1</h3>
                </div>
                <div className="col-6">
                </div>
            </div>
            <div className="row fila">
                <div className="col-6 descripcio">
                    <p>El dispositiu presenta colps en la pantalla,
                        hi ha que procedir a cambiar-la. 
                    </p>
                </div>
                <div className="col-6 detalls">
                    <p><label>PRODUCTE :</label> PORTATIL LENOVO</p>
                    <p className="reparacio"><label>ESTAT :</label> EN REPARACIÓ</p>
                    <p><label>FECHA PREVISTA :</label> 26/01/2023</p>
                </div>
            </div>
        </div>
    </main>
    )
}