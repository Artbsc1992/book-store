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

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export { addBook, deleteBook };
export default reducer;
