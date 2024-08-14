import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../src/redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not done">Not Done</option>
      </select>
    </div>
  );
};

export default Filter;
