// routes/studentRoutes.js
// Equivalent to @RequestMapping("/api/students") in Spring Boot
//
// Spring Boot:  @RestController @RequestMapping("/api/students")
// Express:      router = express.Router() mounted at /api/students

const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

// Map routes to controller methods
// Spring Boot equivalent annotations shown in comments

router.get("/",              controller.getAll);           // @GetMapping
router.get("/search",        controller.searchByName);     // @GetMapping("/search") + @RequestParam
router.get("/department/:dept", controller.getByDepartment); // @GetMapping("/department/{dept}")
router.get("/:id",           controller.getById);          // @GetMapping("/{id}")
router.post("/",             controller.create);           // @PostMapping
router.put("/:id",           controller.update);           // @PutMapping("/{id}")
router.delete("/:id",        controller.remove);           // @DeleteMapping("/{id}")

module.exports = router;
