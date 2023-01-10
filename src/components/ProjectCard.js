import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ title, description, imgUrl }) => {
  const getRoute = () => {
    if (title == 'LQ Games') return '/games';
    else if (title == 'LogIQids App') return '/lq';
    else if (title == 'Digital Wallet') return '/digital';

  };
  return (
    <Card style={{ width: '18rem', margin: '1rem 1rem', padding: '0rem' }}>
      <Card.Img variant='top' src={imgUrl} style={{ height: '15rem' }} />
      <Card.Body>
        <Card.Title style={{ color: '#000' }}>{title}</Card.Title>
        <Card.Text
          style={{
            color: '#6C757D',
            fontSize: '16px',
            margin: '0px',
            width: '100%',
            textAlign: 'left',
          }}
        >
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link>
          <Link to={getRoute()}>Read More ...</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
