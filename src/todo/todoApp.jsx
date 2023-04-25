import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoList } from '../store/store';
import { setlist } from '../store/store';

import { useSelector } from 'react-redux';

export default function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const data = useSelector((state) => {
    return state.list;
  });

  const dispatch = useDispatch();
  function handlechange(e) {
    setInputValue(e.target.value);
  }
  function handleClick() {
    if (editIndex !== null) {
      const Copy = [...data];
      Copy[editIndex] = inputValue;
      dispatch(setlist.actions.onUpdate(Copy));
      setEditIndex(null);
      setInputValue('');
    } else {
      dispatch(setlist.actions.onstore(inputValue));
      setInputValue('');
    }
  }
  function handleDelete(index) {
    dispatch(setlist.actions.onDelete(index));
  }
  function handleUpdate(index) {
    setEditIndex(index);
    setInputValue(data[index]);
  }
  return (
    <>
      <h1>Task List</h1>

      <input
        value={inputValue}
        onChange={handlechange}
        type="text"
        placeholder="Enter Task"
      />
      <button onClick={handleClick}>
        {editIndex == null ? 'ADD' : 'UPDATE'}
      </button>
      {data.map((e, index) => (
        <>
          {' '}
          <li>{e}</li>
          <button onClick={() => handleDelete(index)}>❌</button>
          <button onClick={() => handleUpdate(index)}>📏</button>
        </>
      ))}
    </>
  );
}
