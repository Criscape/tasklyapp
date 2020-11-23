# Taskly App

Application for manage a list of tasks, for productivity purposes. This repository is the back-end server, the front-end server can be found here: [Taskly App Front].

[Taskly App Front]: <https://github.com/Criscape/tasklyapp-front>

## Development details

The project was developed on NodeJS v14.15.1, the structure of the project was generated with the express-generator-typescript node module, hereby the project uses TypeScript and Express modules.

The database choosen was MongoDB, the connection was made with the module Mongoose. This is a simple diagram of the database structure:

The front-end application details can be found in his respective repository.

## Execution details

### Back-end server

First of all you have to clone this project in your personal computer. To execute this project you need NodeJS v14 or greater.

Also, you need the mongo user password to connect the back-end application with the database, once you have the password, create an environment variable called TASKLY_PSW.

To create an temporal environment variable on Ubuntu, you can use:

```sh
$ export TASKLY_PSW=<password>
```

If you want to keep it permanently you can put the command on the initial configuration file of your console (.bashrc or .zshrc).

Once you set the environment variable, you can execute the project with:

```sh
$ node run start:dev
```

By default the server runs on port 3000, if you change this, you need to change it as well on the front-end server, in the environment file.

### Front-end server

This application was developed on Angular 9, so you need this version or greater to execute the server without problems.

First of all, clone the project, repository here: [Taskly App Front].

Install all the packages needed:

```sh
$ npm i
```

Now execute the project with:

```sh
$ ng serve
```

By default the server runs on port 4200, if there's any service on this port, you need to change the port of this server with:

```sh
$ ng serve --port <port>
```

