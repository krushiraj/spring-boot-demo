# Spring Initializr and Project Setup

[Back to Spring Boot Topics](./)

---

## Table of Contents

- [What is Spring Initializr](#what-is-spring-initializr)
- [Using start.spring.io](#using-startspringio)
- [Project Metadata Explained](#project-metadata-explained)
- [Selecting Dependencies](#selecting-dependencies)
- [Generating and Importing the Project](#generating-and-importing-the-project)
- [Understanding the Generated Project Structure](#understanding-the-generated-project-structure)
- [Understanding pom.xml](#understanding-pomxml)
- [The Main Application Class](#the-main-application-class)
- [application.properties](#applicationproperties)
- [Running the Application](#running-the-application)
- [Key Takeaways](#key-takeaways)

---

## What is Spring Initializr

**Spring Initializr** is a web-based tool provided by the Spring team to quickly generate a Spring Boot project with the correct structure, dependencies, and configuration.

- **Website:** [https://start.spring.io](https://start.spring.io)
- **Purpose:** Eliminates manual project setup -- generates a ready-to-run project in seconds
- **Output:** A ZIP file containing a complete Maven or Gradle project

> Think of Spring Initializr as a "project generator" -- it creates the skeleton of your application so you can focus on writing business logic.

---

## Using start.spring.io

### Step-by-Step Instructions

#### Step 1: Open the Website

Go to [https://start.spring.io](https://start.spring.io) in your browser.

#### Step 2: Select Project Type

| Option | Choose |
|--------|--------|
| **Project** | Maven Project |
| **Language** | Java |
| **Spring Boot Version** | 2.7.18 |

> **Important:** Do NOT select Spring Boot 3.x versions. We use 2.7.18 because it supports Java 8. Spring Boot 3.x requires Java 17 minimum.

#### Step 3: Fill in Project Metadata

| Field | Value | Explanation |
|-------|-------|-------------|
| **Group** | `com.example` | Your organization's reverse domain name |
| **Artifact** | `demo` | The name of your project (becomes the JAR file name) |
| **Name** | `demo` | Display name of the application |
| **Description** | `Demo project for Spring Boot` | Brief description |
| **Package name** | `com.example.demo` | Base Java package (auto-generated from Group + Artifact) |
| **Packaging** | Jar | Executable JAR with embedded server |
| **Java** | 8 | Java version (we use JDK 1.8) |

#### Step 4: Add Dependencies

Click the **"ADD DEPENDENCIES"** button (or press `Ctrl+B`) and search for:

- **Spring Web** -- for building REST APIs and web applications
- **Spring Data MongoDB** -- for MongoDB database connectivity
- **Spring Boot DevTools** -- for automatic restart during development
- **Thymeleaf** -- for server-side HTML templates

#### Step 5: Generate the Project

Click the **"GENERATE"** button (or press `Ctrl+Enter`). A ZIP file will be downloaded.

#### Step 6: Extract and Import

1. Extract the ZIP file to your workspace folder.
2. Open your IDE (IntelliJ IDEA, Eclipse, or VS Code).
3. Import the project as a **Maven Project**.
4. Wait for Maven to download all dependencies.

---

## Project Metadata Explained

### Group ID

The Group ID follows the **reverse domain name** convention. It represents your organization.

```
com.example          → example.com
com.vasavi.it        → Vasavi College, IT Department
org.springframework  → Spring Framework organization
```

### Artifact ID

The Artifact ID is the **name of your project**. It becomes:
- The name of the generated JAR file (`demo-0.0.1-SNAPSHOT.jar`)
- The root folder name

### Package Name

The package name is automatically generated as `GroupId.ArtifactId`:

```
Group: com.example  +  Artifact: demo  =  Package: com.example.demo
```

All your Java classes will be created under this package.

### Packaging: JAR vs WAR

| Packaging | Description | Use Case |
|-----------|-------------|----------|
| **JAR** | Executable JAR with embedded Tomcat | Stand-alone applications (recommended) |
| **WAR** | Web Archive for external server | When deploying to existing Tomcat/JBoss |

For Spring Boot, always choose **JAR** unless you have a specific reason to use WAR.

---

## Selecting Dependencies

Dependencies are libraries that your project needs. Spring Boot provides **starters** that bundle related dependencies together.

### Dependencies We Will Use

| Dependency | Starter Artifact | Purpose |
|-----------|-----------------|---------|
| Spring Web | `spring-boot-starter-web` | REST APIs, MVC controllers |
| Spring Data MongoDB | `spring-boot-starter-data-mongodb` | MongoDB database operations |
| Thymeleaf | `spring-boot-starter-thymeleaf` | Server-side HTML rendering |
| Spring Boot DevTools | `spring-boot-devtools` | Auto-restart during development |
| Spring Boot Test | `spring-boot-starter-test` | Testing (added by default) |

---

## Generating and Importing the Project

After extracting the ZIP file, your project will have this structure:

### Generated Project Directory Structure

```
demo/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── demo/
│   │   │               └── DemoApplication.java      ← Main class
│   │   └── resources/
│   │       ├── static/                                ← CSS, JS, images
│   │       ├── templates/                             ← Thymeleaf HTML files
│   │       └── application.properties                 ← Configuration file
│   └── test/
│       └── java/
│           └── com/
│               └── example/
│                   └── demo/
│                       └── DemoApplicationTests.java  ← Test class
├── .gitignore
├── mvnw                                               ← Maven wrapper (Linux/Mac)
├── mvnw.cmd                                           ← Maven wrapper (Windows)
├── pom.xml                                            ← Maven configuration
└── HELP.md
```

### Important Directories and Files

| Path | Purpose |
|------|---------|
| `src/main/java/` | Your Java source code goes here |
| `src/main/resources/static/` | Static files (CSS, JavaScript, images) |
| `src/main/resources/templates/` | Thymeleaf HTML template files |
| `src/main/resources/application.properties` | Application configuration |
| `src/test/java/` | Test classes |
| `pom.xml` | Maven project configuration and dependencies |

---

## Understanding pom.xml

The `pom.xml` (Project Object Model) is the heart of a Maven project. It defines your project's metadata, dependencies, and build configuration.

### Complete pom.xml Breakdown

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <!-- SECTION 1: Parent POM -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.18</version>
        <relativePath/>
    </parent>

    <!-- SECTION 2: Project Metadata -->
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>demo</name>
    <description>Demo project for Spring Boot</description>

    <!-- SECTION 3: Java Version -->
    <properties>
        <java.version>1.8</java.version>
    </properties>

    <!-- SECTION 4: Dependencies -->
    <dependencies>
        <!-- Spring Web: REST APIs and MVC -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- Spring Data MongoDB: Database connectivity -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-mongodb</artifactId>
        </dependency>

        <!-- Thymeleaf: HTML template engine -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>

        <!-- DevTools: Auto-restart during development -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>

        <!-- Test: JUnit, Mockito, Spring Test -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <!-- SECTION 5: Build Plugin -->
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

### Section-by-Section Explanation

#### Section 1: Parent POM

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.18</version>
</parent>
```

The parent POM provides:
- **Dependency management** -- you do not need to specify versions for Spring-related dependencies
- **Default plugin configuration** -- Maven compiler, resource filtering
- **Default properties** -- encoding (UTF-8), Java version

#### Section 2: Project Metadata

Your project's identity -- Group ID, Artifact ID, and version. The version `0.0.1-SNAPSHOT` means it is a development version.

#### Section 3: Java Version

```xml
<properties>
    <java.version>1.8</java.version>
</properties>
```

Tells Maven to compile code using Java 8. This is inherited by the parent POM's compiler plugin configuration.

#### Section 4: Dependencies

Notice that **no version numbers** are specified for the dependencies. The parent POM manages all versions to ensure compatibility.

| Scope | Meaning |
|-------|---------|
| (default/compile) | Available everywhere -- compile, test, runtime |
| `runtime` | Not needed for compilation, only at runtime |
| `test` | Only available during testing |
| `optional` | Not inherited by other projects that depend on this one |

#### Section 5: Build Plugin

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
</plugin>
```

This plugin:
- Creates an executable JAR file (fat JAR with embedded Tomcat)
- Allows running the application with `mvn spring-boot:run`

---

## The Main Application Class

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

### Line-by-Line Explanation

| Line | Explanation |
|------|-------------|
| `package com.example.demo;` | The base package. Spring scans this package and all sub-packages. |
| `@SpringBootApplication` | Combines `@Configuration` + `@EnableAutoConfiguration` + `@ComponentScan` |
| `public static void main(String[] args)` | Standard Java entry point |
| `SpringApplication.run(...)` | Starts the Spring Boot application, creates the IoC container, starts the embedded server |

### What Happens When You Run This

1. Java calls the `main` method
2. `SpringApplication.run()` creates the **Application Context** (IoC container)
3. Spring scans `com.example.demo` and all sub-packages for components
4. Auto-configuration configures beans based on classpath dependencies
5. Embedded Tomcat server starts on port 8080
6. Application is ready to receive HTTP requests

---

## application.properties

The `application.properties` file in `src/main/resources/` is where all application configuration lives.

### Common Properties

```properties
# Server Configuration
server.port=8080

# Application Name
spring.application.name=demo

# MongoDB Configuration
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=studentdb

# Thymeleaf Configuration (optional, defaults are usually fine)
spring.thymeleaf.cache=false

# Logging Level
logging.level.org.springframework=INFO
```

### Properties vs YAML

Spring Boot also supports `application.yml` format:

```yaml
# application.yml (alternative to .properties)
server:
  port: 8080
spring:
  data:
    mongodb:
      host: localhost
      port: 27017
      database: studentdb
```

Both formats are equivalent. We will use `.properties` format in this course as it is simpler.

---

## Running the Application

### Method 1: From IDE

Right-click on `DemoApplication.java` and select **"Run"**.

### Method 2: Using Maven Wrapper

```bash
# On Linux/Mac
./mvnw spring-boot:run

# On Windows
mvnw.cmd spring-boot:run
```

### Method 3: Using Maven (if installed)

```bash
mvn spring-boot:run
```

### Method 4: Running the JAR

```bash
# First, build the project
mvn clean package

# Then run the JAR
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

### Verifying the Application Started

When the application starts successfully, you will see output like:

```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::             (v2.7.18)

2024-01-15 10:30:00.000  INFO --- Started DemoApplication in 2.5 seconds
```

Open your browser and go to `http://localhost:8080`. You will see a "Whitelabel Error Page" -- this is normal because we have not created any controllers yet.

---

## Key Takeaways

1. **Spring Initializr** (start.spring.io) generates a ready-to-run Spring Boot project in seconds.
2. Always select **Spring Boot 2.7.x** and **Java 8** for this course.
3. The **pom.xml** parent POM manages all dependency versions -- you do not specify versions manually.
4. The **main class** with `@SpringBootApplication` is the entry point that starts everything.
5. All configuration goes in `application.properties` -- no XML files needed.
6. The project follows a standard **Maven directory structure**: `src/main/java` for code, `src/main/resources` for configuration and templates.
7. You can run the application from your IDE, using Maven, or as a standalone JAR.

---

[Next: Dependency Injection >>](./03-dependency-injection.md)
