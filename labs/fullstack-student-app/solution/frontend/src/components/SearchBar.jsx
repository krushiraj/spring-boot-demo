import React from 'react';

function SearchBar({ searchTerm, onSearchChange, department, onDepartmentChange, departments }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={function (e) { onSearchChange(e.target.value); }}
      />
      <select
        value={department}
        onChange={function (e) { onDepartmentChange(e.target.value); }}
      >
        <option value="">All Departments</option>
        {departments.map(function (dept) {
          return <option key={dept} value={dept}>{dept}</option>;
        })}
      </select>
    </div>
  );
}

export default SearchBar;
