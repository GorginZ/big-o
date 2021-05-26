import React, { Component } from "react";
import { BubbleSort } from "./BubbleSort";
import { MergeSort } from "./MergeSort";
import { Link } from "react-router-dom";


export class BigO extends Component {
  static displayName = BigO.name;

  render() {
    return (
      <div>
        <h1>Big O</h1>
        <p>
          Big O notation (the order of a function) describes the complexity of a
          function or algorithm. The order of a function indicates its
          characteristic rate of growth.
          <br></br>
          <br></br>
          Different algorithms may share the same complexity and be described
          with the same notation.
         <br></br> 
          two concret examples here

        </p>
        <p>For  example,  when  analyzing  some  algorithm,  one  might  find  that  the  time  (or  the number of steps) it takes to complete a problem of size n is given by T(n) = 4 n2 - 2 n + 2. If  we  ignore  constants  (which  makes  sense  because  those  depend  on  the  particular hardware the program is run on) and slower growing terms, we could say "T(n) grows at the order of n2" and write:T(n) = O(n2).
          *(1)  </p>
        <p>
          footnotes:
          <br></br>
          1) author unavailable, lecture notes, Massachusetts Institute Technology available at: <a href="https://web.mit.edu/16.070/www/lecture/big_o.pdf">here</a>



           <br></br>
https://www.geeksforgeeks.org/comparison-among-bubble-sort-selection-sort-and-insertion-sort/

{/* <Link to="https://web.mit.edu/16.070/www/lecture/big_o.pdf" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("https://web.mit.edu/16.070/www/lecture/big_o.pdf"));}} /> */}

        </p>
      </div>
    );
  }
}
export default BigO;
