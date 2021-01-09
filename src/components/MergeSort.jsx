// import { Event, event, timers } from "jquery";
import React, { Component } from "react";
import SortBubble from "./SortBubble";
import Graph from "./Graph";
import Timer, { TimerContext } from "./Timer";

export class MergeSort extends Component {
  static displayName = MergeSort.name;

  constructor(props) {
    super(props);

    this.state = {
    inputCollection: [38,1,4,54,8,39,100,34,2,98,101,32,2,84,12,32,7,43,23,7,2,84,32,12,1,33,54,79,4,58,3,87,3,48,9,77,4,98,23,9,32,3,88,87,4,34,7,3,87,3],
      collection: []
    };
  }

  componentDidMount = () => {
    const temp = 0;
  this.setState({collection: SortBubble(this.state.inputCollection)});

  };


  render() {
    return (
      <Timer maxItteration={this.state.collection.length}>
        <TimerContext.Consumer>
          {(currentItteration) => (
            <>
              <h1>Merge Sort</h1>
              <div className="mainText">
                <p>
                Merge Sort 
                </p>
              </div>

              <div className="mergeSortContainer">
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
