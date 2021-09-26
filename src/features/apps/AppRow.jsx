import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cs from 'classnames';
import { MdDateRange, MdDelete } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { BiRocket } from 'react-icons/bi';
import { selectAppById, downloadsUpdated, usersUpdated, toggledFavourite, deletedApp } from './appsSlice';

const AppRow = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const { name, icon, catagory, created, downloads, users, favourite } = useSelector((state) => selectAppById(state.apps, id));
  return (
    <tr>
      <td className="app-name">
        <img src={icon} alt="facebook-icon" />
        <p>{name}</p>
      </td>
      <td>{catagory}</td>
      <td>
        {created}
        <MdDateRange className="calender-icon" />
      </td>
      <td
        className="editable"
        onClick={() => {
          const newUsers = prompt('Enter users', users);
          if (newUsers) {
            if (/^\d+(.\d+)?(B|M)$/i.test(newUsers)) {
              dispatch(usersUpdated({id, users: newUsers}));
            } else {
              alert('Invalid Value');
            }
          }
        }}
      >
        {users}
        <FaUsers className="users-icon" />
      </td>
      <td
        className="editable"
        onClick={() => {
          const newDownloads = prompt('Enter downloads', downloads);
          if (newDownloads) {
            if (/^\d+(.\d+)?(B|M)$/i.test(newDownloads)) {
              dispatch(downloadsUpdated({id, downloads: newDownloads}));
            } else {
              alert('Invalid Value');
            }
          }
        }}
      >
        {downloads}
        <FiDownload className="download-icon" />
      </td>
      <td>
        <button
          type="button"
          className={cs('favourite-button', { favourite })}
          onClick={() => dispatch(toggledFavourite({ id }))}
        >
          <BiRocket />
        </button>
      </td>
      <td>
        <button
          type="button"
          className="delete-button"
          onClick={() => {
            if (confirm('Are you sure?')) {
              dispatch(deletedApp({ id }));
            }
          }}
        >
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};
export default AppRow;
// "https://cdn-icons-png.flaticon.com/512/124/124010.png"