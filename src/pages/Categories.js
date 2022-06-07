import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category);
  const showStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories">
      <button type="button" onClick={showStatus}>Check Status</button>
      <span>{status}</span>
    </div>
  );
};

export default Categories;
