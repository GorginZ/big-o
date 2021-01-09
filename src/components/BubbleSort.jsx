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
      inputCollection: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // getSortedItterationsData = () => {
  //   const temp = 0;
  //   const inputCollection = this.state.inputCollection
  //     .split(",")
  //     .map((n) => parseInt(n, 10));

  //   console.log(inputCollection.length);
  //   for (var j = 0; j <= inputCollection.length - 2; j++)
  //    {
  //     console.log("first loop");
  //     for (var i = 0; i <= inputCollection.Length - 2; i++) {
  //       console.log("inner loop");
  //       if (inputCollection[i] > inputCollection[i + 1]) {
  //         console.log("conditional");
  //         temp = inputCollection[i + 1];
  //         inputCollection[i + 1] = inputCollection[i];
  //         inputCollection[i] = temp;
  //         this.state.collection.concat([inputCollection]);
  //         console.log(this.state.collection + "state");
  //       }
  //     }
  //   }
  //   // .then((response) => response.json())
  //   // this.setState({ collection: inputCollection });
  // };

  getSortedItterationsData = () => {
    const temp = 0;
    const inputCollection = this.state.inputCollection
      .split(",")
      .map((n) => parseInt(n, 10));

    for (var j = 0; j <= inputCollection.length - 2; j++) {
      for (var i = 0; i <= inputCollection.length - 2; i++) {
        if (inputCollection[i] > inputCollection[i + 1]) {
          const temp = inputCollection[i + 1];
          inputCollection[i + 1] = inputCollection[i];
          inputCollection[i] = temp;
          console.log(inputCollection);
          this.state.collection.push([...inputCollection]);
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

                <div className="inputField">
                  <input
                    className="inputField"
                    placeholder=""
                    onChange={this.handleChange}
                  ></input>
                  <button
                    className="button"
                    onClick={this.getSortedItterationsData}
                  >
                    Get Sorted Collection
                  </button>
                </div>
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
