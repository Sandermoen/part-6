import React from 'react';
import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { show } from '../reducers/notificationReducer';

const AnecdoteList = ({ anecdotes, filter, voteAnecdote, show }) => {
  // const anecdotes = useSelector((state) => state.anecdotes);
  // const filter = useSelector((state) => state.filter);
  // const dispatch = useDispatch();
  const vote = (anecdote) => {
    // dispatch(voteAnecdote(anecdote));
    // dispatch(show(`voted on: ${anecdote.content}`, 10));
    voteAnecdote(anecdote);
    show(`voted on: ${anecdote.content}`, 3);
  };

  return anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )
    .map((anecdote) => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    ));
};

const mapStateToProps = (state) => ({
  anecdotes: state.anecdotes,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  voteAnecdote: (anecdote) => dispatch(voteAnecdote(anecdote)),
  show: (message, timeout) => dispatch(show(message, timeout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
