import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import lq from '../assets/img/lq.png';
import lqApp from '../assets/img/lqapp.png';
import digitalWallet from '../assets/img/digitalWallet.jpg';


import { Container, Row, Col, Image } from 'react-bootstrap';

function LqApp() {
  return (
    <div className='App'>
      <Container style={{ marginTop: '10%' }}>
        <Col xs={12} md={6} xl={5}>
          <Row style={{ alignItems: 'center' }}>
            <Col>
              <Image src={lq} style={{ width: '10rem', height: '10rem' }} />
            </Col>
            <Col>
              <h2>Digital Wallet</h2>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} xl={12} style={{ margin: '2% 0%' }}>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            blandit diam, a tincidunt nunc. Mauris eu sagittis felis. Sed
            scelerisque massa eu ante mattis, et malesuada enim vehicula. Etiam
            porttitor rhoncus erat, ut feugiat odio consectetur in. Donec nibh
            arcu, elementum vitae purus sit amet, maximus sollicitudin justo.
            Suspendisse vulputate placerat pellentesque. In hac habitasse platea
            dictumst. Phasellus fermentum tellus et dui dictum convallis.
            Phasellus lacinia, ligula vitae sodales pellentesque, felis libero
            venenatis ligula, in mattis ante ligula id magna. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </h5>
         
        </Col>
        <Col  >
        <Image
            className='rounded'
            src={digitalWallet}
            style={{
              width: '100%',
              marginBottom: '1rem',
              marginTop: '1rem',
            }}
          />
       
        </Col>
      </Container>
    </div>
  );
}

export default LqApp;
