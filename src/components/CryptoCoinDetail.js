
import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import {Card, CardSection, Button} from './common';

const CryptoCoinDetail = ({cryptoCurrencyCurrent}) => {
  
  const {symbol, name, price_eur, percent_change_24h} = cryptoCurrencyCurrent;
  
  return (
    <Card style={{width:'45%'}}>
      <CardSection> 
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{name} <Text style={{fontWeight: 'bold'}}>{symbol}</Text></Text>
          <Text style={styles.textPriceStyle}> €{parseFloat(Math.round(price_eur * 100) / 100).toFixed(2)} </Text>
          <Text style={{ ...styles.textStyle,  backgroundColor: percent_change_24h > 0 ? '#318411' : '#e00429'}}> {percent_change_24h > 0 ? "" : "-" }{Math.abs(percent_change_24h)}% in the last day </Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    alignItems: 'center',
    borderWidth: 1,
    padding:5,
    borderColor: 'white',
    margin:1,
    minHeight: 90,
    
  },
  headerTextStyle: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  textPriceStyle: {
    fontSize: 18,
    color: 'white',
    padding: 5,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  textStyle: {
    fontSize:12,
    color: 'white',
    alignSelf: 'center', 
    borderRadius:10,
    padding:1,
    paddingLeft:5,
    paddingRight:5,
    fontFamily: 'Montserrat-Regular',
  },
};

export default CryptoCoinDetail;