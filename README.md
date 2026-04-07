# Full Stack Development - Course Resource Repository

> **Vasavi College of Engineering (Autonomous), Hyderabad**
> Department of Information Technology | B.E. IV Semester | Academic Year 2025-26

This repository contains all teaching materials, lab experiments, code examples, and study resources for the **Full Stack Development** course — covering **Spring Boot**, **React**, **Node.js**, and **MongoDB**.

---

## Course Information

| | Theory (U24PC440IT) | Lab (U24PC431IT) |
|---|---|---|
| **Credits** | 3 | 1 |
| **Hours/Week** | 3:0:0 | 0:0:2 |
| **CIE Marks** | 40 | 30 |
| **SEE Marks** | 60 | 50 |

### Topics Covered in This Repo

| Topic | Theory Unit | Lab Section |
|-------|------------|-------------|
| Spring Boot (Introduction, Architecture, Spring Initializr, DI, Web Apps, DB Connectivity) | Unit III | Section IV |
| React (JSX, Components, Props, State, Events, Forms, SPA) | Unit IV | Section V |
| Node.js (Events, Listeners, Timers, Callbacks) | Unit V | Section V |
| MongoDB (Introduction, CRUD, Access from Node.js) | Unit V | Section IV & V |

> **Note:** Units I (HTML/CSS) and II (JavaScript/XML) and Bootstrap are covered separately and not part of this repo.

---

## Repository Structure

```
spring-boot-demo/
|
|-- PREREQUISITES.md              # Software setup guide (START HERE)
|-- README.md                     # This file
|
|-- docs/                         # Theory notes and study material
|   |-- teaching-plan.md          # Session-by-session teaching checklist
|   |-- springboot/               # Spring Boot theory (5 topics)
|   |-- react/                    # React theory (7 topics)
|   |-- nodejs-mongodb/           # Node.js & MongoDB theory (4 topics)
|   +-- diagrams/                 # Architecture and flow diagrams
|
|-- labs/                         # Lab experiments with instructions
|   |-- lab-overview.md           # All experiments listed
|   |-- springboot-login-register/    # Exp: Registration & Login
|   |-- springboot-crud-mongodb/      # Exp: CRUD operations with MongoDB
|   +-- fullstack-student-app/        # Exp: Full-stack app (Spring Boot + React + MongoDB)
|
|-- snippets/                     # Small code examples for live demos
|   |-- springboot/               # Spring Boot code snippets
|   |-- react/                    # React code snippets
|   +-- nodejs-mongodb/           # Node.js & MongoDB snippets
|
|-- presentations/                # Marp slide decks (exportable to PPTX)
|   |-- 01-springboot.md
|   |-- 02-react.md
|   +-- 03-nodejs-mongodb.md
|
|-- demo/                         # Spring Boot demo project (contacts app)
|-- spring-contacts-app/          # Spring Boot + React contacts app
+-- my-app/                       # React starter app (Vite)
```

---

## Getting Started

### For Students

1. **[Install all prerequisites](PREREQUISITES.md)** - Do this BEFORE coming to class
2. **[Check the lab overview](labs/lab-overview.md)** - See all experiments
3. **[Read theory docs](docs/)** - Study material organized by topic
4. **[Practice with snippets](snippets/)** - Run small examples on your own

### For Instructor

1. **[Teaching Plan](docs/teaching-plan.md)** - Session-by-session guide with checklist
2. **[Presentations](presentations/)** - Slide decks with speaker notes
3. **[Lab Experiments](labs/)** - Each has starter code + solution + instructions

---

## Quick Links

### Theory Notes
- [Spring Boot Introduction](docs/springboot/01-introduction.md)
- [Spring Boot Architecture](docs/springboot/02-spring-initializr.md)
- [Dependency Injection](docs/springboot/03-dependency-injection.md)
- [Building Web Applications](docs/springboot/04-web-application.md)
- [Database Connectivity](docs/springboot/05-database-connectivity.md)
- [Spring Boot Q&A](docs/springboot/qa.md)
- [React Introduction](docs/react/01-introduction.md)
- [React Q&A](docs/react/qa.md)
- [Node.js & MongoDB Q&A](docs/nodejs-mongodb/qa.md)

### Lab Experiments
- [Lab 1: Spring Boot Registration & Login](labs/springboot-login-register/)
- [Lab 2: Spring Boot CRUD with MongoDB](labs/springboot-crud-mongodb/)
- [Lab 3: Full-Stack Student Management App](labs/fullstack-student-app/)

---

## Tech Stack & Versions

| Technology | Version | Documentation |
|-----------|---------|---------------|
| Java (JDK) | 1.8 | [Eclipse Temurin](https://adoptium.net/) |
| Spring Boot | 2.7.18 | [Spring Boot 2.7.x Docs](https://docs.spring.io/spring-boot/docs/2.7.18/reference/html/) |
| Maven | 3.9.14 | [Maven Docs](https://maven.apache.org/guides/) |
| React | 18.3.x | [React Docs](https://react.dev/) |
| Node.js | 20.x LTS | [Node.js Docs](https://nodejs.org/docs/latest-v20.x/api/) |
| MongoDB | 7.0 | [MongoDB Manual](https://www.mongodb.com/docs/v7.0/manual/) |

---

## Application: Student Management System

The main project built across labs is a **Student Management System** with:

- **Backend:** Spring Boot 2.7.18 REST API
- **Frontend:** React 18 SPA
- **Database:** MongoDB 7.0

### Features
- Student registration (Name, Roll Number, Department, Email)
- View all students with search and filters
- Update student details
- Delete student records
- Responsive UI with React

---

## License

This repository is for educational use at Vasavi College of Engineering.
