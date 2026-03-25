// NPM (Node Package Manager) is a package manager for JavaScript. It allows you to install and manage third-party libraries and tools for your Node.js projects. With NPM, you can easily add functionality to your applications by installing packages from the NPM registry.
// To use NPM, you first need to initialize your project by creating a package.json file. This file contains metadata about your project and its dependencies. 
// You can create it by running the command `npm init` in your project directory.

// Command: npm init
// npm init -y // -y flag automatically answers "yes" to all prompts, creating a package.json file with default values. 
// Once you have a package.json file, you can install packages using the `npm install` command. For example, if you want to install the Express framework, you can run `npm install express`. 
// This will download the Express package and add it to your project's dependencies in the package.json file.

// Command: npm install
// npm install // If a project has a package.json file, by running `npm install` without specifying a package name,
// NPM will read the dependencies listed in the package.json file and install all of them.

// Command: npm install <package-name>
// npm install express // This command will install the Express package and add it to your project's dependencies in the package.json file.

// You can also install specific versions of packages by specifying the version number. For example, `npm install express@4.17.1` will install version 4.17.1 of the Express package.

// Command: npm install <package-name>@<version>
// npm install express@4.17.1 // This command will install version 4.17.1 of the Express package.

// NPM also allows you to manage your project's dependencies by providing commands to update, uninstall, and list installed packages.

// Command: npm update
// For example, `npm update` will update all your installed packages to their latest versions,
// while `npm update express` will update only the Express package.

// Command: npm list
// npm list // This command will display a tree of all the installed packages in your project, along with their versions.

// Command: npm uninstall <package-name>
// npm uninstall express // This command will remove the Express package from your project.

// NPM install flags:
// --save-dev: This flag is used to install a package as a development dependency. Development dependencies are packages that are only needed during the development phase of your project, such as testing frameworks or build tools.
// When you use this flag, the package will be added to the "devDependencies" section of your package.json file.

// Command: npm install <package-name> --flag
// --save-dev // This command will install the Jest testing framework as a development dependency and add it to the "devDependencies" section of your package.json file.
// --save-peer: This flag is used to install a package as a peer dependency. Peer dependencies are packages that are required by another package but are not directly used by your project.
// When you use this flag, the package will be added to the "peerDependencies" section of your package.json file.
// --save-optional: This flag is used to install a package as an optional dependency. Optional dependencies are packages that are not required for your project to function but can provide additional features or functionality.
// When you use this flag, the package will be added to the "optionalDependencies" section of your package.json file.

// command: npm run <script-name>
// npm run start // This command will execute the "start" script defined in your package.json file.
// {
//   "scripts": {
//     "start-dev": "node lib/server-development",
//     "start": "node lib/server-production"
//   }
// }

// Example:
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const server = app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Stop the other server or use a different PORT.`);
    return;
  }

  console.error('Failed to start Express server:', error.message);
});

// dev dependency: npm install --save-dev nodemon
// Nodemon is a development tool that automatically restarts your Node.js application whenever it detects changes in the source code. It is commonly used during development to improve productivity by eliminating the need to manually stop and restart the server after making changes.
// To use Nodemon, you can install it as a development dependency in your project using the command `npm install --save-dev nodemon`. Once installed, you can run your application with Nodemon by using the command `npx nodemon <your-entry-file>`, where `<your-entry-file>` is the main file of your application (e.g., `server.js`).

// To run this file:
// npm install express
// node Theory/npm.js


