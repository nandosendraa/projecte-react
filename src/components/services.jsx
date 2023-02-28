import { Container, Row, Col } from 'react-bootstrap';
import '../css/serveis.css';

export default function Services() {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <h2>SERVEIS</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="servei">
            <div>
              <h3>COPIES DE SEGURETAT</h3>
              <img src="img/copia.jpg" alt="copia" />
              <p>
                Inverteix en prevenció i evita la pèrdua dinformació vital per al
                teu negoci. T'ajudem en les teves còpies de seguretat perquè mai
                no perdes res.
              </p>
            </div>
          </Col>
          <Col md={6} className="servei">
            <div>
              <h3>REPARACIÓ DE MÓVILS</h3>
              <img src="img/reparacions-movils.jpg" alt="copia" />
              <p>
                Pantalla trencada? No arranca? Siga el que siga el problema en
                Sunsioneta busquem la millor solució per al telèfon mòbil.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="servei">
            <div>
              <h3>CONSUMIBLES</h3>
              <img src="img/consumibles.jpg" alt="copia" />
              <p>
                Tinta i tòner per a la teva impressora, paper, material d'oficina…
                tot en consumibles per al teu dia a dia.
              </p>
            </div>
          </Col>
          <Col md={6} className="servei">
            <div>
              <h3>VENTA I REPARACIÓ</h3>
              <img src="img/imagen_reparacion_1.jpg" alt="copia" />
              <p>
                No importa quin problema tingua el teu equip que trobarem la solució.
                I si busques un equip nou també el tenim per a tu.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="container-fluid degradat">
        <Row>
          <Col>
            <h3>MANTENIMENT A EMPRESES</h3>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col md={6}>
            <img src="img/reparacio.jpg" alt="" />
          </Col>
          <Col md={6}>
            <p>
              Ara no t'hauràs de preocupar de res. Nosaltres ens encarreguem de tot
              el manteniment de les xarxes de la teva empresa perquè tot funcione
              com cal.
            </p>
            <h4>ENCARA NO TENS CONTER DE EMPRESA?</h4>
            <button>REGISTRAT</button>
          </Col>
        </Row>
      </div>
    </main>
  );
}
