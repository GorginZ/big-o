// import { Event, event, timers } from "jquery";
import React, { Component } from "react";
import Graph from "./Graph";
import Timer, { TimerContext } from "./Timer";

export class BubbleSort extends Component {
  static displayName = BubbleSort.name;

  constructor(props) {
    super(props);

    this.state = {
      collection: [],
      // inputCollection: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = () => {
    const temp = 0;
    const ARRAY_LENGTH = 50;
    const inputCollection = Array.from(Array(ARRAY_LENGTH)).map(
      (x) => Math.random() * 100
    );

    console.log(inputCollection);
    this.state.collection.push([...inputCollection]);
    for (var j = 0; j <= inputCollection.length - 2; j++) {
      for (var i = 0; i <= inputCollection.length - 2; i++) {
        if (inputCollection[i] > inputCollection[i + 1]) {
          const temp = inputCollection[i + 1];
          inputCollection[i + 1] = inputCollection[i];
          inputCollection[i] = temp;
          this.state.collection.push([...inputCollection]);
          this.setState({collection: this.state.collection});
        }
      }
    }
    console.log(this.state.collection);
  };

  handleChange = (event) => {
    this.state.inputCollection = event.target.value;
  };

  render() {
    return (
      <Timer>
        <TimerContext.Consumer>
          {(currentItteration) => (
            <>
              <h1>Bubble Sort</h1>
              <div className="mainText">
                <p>
                  To see bubble sort in action, enter a collcetion below, eg:
                  34,5,4,28,4,38,99,23,12,4,3,2,5,8,5,4,3,2,4,5, hit sort
                  collection - this will get a collection of each itteration of
                  the sort. Hit 'Start Itterating' to tick through each step of
                  the sort. You can pause and re-set the ticker
                </p>
              </div>

              <div className="inputContainer">
                <Graph
                  className="graphElement"
                  data={this.state.collection[currentItteration]}
                ></Graph>
              </div>
              <p aria-live="polite">
                Current itteration: <strong>{currentItteration}</strong>
              </p>
            </>
          )}
        </TimerContext.Consumer>
      </Timer>
    );
  }
}
