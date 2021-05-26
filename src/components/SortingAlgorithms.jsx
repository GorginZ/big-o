import React, { Component } from 'react';
import { BubbleSort } from './BubbleSort';
import { InsertionSort } from './InsertionSort';
import { MergeSort } from './MergeSort';
import { SelectionSort } from './SelectionSort';

export class SortingAlgorithms extends Component {
  static displayName = SortingAlgorithms.name;

  render () {
    return (
      <div>
        <h1>Sorting Algorithms</h1>
        <p>Here you can see the different performance of algorithms sorting the same collection</p>
        <BubbleSort></BubbleSort>
        {/* <MergeSort></MergeSort> */}
        <InsertionSort></InsertionSort>
        <SelectionSort></SelectionSort>
      </div>
    );
  }
}
export default SortingAlgorithms;