import { CHANGE_VALUE_BASE } from '../utils/actionsTypes';

const initialState = {
  inputBase: 0,
  outputPrimary: 0,
  outputSecondary: 0,
  sessionsSelected: {
    inputBase: 0,
    outputPrimary: 1,
    outputSecondary: 2,
  }
};

export default (state=initialState, action) => {
  
  switch (action.type) {
    case CHANGE_VALUE_BASE:
      
      
      // outputSecondary=?
      // if(sessionsSelected.inputBase === 0 || 
      //   sessionsSelected.outputPrimary === 0  ||
      //   sessionsSelected.outputSecondary === 0 ) {
      //     console.log('euro');
      // } else {
        // let obj1 = action.payload.listPrices[parseInt(sessionsSelected.inputBase)]
        // let obj2 = action.payload.listPrices[sessionsSelected.outputPrimary]
        // let obj3 = action.payload.listPrices[sessionsSelected.outputSecondary]

        // console.log(obj1);
        // console.log(obj2);
        // console.log(obj3);
      // }

      
      let object1 =  action.payload.listPrices[action.payload.sessionsSelected.inputBase];
      let object2 =  action.payload.listPrices[action.payload.sessionsSelected.outputPrimary];
      let object3 =  action.payload.listPrices[action.payload.sessionsSelected.outputSecondary];
      
      console.log(action.payload.listPrices);

      console.log(object1);
      console.log(object2);
      console.log(object3);

      console.log(action.payload.sessionsSelected);
      
       
      let {
        inputBase, 
        outputPrimary,
        outputSecondary,
        sessionsSelected,
        listPrices,
      } = action.payload;

      
      // outputPrimary = parseInt(inputBase+1)*1;
      // outputSecondary = parseInt(inputBase+1)*2;

      

      return {
        ...state,
        inputBase, 
        outputPrimary, 
        outputSecondary,
        sessionsSelected,
      }
    default:
      return {...state}
  }
}