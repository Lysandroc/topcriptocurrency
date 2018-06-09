import { CHANGE_VALUE_BASE } from '../utils/actionsTypes';

export default (calculator, listPrices) => {
  
  return dispatch => {
    dispatch({ 
      type: CHANGE_VALUE_BASE, 
      payload: {
        ...calculator, 
        listPrices: listPrices
      }
    });
  }
}
