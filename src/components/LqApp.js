import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import lq from '../assets/img/lq.png';
import lqApp from '../assets/img/lqapp.png';
import screens from '../assets/img/screens.jpg';

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
              <h2>LogIQids App</h2>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} xl={12} style={{ margin: '2% 0%' }}>
          <h5 style={{ whiteSpace: 'pre-wrap' }}>
            {`Developed by IIT-IIM graduates, LogIQids is India's best learning app, that introduces logical reasoning to students in the age group of 6-15.

HOW DOES LogIQids WORK?
LogIQids is meant to be a do-at-home activity with interesting brain-training games and worksheets. Keep your child productively engaged in this lockdown from the comfort of your homes.\n
\n
Key features of our program are:\n
- Personalized Online Worksheets that adapts difficulty level to the learning pace of the student\n
- Daily Brain Workout (15min/day)\n
- Boost IQ and critical skill sets like problem-solving, critical thinking, and creativity\n
- Gamified Learning: Leaderboards, Level, Achievements, XP Points and Badges to make learning fun and engaging\n
- Track Improvement in IQ & Critical Thinking. Our app provides parents with an in-depth analysis of their child's performance & mental growth over time \n
- Interesting Brain Training and educational games for age 6 to 15\n
\n
LogIQids helps in developing the crucial foundation of logical reasoning and strong mental aptitude. Learn from the safety of your home with a leading Brain Training App for students in the age group of 6 to 15 years! Already loved by 3,00,000+ users from 600+ schools across the country.`}
          </h5>
        </Col>
        <Col>
          <Image
            className='rounded'
            src={lqApp}
            style={{
              width: '100%',
              marginBottom: '1rem',
              marginTop: '1rem',
            }}
          />
          <Image
            className='rounded'
            src={screens}
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
