import { INSERT, UPDATE, DELETE, UPDATE_INDEX } from '../actions/transactionActions';

const initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('transactionList')) || []
};

const transactionReducer = (state = initialState, action) => {
  let updatedList;

  switch (action.type) {
    case INSERT:
      updatedList = [...state.list, action.payload];
      localStorage.setItem('transactionList', JSON.stringify(updatedList));
      return {
        ...state,
        list: updatedList
      };

    case UPDATE:
      updatedList = [...state.list];
      updatedList[state.currentIndex] = action.payload;
      localStorage.setItem('transactionList', JSON.stringify(updatedList));
      return {
        ...state,
        list: updatedList
      };

    case DELETE:
      updatedList = [...state.list];
      updatedList.splice(action.payload, 1);
      localStorage.setItem('transactionList', JSON.stringify(updatedList));
      return {
        ...state,
        list: updatedList
      };

    case UPDATE_INDEX:
      return {
        ...state,
        currentIndex: action.payload
      };

    default:
      return state;
  }
};

export default transactionReducer;