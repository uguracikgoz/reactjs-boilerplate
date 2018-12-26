# SAM TEMPLATE

A usefull boilerplate and secure, reusable, scalable, flexible SAM ( Shred, allocate and manage ) template with sharp architecture for react app.

Here is typed down what are neceserry for getting started :

## `A. Public section`
    
### `A.1.Add your own required libraries-files into public/assets folder.`
        The main purpose of react and structure of this template aims to shred, allocate and manage.
        That is why, we are supposed to locate only shared libraries into public/assets folder. Rest of styling classes and js functions will be located in component folders considering SAM structure.

### `A2.  Edit only title section in index.html`
### `A3.  Edit manifest file. ( This will be appeared on mobile devices. )`

## `B. Source section`
### `B.1. Routes`
####    `B.1.1. Route files`
            Go src/routers folder and create your own routes files first.
            You are also able to implement which ever template part that is needed in route files.
####    `B.1.2. Import route files`
            Go into src/index.js and import route files you have created.
####    `B.1.3. Define each Routes and their paths`
            Go into src/index.js and define paths of routes that you have imported in switch section.
#####       `B.1.3.1. Private Route`
                Private route is route type that needs authentication
### `B.2. Templating`
        There is no need to edit content.jsx. You may only want to make some changes on footer and header because content directly referers the content files in Contents folder regarding what props brings via routes.

### `B.3. Content Section`
        The main purpose of this structure and boilerplate is Content section. 
        You may develop reuseable components using this structure. Each view has it's css file and each components includes its own css classes. Whenever you need a component again in any project, you just pick the regarding component and go.

### `B.4. Authentication Engine with JWT`
        Prevent `hijacking` and `session thiefs` and its easy to implement google,facebook etc
        auth implementation 3th party services.
        See also :
            https://jwt.io/introduction/
            https://stackoverflow.com/a/48063529

        There are 3 main functions that is used commonly. Do not forget to set [domain] : RestAPI Url in src/AuthEngine.js
####    `1. [loggedIn] ->` check if user logged in
####    `2. [login]    ->` send username and password field to regarded RestAPI that has JWT token.
####    `3. [logout]   ->` basicly logs out regarding user.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
