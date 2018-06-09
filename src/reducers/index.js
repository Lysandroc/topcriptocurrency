import { combineReducers } from 'redux';
import cryptoCoins from './cryptoCoins';
import calculatorReducer from './calculatorReducer';

export default combineReducers({
  coins: cryptoCoins,
  calculator: calculatorReducer
});