import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/proj1.jpg';
import projImg2 from '../assets/img/lq.png';
import projImg3 from '../assets/img/proj3.jpg';
import projImg4 from '../assets/img/proj4.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
 
    {
      title: 'LogIQids App',
      description:
        'I was responsible for migrating from an older version of React native to a newer one with complete changes in all the screens of App giving the app a complete new look',
      imgUrl: projImg2,
    },
    {
      title: 'LQ Games',
      description:
        'Developed four brain-training games without using any game engine in react native which helped in boosting the average daily app usgage time and provided a gamified learning platform',
      imgUrl: projImg1,
    },
    {
      title: 'Digital Wallet',
      description:
        'Developed a digital application for android where it performed transactions like sending and requesting money , also user will get list of monthly as well as daily transactions.',
      imgUrl: projImg3,
    },
    {
      title: 'Instagram Clone App',
      description:
        'An app similar to instagram where user can signup,upload photos,chat with other users and also like,comment on other users posts.' ,
      imgUrl: projImg4,
    },
    // {
    //   title:'LQ Games',
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt sollicitudin ligula et sagittis. In tempor metus quis magna sollicitudin congue. Nulla at erat eget arcu efficitur volutpat a id ipsum.",
    //   imgUrl: projImg1,
    // },
  ];

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Portfolio</h2>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  );
};
