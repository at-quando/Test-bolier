# b-docker-Angular-Nodejs-Mongo

- A project for Docker, Docker Compose, intergrating Angular 4, Nodejs, MongoDB.
- Clone the project first and try to follow the instruction.
=========================
#DOCKER DOCUMENT
> This project was combined by docker-compose. It has 2 main parts: Angular-client (port 4100) and express-server (port 3000). With docker-compose, they can run together by only some command lines.
> We need to build the images and containers first
```
docker-compose build
```
> After we can run the project by
```
docker-compose up
```
> More command line we need to view
```
docker-compose down `kill container`
docker-compose stop `just stop container`
docker rmi `remove images`
docker rm `remove container`
docker ps `show all containers are running`
docker ps -a `show all containers were stopped`
docker images `show all images`
```
=========================
#ANGULAR DOCUMENT
> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

This is a work in progress. Feel free to contribute.

## Development server

Navigate to `http://localhost:4100/`. The app will automatically reload if you change any of the source files.

##### For Authentication
> Email: `any` (Must be email format)
> Password: `any` (Required)

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further development

All information about development of boilerplate will be up-to-date at [Projects](https://github.com/AsianTechInc/) tracker.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Licence

> Usage is under provisioned of @AsianTechInc


=========================
#NODEJS DOCUMENT
> We work with Js framework ( Express JS) for making web development. 
> Use postman, `get` request to `http://localhost:3000/api` for making sure the server is running. 
> The app will automatically reload if you change any of the source files.
## Gulp serve design
>  We use gulp for making server watch changes. You can learn about gulp in `gulpjs.com`.
## Structure
> The project is devided follow MVC pattern. 
=========================
#MONGODB DOCUMENT
> Mongodb is designed to work with Nodejs. 
> Docker run mongo automatically.

**Bonus**

How to access a container

You wanna access mongodb console

- `docker-compose exec db sh`
- `mongo`
- `use docker`
- `db.users.find()` # Get all user

You wanna access golong container

- `docker-compose exec backend bash`

**Understanding more about Docker**

- https://docs.docker.com/engine/docker-overview/#docker-engine
- https://docs.docker.com/get-started/#containers-vs-virtual-machines
