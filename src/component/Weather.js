import React, { Component } from 'react';


class Weather extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div id="weather-color" className="col-xs-12 col-md-4 text-center">
          <h4 id="day-of-week">Today</h4>
          <h1 className="display-2"><span id="temperature">{this.props.temperature}</span><span id="deg">&deg;</span> F</h1>
          <p>{this.props.condition}</p>
        </div>
        <div className="col-xs-12 col-md-4 text-center">
        <div className={this.props.condition}></div>
        </div>
        <div className="col-xs-12 col-md-4 text-center">
        <h1>Humidity</h1>
          <i className="humidity">{this.props.humidity}</i>
        </div>
      </div>
     
      <div className="container text-center">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 content-center">
            <h3>Wind Speed</h3>
            <p><span id="wind-speed">{this.props.wind_speed}</span><span>m/s</span></p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 content-center">
           <h3>Sunrise</h3>
            <p><span id="humidity">{this.props.sunrise}</span></p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 content-center">
           <h3>Sunset</h3>
            <p><span id="humidity">{this.props.sunset}</span></p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 content-center">
           <h3>Pressure</h3>
           <p>{this.props.pressure}</p>
          </div>
         
        </div>
      </div>
    </div>
    );
  }
}

export default Weather;