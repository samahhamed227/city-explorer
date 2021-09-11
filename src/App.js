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

      // moviesData: [],

    };
  }

  getlocation = async (e) => {
    e.preventDefault();
    try {
      let locurl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;


      let locresult = await axios.get(locurl);


      let locresult = await axios.get(locurl);

      console.log(locresult.data[0]);
      this.setState({
        locData: locresult.data[0],
        displayed: true,
      });

      let axiosLocalApi = `${process.env.REACT_APP_SERVER_URL}/weather?city=${this.state.searchQuery}`;

      let axiosresult = await axios.get(axiosLocalApi);
      this.setState({
        weatherData: axiosresult.data,
      });
      const response4 = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/movies?query=${this.state.searchQuery}`
      );

      this.setState({
        locationMovie: response4.data,
      });

      let axiosLocalApi = `${process.env.REACT_APP_SERVER_URL}/weather?city_name=${this.state.searchQuery}`;
       let axiosresult = await axios.get(axiosLocalApi);
      // const moviesres = await axios.get(
      //   `http://localhost:3003/movie?query=${this.state.searchQuery}`
      // );
      this.setState({
        weatherData: axiosresult.data,
      });

      // this.setState({
      //   moviesData: moviesres.data,
      // });

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
      newCity: event.target.value,
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
        {/* <h1>Movies Data</h1>
        {this.state.moviesData.map((j, key) => (
          <div>
            <p>title: {j.title}</p>

            <p>overview: {j.overview}</p>

            <p>average vote: {j.vote_average}</p>

            <p>total vote: {j.vote_count}</p>

            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${j.poster_path}`}
              alt={"img"}
            />

            <p>popularity: {j.popularity}</p>

            <p>release date: {j.release_date}</p>
          </div>
        ))} */}


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
          404  erroing in the data
          </p>
        )}
      </div>
    );
  }
}
export default App;
