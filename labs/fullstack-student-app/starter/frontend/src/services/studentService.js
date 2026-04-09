const API = "http://localhost:8080/api/students";

// TODO: Implement each function using fetch(API)
// Each function should return fetch(...).then(r => r.json())

export const getAll = () => {
  // TODO: fetch(API).then(r => r.json())
};

export const getById = (id) => {
  // TODO: fetch(`${API}/${id}`).then(r => r.json())
};

export const create = (student) => {
  // TODO: fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(student) }).then(r => r.json())
};

export const update = (id, student) => {
  // TODO: fetch(`${API}/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(student) }).then(r => r.json())
};

export const remove = (id) => {
  // TODO: fetch(`${API}/${id}`, { method: "DELETE" })
};

export const searchByName = (name) => {
  // TODO: fetch(`${API}/search?name=${name}`).then(r => r.json())
};

export const filterByDept = (dept) => {
  // TODO: fetch(`${API}/department/${dept}`).then(r => r.json())
};
