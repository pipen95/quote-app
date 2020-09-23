export const FETCH_QUOTES = 'FETCH_QUOTES';

export const fetchQuotes = () => dispatch => {
  fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(quotes =>
      dispatch({
        type: FETCH_QUOTES,
        quote: quotes.content,
        author: quotes.author
      })
    );
};
