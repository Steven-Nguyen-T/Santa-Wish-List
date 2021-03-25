import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
    // copy initial state and add on to it
      return {
        wishList: [...state.wishList, action.payload],
      };
    case DELETE_ITEM:
    // remove any item in state where the index of the item clicked matches the index of the state
      return {
        wishList: [...state.wishList.filter((item, index) => 
          action.payload !== index
        )],
      };
    default:
      return {
        wishList: [],
      };
  }
};

export default reducer;