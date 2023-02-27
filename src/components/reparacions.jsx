import React, { useState, useEffect } from 'react'
import '../css/reparacions.css';
import { importAll } from './images';
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


export default function Reparacions() {
    let boto = '';
    const [reparaciones, setReparaciones] = useState([]);
    const [rol, setRol] = useState('');
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

    const totesReparacions = async function () {
        if (token == null) {
            navigate('/login');
        }
        const response = await fetch('http://api/api/reparations', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        setReparaciones(data['hydra:member'])

    }

    useEffect(() => {
        obtenerUsuario()
    }, [])

    const inicializeModal=(type,item)=>{
      /*  setTypeModal(type);
        if(type==='insertar'){
            formiknando.values.nombre='';
            formiknando.values.año_nacimiento=0;
        }else{
            formiknando.values._id= item._id
            formiknando.values.nombre=item.nombre;
            formiknando.values.año_nacimiento=item.año_nacimiento;
        }
        handleShow();*/
    }

    const obtenerReparaciones = (user) => {
        if (user.role === 'ROLE_USER') {
            setReparaciones([...user.reparations]);
            setRol('user')
        }
        else if (user.role === 'ROLE_WORKER') {
            setReparaciones([...user.repairs]);
            setRol('worker')
        }
        else{
            setRol('admin')
            totesReparacions();
        }
    }
    const handleDelete =(id,ind) =>{
        /*fetch('https://serverred.es/api/autores/'+id, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              }
            })
              .then((response) => response.json())
              .then((data) => {
                autores.splice(ind,1);
                setAutores([...autores])
                console.log(data);
              })
              .catch(error=>{
                console.error('Error:', error);
              })*/

    }


return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>REPARACIONS</h2>
                </div>
            </div>
            {rol==='admin'?<Button onClick={()=> inicializeModal("insertar")} className='btn btn-info'>NOVA REPARACIÓ</Button>:""}
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
                            {rol==='admin'?<p>Usuari: {item.owner.username}</p>:""}
                            {rol==='worker'||rol==='admin'?<Button onClick={()=> inicializeModal("editar",item)} className='btn btn-primary'>EDITAR</Button>:""}
                            {rol==='admin'?<Button onClick={()=> handleDelete(item.id,ind)} className='btn btn-danger'>ELIMINAR</Button>:""}
                        </div>
                    </div>
                </div>
            )
        })}
    </main>
)
}