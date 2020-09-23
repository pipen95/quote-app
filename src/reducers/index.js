import { FETCH_QUOTES } from '../actions';

const initialState = { quotes: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        quotes: action.quote,
        author: action.author
      };

    default:
      return state;
  }
};
