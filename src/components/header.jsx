import React, { useState } from 'react'
import '../css/header-footer-bootstrap.css';
import { importAll } from './images';
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
  
export default function Header() {
    const [token] = useState(localStorage.getItem('token'));
    
    return (
        
        <div className="container-fluid pt-xxl-3 pb-xxl-4 morat">
            <div className="row">
                <div className="col-xxl-2 logo">
                    <div className="pt-xxl-2 ps-xxl-5">
                        <a href="/"><img src={images['logo.png']} alt="logo" /></a>
                    </div>
                </div>
                <div className="col-xxl-8 titol">
                    <div className="text-center">
                        <img src={images['titol.png']} alt="titol" />
                    </div>
                </div>
                <div className="col-xxl-2">
                    <div className="ps-xxl-5 ms-xxl-5">
                        <img className="menu d-xxl-none" src={images['menu.png']} alt="menu" />
                        {token?<a className="usuario" href="logout">LOGOUT</a>:<a className="usuario" href="login">LOGIN</a>}
                        {token?'':<a className="usuario" href="register">REGISTER</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}