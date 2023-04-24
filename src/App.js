import React from 'react';
import './style.css';
import Display from './component/display';
import Update from './component/increment';
import Reset from './component/reset';
import Todo from './todo/todoApp';

export default function App() {
  return (
    <div>
      {/* <Display/><br/>
    <Update/><br/>
    <Reset/> */}
      <Todo />
    </div>
  );
}
