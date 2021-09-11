import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
class Weather extends React.Component {
  render() {
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

<div>
 {this.props.weatherData.map((element) => {
              return (
                <p style={{ textAlign: "center" }}>
                {element.description} {element.date}
                </p>
              );
            })}
         
        
      </div>

    );
  }
}

export default Weather;
