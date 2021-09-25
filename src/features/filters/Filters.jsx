import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import cs from 'classnames';
import { updatedFilters } from './filtersSlice';

const Filters = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { formOpen: applyFilters } = { ...props };
  return (
    <form
      className={cs('apply-filters-form', { open: applyFilters })}
      onSubmit={handleSubmit((data) => dispatch(updatedFilters(data)))}
    >
      <label>Name</label>
      <input {...register('name')} placeholder="Enter App's Name" autoComplete="off" />
      <label>Catagory</label>
      <input {...register('catagory')} placeholder="Select Catagory" autoComplete="off" />
      <div className="min-max-div">
        <p>Downloads</p>
        <div>
          <label>Min</label>
          <input {...register('downloadsMin')} placeholder="Min Downloads" autoComplete="off" />
          <label>Max</label>
          <input {...register('downloadsMax')} placeholder="Max Downloads" autoComplete="off" />
        </div>
      </div>

      <div className="min-max-div">
        <p>Users</p>
        <div>
          <label>Min</label>
          <input {...register('usersMin')} placeholder="Min Users" autoComplete="off" />
          <label>Max</label>
          <input {...register('usersMax')} placeholder="Max Users" autoComplete="off" />
        </div>
      </div>
      <button className="submit-button" type="submit">
        Apply
      </button>
    </form>
  );
};

export default Filters;
