import React from "react";
import PropTypes from 'prop-types';

const Book = (props) => {
  const {title, author} = props;
  return (
    <div>
      <span>Action</span>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <div>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
      <div>
        <span>64%</span>
        <span>Completed</span>
      </div>
      <div>
        <h3>CURRENT CHAPTER</h3>
        <span>Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
    
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;