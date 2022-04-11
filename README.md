# Challenge_FE

Website created using ReactJS, Material Ui, React-router-dom, axios and Jest for unit tests.

## Backend

https://github.com/MarceloFonseca/tasks-api

### Usage instructions

1. Go to app dir and run npm install 

2. Launch API using: “PORT=3008 NEW_TASK_PERIOD=60000 npm start”, where: 
- **PORT**: App port, default 8080 
- **NEW_TASK_PERIOD**: Period on which a new task is added to the list (in milliseconds), default: 60000 

3. You can access the API using: http://localhost:3008/api/tasks/

4. If you want to use default port or other you need to go the folder src/services/api.ts in Challenge_fe and change baseURL

## Frontend

In the project directory, you can run:

### `yarn` or `yarn install`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


