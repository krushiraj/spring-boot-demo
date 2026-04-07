# Full Stack Development Lab - Semester End Examination

**Course Code:** U24PC431IT | **Duration:** 3 Hours | **Max Marks:** 50

---

## Instructions

- Project folder is on your Desktop at `exam/starter/`
- It has two sub-folders: `backend/` (Spring Boot) and `frontend/` (React)
- All dependencies are pre-installed — do NOT run `npm install` or download anything
- MongoDB is running on `localhost:27017` with sample data pre-loaded
- Backend runs on port **8080**, Frontend runs on port **5173**
- Open **TWO** terminals:
  - Terminal 1: `cd backend && mvn spring-boot:run`
  - Terminal 2: `cd frontend && npm run dev`
- Do NOT modify any backend files — the API is complete and working
- You only need to write code in the `frontend/src/` folder

---

## Question

Build a **Student Management System** frontend using React that connects to a pre-built Spring Boot REST API backend.

**Student fields:** `name`, `rollNumber`, `department`, `email`

### API Endpoints Available (Backend is already running)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get student by ID |
| POST | `/api/students` | Create a new student |
| PUT | `/api/students/{id}` | Update a student |
| DELETE | `/api/students/{id}` | Delete a student |
| GET | `/api/students/search?name={name}` | Search students by name |
| GET | `/api/students/department/{dept}` | Filter by department |

---

### What is provided (DO NOT modify these):

- Complete backend REST API (just run it)
- `src/App.jsx` — routing setup with React Router
- `src/components/Navbar.jsx` — navigation bar
- `src/App.css` — complete styling for all components
- `src/main.jsx` — React entry point

### What you need to implement:

---

#### Part A: API Service Layer (10 marks)

**File:** `src/services/studentService.js`

Complete all the fetch calls to communicate with the backend API. Each function has hints showing the exact fetch pattern to use.

**Marking:**
- getAllStudents — 1 mark
- getStudentById — 1 mark
- createStudent (POST with headers and body) — 2 marks
- updateStudent (PUT with headers and body) — 2 marks
- deleteStudent (DELETE) — 1 mark
- searchStudents (query parameter) — 1.5 marks
- getByDepartment (path parameter) — 1.5 marks

---

#### Part B: StudentList Page (15 marks)

**File:** `src/pages/StudentList.jsx`

Build the main page that displays all students.

**Requirements:**
- Load and display all students on page mount (3 marks)
- Show a loading message while data is being fetched (2 marks)
- Integrate SearchBar component with search and filter handlers (4 marks)
- Handle delete with confirmation and list refresh (3 marks)
- Render StudentCard for each student (3 marks)

---

#### Part C: AddStudent Page (15 marks)

**File:** `src/pages/AddStudent.jsx`

Build a form to create a new student.

**Requirements:**
- Controlled form with state for all 4 fields (3 marks)
- handleChange using spread operator pattern (3 marks)
- handleSubmit with preventDefault, API call, and navigation (4 marks)
- Proper form layout with labels and inputs (3 marks)
- Department dropdown with CSE, ECE, MECH, CIVIL, EEE options (2 marks)

---

#### Part D: StudentCard Component (10 marks)

**File:** `src/components/StudentCard.jsx`

Build a reusable card component for displaying student information.

**Requirements:**
- Display all student fields: name, rollNumber, department, email (3 marks)
- Edit button that navigates to `/edit/{id}` using useNavigate (3 marks)
- Delete button that calls onDelete prop (2 marks)
- Proper CSS class usage matching App.css (2 marks)

---

### Bonus (if time permits):

- **SearchBar Component** (`src/components/SearchBar.jsx`) — search input, department filter dropdown, clear button
- **EditStudent Page** (`src/pages/EditStudent.jsx`) — load existing student data, update on submit

---

## Evaluation Criteria

| Criteria | Marks |
|----------|-------|
| Part A: API Service Layer | 10 |
| Part B: StudentList Page | 15 |
| Part C: AddStudent Page | 15 |
| Part D: StudentCard Component | 10 |
| **Total** | **50** |

**Partial marks** will be awarded for partially correct implementations.

---

## How to Test

1. Start the backend: `cd backend && mvn spring-boot:run`
   - Wait until you see "Started StudentCrudApplication"
   - Verify API works: open `http://localhost:8080/api/students` in browser — you should see 5 students in JSON

2. Start the frontend: `cd frontend && npm run dev`
   - Open `http://localhost:5173` in browser

3. Test checklist:
   - [ ] Homepage loads and displays 5 sample students as cards
   - [ ] Each card shows name, roll number, department, and email
   - [ ] Clicking "Delete" on a card removes the student and refreshes the list
   - [ ] Clicking "Add Student" in navbar opens the add form
   - [ ] Filling the form and clicking "Add Student" creates a student and redirects to homepage
   - [ ] New student appears in the list
   - [ ] Search bar filters students by name
   - [ ] Department dropdown filters students by department

---

**Good luck!**
