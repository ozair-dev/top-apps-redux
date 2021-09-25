import React, { useState, useEffect } from 'react';
import { BsPlus } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';
import cs from 'classnames';
import { AddApp } from '../apps';
import { Filters } from '../filters';

const Header = () => {
  const [formOpen, setFormOpen] = useState({
    addApp: false,
    applyFilters: false,
  });

  return (
    <div className="header">
      <p className="title">Top Free Apps</p>
      <button
        className={cs('add-app-toggle', { open: formOpen.addApp })}
        type="button"
        onClick={() => setFormOpen(({ addApp }) => ({ applyFilters: false, addApp: !addApp }))}
      >
        <BsPlus className="add-icon" />
        Add Apps
      </button>
      <AddApp formOpen={formOpen.addApp} />
      <button
        className={cs('apply-filters-toggle', { open: formOpen.applyFilters })}
        type="button"
        onClick={() => setFormOpen(({ applyFilters }) => ({ addApp: false, applyFilters: !applyFilters }))}
      >
        <FaFilter className="filter-icon" />
        Apply Filters
      </button>
      <Filters formOpen={formOpen.applyFilters} />
    </div>
  );
};

export default Header;
