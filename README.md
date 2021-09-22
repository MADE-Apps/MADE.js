<img src="assets/ProjectBanner.png" alt="MADE project banner" />

# MADE.js

MADE.js is a toolkit of easy-to-use extensions, helpers, and UI components to make app development easier for web developers.

Whether you're building a web app, a Node API, MADE.js has something for everyone.

MADE.js takes a lot of inspiration from [MADE.NET](https://github.com/MADE-Apps/MADE.NET), providing a similar set of features and APIs to make it easier to build web apps.

It comes with TypeScript support built-in to make it even easier to build your web apps!

## Support MADE.js ♥

As many developers know, projects like MADE.js are built and maintained in spare time. If you find this project useful, please **Star** the repo and if possible, sponsor the project development on GitHub.

## Build Status

[MADE.js](https://www.npmjs.com/~jamesmcroft) components are publicly available via npmjs. Each available package is detailed below as well as their build status.

| Build | Status | Current Version | Downloads |
| ------ | ------ | ------ | ------ |
| Collections | [![made-collections](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-collections.yml/badge.svg)](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-collections.yml) | [![npm](https://img.shields.io/npm/v/made-collections)](https://www.npmjs.com/package/made-collections) | ![npm](https://img.shields.io/npm/dt/made-collections) |
| Data.Converters | [![made-data-converters](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-data-converters.yml/badge.svg)](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-data-converters.yml) | [![npm](https://img.shields.io/npm/v/made-data-converters)](https://www.npmjs.com/package/made-data-converters) | ![npm](https://img.shields.io/npm/dt/made-data-converters) |
| Data.Validation | [![made-data-validation](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-data-validation.yml/badge.svg)](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-data-validation.yml) | [![npm](https://img.shields.io/npm/v/made-data-validation)](https://www.npmjs.com/package/made-data-validation) | ![npm](https://img.shields.io/npm/dt/made-data-validation) |
| Diagnostics | [![made-diagnostics](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-diagnostics.yml/badge.svg)](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-diagnostics.yml) | [![npm](https://img.shields.io/npm/v/made-diagnostics)](https://www.npmjs.com/package/made-diagnostics) | ![npm](https://img.shields.io/npm/dt/made-diagnostics) |
| Networking | [![made-networking](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-networking.yml/badge.svg)](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-networking.yml) | [![npm](https://img.shields.io/npm/v/made-networking)](https://www.npmjs.com/package/made-networking) | ![npm](https://img.shields.io/npm/dt/made-networking) |
| Runtime | [![made-runtime](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-runtime.yml/badge.svg)](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-runtime.yml) | [![npm](https://img.shields.io/npm/v/made-runtime)](https://www.npmjs.com/package/made-runtime) | ![npm](https://img.shields.io/npm/dt/made-runtime) |
| Threading | [![made-threading](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-threading.yml/badge.svg)](https://github.com/MADE-Apps/MADE.js/actions/workflows/made-threading.yml) | [![npm](https://img.shields.io/npm/v/made-threading)](https://www.npmjs.com/package/made-threading) | ![npm](https://img.shields.io/npm/dt/made-threading) |

## Contributing 🚀

Looking to help build MADE.js? Take a look through our [contribution guidelines](CONTRIBUTING.md). We actively encourage you to jump in and help with any issues!

## Building MADE.js 🛠

MADE.js is built using Typescript that is compiled into commonjs modules.

Each package has its own folder within the repo, containing a `package.json` file containing common scripts.

To build the projects, you'll first need to install the dependencies listed in the `package.json` file using `npm install`.

You can then build each project by running `npm run build`.

This will run the jest tests, run code coverage, and compile the project into a commonjs module within the `dist` folder.

## License

MADE.js is made available under the terms and conditions of the [MIT license](LICENSE).
