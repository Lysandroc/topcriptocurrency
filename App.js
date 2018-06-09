import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from "./src/store";
import {
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import {Header} from './src/components/common';
import CryptoCoins from './src/components/CryptoCoins';
import CryptoCalculator from './src/components/CryptoCalculator';

const TabNavApplication = TabNavigator({
  CryptoBoard: {
    screen: CryptoCoins, 
  },
  CryptoCalculator: {
    screen: CryptoCalculator
  },
},{
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    style: {
      backgroundColor: '#2a2a2a',
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <TabNavApplication/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'flex-start',
  },
});
