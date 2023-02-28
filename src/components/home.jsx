import React from 'react';
import '../css/index.css';
import { importAll } from './images';
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default function Home() {

  return (
    <main>
        <div className="container inicio">
            <div className="row">
                <div className="col-2 flecha">
                    <img src={images['flecha-izquierda.png']} alt="reparacion1" />
                </div>
                <div className="col-8">
                    <img className='w-100' src={images['imagen_reparacion_1.jpg']} alt="reparacion1" />
                </div>
                <div className="col-2 flecha">
                    <img src={images['flecha-correcta.png']} alt="reparacion1" />
                </div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-img">
                    <p>Nuestros clientes son los que nos permiten crecer, mejorar y
                        seguir progresando para que el servicio que te ofrecemos sea de calidad.
                    </p>
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="col-12 text-img">
                    <a className='boto' href='/services'>Mes Serveis</a>
                </div>
            </div>
        </div>
        
    </main>
  )
}