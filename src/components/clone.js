import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import lq from '../assets/img/proj4.png';
import clone from '../assets/img/clone.jpg';

import { Container, Row, Col, Image } from 'react-bootstrap';

function Clone() {
  return (
    <div className='App'>
      <Container style={{ marginTop: '10%' }}>
        <Col xs={12} md={6} xl={5}>
          <Row style={{ alignItems: 'center' }}>
            <Col>
              <Image src={lq} style={{ width: '10rem', height: '10rem' }} />
            </Col>
            <Col>
              <h2>Instagram App Clone</h2>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} xl={12} style={{ margin: '2% 0%' }}>
          <h5>
            The Instagram clone app developed in React Native with React
            Navigation and a Firestore backend, provides a seamless social media
            experience similar to Instagram. With core features such as photo
            sharing, commenting, direct messaging, and a news feed, the app
            offers a familiar user interface.
          </h5>
        </Col>
        <Col>
          <Image
            className='rounded'
            src={clone}
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

export default Clone;
