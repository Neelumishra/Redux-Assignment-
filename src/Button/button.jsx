import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlpha } from '../store/store';
export default function Button() {
  const [array, setArray] = React.useState(
    Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  );

  const count = useSelector((state) => {
    return state.Alpha;
  });
  console.log(count);

  const dispatch = useDispatch();
  function handleClick(e, index) {
    dispatch(setAlpha.actions.onAplha(e));
  }
  return (
    <div>
      <hr />
      {array.map((e, index) => (
        <button onClick={() => handleClick(e, index)}>{e}</button>
      ))}
      <hr />
      <table>
        <tr>
          <th>Button Name</th>
          <th>Count</th>
        </tr>

        {array.map((e) => (
          <tr>
            <td>{e}</td>
            <td>{count[e]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
