import React, { useState, useEffect } from 'react'
import '../css/reparacions.css';
import { importAll } from './images';
import { Button, Modal } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


export default function Reparacions() {
    let boto = '';
    const [reparaciones, setReparaciones] = useState([]);
    const [rol, setRol] = useState('');
    const [user,setUser] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [id, setId] = useState(localStorage.getItem('userId'));
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [typeModal, setTypeModal] = useState('insertar');

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
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const reparationsSchema = Yup.object().shape({
        name: Yup.string().min(4, 'Massa curt').max(80, 'Massa llarg').required('Camp obligatori'),
        status: Yup.string().min(4, 'Massa curt').max(80, 'Massa llarg').required('Camp obligatori'),
        description: Yup.string().min(4, 'Massa curt').max(80, 'Massa llarg').required('Camp obligatori'),
        date: Yup.date().required('Camp obligatori'),

    })

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
        console.log(data);
        setReparaciones(data['hydra:member'])

    }
    

    useEffect(() => {
        obtenerUsuario()
    }, [])

    const formik = useFormik({
        initialValues: { name: '', status: '', description: '', date: ''},
        validationSchema: reparationsSchema,
        onSubmit: (values) => {
            console.log(values);
            if (typeModal === 'Alta') {
                createReparation();
            }
            else {
                updateReparation()
            }
            handleClose();
        }
    });

    const inicializeModal=(type,item)=>{
        setTypeModal(type);
        if(type==='Alta'){
            formik.values.name='';
            formik.values.status='';
            formik.values.description='';
            formik.values.date='';
        }else{
            formik.values.id=item.id
            formik.values.name=item.name;
            formik.values.status=item.status;
            formik.values.description=item.description;
            formik.values.date=item.date;
        }
        handleShow();
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
       fetch('http://api/api/reparations/'+id, {
              method: 'DELETE',
              headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            })
              .then((response) => response.json())
              .then((data) => {
                reparaciones.splice(ind,1);
                setReparaciones([...reparaciones])
                console.log(data);
              })
              .catch(error=>{
                console.error('Error:', error);
              })

    }

    const createReparation = () => {
        console.log(formik)
        const body = {
            name: formik.values.name,
            description: formik.values.description,
            date: formik.values.date,
            status: formik.values.status
        }

        fetch('http://api/api/reparations', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formik.values),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setReparaciones([...reparaciones, data.resultado]); // Guarda en la array (al modificarse se renderiza automáticamente en local)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const updateReparation = () => {
        console.log(formik)
        const body = {
            name: formik.values.name,
            description: formik.values.description,
            date: formik.values.date,
            status: formik.values.status
        }

        fetch('http://api/api/reparations/'+formik.values.id, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formik.values),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setReparaciones([...reparaciones, data.resultado]); // Guarda en la array (al modificarse se renderiza automáticamente en local)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>REPARACIONS</h2>
                </div>
            </div>
            {rol==='admin'?<Button onClick={()=> inicializeModal("Alta")} className='btn btn-info'>NOVA REPARACIÓ</Button>:""}
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
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{typeModal} Reparacio</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <label htmlFor='name'>Nom</label>
                                <input type="text" className="form-control" name="name" placeholder="Nom" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} required />
                                {formik.touched.name && formik.errors.name ? (<div className='text-danger'>{formik.errors.name}</div>) : null}
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor='description'>Descripcio</label>
                                        <input type="text" className="form-control" name="description" placeholder="Descripcio" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} required />
                                        {formik.touched.description && formik.errors.description ? (<div className='text-danger'>{formik.errors.description}</div>) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor='date'>Data</label>
                                        <input type="date" className="form-control" name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} value={new Date(formik.values.date)} required />
                                        {formik.touched.date && formik.errors.date ? (<div className='text-danger'>{formik.errors.date}</div>) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor='status'>Estat</label>
                                        <select type="text" className="form-control" name="status" placeholder="Estat" onChange={formik.handleChange} onBlur={formik.handleBlur} required >
                                            <option value='EN REPARACIO'>EN REPARACIO</option>
                                            <option value='EN REPARACIO'>EN DIAGNOSTIC</option>
                                            <option value='EN REPARACIO'>LLEST PER A ARREPLEGAR</option>
                                            <option value='EN REPARACIO'>ENTREGAT</option>
                                        </select>
                                        {formik.touched.status && formik.errors.status ? (<div className='text-danger'>{formik.errors.status}</div>) : null}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose()}>Close</Button>
                        <Button type='submit' variant="primary" onClick={formik.handleSubmit}>{typeModal === 'Alta' ? 'Añadir reparacio' : 'Actualizar reparacio'}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
    </main>
    
)
}