const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const BOOKS_LOADED = 'bookstore/books/BOOKS_LOADED';

const loadBooks = async (dispatch) => {
  const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JGms9szFN36yhxA4pKxo/books');
  const json = await result.json();
  console.log(json)
  const books = Object.keys(json).map((key) => ({
    id: key,
    ...json[key][0],
  }));
  dispatch({ type: BOOKS_LOADED, books });
};

const addBook = (book) => async function addBookApi(dispatch) {
  const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JGms9szFN36yhxA4pKxo/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      item_id: book.id,
      category: book.category,
      title: book.title,
      author: book.author,
    }),
  });
  if (result.ok) {
    dispatch({ type: ADD_BOOK, book });
  }
};

const deleteBook = (book) => async function deleteBookApi(dispatch) {
  const result = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JGms9szFN36yhxA4pKxo/books/${book.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      item_id: book.id,
    }),
  });
  if (result.ok) {
    dispatch({ type: DELETE_BOOK, book });
  }
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_LOADED:
      return action.books;
    case ADD_BOOK:
      return [...state, action.book];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export { addBook, deleteBook, loadBooks };
export default reducer;
