import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { initAnecdotes } from './reducers/anecdoteReducer';
import anecdotesService from './services/anecdotes';

import AnecodteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    anecdotesService
      .getAll()
      .then((anecdotes) => dispatch(initAnecdotes(anecdotes)));
  }, [dispatch]);
  return (
    <div>
      {notification.show && <Notification />}
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecodteForm />
    </div>
  );
};

export default App;
