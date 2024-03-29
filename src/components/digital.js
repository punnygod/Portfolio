import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import lq from '../assets/img/proj3.jpg';
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
            The digital wallet app developed in React Native with React
            Navigation and Redux offers a robust and user-friendly experience
            for managing digital assets. The app utilizes a Node.js backend with
            MongoDB to ensure secure user authentication and transaction
            handling. With the app, users can easily send and receive funds,
            view transaction history, and monitor account balances in real-time.
            The app's intuitive interface makes it easy for users to access and
            manage their funds from their mobile device.
          </h5>
        </Col>
        <Col>
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
