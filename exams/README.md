# Exam Scaffolds - Instructor Guide

> **This folder is for the instructor only.** It contains pre-packaged exam starter projects and instructions to prepare lab machines for offline exams.

---

## Overview

During exams, students **do not have internet or git access**. They receive a pre-prepared project folder on their lab machine, implement the required functionality, and demonstrate/submit their work.

This folder contains ready-to-use exam scaffolds for all 3 lab experiment types:

| Scaffold | Folder | What's Given | What Students Implement |
|----------|--------|-------------|------------------------|
| Login & Register | `springboot-login-register/` | Model, Repository, Templates, CSS, Config skeleton | UserService, SecurityConfig, AuthController |
| CRUD with MongoDB | `springboot-crud-mongodb/` | Model, application.properties | Repository, Service, Controller (full REST API) |
| Full-Stack App | `fullstack-student-app/` | Backend (complete), Frontend skeleton (App.jsx, CSS, Navbar) | React components, API service, pages |

Each scaffold has:
- `question.md` — The exam question paper (print and distribute, or project on screen)
- `starter/` — The project folder students work in
- Complete instructions that work **without internet**

---

## Preparing Lab Machines (Do This BEFORE Exam Day)

### Step 1: Prepare on Your Machine (with internet)

```bash
# Clone the repo (or pull latest)
git clone https://github.com/krushiraj/spring-boot-demo.git
cd spring-boot-demo/exams
```

### Step 2: Pre-download Maven Dependencies

For each Spring Boot exam scaffold, run `mvn install` to cache all dependencies in your local `.m2` repository:

```bash
# Login/Register scaffold
cd springboot-login-register/starter
mvn dependency:resolve
mvn spring-boot:run   # Let it start, then Ctrl+C — this ensures all deps are cached
cd ../..

# CRUD scaffold
cd springboot-crud-mongodb/starter
mvn dependency:resolve
mvn spring-boot:run
cd ../..
```

This downloads all required JARs to `~/.m2/repository/`.

### Step 3: Pre-install Node.js Dependencies (for Full-Stack exam)

```bash
cd fullstack-student-app/starter/frontend
npm install
cd ../../..
```

This creates the `node_modules/` folder inside the frontend project.

### Step 4: Copy to Lab Machines

You need to copy **two things** to each lab machine:

#### Option A: USB Drive (Recommended)

1. Copy the exam scaffold folder (e.g., `springboot-crud-mongodb/starter/`) to USB
2. Copy your Maven cache: `~/.m2/repository/` to USB
3. On each lab machine:
   - Copy the starter folder to `C:\Users\student\Desktop\exam\` (or equivalent)
   - Copy the `.m2/repository/` to the student's home directory:
     - **Windows:** `C:\Users\<username>\.m2\repository\`
     - **Linux/Mac:** `~/.m2/repository/`
4. For full-stack exam: also copy the frontend folder (with `node_modules/` included)

#### Option B: Shared Network Drive

1. Place the exam folder + `.m2` repository on a shared network drive
2. Have students copy from the network drive to their local machine at the start of the exam
3. Provide a batch script or instructions for copying `.m2`

#### Option C: Pre-image the Lab Machines

If you have admin access:
1. Set up one machine completely (project + `.m2` + `node_modules`)
2. Clone the disk image to all lab machines

### Step 5: Verify on a Test Machine

Before exam day, verify on at least one lab machine:

```bash
# Navigate to the exam project
cd Desktop/exam/starter

# For Spring Boot exams — this should work WITHOUT internet
mvn spring-boot:run

# For React exams
cd frontend
npm run dev
```

If `mvn spring-boot:run` tries to download anything and fails, the `.m2` cache is incomplete. Go back to Step 2 and re-resolve dependencies.

---

## Exam Day Checklist

### Before Students Arrive
- [ ] Exam project folder is on each machine's Desktop
- [ ] Maven `.m2/repository` is copied to each machine's user home
- [ ] MongoDB is running on each machine (`mongosh` connects)
- [ ] JDK 1.8 is available (`java -version`)
- [ ] Maven is available (`mvn -version`)
- [ ] Node.js is available for full-stack exam (`node -v`)
- [ ] IDE/editor is installed (VS Code / Windsurf / IntelliJ)
- [ ] Print or project the `question.md` for the chosen exam

### Distribute to Students
- [ ] Tell students the project folder location (e.g., `Desktop/exam/starter`)
- [ ] Distribute printed question paper OR project `question.md` on screen
- [ ] Remind them: all work inside the `starter/` folder, no internet needed

### During the Exam
- Students open the project in their IDE
- They read `question.md` and implement the required functionality
- They test by running the application:
  - Spring Boot: `mvn spring-boot:run` → test at `http://localhost:8080`
  - React: `npm run dev` → test at `http://localhost:5173`
- They can verify data in MongoDB using `mongosh`

### Collecting Submissions
- Students can zip their `starter/` folder and submit via USB/network share
- Or demonstrate their running application to the evaluator

---

## Choosing an Exam Scaffold

| Exam Type | Difficulty | Duration | Best For |
|-----------|-----------|----------|----------|
| Login & Register | Medium | 2 hours | Testing Spring Security, Thymeleaf, MVC pattern |
| CRUD with MongoDB | Easy-Medium | 1.5 hours | Testing REST API, Spring Data, MongoDB operations |
| Full-Stack App | Hard | 2.5-3 hours | Testing full-stack integration, React + Spring Boot |

You can also **mix and match** — e.g., give the CRUD scaffold as the primary question and add bonus marks for implementing search/filter.

---

## Customizing the Exam

To create a different exam (e.g., different entity instead of Student):

1. Copy the scaffold folder
2. Rename the entity (e.g., Student → Book, Product, Employee)
3. Update the model fields
4. Update `question.md` with the new requirements
5. Re-run `mvn dependency:resolve` (dependencies don't change, just code)

---

## Troubleshooting on Exam Day

| Problem | Solution |
|---------|----------|
| `mvn` tries to download and fails | `.m2/repository` not copied correctly. Copy it from your USB to the student's home directory. |
| MongoDB not running | Start it: Windows `net start MongoDB`, Linux `sudo systemctl start mongod` |
| Port 8080 in use | Another student's app is still running. Kill it or change port in `application.properties` |
| `npm run dev` fails | `node_modules` not present. Copy the pre-installed `node_modules/` folder from USB. |
| Student accidentally deleted a file | Copy fresh from USB/network share |
| IDE not recognizing Java | Set `JAVA_HOME` environment variable to JDK 1.8 path |
