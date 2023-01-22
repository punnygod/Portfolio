import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Lottie from 'react-lottie';
import programData from '../assets/img/myJson.json';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Mobile App Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: programData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h1>{`Hi! I'm Siddhesh`} </h1>
                  <h2>
                  <span
                    className='txt-rotate'
                    dataPeriod='300'
                    data-rotate='[ "Web Developer", "Mobile App Developer"]'
                  >
                    <span className='wrap'>{text}</span>
                  </span>
                  </h2>
                  <p>
                  I am a frontend developer with more than 3 years of experience in React and React Native,skilled and experienced professional in building mobile and web applications.
                  I have experience working with third-party libraries and APIs, as well as debugging and troubleshooting issues that may arise during the development process.I have a good understanding of mobile and web development optimizing the performance of the applications built for different devices and platforms. I have strong problem-solving skills and is able to work in a team environment. I am comfortable working with Git, and is familiar with the Agile development process. I am able to communicate effectively with other team members, and can provide guidance and mentorship to junior developers.
                  </p>
                  <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                style={{marginTop:'-20%'}}
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <Lottie options={defaultOptions}  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
