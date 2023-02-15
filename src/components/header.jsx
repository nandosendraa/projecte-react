import React from 'react';
import '../css/header-footer.css';
import { importAll } from './images';
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));
  
export default function Header() {
    
    return (
        
        <div className="container-fluid pt-xxl-3 pb-xxl-4 morat">
            <div className="row">
                <div className="col-xxl-2 logo">
                    <div className="pt-xxl-2 ps-xxl-5">
                        <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
                    </div>
                </div>
                <div className="col-xxl-8 titol">
                    <div className="text-center">
                        <img src={images['titol.png']} alt="titol" />
                    </div>
                </div>
                <div className="col-xxl-2">
                    <div className="ps-xxl-5 ms-xxl-5">
                        <img className="menu d-xxl-none" src="img/menu.png" alt="menu" />
                        <a className="usuario" href="login.html"><img src="img/usuario-de-perfil.png" alt="usuario" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}