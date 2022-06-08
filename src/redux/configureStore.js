import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import bookCategories from './categories/categories';

const reducers = combineReducers({ book: booksReducer, category: bookCategories });

const store = configureStore({ reducer: reducers }, applyMiddleware(thunk));

export default store;
