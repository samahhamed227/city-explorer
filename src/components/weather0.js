import React from 'react';

class WeatherDay extends React.Component {
    render() {
        return (
            <>
                <p> Date:<span>{this.props.date} </span> <br />
            Description:<span>{this.props.description}</span></p>
            </>
        )
    }
}
export default WeatherDay;





    
     
     