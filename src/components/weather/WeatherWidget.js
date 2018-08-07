import React, { Component } from "react";
export default class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: null };
  }
  componentDidMount() {
    fetch('/.netlify/functions')
      .then(res => res.json())
      .then(data =>
        this.setState({ temperature: data.temperature }));
  }
  render() {
    return (
      <div>
        <h2>Todays Weather for Newcastle JS  {this.state.temperature} &deg;C </h2>
      </div>);
  }
}