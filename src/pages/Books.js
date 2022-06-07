import { useSelector } from 'react-redux';
import Book from '../components/Book';
import BooksForm from '../components/Form';

const Books = () => {
  const books = useSelector((state) => state.book);
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
