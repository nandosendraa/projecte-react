import React from 'react'
export default function Header() {

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 logo">
                    <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
                </div>
                <div class="col-8 titol">
                    <img src="img/titol.png" alt="titol" />
                </div>
                <div class="col-2">
                    <div>
                        <img class="menu" src="img/menu.png" alt="menu" />
                        <a class="usuario" href="login.html"><img src="img/usuario-de-perfil.png" alt="usuario" /></a>
                    </div>

                </div>
            </div>
        </div>
    )
}