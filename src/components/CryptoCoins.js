import React from 'react';
import {StyleSheet, ScrollView, Text, Alert, View} from 'react-native';
import { connect } from 'react-redux';
import fetchCurrency from '../actions/fetchCurrency'
import CryptoCoinDetail from './CryptoCoinDetail';
import {Spinner, Header} from './common';

class CryptoCoins extends React.Component {

  componentDidMount() {
    this.props.fetchCurrency();
  }

  render() {
    const {coins} = this.props;

    if(coins.isFetching) {
      return (
        <View style={styles.container}>
          <Spinner size="large"/>
        </View>
      );
    }

    return (
      <ScrollView style={{backgroundColor:'#2a2a2a'}}>
        <View style={styles.container}>
            {this.renderDetail()}  
        </View>
      </ScrollView>
    );
  }

  renderDetail() {
    const {coins} = this.props;
    return coins.data.map((item,index) => <CryptoCoinDetail key={index} cryptoCurrencyCurrent={item}/>);
  }
} 

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop:10,
    backgroundColor: '#2a2a2a',
  },
})

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coins,
  }
}

export default connect(mapStateToProps, {fetchCurrency})(CryptoCoins)