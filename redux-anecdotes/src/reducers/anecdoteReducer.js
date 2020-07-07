import anecdotesService from '../services/anecdotes';

export const voteAnecdote = (anecdote) => async (dispatch) => {
  await anecdotesService.vote(anecdote);
  await dispatch({ type: 'VOTE', payload: anecdote.id });
};
export const addAnecdote = (anecdote) => async (dispatch) => {
  const newAnecdote = await anecdotesService.create(anecdote);
  dispatch({
    type: 'ADD',
    payload: newAnecdote,
  });
};

export const initAnecdotes = (anecdotes) => ({
  type: 'INIT',
  payload: anecdotes,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': {
      const updatedAnecdote = state.find(
        (anecdote) => anecdote.id === action.payload
      );
      updatedAnecdote.votes++;
      return state.map((anecdote) =>
        anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
      );
    }
    case 'ADD': {
      return [...state, action.payload];
    }
    case 'INIT': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
