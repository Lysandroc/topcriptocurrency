import axios from 'axios';
import { 
  apiBaseUrl, 
  routeGetCryptoCurrency
} from '../utils/constants';
import {
  FETCHING_COINS,
  FETCHING_COINS_SUCCESS,
  FETCHING_COINS_FAIL
} from '../utils/actionsTypes';

export default () => {
  return dispatch => {
    dispatch({ type: FETCHING_COINS});
    
    return axios.get(`${apiBaseUrl}${routeGetCryptoCurrency}`)
      .then(response => {
        dispatch({ type: FETCHING_COINS_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_COINS_FAIL, payload: error.data});
      })
  };
};