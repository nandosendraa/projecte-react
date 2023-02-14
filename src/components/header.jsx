import React from 'react'
export default function Header() {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 logo">
                    <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
                </div>
                <div className="col-8 titol">
                    <img src="img/titol.png" alt="titol" />
                </div>
                <div className="col-2">
                    <div>
                        <img className="menu" src="img/menu.png" alt="menu" />
                        <a className="usuario" href="login.html"><img src="img/usuario-de-perfil.png" alt="usuario" /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}