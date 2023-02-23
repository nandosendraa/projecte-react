import React from 'react'

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const loginSchema = Yup.object().shape({
        user: Yup.string().required('Camp obligatori'),
        password: Yup.string().min(4,'Contrasenya masa curta').max(20,'Contrasenya masa llarga').required('Camp obligatori')
    })

    const navigate = useNavigate();

    const formiknando = useFormik({
        initialValues: {user:'', password:''},
        
        onSubmit: (values) =>{
          const data ={
            "username": values.user,
            "password": values.password
        }
          fetch('http://api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              localStorage.setItem('token',data.token);
              navigate('/');
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        },
        validationSchema: loginSchema 
        })
    

  return (
    <div className='contanier-fluid'>
            <h1>Login</h1>
            <form onSubmit={formiknando.handleSubmit}>
                <div className="form-group">
                    <label htmlFor='user'>Usuari</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="user" 
                    value={formiknando.values.user}
                    onChange={formiknando.handleChange}
                    onBlur={formiknando.handleBlur}
                    placeholder="Introduir usuari" />
                    {formiknando.touched.user && formiknando.errors.user ?
                    (<div className='text-danger'>{formiknando.errors.user}</div>): null}
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="password">Contrasenya</label>
                            <input 
                            type="password" 
                            className="form-control" 
                            name="password" 
                            value={formiknando.values.password}
                            onChange={formiknando.handleChange}
                            onBlur={formiknando.handleBlur}
                            placeholder="Contrasenya" />
                            {formiknando.touched.password && formiknando.errors.password ?
                            (<div className='text-danger'>{formiknando.errors.password}</div>): null}
                        </div>
                    </div>
                </div>
                <button type="submit" id="enviar" className="mt-2 btn btn-primary">Accedir</button>
            </form>
        </div>
  )
}
