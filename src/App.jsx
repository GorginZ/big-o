
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import './custom.css'
import { BubbleSort } from './components/BubbleSort';
import Home from './components/Home';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/bubble-sort' component={BubbleSort} />
      </Layout>
    );
  }
}