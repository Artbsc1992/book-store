import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import bookCategories from './categories/categories';

const reducers = combineReducers({ book: booksReducer, category: bookCategories });

const store = configureStore({ reducer: reducers });

export default store;
