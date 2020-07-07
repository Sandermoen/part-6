const INITIAL_STATE = '';

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
