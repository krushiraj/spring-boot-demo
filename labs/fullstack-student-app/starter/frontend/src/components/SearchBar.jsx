import React from 'react';

/**
 * SearchBar component - provides search by name and filter by department.
 *
 * Props:
 *   - searchTerm (string): current search input value
 *   - onSearchChange (function): called when search input changes, receives the new value
 *   - department (string): currently selected department filter
 *   - onDepartmentChange (function): called when department filter changes, receives the new value
 *   - departments (array of strings): list of department options to show in the dropdown
 */
function SearchBar({ searchTerm, onSearchChange, department, onDepartmentChange, departments }) {
  // TODO: Render a search bar with:
  // 1. A text input for searching by name
  //    - value={searchTerm}
  //    - onChange should call onSearchChange with e.target.value
  //    - placeholder="Search by name..."
  // 2. A <select> dropdown for filtering by department
  //    - value={department}
  //    - onChange should call onDepartmentChange with e.target.value
  //    - First option: <option value="">All Departments</option>
  //    - Map over departments array to create <option> elements
  // Hint: Wrap both in a <div className="search-bar">

  return (
    <div className="search-bar">
      {/* TODO: Add search input and department select here */}
    </div>
  );
}

export default SearchBar;
