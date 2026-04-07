const API_URL = 'http://localhost:8080/api/students';

export async function getAllStudents() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function getStudentById(id) {
  const response = await fetch(API_URL + '/' + id);
  return response.json();
}

export async function createStudent(student) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  return response.json();
}

export async function updateStudent(id, student) {
  const response = await fetch(API_URL + '/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  return response.json();
}

export async function deleteStudent(id) {
  await fetch(API_URL + '/' + id, { method: 'DELETE' });
}

export async function searchByName(name) {
  const response = await fetch(API_URL + '/search?name=' + encodeURIComponent(name));
  return response.json();
}

export async function filterByDepartment(department) {
  const response = await fetch(API_URL + '/department/' + encodeURIComponent(department));
  return response.json();
}
