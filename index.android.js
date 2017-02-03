/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import  XFoodMain from  './src/Component/main/XFoodMain';

export default class XFood extends Component {
  render() {
    return (
    <XFoodMain/>
    );
  }
}

AppRegistry.registerComponent('XFood', () => XFood);
