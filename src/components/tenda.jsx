import React from 'react';
import { importAll } from './images';
import '../css/tenda.css';
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default function Tenda() {
    return (
        <main>
        <div class="container">
            <div class="row fila">
                <div class="col-12 cercador">
                    <input type="text" placeholder=" INTRODUEIX NOM DE ARTICLE"/>
                </div>
            </div>
            <div class="row" >
                <div class="col-2" ></div>
                <div class="col-8 cesta"hidden>
                    <h3 class="titolCist">CISTELLA</h3>
                    <hr/>
                    <div class="article">
                        <img src="img/portatil.jpg" alt=""/>
                        <p class="titolArticle">LOREM IPSUM <button class="borrar">ELIMINAR</button></p>
                        <p class="preuCist">499,99€</p>
                    </div>
                    <hr/>
                    <div class="article">
                        <img src="img/portatil.jpg" alt=""/>
                        <p class="titolArticle">LOREM IPSUM <button class="borrar">ELIMINAR</button></p>
                        <p class="preuCist">499,99€</p>
                    </div>
                    <hr />
                    <p class="total">TOTAL: 999,98€</p>
                    <button class="reservar">RESERVAR PRODUCTES</button>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row">
                <div class="col-3 producte">
                    <img src="img/portatil.jpg" alt="portatil"/>
                    <p class="descripcio">Portatil Lenovo i5 8GB RAM 500GB SSD</p>
                    <p class="preu">699,99 €</p>
                    <button type="button">AFEGIR CISTELLA</button>
                </div>
                <div class="col-1"></div>
                <div class="col-3 producte">
                    <img src="img/redmi-note11.jpg" alt="portatil"/>
                    <p class="descripcio">Redmi Note 11 Color Blau 6GB RAM 128GB ROM</p>
                    <p class="preu">249,99 €</p>
                    <button type="button">AFEGIR CISTELLA</button>
                </div>
                <div class="col-1"></div>
                <div class="col-3 producte">
                    <img src="img/iphone14.jpg" alt="portatil"/>
                    <p class="descripcio">Iphone 14 Pro Max Color Morat 1TB ROM</p>
                    <p class="preu">1999,99 €</p>
                    <button type="button">AFEGIR CISTELLA</button>
                </div>
            </div>
            <div class="row">
                <div class="col-3 producte">
                    <img src="img/pc-gaming.jpg" alt="portatil"/>
                    <p class="descripcio">PC Gaming 1TB M.2 i7 32GB Nvidia 3080TI</p>
                    <p class="preu">1499,99 €</p>
                    <button type="button">AFEGIR CISTELLA</button>
                </div>
                <div class="col-1"></div>
                <div class="col-3 producte">
                    <img src="img/asus-gaming.jpg" alt="portatil"/>
                    <p class="descripcio">Portatil Gaming Asus 1TB M.2 i5 16GB Nvidia 2080TI</p>
                    <p class="preu">899,99 €</p>
                    <button type="button">AFEGIR CISTELLA</button>
                </div>
                <div class="col-1"></div>
                <div class="col-3 producte">
                    <img src="img/samsung-note20.jpg" alt="portatil"/>
                    <p class="descripcio">Samsung Note 20 Ultra 256GB ROM 12GB RAM</p>
                    <p class="preu">899,99 €</p>
                    <button type="button">AFEGIR CISTELLA</button>
                </div>
            </div>
            <div class="row">
                <div class="col-3 producte">
                    <img src="img/iphone13.jpg" alt="portatil"/>
                    <p class="descripcio">Iphone 13 Pro Max Color Verd 512GB ROM</p>
                    <p class="preu">849,99 €</p>
                    <button type="button">AFEGIR CISTELLA</button>
                </div>
                <div class="col-1"></div>
                <div class="col-3 producte">
                    <img src="img/hp.jpg" alt="portatil" />
                    <p class="descripcio">Portatil HP i3 8GB RAM 500GB SSD</p>
                    <p class="preu">499,99 €</p>
                    <button type="button">AFEGIR CISTELLA</button>
                </div>
                <div class="col-1"></div>
                <div class="col-3 producte">
                    <img src="img/tablet-lenovo.jpg" alt="portatil" />
                    <p class="descripcio">Lenovo Tab M10 Color Gris 4GB RAM 64GB ROM</p>
                    <p class="preu">179,99 €</p>
                    <button type="button">AFEGIR CISTELLA</button>
                </div>
            </div>
        </div>
        <div class="container ">
            <div class="row paginador">
                <div class="col-3"></div>
                <div class="col-1 flecha-dreta"><img src="img/flecha-izquierda.png" alt="esquerre" /></div>
                <div class="col-4"><p><span>1</span> 2 3 4</p></div>
                <div class="col-1 flecha-esquerre"><img src="img/flecha-correcta.png" alt="esquerre" /></div>
                <div class="col-3"></div>
            </div>
        </div>
    </main>
    )
}