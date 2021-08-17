/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { UNDO, REDO, HISTORY } from '../../state/actions';

function App() {

  const dispatch = useDispatch();
  const selector = useSelector();

  return (
    <>
      <button onClick={() => dispatch({ type: UNDO })}>undo</button>
      <button onClick={() => dispatch({ type: REDO })}>redo</button>
      <input data-testid="in"
        type="color"
        value={selector.current}
        onChange={({ target }) => dispatch(({ type: HISTORY, payload: target.value }))}
      />
      <div data-testid="divi"
        style={{ backgroundColor: selector.current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
