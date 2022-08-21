![GitHub repo size](https://img.shields.io/github/repo-size/Aakash1103Jha/node-express-docker?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/Aakash1103Jha/node-express-docker?style=for-the-badge) ![GitHub issues](https://img.shields.io/github/issues/Aakash1103Jha/node-express-docker?style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/Aakash1103Jha/node-express-docker?style=for-the-badge) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/Aakash1103Jha/node-express-docker?color=orange&style=for-the-badge)

# Node Express Docker

### A boilerplate node/express application with Docker integration.

## Stack

<p><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" width="60" height="60" style="margin-right:10px" alt="Typescript" /></a> 
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" width="60" height="60" style="margin-right:10px" alt="NodeJS" /> 
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-dark.svg" width="60" height="60" style="margin-right:10px" alt="Express" /></a>
<a href="https://docker.com/" target="_blank" rel="noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/docker.svg" width="60" height="60" style="margin-right:10px" alt="Express" /></a>
<a href="https://mongodb.com/" target="_blank" rel="noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="60" height="60" style="margin-right:10px" alt="MongoDB" /></a>
</p>

## Features

-   Typescript
-   Docker
-   Logging (with Winston)
-   Sequelize for SQL DB (currently using PostgreSQL in this project)

## Getting Started

-   Clone the project or create a new project using this as a template.
-   Install dependencies using `npm i`
-   Add a `.env` file, surely will be required at some point.
-   If you would like to use MongoDB Atlas, add `MONGO_URI` in the `.env` file, with your DB connection URI.
-   If you proceed to use [sequelize], then add the following in the `.env` file

    ```
    SEQUELIZE_DIALECT=/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    SEQUELIZE_PORT=your_db_port
    SEQUELIZE_DATABASE_NAME=your_db_name
    SEQUELIZE_DATABASE_USERNAME=your_username
    SEQUELIZE_DATABASE_PASSWORD=your_password
    ```

-   All log files are generated in `./src/logs` directory

[sequelize]: https://sequelize.org/docs/v6/getting-started/

## Building an Image and Starting a Container

-   Run `make up-dev` to run the dev environment, or `make up-prod` for the production environment.
-   If you'd like to change container-port mapping, make changes in `docker-compose.yml` or `docker-compose.prod.yml` file, in the `PORTS` property -

    ```yml
    PORTS: "<your_new_port>:4000"
    ```

-   In case you decide to not use `docker-compose`, make the same port-mapping change in the `run-image` command in the Makefile.
-   Visit `localhost:4000/welcome` to check if everything is working.
-   Feel free to make any other changes, according to your project needs.

## Learning Outcomes

-   better understanding about simple and complex concepts of Docker, alongside NodeJS.
-   setup a node/express application using Docker.
-   create and optimize workflows using Dockerfile, docker-compose and Makefile.
-   create and support multiple environments - `development` | `production`.
- create separate loggers for development and production environment using [Winston]

[Winston]: https://www.npmjs.com/package/winston

## Challenges / Blockers / Issues

-   docker commands
-   container port mapping

