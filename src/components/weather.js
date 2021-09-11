import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
class Weather extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>description</th>
            <th>Date</th>
          </tr>
        </thead>
        {this.props.weatherData.map((element) => {
          return (
            <tr>
              <td> {element.description}</td>
              <td> {element.date}</td>
            </tr>
          );
        })}
      </Table>
    );
  }
}

export default Weather;
