const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const deleteBook = (book) => ({
  type: DELETE_BOOK,
  book,
});

const showBooks = [
  {
    title: 'Bones',
    author: 'Roberto Bolaños',
    id: '1',
  },
  {
    title: 'El principito',
    author: 'no se',
    id: '2',
  },
];

const reducer = (state = showBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export { addBook, deleteBook };
export default reducer;
