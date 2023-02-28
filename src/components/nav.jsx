import React from 'react'

export default function Nav() {
  return (
    <div className="container-fluid bg-dark pt-xxl-3 pb-xxl-3">
    <div className="row text-center">
        <div className="col-2">
            <div>
                <a className="text-decoration-none text-white fw-bold" href="/">HOME</a>
            </div>
        </div>
        <div className="col-2">
            <div>
                <a className="text-decoration-none text-white fw-bold" href="reparacions">REPARACIONS</a>
            </div>
        </div>
        <div className="col-2">
            <div>
                <a className="text-decoration-none text-white fw-bold" href="tenda">TENDA</a>
            </div>
        </div>
    </div>
</div>
  )
}