import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import WeatherDay from "./weather0";

class Weather extends React.Component {
  render() {
    console.log(this.props);
    return (
      // <Table striped bordered hover>
      //   <thead>
      //     <tr>
      //       <th>description</th>
      //       <th>Date</th>
      //     </tr>
      //   </thead>
      //   {this.props.weatherData.map((element) => {
      //     return (
      //       <tr>
      //         <td> {element.description}</td>
      //         <td> {element.date}
      //         </td>
      //       </tr>
      //     );
      //   })}
      // </Table>
      
        this.props.weatherData.map(item => {
          return (
            <>
              {/* <p> Date:<span>{item.date} </span> <br />
              Description:<span>{item.description}</span></p> */}
  
              <WeatherDay
                date={item.date}
                description={item.description} />
            </>
          );
        })
      );
    }
  }

