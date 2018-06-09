import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import { connect } from 'react-redux';
import calculateCoins from '../actions/calculateCoins';
import {Button, Input, Card, CardSection, Spinner, Select} from './common';

class CryptoCalculator extends Component {
  
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }

  onChangeInput(text, setProperty) {
    this.props.calculator[setProperty] = text;
    const listPrices = this.getListPrice();
    this.props.calculateCoins(this.props.calculator, listPrices);
  }

  onChangeSelect(session, indexSelected) {
    this.props.calculator.sessionsSelected[session] = indexSelected;
    const listPrices = this.getListPrice();
    this.props.calculateCoins(this.props.calculator, listPrices);
  }

  getListPrice() {
    return this.props.coins.data.map((item) => ({
      id: item.id,
      rank: item.rank,
      price_btc: item.price_btc,
      price_eur: item.price_eur,
    }));
  }

  render() {
    return (
      <View style={styles.container}> 
        <Card style={{alignItems: 'center'}}>
          <CardSection style={styles.cardSectionContainer}>
            <Select 
              style={styles.cardSectionSelect} 
              items={this.props.coins.coinsAvaliable} 
              onChangeSelect={this.onChangeSelect}
              session={'inputBase'}
              index={this.props.calculator.sessionsSelected['inputBase']}
            />
            <Input 
              onChangeText={(text)=> this.onChangeInput(text, 'inputBase')}
              keyboardType='numeric'
              value={this.props.calculator.inputBase}
              style={styles.cardSectionInput}
            />
          </CardSection>
          <CardSection style={styles.cardSectionContainer}>
            <Select 
              style={styles.cardSectionSelect} 
              items={this.props.coins.coinsAvaliable} 
              onChangeSelect={this.onChangeSelect}
              session={'outputPrimary'}
              index={this.props.calculator.sessionsSelected['outputPrimary']}
            />  
            <Input 
              onChangeText={(text)=> this.onChangeInput(text, 'outputPrimary')}
              value={this.props.calculator.outputPrimary}
              keyboardType='numeric'
              style={styles.cardSectionInput}
              editable={false}
            />
          </CardSection>
          <CardSection style={styles.cardSectionContainer}>
            <Select 
              style={styles.cardSectionSelect} 
              items={this.props.coins.coinsAvaliable} 
              onChangeSelect={this.onChangeSelect}
              session={'outputSecondary'}
              index={this.props.calculator.sessionsSelected['outputSecondary']}
            />
            <Input 
              onChangeText={(text)=> this.onChangeInput(text, 'outputSecondary')}
              keyboardType='numeric'
              value={this.props.calculator.outputSecondary}
              style={styles.cardSectionInput}
              editable={false}
            />
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  container: {
    flex:1,
    backgroundColor: '#2a2a2a',
    paddingTop:5,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  cardSectionContainer: {
    marginTop:3, 
    flexDirection: 'row'
  },
  cardSectionSelect: {
    width:'40%'
  },
  cardSectionInput: {
    width: '50%'
  },
}

const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coins,
    calculator: state.calculator,
  }
}

export default connect(mapStateToProps, {calculateCoins})(CryptoCalculator)