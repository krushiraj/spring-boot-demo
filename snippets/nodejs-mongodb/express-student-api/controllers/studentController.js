// controllers/studentController.js
// Equivalent to StudentController.java (@RestController) in Spring Boot
//
// Spring Boot:  @GetMapping → public ResponseEntity<List<Student>> getAll()
// Express:      exports.getAll = async (req, res) => { ... }

const { getCollection, validate, createStudentDoc, ObjectId } = require("../models/Student");

// GET /api/students — equivalent to @GetMapping
exports.getAll = async (req, res) => {
  try {
    const students = await getCollection().find({}).toArray();
    res.json(students);  // 200 OK (default)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/students/:id — equivalent to @GetMapping("/{id}")
exports.getById = async (req, res) => {
  try {
    const student = await getCollection().findOne({ _id: new ObjectId(req.params.id) });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });  // 404
    }
    res.json(student);  // 200
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/students — equivalent to @PostMapping with @RequestBody
exports.create = async (req, res) => {
  try {
    const errors = validate(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });  // 400 Bad Request
    }

    // Check for duplicate rollNumber (equivalent to @Indexed(unique=true))
    const existing = await getCollection().findOne({ rollNumber: req.body.rollNumber.trim() });
    if (existing) {
      return res.status(409).json({ error: "Student with this rollNumber already exists" });  // 409 Conflict
    }

    const doc = createStudentDoc(req.body);
    const result = await getCollection().insertOne(doc);
    res.status(201).json({ ...doc, _id: result.insertedId });  // 201 Created
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/students/:id — equivalent to @PutMapping("/{id}")
exports.update = async (req, res) => {
  try {
    const errors = validate(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });  // 400
    }

    const doc = createStudentDoc(req.body);
    const result = await getCollection().updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: doc }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Student not found" });  // 404
    }

    const updated = await getCollection().findOne({ _id: new ObjectId(req.params.id) });
    res.json(updated);  // 200
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/students/:id — equivalent to @DeleteMapping("/{id}")
exports.remove = async (req, res) => {
  try {
    const result = await getCollection().deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Student not found" });  // 404
    }
    res.status(204).send();  // 204 No Content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/students/search?name=xxx — equivalent to @GetMapping("/search") + @RequestParam
exports.searchByName = async (req, res) => {
  try {
    const name = req.query.name || "";
    const students = await getCollection()
      .find({ name: { $regex: name, $options: "i" } })  // case-insensitive regex
      .toArray();
    res.json(students);  // 200
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/students/department/:dept — equivalent to @GetMapping("/department/{dept}")
exports.getByDepartment = async (req, res) => {
  try {
    const students = await getCollection()
      .find({ department: req.params.dept })
      .toArray();
    res.json(students);  // 200
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
