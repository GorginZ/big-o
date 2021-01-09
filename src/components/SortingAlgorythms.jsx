import React, { Component } from 'react';
import { BubbleSort } from './BubbleSort';
import { MergeSort } from './MergeSort';

export class SortingAlgorythms extends Component {
  static displayName = SortingAlgorythms.name;

  render () {
    return (
      <div>
        <h1>Sorting Algorythms</h1>
        <p>Here you can see the different performance of algorythms sorting the same collection</p>
        <BubbleSort></BubbleSort>
        <MergeSort></MergeSort>
      </div>
    );
  }
}
export default SortingAlgorythms;