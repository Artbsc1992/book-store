import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { deleteBook } from '../redux/books/books';
import './books.css';

const Book = (props) => {
  const { book } = props;
  const { title, author } = book;
  const dispatch = useDispatch();
  const removeBook = () => {
    dispatch(deleteBook(book));
  };
  const percentile = Math.round(Math.random() * 100);
  return (
    <div className="books">
      <ul>
        <span>Action</span>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div>
          <button type="button" className="book-button">Comments</button>
          |
          {' '}
          <button type="button" className="book-button" onClick={removeBook}>Remove</button>
          |
          {' '}
          <button type="button" className="book-button">Edit</button>
        </div>
      </ul>
      <div className="wheel">
        <CircularProgressBar
          colorCircle="#e6e6e6"
          colorSlice="#0290ff"
          number={false}
          percent={percentile}
          size={75}
          stroke={15}
        />
        <span className="percentage">
          {percentile}
          %
        </span>
        <span className="completed">Completed</span>
      </div>
      <div className="update">
        <h3>CURRENT CHAPTER</h3>
        <span>Chapter 17</span>
        <button type="button" className="progress">UPDATE PROGRESS</button>
      </div>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,

};

export default Book;
