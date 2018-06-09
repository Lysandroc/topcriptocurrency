import {
  FETCHING_COINS,
  FETCHING_COINS_SUCCESS,
  FETCHING_COINS_FAIL
} from '../utils/actionsTypes';

const initialState = {
  data:[],
  coinsAvaliable: [],
  hasError:false, 
  errorMessage: null,
  isFetching:false
}

export default (state=initialState, action) => {
  
  switch (action.type) {
    case FETCHING_COINS:
      return {
        ...state,
        isFetching:true,
        data:[], 
        coinsAvaliable:[],
        hasError:false, 
        errorMessage:null
      }
    case FETCHING_COINS_SUCCESS:
    return {
        ...state,
        isFetching:false,
        data:action.payload, 
        coinsAvaliable: [{id:'Euro', name: 'Euro'},...action.payload.map(item => ({id: item.id, name: item.name }))],
        hasError:false, 
        errorMessage:null
      }
    case FETCHING_COINS_FAIL:
      return {
        ...state,
        isFetching:false,
        data:[], 
        coinsAvaliable:[],
        hasError:true, 
        errorMessage:action.payload
      }
    default:
      return {...state}
  }
  
  return state;
}