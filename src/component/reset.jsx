import React from 'react';
import { useDispatch } from 'react-redux';
import { counterSlice } from '../store/store';

export default function Reset() {
  const dispatch = useDispatch();

  function handleRest() {
    dispatch(counterSlice.actions.reset(0));
  }
  return <button onClick={handleRest}>Reset</button>;
}
