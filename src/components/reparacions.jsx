import React, { useState, useEffect } from 'react'
import '../css/reparacions.css';
import { importAll } from './images';
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default function Reparacions() {
    const [reparaciones, setReparaciones] = useState([]);

    const obtenerReparaciones = () => {
        fetch('http://api/api/reparations')
            .then(response => response.json())
            .then(data => {
                console.log(data["hydra:member"]);
                //setReparaciones(data.resultado);
            })
    }
    useEffect(() => {
        obtenerReparaciones();
    }, [])
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