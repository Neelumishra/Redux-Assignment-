import React from 'react';
import { useDispatch } from 'react-redux';
import { todoList } from '../store/store';
import { setlist } from '../store/store';

import { useSelector } from 'react-redux';

export default function Todo() {
  const input = useSelector((state) => {
    return state.Todo;
  });
  const data = useSelector((state) => {
    return state.list;
  });
  console.log(input);
  const dispatch = useDispatch();
  function handlechange(e) {
    dispatch(todoList.actions.onInput(e.target.value));
  }
  function handleClick() {
    dispatch(setlist.actions.onstore([...data, input]));
    dispatch(todoList.actions.onClear(''));
  }
  function handleDelete(index) {
    dispatch(
      setlist.actions.onDelete(
        data.filter((ele, e) => {
          if (index !== e) {
            return ele;
          }
        })
      )
    );
  }
  return (
    <>
      <h1>Task List</h1>

      <input
        value={input}
        onChange={handlechange}
        type="text"
        placeholder="Enter Task"
      />
      <button onClick={handleClick}>Add</button>
      {data.map((e, index) => (
        <>
          {' '}
          <li>{e}</li>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </>
      ))}
    </>
  );
}
