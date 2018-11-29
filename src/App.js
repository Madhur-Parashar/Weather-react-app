import React, { Component } from 'react';

import Form from "./component/Form";
import Weather from "./component/Weather";


class App extends Component {
  state = {
    temperature: 0,
    sunrise: undefined,
    sunset : undefined,
    humidity: undefined,
    pressure : undefined,
    description: undefined,
    wind_speed : undefined,
    condition : undefined,
    error: undefined
  }
  getData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
    const data = await api_call.json();
    console.log(data);
    if (city) {
      this.setState({
        temperature: data.query.results.channel.item.condition.temp,
        wind_speed : data.query.results.channel.wind.speed,
        sunrise : data.query.results.channel.astronomy.sunrise,
        sunset : data.query.results.channel.astronomy.sunset,
        condition : data.query.results.channel.item.condition.text,
        pressure : data.query.results.channel.atmosphere.pressure,
        humidity: data.query.results.channel.atmosphere.humidity,
        description: data.query.results.channel.description,
        error: undefined
        
      });
     
    } else {
      this.setState({
        temperature: 0,
        sunrise: undefined,
        sunset : undefined,
        humidity: undefined,
        pressure : undefined,
        description: undefined,
        wind_speed : undefined,
        condition : undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Weather App</h1>
       <Form getData={this.getData}/>
       <div className="text-center"> {this.state.error}</div>
       <p id="weather-status">{this.state.description}</p>
       <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    wind_speed= {this.state.wind_speed}
                    condition = {this.state.condition}
                    pressure = {this.state.pressure}
                    sunrise = {this.state.sunrise}
                    sunset = {this.state.sunset}
                    description={this.state.description}
                    error={this.state.error}
                  />
                 
      </div>
    );
  }
}

export default App;
