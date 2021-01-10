import React, { Component } from "react";
import { BubbleSort } from "./BubbleSort";
import { MergeSort } from "./MergeSort";

export class BigO extends Component {
  static displayName = BigO.name;

  render() {
    return (
      <div>
        <h1>Big O</h1>
        <p>
          Big O notation (the order of a function) describes the complexity of a
          function or algorythm. The order of a function indicates its
          characteristic rate of groth. The notation comes from German
          theoretician Edmund Landau's work and is utilised in mathematics, and computer science studies.
          <br></br>
          <br></br>
          Different algorythms may share the same complexity and be described
          with the same notation.

        </p>
        <p>
          further reading and references:
          <br></br>
          https://web.mit.edu/16.070/www/lecture/big_o.pdf
        </p>
      </div>
    );
  }
}
export default BigO;
