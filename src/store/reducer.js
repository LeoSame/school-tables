import { SET_COLUMN, SET_IS_LOADING, SET_RATE, SET_SCHOOLBOY } from './types';

const initialState = {
  Schoolboy: { Items: [], Quantity: 0 },
  Column: { Items: [], Quantity: 0 },
  Rate: { Items: [], Quantity: 0 },
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCHOOLBOY: {
      return {
        ...state,
        Schoolboy: action.payload,
      };
    }
    case SET_COLUMN: {
      return {
        ...state,
        Column: action.payload,
      };
    }
    case SET_RATE: {
      return {
        ...state,
        Rate: action.payload,
      };
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
