import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 esquerre">
                    <h3>SUNSIONETA INFORMATICA</h3>
                    <div className="flex">
                        <img src="img/llamada-telefonica.png" alt="telefono" /> <h3>666777888</h3>
                    </div>
                    <div className="flex">
                        <img src="img/ubicacion.png" alt="ubicacion" /> <h3>AVD, BLASCO IBAÑEZ 1, PEGO (ALACANT)</h3>
                    </div>
                </div>
                <div className="col-6 dreta">
                    <img src="img/logo-gran.png" alt="logo-gran" />
                    <div className="social">
                        <a href="https://instagram.com"><img src="img/instagram.png" alt="instagram" /></a>
                        <a href="https://twitter.com"><img src="img/twitter.png" alt="twitter" /></a>
                        <a href="https://facebook.com"><img src="img/facebook.png" alt="facebook" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}