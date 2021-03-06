// import { Event, event, timers } from "jquery";
import React, { Component } from "react";
import SortBubble from "./SortBubble";
import Graph from "./Graph";
import Timer, { TimerContext } from "./Timer";

export class BubbleSort extends Component {
  static displayName = BubbleSort.name;

  constructor(props) {
    super(props);

    this.state = {
    inputCollection: [38,1,4,54,8,39,100,34,2,98,101,32,2,84,12,32,7,43,23,7,2,84,32,12,1,33,54,79,4,58,3,87,3,48,9,77,4,98,23,9,32,3,88,87,4,34,7,3,87,3],
      collection: []
    };
  }

  componentDidMount = () => {
  this.setState({collection: SortBubble(this.state.inputCollection)});

  };


  render() {
    return (
      <Timer maxItteration={this.state.collection.length}>
        <TimerContext.Consumer>
          {(currentItteration) => (
            <>
              <h1>Bubble Sort</h1>
              <div className="mainText">
                <p>
                Bubble sort is a very simple sorting alorythm. Bubble sort has an average worst case running time of O(n2). <br></br>
                <br></br>

    Best Case Sorted array as input. Or almost all elements are in proper place. [ O(N) ]. O(1) swaps.<br></br>
    Worst Case: Reversely sorted / Very few elements are in proper place. [ O(N2) ] . O(N2) swaps.<br></br>
    Average Case: [ O(N2) ] . O(N2) swaps.


                </p>
              </div>

              <div className="bubbleSortContainer">
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
