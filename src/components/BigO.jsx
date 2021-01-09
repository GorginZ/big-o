import React, { Component } from 'react';
import { BubbleSort } from './BubbleSort';
import { MergeSort } from './MergeSort';

export class BigO extends Component {
  static displayName = BigO.name;

  render () {
    return (
      <div>
        <h1>Big O</h1>
      </div>
    );
  }
}
export default BigO;