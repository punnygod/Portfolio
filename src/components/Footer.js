import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/contact.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Row>
          <Col style={{marginTop:'1rem'}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/siddhesh0607/" target='_blank'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/punnygod" target='_blank'><img src={navIcon2} alt="Icon" /></a>
            </div>
          </Col>
          <Col className="text-center" style={{marginTop:'1rem'}}>
            <div className="social-icon" style={{float:'right'}}>
              <a><img src={navIcon3} alt="Icon" /></a>
              <div style={{paddingTop:'10px',float:'right'}}>+91 8108267119</div>
            </div>
          </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  )
}
