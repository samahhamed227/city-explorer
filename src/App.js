"usee strict";
import "./App.css";
import axios from "axios";
import React from "react";
import Weather from "./components/weather";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locData: "",
      displayed: false,
      errormessege: false,
      weatherData: [],
    };
  }

  getlocation = async (e) => {
    e.preventDefault();

    try {

    let locurl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
     
    let locresult = await axios.get(locurl);

    console.log(locresult.data[0]);
    this.setState({
      locData: locresult.data[0],
      displayed: true,
    });
    let axiosLocalApi = `http://${process.env.REACT_APP_SERVER_URL}/weather?city_name=${this.state.searchQuery}`;

      let axiosresult = await axios.get(axiosLocalApi);
      this.setState({
        weatherData: axiosresult.data,
      });
      console.log("weatherData",this.state.weatherData);
    } catch {
      this.setState({
        displayed: false,
        errormessege: true,
      });
    }
  };

  updates = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
    console.log(this.state.searchQuery);
  };

  render() {
    return (
      <div style={{ backgroundColor: "beige" }}>
        <h1 style={{ textAlign: "center" }}>City Explorer</h1>

        <form onSubmit={this.getlocation} style={{ marginLeft: "550px" }}>
          <input type="text" placeholder="Add a city" onChange={this.updates} />
          <input type="submit" value="Get Location" />
        </form>
        <p style={{ textAlign: "center" }}>{this.state.locData.display_name}</p>
        <p style={{ textAlign: "center" }}>{this.state.locData.lat}</p>
        <p style={{ textAlign: "center" }}>{this.state.locData.lon}</p>

        <div>
          <Weather
            weatherData={this.state.weatherData}
            searchQuery={this.state.searchQuery}
          />
        </div>
        {this.state.displayed && (
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locData.lat},${this.state.locData.lon}`}
            style={{ margin: "150px", width: "1000px" }}
            alt="map"
          />
        )}
        {this.state.errormessege && (
          <p style={{ textAlign: "center", color: "red" }}>
            erroing in the data
          </p>
        )}
      </div>
    );
  }
}
export default App;
