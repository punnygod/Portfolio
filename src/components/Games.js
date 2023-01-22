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
          <h5 style={{whiteSpace: 'pre-wrap'}}>
           {`I was responsible for creating four brain-training games without using any game engine in react native which helped in boosting the average daily app usgage time and provided a gamified learning platform \n
- Castle King\n
  This game involved drag and drop of castle blocks in to the missing places to complete the castle.The game involved completing 3 castles to succesfully complete a level.The game had 50 levels where with each increasing level the time alloted to complete the castle would decrease and the castle complexity would increase.\n 
- Memory Tap\n
  This game involved display of certain objects hidden inside some blocks for few seconds and the objective was to find those objects remembering the pattern in which they occured.This game also involved 3 complete games to complete a level.This game had 30 levels where with each increasing level the time for which the objects were displayed would reduce.\n 
- Super Slider\n
  This game involved connecting of start and end points in a manner where the pipes are interconnected resulting in flow of water.Some of the blocks with pipes were movable and some were fixed.This game had 50 levels where with each increasing level the time alloted to complete the puzzle would reduce and the complexity of game would increase with 4x4 and 5x5 grids.\n 
- Number Mania\n
  This game involved basic arithmetic operation which helped the children in developing numerical ability.This game also had 50 levels where the time alloted to complete the level would decrease. \n 
           `}
          </h5>
        </Col>
        <Col xs={12} md={6} xl={12}>
          <Row>
            <Col style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                className='rounded'
                src={slider}
                style={{ width: '90vh', height: '70vh', marginBottom: '1rem' }}
              />
              <h2 style={{ textAlign: 'center' }}>Super Slider</h2>
            </Col>
            <Col style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                className='rounded'
                src={number}
                style={{ width: '90vh', height: '70vh', marginBottom: '1rem' }}
              />
              <h2 style={{ textAlign: 'center' }}>Number Mania</h2>
            </Col>
            <Col style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                className='rounded'
                src={memory}
                style={{ width: '90vh', height: '70vh', marginBottom: '1rem' }}
              />
              <h2 style={{ textAlign: 'center' }}>Memory Tap</h2>
            </Col>
            <Col style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              <Image
                className='rounded'
                src={castle}
                style={{ width: '90vh', height: '70vh', marginBottom: '1rem' }}
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
