// import { Event, event, timers } from "jquery";
import React, { Component } from "react";
import SortMerge from "./SortMerge";
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
  this.setState({collection: SortMerge(this.state.inputCollection)});
  console.log(this.state.collection);

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
                  A divide and conquor algorythm.
                Merge sort is a efficient algorythm which recursively divides a collection into two equal parts, sorting and then merging the sorted parts.
                <p>
 O(nLogn)
                  big O 
                </p>

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
