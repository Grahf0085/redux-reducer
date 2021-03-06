import { UNDO, REDO, HISTORY } from './actions';

const initialState = {
  before: [],
  current: '#3083DC',
  after: []
};

// eslint-disable-next-line max-len
const reducer = (state, action) => { 
  switch(action.type) {
    case UNDO:
      return { 
        after: [state.current, ...state.after], 
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1),
      };
    case REDO:
      return {
        after: state.after.slice(1),
        current: state.after[0],
        before: [...state.before, state.current],
      };
    case HISTORY:
      return {
        // eslint-disable-next-line max-len
        ...state, current: action.payload, before: [...state.before, state.current]
      };
    default:
      return state;
  }
};

export { initialState, reducer };
