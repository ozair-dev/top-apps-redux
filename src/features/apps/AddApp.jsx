import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import cs from 'classnames';
import { appAdded, selectCatagories } from './appsSlice';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  icon: yup.string().url('Icon must be a valid url').required('Icon is required'),
  catagory: yup.string().required('Catagory is required'),
  created: yup.number().required(),
  downloads: yup
    .string()
    .matches(/^\d+(.\d+)?(B|M)$/i, 'Invalid input')
    .required('Downloads is required'),
  users: yup
    .string()
    .matches(/^\d+(.\d+)?(B|M)$/i, 'Invalid input')
    .required('Users is required'),
});

const AddApp = (props) => {
  const dispatch = useDispatch();
  const catagories = useSelector(selectCatagories);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(appAdded(data));
    reset();
  };

  const { formOpen: addApp } = { ...props };
  return (
    <form className={cs('add-app-form', { open: addApp })} onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('name')} placeholder="Enter App's Name" autoComplete="off" />
      {errors.name?.message && <p className="warning">{errors.name.message}</p>}
      <label>Icon</label>
      <input {...register('icon')} placeholder="Paste App's Icon Link" autoComplete="off" />
      {errors.icon?.message && <p className="warning">{errors.icon.message}</p>}
      <label>Catagory</label>
      <input
        {...register('catagory')}
        list="catagories"
        placeholder="Choose Or Enter A New Catagory"
        autoComplete="off"
      />
      {errors.catagory?.message && <p className="warning">{errors.catagory.message}</p>}
      <datalist id="catagories">
        {catagories.map((catagory, index) => (
          <option value={catagory} key={index} />
        ))}
      </datalist>
      <label>Created</label>
      <input {...register('created')} placeholder="Year Created" autoComplete="off" />
      {errors.created?.message && <p className="warning">{errors.created.message}</p>}
      <label>Downloads</label>
      <input {...register('downloads')} placeholder="eg, 5B or 850M" autoComplete="off" />
      {errors.downloads?.message && <p className="warning">{errors.downloads.message}</p>}
      <label>Users</label>
      <input {...register('users')} placeholder="eg, 5B or 850M" autoComplete="off" />
      {errors.users?.message && <p className="warning">{errors.users.message}</p>}

      <button className="submit-button" type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddApp;
