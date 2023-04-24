import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { counterSlice } from '../store/store';
// console.log(incCount)

export default function Update() {
  const counter = useSelector((state) => {
    return state.count;
  });
  const dispatch = useDispatch();
  function handleInc() {
    // console.log(Value.actions);
    dispatch(counterSlice.actions.incCount());
  }
  function handleDec() {
    dispatch(counterSlice.actions.decCount());
  }
  return (
    <>
      <button onClick={handleInc}>Increment</button>
      <br />
      <button onClick={handleDec}>Decrement</button>
    </>
  );
}
