import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class Weather extends React.Component {
  render() {
    console.log(this.props);
    return (
     
//       <>
        
          
          
//            {this.props.weatherData.map((element) => {
//               return (
//               <p>
//                 {element.description} {element.date}
//                 </p>)})}
            
           
//      </>
     
//     );
//   }
// }



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