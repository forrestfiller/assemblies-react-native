/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  navigator
} from 'react-native';
import Landing from './application/components/Landing';

class assemblies extends Component {
  render() {
    return (
      <Landing />
    );
  }
}

AppRegistry.registerComponent('assemblies', () => assemblies);
