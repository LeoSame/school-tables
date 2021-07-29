const initialState = {
  table: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TABLE': {
      return {
        ...state,
        table: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
