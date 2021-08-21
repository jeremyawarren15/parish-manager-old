# This code is no longer in active development

I have restarted this project several times and I got to a point where this solution wasn't working out for me, for various reasons. So I have decided to move the next iteration to a separate repo.

## Running for the First Time

In order to run the server for this project you will have to have the most recent version of [Node.js](https://nodejs.org/en/) installed.

After cloning the project you must open whatever command line application you want to use and enter the command `npm install`. Doing so will install all of the dependencies that are required for this project. Any dependencies that you need will be outlined in the package.json.

You should now be ready to move to the next step.

## Running the Development Server

For this project to run correctly, you will have to clone the server from it's repository and follow the instructions for setting that up. As stated in that README, you will need to run an instance of that server every time you want to run this project locally. Both projects should be able to deterimine whether or not they are running in a production environment, so you should not have to update any urls. You may have to update details to get your database connected properly on your local machine. All of those details should be present on the server README.

## Running this Project Locally

After you have made sure that your backend server is running properly, you can now open another instance of your command line application and enter the command `npm run devstart`, which will open up your web browser and display the client application. Any changes that you make to the code for this project will update in the browser after saving. There should be no need to restart the client server unless you find that something isn't working as you expected.

## Code Formatting

We will be using two different packages for automatic code formatting: ESLint and prettier. ESLint gives us some helpful code hints for formatting and logic. Prettier is used for forcing code styling. You will need to install the extensions in VSCode to be able to use the configuration properly. You shouldn't have to set anything up except you may want to enable `Editor: Format on Save` as a global setting in vscode which will trigger Prettier to auto-format your code. We will be using the Airbnb style guid for this project, but as we get going I'm sure that there will be some custom rules that will have to be enabled/disabled as we figure out more and more about this style guide.
