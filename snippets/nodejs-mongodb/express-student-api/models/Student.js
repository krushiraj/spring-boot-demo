// models/Student.js — Equivalent to Student.java @Document model in Spring Boot
//
// Spring Boot:  @Document(collection = "students") public class Student { ... }
// Express:      We define the collection name and validation here

const { ObjectId } = require("mongodb");
const { getDB } = require("../db");

const COLLECTION = "students";

function getCollection() {
  return getDB().collection(COLLECTION);
}

// Validate student fields (equivalent to @Indexed, validation annotations)
function validate(student) {
  const errors = [];
  if (!student.name || student.name.trim() === "") errors.push("name is required");
  if (!student.rollNumber || student.rollNumber.trim() === "") errors.push("rollNumber is required");
  if (!student.department || student.department.trim() === "") errors.push("department is required");
  if (!student.email || student.email.trim() === "") errors.push("email is required");
  return errors;
}

// Create a clean student object (equivalent to the Student constructor)
function createStudentDoc(data) {
  return {
    name: data.name.trim(),
    rollNumber: data.rollNumber.trim(),
    department: data.department.trim(),
    email: data.email.trim(),
  };
}

module.exports = { getCollection, validate, createStudentDoc, ObjectId, COLLECTION };
