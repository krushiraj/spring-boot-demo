// ============================================================
// SearchBar Component (Bonus)
// ============================================================
// This component provides search by name and filter by department.
//
// Props received:
//   - onSearch: function(searchTerm) — called when Search button is clicked
//   - onFilter: function(department) — called when department dropdown changes
//   - onClear: function() — called when Clear button is clicked
//
// Required imports:
//   import { useState } from 'react'
//
// Steps:
//   1. Create state: const [searchTerm, setSearchTerm] = useState('')
//   2. Create state: const [department, setDepartment] = useState('')
//   3. Render search input, department select, Search button, Clear button
//
// Event handlers:
//   - Search button onClick: onSearch(searchTerm)
//   - Select onChange: (e) => { setDepartment(e.target.value); onFilter(e.target.value); }
//   - Clear button onClick: { setSearchTerm(''); setDepartment(''); onClear(); }
//
// JSX Structure Hint:
//   <div className="search-bar">
//     <input
//       type="text"
//       placeholder="Search by name..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//     />
//     <button className="btn btn-primary" onClick={() => onSearch(searchTerm)}>
//       Search
//     </button>
//     <select value={department} onChange={(e) => { setDepartment(e.target.value); onFilter(e.target.value); }}>
//       <option value="">All Departments</option>
//       <option value="CSE">CSE</option>
//       <option value="ECE">ECE</option>
//       <option value="MECH">MECH</option>
//       <option value="CIVIL">CIVIL</option>
//       <option value="EEE">EEE</option>
//     </select>
//     <button className="btn btn-secondary" onClick={() => { setSearchTerm(''); setDepartment(''); onClear(); }}>
//       Clear
//     </button>
//   </div>
// ============================================================

// TODO: Add import for useState from 'react'


function SearchBar({ onSearch, onFilter, onClear }) {
  // TODO: Step 1 — Create state for searchTerm
  // TODO: Step 2 — Create state for department


  return (
    // TODO: Step 3 — Return the search bar JSX as described above
    <div>
      <p>Implement SearchBar component here</p>
    </div>
  )
}

export default SearchBar
