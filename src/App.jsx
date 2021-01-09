
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import './custom.css'
import { BubbleSort } from './components/BubbleSort';
import SortingAlgorythms from './components/SortingAlgorythms';
import BigO from './components/BigO';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={BigO} />
        <Route path='/bubble-sort' component={BubbleSort} />
        <Route path='/sorting-algorythms' component={SortingAlgorythms} />
      </Layout>
    );
  }
}