import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import lq from '../assets/img/lq.png';
import slider from '../assets/img/slider.jpg';
import number from '../assets/img/number.jpeg';
import memory from '../assets/img/memory.jpeg';
import castle from '../assets/img/castle.jpg';

import { Container, Row, Col, Image } from 'react-bootstrap';

function Games() {
  return (
    <div className='App'>
      <Container style={{ marginTop: '10%' }}>
        <Col xs={12} md={6} xl={5}>
          <Row style={{ alignItems: 'center' }}>
            <Col>
              <Image src={lq} style={{ width: '10rem', height: '10rem' }} />
            </Col>
            <Col>
              <h2>LQ Games</h2>
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
        <Col xs={12} md={6} xl={12}>
          <Row>
            <Col style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                className='rounded'
                src={slider}
                style={{ width: '99vh', height: '70vh', marginBottom: '1rem' }}
              />
              <h2 style={{ textAlign: 'center' }}>Super Slider</h2>
            </Col>
            <Col style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                className='rounded'
                src={number}
                style={{ width: '99vh', height: '70vh', marginBottom: '1rem' }}
              />
              <h2 style={{ textAlign: 'center' }}>Number Mania</h2>
            </Col>
            <Col style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                className='rounded'
                src={memory}
                style={{ width: '99vh', height: '70vh', marginBottom: '1rem' }}
              />
              <h2 style={{ textAlign: 'center' }}>Memory Tap</h2>
            </Col>
            <Col style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                className='rounded'
                src={castle}
                style={{ width: '99vh', height: '70vh', marginBottom: '1rem' }}
              />
              <h2 style={{ textAlign: 'center' }}>Castle King</h2>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Games;
