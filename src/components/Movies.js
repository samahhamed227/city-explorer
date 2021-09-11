import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Movies extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.moviesData.map((element) => {
          return (
         <div>
                <p>Movie</p>
                <p>{element.title}</p>
                <p>{element.overview}</p>
                <p>{element.vote}</p>
                <p>{element.count}</p>
                <p>{element.release_date}</p>
                <p>{element.popularity}</p>
                {/* <Img src={`https://image.tmdb.org/t/p/w500${element.img} `} alt={element.title}  /> */}
                </div>
          );
        })}
      </>
    );
  }
}

export default Movies;