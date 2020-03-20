import React, { Component } from "react";
import axios from "axios";
import Plot from "react-plotly.js";

export default class Stock extends Component {
  state = {
    stockChartXValue: [],
    stockChartYValue: []
  };

  componentDidMount() {
    const API_KEY = "OOYFM3JA02XT6T0U";
    const symbol = "FB";
    const API_GET = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;

    let stockChartXGetValue = [];
    let stockChartYGetValue = [];

    axios
      .get(API_GET)
      .then(res => {
        for (var key in res.data["Time Series (Daily)"]) {
          stockChartXGetValue.push(key);
          stockChartYGetValue.push(
            res.data["Time Series (Daily)"][key]["1. open"]
          );
        }

        this.setState({
          stockChartXValue: stockChartXGetValue,
          stockChartYValue: stockChartYGetValue
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Stock Marketttt </h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValue,
              y: this.state.stockChartYValue,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" }
            }
          ]}
          layout={{ width: 800, height: 440, title: "A Fancy Plot" }}
        />
      </div>
    );
  }
}
