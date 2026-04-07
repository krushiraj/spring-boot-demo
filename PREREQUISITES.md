# Prerequisites - Software Setup Guide

> **Full Stack Development Lab (U24PC431IT) | B.E. IV Semester | VCE, Hyderabad**

This guide covers everything you need to install **before coming to class**. Follow the instructions for your operating system carefully. If you face issues, check the [Troubleshooting](#troubleshooting) section at the bottom.

---

## Software Versions Summary

| Software | Version | Purpose |
|----------|---------|---------|
| JDK | 1.8 (Java 8) | Java runtime for Spring Boot |
| Maven | 3.9.14 | Build tool for Spring Boot projects |
| Node.js | 20.x LTS | JavaScript runtime for backend |
| NVM | 0.40.4 / 1.2.2 (Windows) | Node.js version manager |
| MongoDB | 7.0 Community | NoSQL database |
| MongoDB Compass | Latest | GUI for MongoDB |
| VS Code / Windsurf / IntelliJ | Latest | Code editor (any one) |
| Git | Latest | Version control |
| Postman | Latest | API testing tool |

---

## Table of Contents

1. [Java Development Kit (JDK 1.8)](#1-java-development-kit-jdk-18)
2. [Apache Maven](#2-apache-maven)
3. [Node.js via NVM](#3-nodejs-via-nvm)
4. [MongoDB 7.0 Community Edition](#4-mongodb-70-community-edition)
5. [MongoDB Compass](#5-mongodb-compass)
6. [VS Code + Extensions](#6-vs-code--extensions)
7. [Git](#7-git)
8. [Postman](#8-postman)
9. [Verification Checklist](#9-verification-checklist)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Java Development Kit (JDK 1.8)

We use **Eclipse Temurin JDK 8** (open-source, free, maintained by Adoptium).

### Windows

1. Download the **JDK 8 MSI installer** from:
   **https://adoptium.net/temurin/releases/?os=windows&arch=x64&package=jdk&version=8**
2. Run the `.msi` installer
3. **Important:** During installation, ensure these options are checked:
   - "Set JAVA_HOME variable"
   - "Add to PATH"
4. Open a **new** Command Prompt and verify:

```cmd
java -version
```

Expected output (version numbers may vary slightly):
```
openjdk version "1.8.0_422"
OpenJDK Runtime Environment (Temurin)(build 1.8.0_422-b05)
OpenJDK 64-Bit Server VM (Temurin)(build 25.422-b05, mixed mode)
```

Also verify:
```cmd
javac -version
```

### macOS

```bash
# Using Homebrew
brew install --cask temurin@8

# Verify
java -version
javac -version
```

If you don't have Homebrew, install it first:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install -y wget apt-transport-https gpg

# Add Adoptium repository
wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/adoptium.gpg
echo "deb https://packages.adoptium.net/artifactory/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/adoptium.list

sudo apt update
sudo apt install -y temurin-8-jdk

# Verify
java -version
javac -version
```

### Setting JAVA_HOME (if not set automatically)

<details>
<summary><strong>Windows</strong></summary>

1. Open **System Properties** > **Environment Variables**
2. Under **System Variables**, click **New**
3. Variable name: `JAVA_HOME`
4. Variable value: `C:\Program Files\Eclipse Adoptium\jdk-8.0.422.5-hotspot` (adjust to your actual path)
5. Edit the `Path` variable and add: `%JAVA_HOME%\bin`

</details>

<details>
<summary><strong>macOS / Linux</strong></summary>

Add to `~/.bashrc` or `~/.zshrc`:
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8 2>/dev/null || echo "/usr/lib/jvm/temurin-8-jdk-amd64")
export PATH=$JAVA_HOME/bin:$PATH
```

Then reload:
```bash
source ~/.bashrc   # or source ~/.zshrc
```

</details>

---

## 2. Apache Maven

Maven **3.9.14** is the latest stable version compatible with JDK 8.

### Windows

1. Download the **Binary zip archive** from:
   **https://maven.apache.org/download.cgi**
   Direct link: `https://dlcdn.apache.org/maven/maven-3/3.9.14/binaries/apache-maven-3.9.14-bin.zip`
2. Extract to `C:\Program Files\Apache\maven-3.9.14`
3. Set environment variables:
   - Add `M2_HOME` = `C:\Program Files\Apache\maven-3.9.14`
   - Add `%M2_HOME%\bin` to your `Path`
4. Open a **new** Command Prompt and verify:

```cmd
mvn -version
```

Expected output:
```
Apache Maven 3.9.14
Maven home: C:\Program Files\Apache\maven-3.9.14
Java version: 1.8.0_422, vendor: Eclipse Adoptium
```

### macOS

```bash
brew install maven

# Verify
mvn -version
```

> Note: Homebrew may install a newer Maven version. Any 3.9.x version works fine with JDK 8.

### Linux (Ubuntu/Debian)

```bash
# Download and extract
cd /opt
sudo wget https://dlcdn.apache.org/maven/maven-3/3.9.14/binaries/apache-maven-3.9.14-bin.tar.gz
sudo tar -xzf apache-maven-3.9.14-bin.tar.gz
sudo rm apache-maven-3.9.14-bin.tar.gz

# Add to PATH - add these lines to ~/.bashrc or ~/.zshrc
export M2_HOME=/opt/apache-maven-3.9.14
export PATH=$M2_HOME/bin:$PATH

# Reload and verify
source ~/.bashrc
mvn -version
```

---

## 3. Node.js via NVM

We use **NVM** (Node Version Manager) to install and manage Node.js versions. This is the recommended way — do NOT install Node.js directly.

### Windows

NVM for Windows is a separate project from the Unix version.

1. Download `nvm-setup.exe` from:
   **https://github.com/coreybutler/nvm-windows/releases/tag/1.2.2**
2. Run the installer with default settings
3. Open a **new** Command Prompt (as Administrator) and run:

```cmd
nvm install 20
nvm use 20
```

4. Verify:
```cmd
node -v
npm -v
```

Expected output:
```
v20.x.x
10.x.x
```

### macOS / Linux

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# Close and reopen your terminal, then:
nvm install 20
nvm use 20
nvm alias default 20

# Verify
node -v
npm -v
```

If `nvm` command is not found after reopening terminal, add this to your `~/.bashrc` or `~/.zshrc`:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

---

## 4. MongoDB 7.0 Community Edition

We install MongoDB **locally** on your machine.

### Windows

1. Download the **MongoDB 7.0 MSI installer** from:
   **https://www.mongodb.com/try/download/community**
   - Version: `7.0.x (current release)`
   - Platform: `Windows x64`
   - Package: `msi`

2. Run the MSI installer:
   - Choose **"Complete"** setup type
   - **Check** "Install MongoDB as a Service" (recommended)
   - Service Name: `MongoDB` (default)
   - Data Directory: `C:\Program Files\MongoDB\Server\7.0\data\` (default)
   - **Check** "Install MongoDB Compass" (GUI tool)

3. Add MongoDB to your PATH:
   - Add `C:\Program Files\MongoDB\Server\7.0\bin` to your system `Path` environment variable

4. Open a **new** Command Prompt and verify:

```cmd
mongosh
```

You should see the MongoDB shell connect to `mongodb://localhost:27017`. Type `exit` to quit.

> **Note:** If MongoDB was installed as a service, it starts automatically. To manage it manually:
> ```cmd
> net start MongoDB
> net stop MongoDB
> ```

### macOS

```bash
# Tap the MongoDB Homebrew formulae
brew tap mongodb/brew

# Install MongoDB Community Edition 7.0
brew install mongodb-community@7.0

# Start MongoDB as a background service
brew services start mongodb-community@7.0

# Verify - opens MongoDB shell
mongosh
```

Type `exit` to quit the shell.

> To stop MongoDB: `brew services stop mongodb-community@7.0`

### Linux (Ubuntu 22.04 / 24.04)

```bash
# Import MongoDB public GPG key
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
  sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

# Add MongoDB repository (Ubuntu 22.04 - jammy)
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | \
  sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Install
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start and enable MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Verify
mongosh
```

> For Ubuntu 24.04 (noble), replace `jammy` with `noble` in the repository URL above.

---

## 5. MongoDB Compass

MongoDB Compass is a **GUI tool** for viewing and managing your MongoDB databases visually. Very helpful for debugging.

- **Windows:** If you checked "Install MongoDB Compass" during MongoDB installation, it's already installed. Otherwise, download from:
  **https://www.mongodb.com/try/download/compass**
- **macOS:** `brew install --cask mongodb-compass`
- **Linux:** Download the `.deb` package from the link above and install with `sudo dpkg -i mongodb-compass_*.deb`

### Connecting Compass to Local MongoDB

1. Open MongoDB Compass
2. Connection string: `mongodb://localhost:27017`
3. Click **Connect**
4. You should see default databases: `admin`, `config`, `local`

---

## 6. Code Editor / IDE

Choose **any one** of the following. All work well for this course.

### Option A: VS Code (Recommended)

Download from: **https://code.visualstudio.com/download**

**Recommended Extensions** (install from Extensions panel - Ctrl+Shift+X):

| Extension | ID | Purpose |
|-----------|-----|---------|
| Extension Pack for Java | `vscjava.vscode-java-pack` | Java development (includes debugger, Maven, test runner) |
| Spring Boot Extension Pack | `vmware.vscode-boot-dev-pack` | Spring Boot tools, dashboard, Initializr |
| ES7+ React/Redux/GraphQL Snippets | `dsznajder.es7-react-js-snippets` | React code snippets |
| MongoDB for VS Code | `mongodb.mongodb-vscode` | Browse MongoDB from VS Code |
| Thunder Client | `rangav.vscode-thunder-client` | API testing (lightweight Postman alternative) |
| Prettier | `esbenp.prettier-vscode` | Code formatting |

To install all at once via terminal:
```bash
code --install-extension vscjava.vscode-java-pack
code --install-extension vmware.vscode-boot-dev-pack
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension mongodb.mongodb-vscode
code --install-extension rangav.vscode-thunder-client
code --install-extension esbenp.prettier-vscode
```

### Option B: Windsurf

Download from: **https://windsurf.com/**

Windsurf is an AI-powered code editor built on VS Code. It supports the same extensions listed above. Install it and add the same extensions.

### Option C: IntelliJ IDEA Community Edition

Download from: **https://www.jetbrains.com/idea/download/**

IntelliJ has built-in support for Java, Maven, and Spring Boot. For React/Node.js, install the JavaScript plugin. Good choice if you prefer a full-featured Java IDE.

### Option D: Any Other IDE

You can use any editor you're comfortable with (Eclipse, NetBeans, Sublime Text, etc.). Just ensure you can:
- Run Maven commands from terminal
- Edit Java, JavaScript, and HTML files
- Access an integrated terminal

---

## 7. Git

### Windows

Download from: **https://git-scm.com/download/win**

During installation:
- Choose **"Use Git from the Windows Command Prompt"**
- Choose **"Checkout Windows-style, commit Unix-style line endings"**
- Use default settings for everything else

### macOS

```bash
# Git comes with Xcode Command Line Tools
xcode-select --install

# Or via Homebrew
brew install git
```

### Linux

```bash
sudo apt update
sudo apt install -y git
```

### Configure Git (All OSes)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify
git --version
```

---

## 8. Postman

Postman is used to test REST APIs.

Download from: **https://www.postman.com/downloads/**

Install for your OS and create a free account (or skip sign-in).

> **Alternative:** You can use **Thunder Client** extension in VS Code (installed above) as a lightweight alternative.

---

## 9. Verification Checklist

Run all these commands and make sure they produce output (version numbers may differ slightly):

```bash
# Java
java -version
# Expected: openjdk version "1.8.0_xxx"

javac -version
# Expected: javac 1.8.0_xxx

# Maven
mvn -version
# Expected: Apache Maven 3.9.14

# Node.js
node -v
# Expected: v20.x.x

npm -v
# Expected: 10.x.x

# MongoDB
mongosh --version
# Expected: 2.x.x

# Git
git --version
# Expected: git version 2.x.x
```

### Quick MongoDB Test

```bash
# Start mongosh
mongosh

# Inside the shell, run:
use testdb
db.test.insertOne({ name: "hello", status: "working" })
db.test.find()

# You should see the inserted document
# Clean up and exit
db.test.drop()
exit
```

**Take a screenshot of your verification output and bring it to the first class.**

---

## 10. Troubleshooting

### Java / Maven Issues

| Problem | Solution |
|---------|----------|
| `java` not recognized | Ensure `JAVA_HOME` is set and `%JAVA_HOME%\bin` is in PATH. Open a **new** terminal after changes. |
| `mvn` not recognized | Ensure `M2_HOME` is set and `%M2_HOME%\bin` is in PATH. Open a **new** terminal. |
| `mvn -version` shows wrong Java | Maven uses `JAVA_HOME`. Verify it points to JDK 8: `echo %JAVA_HOME%` (Windows) or `echo $JAVA_HOME` (Mac/Linux). |
| Multiple Java versions installed | Set `JAVA_HOME` to the JDK 8 path explicitly. On macOS: `/usr/libexec/java_home -V` lists all versions. |

### Node.js / NVM Issues

| Problem | Solution |
|---------|----------|
| `nvm` not recognized (Windows) | Open a **new** Command Prompt as Administrator. |
| `nvm` not found (Mac/Linux) | Add NVM source lines to `~/.bashrc` or `~/.zshrc` (see [Section 3](#3-nodejs-via-nvm)). Then `source ~/.bashrc`. |
| `nvm use 20` fails on Windows | Run Command Prompt as **Administrator**. |
| `npm install` fails with permission errors | **Never use `sudo` with npm.** NVM avoids this. Reinstall Node via NVM. |

### MongoDB Issues

| Problem | Solution |
|---------|----------|
| `mongosh` not recognized | Ensure MongoDB bin directory is in PATH (see [Section 4](#4-mongodb-70-community-edition)). |
| MongoDB service won't start (Windows) | Run `services.msc`, find "MongoDB", right-click > Start. Check `C:\Program Files\MongoDB\Server\7.0\log\mongod.log` for errors. |
| MongoDB service fails (Linux) | Check: `sudo systemctl status mongod` and `cat /var/log/mongodb/mongod.log`. Common fix: `sudo chown -R mongodb:mongodb /var/lib/mongodb /var/log/mongodb`. |
| "Address already in use" error | Another process is using port 27017. Find it: `lsof -i :27017` (Mac/Linux) or `netstat -ano | findstr 27017` (Windows). |
| MongoDB Compass can't connect | Ensure MongoDB service is running first. Connection string: `mongodb://localhost:27017`. |
| Data directory not found (Windows) | Create the directory: `mkdir C:\data\db` or use the path configured during installation. |

### IDE / Editor Issues

| Problem | Solution |
|---------|----------|
| Java extensions not working (VS Code / Windsurf) | Ensure `JAVA_HOME` is set. Restart the editor. Check: Settings > search "java.home". |
| Spring Boot dashboard missing (VS Code / Windsurf) | Install "Spring Boot Extension Pack" and restart the editor. |
| IntelliJ not detecting JDK | Go to File > Project Structure > SDKs > Add JDK > point to your JDK 8 installation path. |

---

## Need Help?

If you're stuck after trying the troubleshooting steps:

1. **Take a screenshot** of the error message
2. Note your **OS version** (Windows 10/11, macOS version, Ubuntu version)
3. Note which **step** you're stuck on
4. Share with your instructor before the class

---

> **Next:** Once all software is installed, proceed to [Lab Overview](labs/lab-overview.md) to get started with the experiments.
