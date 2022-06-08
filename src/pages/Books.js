import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import BooksForm from '../components/Form';
import { loadBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(loadBooks);
  },[]);
  return (
    <>
      <div>
        {books && books.map(
          (book) => <Book book={book} key={book.id} />,
        )}
      </div>
      <div>
        <BooksForm />
      </div>
    </>
  );
};

export default Books;
