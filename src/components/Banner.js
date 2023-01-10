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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas quis elementum eros. Curabitur ac sollicitudin
                    metus. Fusce vitae pulvinar ante. Donec luctus elit sed mi
                    condimentum vestibulum sed quis libero. Praesent viverra
                    cursus lacus eget egestas. Praesent vel neque dolor. Nam
                    eleifend bibendum tortor, non laoreet sapien faucibus eu. In
                    elementum, urna ac rutrum varius, justo urna accumsan nulla,
                    vitae facilisis est augue sit amet nisi. Nunc sed nisi
                    lacus. Praesent maximus erat lectus, ac varius nisi blandit
                    in. Morbi vel augue nec mi cursus fermentum vel ac est. Sed
                    velit nulla, placerat mollis velit sed, ultricies vulputate
                    orci. Vivamus vitae eleifend ligula.
                  </p>
                  <button onClick={() => console.log('connect')}>
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
