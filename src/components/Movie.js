import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Movie extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
         <Row className="justify-content-md-center" id='moviesRow'>

        {this.props.locationMovie.map((element) => {
          return (
            <Col>
            <Card
              style={{
                width: "16rem",
                border: "solid",
            
                margin: "5px",
              }}
            >
              <Card.Body
                style={{
                  color: "black",
                }}
              >
                <Card.Title>Movie</Card.Title>
                <Card.Text>{element.title}</Card.Text>
                <Card.Text>{element.overview}</Card.Text>
                <Card.Text>{element.vote}</Card.Text>
                <Card.Text>{element.count}</Card.Text>
                <Card.Text>{element.release_date}</Card.Text>
                <Card.Text>{element.popularity}</Card.Text>
                <Card.Img variant="top" src={element.img_url} alt={element.title}  />
              </Card.Body>
            </Card>
            </Col>
          );
        })}
        </Row>
      </>
    );
  }
}

export default Movie;