import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { show } from '../reducers/notificationReducer';
import { useDispatch } from 'react-redux';

const AnecodteForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addAnecdote({ content: event.target.anecdote.value, votes: 0 }));
    dispatch(show(`created anecdote: ${event.target.anecdote.value}`, 10));
    event.target.anecdote.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default AnecodteForm;
