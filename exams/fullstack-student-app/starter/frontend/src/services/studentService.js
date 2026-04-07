// ============================================================
// Student Service — API calls to the backend
// ============================================================
// Base URL for all API requests:
const API_URL = "http://localhost:8080/api/students";

// ------------------------------------------------------------
// 1. getAllStudents()
// - Makes a GET request to API_URL
// - Returns the parsed JSON array of students
//
// Hint:
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   return data;
// ------------------------------------------------------------
export const getAllStudents = async () => {
  // TODO: Implement this function

};

// ------------------------------------------------------------
// 2. getStudentById(id)
// - Makes a GET request to API_URL + "/" + id
// - Returns the parsed JSON object (single student)
//
// Hint:
//   const response = await fetch(`${API_URL}/${id}`);
//   const data = await response.json();
//   return data;
// ------------------------------------------------------------
export const getStudentById = async (id) => {
  // TODO: Implement this function

};

// ------------------------------------------------------------
// 3. createStudent(student)
// - Makes a POST request to API_URL
// - Sends the student object as JSON in the request body
// - Returns the created student from the response
//
// Hint:
//   const response = await fetch(API_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(student),
//   });
//   const data = await response.json();
//   return data;
// ------------------------------------------------------------
export const createStudent = async (student) => {
  // TODO: Implement this function

};

// ------------------------------------------------------------
// 4. updateStudent(id, student)
// - Makes a PUT request to API_URL + "/" + id
// - Sends the updated student object as JSON in the body
// - Returns the updated student from the response
//
// Hint:
//   const response = await fetch(`${API_URL}/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(student),
//   });
//   const data = await response.json();
//   return data;
// ------------------------------------------------------------
export const updateStudent = async (id, student) => {
  // TODO: Implement this function

};

// ------------------------------------------------------------
// 5. deleteStudent(id)
// - Makes a DELETE request to API_URL + "/" + id
// - No need to return anything
//
// Hint:
//   await fetch(`${API_URL}/${id}`, {
//     method: "DELETE",
//   });
// ------------------------------------------------------------
export const deleteStudent = async (id) => {
  // TODO: Implement this function

};

// ------------------------------------------------------------
// 6. searchStudents(name)
// - Makes a GET request to API_URL + "/search?name=" + name
// - Returns the parsed JSON array of matching students
//
// Hint:
//   const response = await fetch(`${API_URL}/search?name=${name}`);
//   const data = await response.json();
//   return data;
// ------------------------------------------------------------
export const searchStudents = async (name) => {
  // TODO: Implement this function

};

// ------------------------------------------------------------
// 7. getByDepartment(department)
// - Makes a GET request to API_URL + "/department/" + department
// - Returns the parsed JSON array of students in that department
//
// Hint:
//   const response = await fetch(`${API_URL}/department/${department}`);
//   const data = await response.json();
//   return data;
// ------------------------------------------------------------
export const getByDepartment = async (department) => {
  // TODO: Implement this function

};
