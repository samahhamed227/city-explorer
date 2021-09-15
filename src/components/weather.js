import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDay from "./weather0";

class Weather extends React.Component {
  render() {
    console.log(this.props);
    return (
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
  export default Weather;
          
