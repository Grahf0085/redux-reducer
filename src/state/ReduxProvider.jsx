
import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

const ReduxContext = createContext();

// eslint-disable-next-line react/prop-types
export const ReduxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReduxContext.Provider value={{ state, dispatch }}>
      {children}
    </ReduxContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(ReduxContext);
  return dispatch;
};

export const useSelector = () => {
  const { state } = useContext(ReduxContext);
  return state;
};
