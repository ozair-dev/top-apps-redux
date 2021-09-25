import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { appsSelector } from './appsSlice';
import AppRow from './AppRow';

const Apps = () => {
  const apps = useSelector(appsSelector);
  return (
    <table className="apps">
      <thead>
        <tr>
          <th>Name</th>
          <th>Catagory</th>
          <th>Created</th>
          <th>Users</th>
          <th>Downloads</th>
          <th colSpan="2"/>
        </tr>
      </thead>
      <tbody>
        {apps.map((id) => (
          <AppRow id={id} key={id} />
        ))}
      </tbody>
    </table>
  );
};

export default Apps;
