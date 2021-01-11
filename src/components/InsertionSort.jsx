// import { Event, event, timers } from "jquery";
import React, { Component } from "react";
import SortInsertion from "./SortInsertion";
import Graph from "./Graph";
import Timer, { TimerContext } from "./Timer";

export class InsertionSort extends Component {
  static displayName = InsertionSort.name;

  constructor(props) {
    super(props);

    this.state = {
      inputCollection: [
        38,
        1,
        4,
        54,
        8,
        39,
        100,
        34,
        2,
        98,
        101,
        32,
        2,
        84,
        12,
        32,
        7,
        43,
        23,
        7,
        2,
        84,
        32,
        12,
        1,
        33,
        54,
        79,
        4,
        58,
        3,
        87,
        3,
        48,
        9,
        77,
        4,
        98,
        23,
        9,
        32,
        3,
        88,
        87,
        4,
        34,
        7,
        3,
        87,
        3,
      ],
      collection: [],
    };
  }

  componentDidMount = () => {
    this.setState({ collection: SortInsertion(this.state.inputCollection) });
  };

  render() {
    return (
      <Timer maxItteration={this.state.collection.length}>
        <TimerContext.Consumer>
          {(currentItteration) => (
            <>
              <h1>Insertion Sort</h1>
              <div className="mainText">
                <p>Order: O(n*2)</p>

    Best Case Sorted array as input, [ O(N) ]. And O(1) swaps.
    <br></br>Worst Case: Reversely sorted, and when inner loop makes maximum comparison, [ O(N2) ] . And O(N2) swaps.<br></br>
    Average Case: [ O(N2) ] . And O(N2) swaps.


              </div>

              <div className="insertionSortContainer">
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
