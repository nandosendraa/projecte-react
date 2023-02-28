import React, { useState, useEffect } from 'react'
import '../css/reparacions.css';
//import { importAll } from './images';
import { Button, Modal } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
//const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


export default function Reparacions() {
    const [reparaciones, setReparaciones] = useState([]);
    const [rol, setRol] = useState('');
    const [token] = useState(localStorage.getItem('token'));
    const [id] = useState(localStorage.getItem('userId'));
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [typeModal, setTypeModal] = useState('insertar');

    const obtenerUsuario = async function () {
        if (token == null) {
            navigate('/login');
        }
        const response = await fetch('https://api.09fernando.daw.iesevalorpego.es/api/users/' + id, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        usuarios();
        obtenerReparaciones(data);

    }
    const usuarios = async function () {
        if (token == null) {
            navigate('/login');
        }
        const response = await fetch('https://api.09fernando.daw.iesevalorpego.es/api/users', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();

    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const reparationsSchema = Yup.object().shape({
        name: Yup.string().min(4, 'Massa curt').max(80, 'Massa llarg').required('Camp obligatori'),
        status: Yup.string().min(4, 'Massa curt').max(80, 'Massa llarg').required('Camp obligatori'),
        description: Yup.string().min(4, 'Massa curt').max(200, 'Massa llarg').required('Camp obligatori'),
        date: Yup.date().required('Camp obligatori'),
        owner: Yup.string().required('Camp'),
        reparator: Yup.string().required('sdjghsd')

    })

    const totesReparacions = async function () {
        if (token == null) {
            navigate('/login');
        }
        const response = await fetch('https://api.09fernando.daw.iesevalorpego.es/api/reparations', {
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
        initialValues: { name: '', status: '', description: '', date: new Date(),owner:14,reparator:16},
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
            formik.values.owner='';
            formik.values.reparator='';
        }else{
            formik.values.id=item.id
            formik.values.name=item.name;
            formik.values.status=item.status;
            formik.values.description=item.description;
            formik.values.owner=item.owner;
            formik.values.reparator=item.reparator;
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
       fetch('https://api.09fernando.daw.iesevalorpego.es/api/reparations/'+id, {
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
            status: formik.values.status,
            owner:'/api/users/'+formik.values.owner,
            reparator:'/api/users/'+formik.values.owner
        }

        fetch('https://api.09fernando.daw.iesevalorpego.es/api/reparations', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setReparaciones([...reparaciones, data]); // Guarda en la array (al modificarse se renderiza automáticamente en local)
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
            status: formik.values.status,
            owner:'/api/users/'+formik.values.owner,
            reparator:'/api/users/'+formik.values.owner
        }

        fetch('https://api.09fernando.daw.iesevalorpego.es/api/reparations/'+formik.values.id, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setReparaciones([...reparaciones, data]); // Guarda en la array (al modificarse se renderiza automáticamente en local)
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
                <div key={ind} className="container">
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
                                        <input type="date" className="form-control" name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date} required />
                                        {formik.touched.date && formik.errors.date ? (<div className='text-danger'>{formik.errors.date}</div>) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor='status'>Estat</label>
                                        <select type="text" className="form-control" name="status" placeholder="Estat" onChange={formik.handleChange} onBlur={formik.handleBlur} required >
                                            <option selected>ELEGEIX UN ESTAT</option>
                                            <option value='EN REPARACIO'>EN REPARACIO</option>
                                            <option value='EN DIAGNOSTIC'>EN DIAGNOSTIC</option>
                                            <option value='LLEST PER A ARREPLEGAR'>LLEST PER A ARREPLEGAR</option>
                                            <option value='ENTREGAT'>ENTREGAT</option>
                                        </select>
                                        {formik.touched.status && formik.errors.status ? (<div className='text-danger'>{formik.errors.status}</div>) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor='owner'>Usuari</label>
                                        <select type="text" className="form-control" name="owner" placeholder="Estat" onChange={formik.handleChange} onBlur={formik.handleBlur} required >
                                            <option selected>ELEGEIX UN USUARI</option>
                                            <option value='14'>USUARI 1</option>
                                            <option value='15'>USUARI 2</option>
                                        </select>
                                        {formik.touched.owner && formik.errors.owner ? (<div className='text-danger'>{formik.errors.owner}</div>) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor='reparator'>Treballador</label>
                                        <select type="text" className="form-control" name="reparator" placeholder="Estat" onChange={formik.handleChange} onBlur={formik.handleBlur} required >
                                            <option selected>ELEGEIX UN TREBALLADOR</option>
                                            <option value='16'>TREBALLADOR 1</option>
                                            <option value='17'>TREBALLADOR 2</option>
                                        </select>
                                        {formik.touched.reparator && formik.errors.reparator ? (<div className='text-danger'>{formik.errors.reparator}</div>) : null}
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