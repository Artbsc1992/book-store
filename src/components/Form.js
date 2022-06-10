import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './form.css';

const BooksForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const updateTitle = (e) => setTitle(e.target.value);
  const updateAuthor = (e) => setAuthor(e.target.value);

  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      author,
      title,
      id: new Date().getMilliseconds().toString(),
      category: 'Action',
    };
    dispatch(addBook(newBook));
  };
  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      <form onSubmit={addNewBook}>
        <input type="text" name="title" placeholder="Book Title" onChange={updateTitle} />
        {' '}
        <input type="text" name="author" placeholder="Author" onChange={updateAuthor} />
        {' '}
        <button type="submit" className="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BooksForm;
