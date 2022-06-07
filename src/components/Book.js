import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import './books.css';

const Book = (props) => {
  const { book } = props;
  const { title, author } = book;
  const dispatch = useDispatch();
  const removeBook = () => {
    dispatch(deleteBook(book));
  };
  return (
    <div className="books">
      <ul>
        <span>Action</span>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={removeBook}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </ul>
      <div>
        <span>64%</span>
        <span>Completed</span>
      </div>
      <div className="update">
        <h3>CURRENT CHAPTER</h3>
        <span>Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>

  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
