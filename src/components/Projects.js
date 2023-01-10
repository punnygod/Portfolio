import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/proj1.jpg';
import projImg2 from '../assets/img/lq.png';
import projImg3 from '../assets/img/proj3.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'LQ Games',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt sollicitudin ligula et sagittis. In tempor metus quis magna sollicitudin congue. Nulla at erat eget arcu efficitur volutpat a id ipsum.',
      imgUrl: projImg1,
    },
    {
      title: 'LogIQids App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt sollicitudin ligula et sagittis. In tempor metus quis magna sollicitudin congue. Nulla at erat eget arcu efficitur volutpat a id ipsum.',
      imgUrl: projImg2,
    },
    {
      title: 'Digital Wallet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt sollicitudin ligula et sagittis. In tempor metus quis magna sollicitudin congue. Nulla at erat eget arcu efficitur volutpat a id ipsum.',
      imgUrl: projImg3,
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
