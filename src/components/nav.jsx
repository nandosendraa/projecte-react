import React from 'react'

export default function Nav() {
  return (
    <div className="container-fluid bg-dark pt-xxl-3 pb-xxl-3">
    <div className="row text-center">
        <div className="col-2">
            <div>
                <a className="text-decoration-none text-white fw-bold" href="index.html">HOME</a>
            </div>
        </div>
        <div className="col-2">
            <div>
                <a className="text-decoration-none text-white fw-bold" href="reparacions.html">REPARACIONS</a>
            </div>
        </div>
        <div className="col-2">
            <div>
                <a className="text-decoration-none text-white fw-bold" href="tenda.html">TENDA</a>
            </div>
        </div>
        <div className="col-2">
            <div>
                <a className="text-decoration-none text-white fw-bold" href="quisom.html">QUI SOM?</a>
            </div>
        </div>
        <div className="col-2">
            <div>
                <a className="text-decoration-none text-white fw-bold" href="valoracions.html">VALORACIONS</a>
            </div>
        </div>
        <div className="col-2">
            <div>
                <a className="text-decoration-none text-white fw-bold" href="contacte.html">CONTACTE</a>
            </div>
        </div>
    </div>
</div>
  )
}