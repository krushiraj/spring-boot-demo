const API_URL = 'http://localhost:8080/api/students';

/**
 * Get all students from the backend API.
 * @returns {Promise<Array>} array of student objects
 */
export async function getAllStudents() {
  // TODO: Fetch all students from API_URL
  // Hint: Use fetch(API_URL) and return response.json()
  return [];
}

/**
 * Get a single student by ID.
 * @param {string} id - the student ID
 * @returns {Promise<Object>} the student object
 */
export async function getStudentById(id) {
  // TODO: Fetch a student by ID from API_URL/{id}
  // Hint: Use fetch(`${API_URL}/${id}`) and return response.json()
  return {};
}

/**
 * Create a new student.
 * @param {Object} student - the student data { name, rollNumber, department, email }
 * @returns {Promise<Object>} the created student
 */
export async function createStudent(student) {
  // TODO: Send a POST request to API_URL with the student data
  // Hint: Use fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(student) })
  // Hint: Return response.json()
  return {};
}

/**
 * Update an existing student.
 * @param {string} id - the student ID
 * @param {Object} student - the updated student data
 * @returns {Promise<Object>} the updated student
 */
export async function updateStudent(id, student) {
  // TODO: Send a PUT request to API_URL/{id} with the student data
  // Hint: Use fetch(`${API_URL}/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(student) })
  // Hint: Return response.json()
  return {};
}

/**
 * Delete a student by ID.
 * @param {string} id - the student ID
 * @returns {Promise<void>}
 */
export async function deleteStudent(id) {
  // TODO: Send a DELETE request to API_URL/{id}
  // Hint: Use fetch(`${API_URL}/${id}`, { method: 'DELETE' })
}

/**
 * Search students by name.
 * @param {string} name - the search query
 * @returns {Promise<Array>} array of matching students
 */
export async function searchByName(name) {
  // TODO: Fetch students matching the name from API_URL/search?name={name}
  // Hint: Use fetch(`${API_URL}/search?name=${name}`) and return response.json()
  return [];
}

/**
 * Filter students by department.
 * @param {string} department - the department name
 * @returns {Promise<Array>} array of students in the department
 */
export async function filterByDepartment(department) {
  // TODO: Fetch students by department from API_URL/department/{department}
  // Hint: Use fetch(`${API_URL}/department/${department}`) and return response.json()
  return [];
}
