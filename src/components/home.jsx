import React from 'react'

export default function Home() {
  return (
    <main>
        <div class="container inicio">
            <div class="row">
                <div class="col-2 flecha">
                    <img src="img/flecha-izquierda.png" alt="reparacion1" />
                </div>
                <div class="col-8">
                    <img src="img/imagen_reparacion_1.jpg" alt="reparacion1" />
                </div>
                <div class="col-2 flecha">
                    <img src="img/flecha-correcta.png" alt="reparacion1" />
                </div>
            </div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6 text-img">
                    <p>Nuestros clientes son los que nos permiten crecer, mejorar y
                        seguir progresando para que el servicio que te ofrecemos sea de calidad.
                    </p>
                </div>
                <div class="col-3"></div>
            </div>
            <div class="row">
                <div class="col-12 text-img">
                    <button type="button" onclick="location.href ='serveis.html'">Mes Serveis</button>
                </div>
            </div>
        </div>
        <div class="container-fluid telefonia">
            <div class="row">
                <div class="col-12"><h2>TARIFES DE TELEFONIA</h2></div>
            </div>
            <div class="row">
               <div class="col-2"></div>
               <div class="col-2 cercle"><div><h3>24,99€/mes</h3><h3>500GB</h3><h3>3 linees</h3></div></div>
               <div class="col-2"></div>
               <div class="col-2"></div>
               <div class="col-2 cercle"><div><h3>14,99€/mes</h3><h3>200GB</h3><h3>2 linees</h3></div></div>
               <div class="col-2"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-2"><a href="">INFORMACIO SOBRE LA TARIFA</a></div>
                <div class="col-2"></div>
                <div class="col-2"></div>
                <div class="col-2"><a href="">INFORMACIO SOBRE LA TARIFA</a></div>
                <div class="col-2"></div>
             </div>
             <div class="row">
                <div class="col-2"></div>
                <div class="col-2 cercle"><div><h3>19,99€/mes</h3><h3>500GB</h3><h3>2 linees</h3></div></div>
                <div class="col-2"></div>
                <div class="col-2"></div>
                <div class="col-2 cercle"><div><h3>34,99€/mes</h3><h3>1000GB</h3><h3>4 linees</h3></div></div>
                <div class="col-2"></div>
             </div>
             <div class="row">
                <div class="col-2"></div>
                <div class="col-2"><a href="">INFORMACIO SOBRE LA TARIFA</a></div>
                <div class="col-2"></div>
                <div class="col-2"></div>
                <div class="col-2"><a href="">INFORMACIO SOBRE LA TARIFA</a></div>
                <div class="col-2"></div>
             </div>                     
            <div class="row">
                <div class="col-12">
                    <button type="button" onclick="location.href ='tarifes.html'">Mes Informacio</button>
                </div>
            </div>
        </div>
        <div class="container ofertes">
            <div class="row">
                <div class="col-12"><h2>OFERTES</h2></div>
            </div>
            <div class="row">
                <div class="col-5">
                    <h3>OFERTA MES RECOMANADA</h3>
                    <a href="oferta.html"><img src="img/oferta_recomana.jpg" alt="recomana" /></a>
                    <p>ANTES : 299€ <span>ARA : 219€</span></p>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <h3>OFERTA TOP</h3>
                    <a href="oferta.html"><img src="img/oferta_top.jpg" alt="recomana" /></a>
                    <p>ANTES : 79€ <span>ARA : 54€</span></p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button type="button" onclick="location.href ='ofertes.html'">Mes Ofertes</button>
                </div>
            </div>
        </div>
    </main>
  )
}