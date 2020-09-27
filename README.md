# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.2.

Live demo: https://space-x-launch-history.herokuapp.com/

View this project source: https://github.com/VigneshPonArokiaraj/space-x-program

## Making requests to the backend API

We use live API server running at https://api.spacexdata.com/v3/launches for the application to make requests.

If you want to change the API URL, simply edit src/environments/environment.ts and change "baseUrl".

## Functionality overview

The application is a spaceX launch history site. It uses a custom API for all request. 

## Features
	* Filter based on 
		- Year
		- Successful Launch
		- Successful Land
	* Launch spaceX data using url params.
	* Provide spaceX launch details:
		- Mission logo
		- Mission name
		- Mission Id's
		- Successful Launch
		- Successful Land
		
You can view a live demo over at https://space-x-launch-history.herokuapp.com/

## Performance Factors

	* Lazy loading of the Mission details rendered in the View to load only minimal records in DOM
	* Rendering the Mission Images dynamically and lazy load them only when visible on the View
	* Server side data rendering for Filters
	
Lighthouse report is available in the path "spaceX-lighthouse-report.PNG".
	
## Dev Guide Documentation - CompoDoc

We have used Compodoc to generate the documentation for the Project. 
This is very helpful for the developers to understand every technical aspect of the Project

To see the details go to "documentation folder and open index.html in the browser" to view all technical details related to the Project along with all implementation guides

To run manually from code, use command
npm run compodoc

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

* Building the Project also checks for the Static code quality and any lint errors appears in the Project will fail the build

To run build, use command
	* npm run build

## Deployment Details

The deployment of the project is done through Heroku Server and the source code written in GitHub is linked to it.
For every commit made to the "master" branch an auto deployment is triggered.

The deployment steps consists of 
	* Commit the code
	* Install all dependent packages
	* Check for lint errors
	* build the app
	* deploy it into the server
	* Run the App  
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

