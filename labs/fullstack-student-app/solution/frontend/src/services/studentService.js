const API = "http://localhost:8080/api/students";

export const getAll = () => fetch(API).then(r => r.json());

export const getById = (id) => fetch(`${API}/${id}`).then(r => r.json());

export const create = (student) =>
  fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(student) }).then(r => r.json());

export const update = (id, student) =>
  fetch(`${API}/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(student) }).then(r => r.json());

export const remove = (id) => fetch(`${API}/${id}`, { method: "DELETE" });

export const searchByName = (name) => fetch(`${API}/search?name=${name}`).then(r => r.json());

export const filterByDept = (dept) => fetch(`${API}/department/${dept}`).then(r => r.json());
