"usee strict";
import "./App.css";
import axios from "axios";
import React from "react";
import Weather from "./components/weather";
import Movie from "./components/Movie";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locData: "",
      displayed: false,
      errormessege: false,
      weatherData: [],
      locationMovie: [],
    };
  }

  getlocation = async (e) => {
    e.preventDefault();

    try {
      let locurl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;

     axios.get(locurl).then((item)=>

      this.setState({
        locData: item.data[0],
        displayed: true,
      })
     )
      let axiosLocalApi = `${process.env.REACT_APP_SERVER_URL}/weather?city=${this.state.searchQuery}`;

        axios.get(axiosLocalApi).then((element)=>
      this.setState({
        weatherData: element.data,
      })
        )
      const moviesaxios =`${process.env.REACT_APP_SERVER_URL}/movies?query=${this.state.searchQuery}`;
        axios.get(moviesaxios).then((item)=>

      this.setState({
        locationMovie: item.data,
      })
       )
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

        {this.state.displayed && (
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.locData.lat},${this.state.locData.lon}`}
            style={{ margin: "150px", width: "1000px" }}
            alt="map"
          />
        )}
        <div>
          <Weather
            weatherData={this.state.weatherData}
            searchQuery={this.state.searchQuery}
          />
        </div>
        <div>
          <Movie locationMovie={this.state.locationMovie} />
        </div>

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
