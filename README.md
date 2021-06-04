# Reusable Menu Component

## Summary

<img width="540" alt="preview" src="https://user-images.githubusercontent.com/47092363/120226389-bdb1db00-c264-11eb-813d-dcd07964ed2f.png">

I have created two reusable menu components:

- Simple Menu - `src/components/simple`
- Extended Menu - `src/components/extended`

These reusable components can be added to any project with linked JSON data. The project has been made in React from scratch. I have also added light & dark modes to highlight the styling in both cases. I have done basic testing on the application using different tools. The following are the details of my project.

## Downloading & running the project

These files can be downloaded from GitHub at: https://github.com/anurag-world/atlas-ds-challenge.

**'Main'** branch contains the source files & **'Build'** folder for running the app. The app can be built & run from source files by downloading & installing necessary npm packages and running `npm start`.

Run `npm run create` if you want to create **'Build'** folder again and then run `npm start` in the command line. The project will run on your default browser using **'Webpack'**.

## Adding React, Babel & Webpack

React has been added to the project from scratch and I have avoided using any pre-built packages, just to show my knowledge of using react. I have added two npm packages **'React'** & **'React-DOM'** for React dependencies.

I have also added **'Babel'** with react preset to help translate my app and **'Webpack'** which helps running the app.

## Project Files

The app contains **index.js** where my app is rendered to the DOM, and basic files like **index.html**, **index.css** for styling. All the source files for the app are present in the `src` folder with **App.js** which showcases & renders two components.

The reusable menu components source files are present in the `src/components` folder. The simple menu is in the `src/components/simple` folder and the extended menu in the `src/components/extended` folder. Each folder contains the main file which imports JSON data & other required components for structure & rendering. The main file for simple component is `Menu.js` & for the extended component it's `MenuExt.js`. The project files contain inline comments to describe each code in more detail.

## Styling

`index.css` contains styling for components and as per specifications provided. I prefer using sass but, for this project I have used normal CSS. By clicking the **'Switch to Dark/Light mode'** you can check different styling for the component in **light** or **dark** mode. The dropdown menu has a drop shadow and the colors & fonts used are as per the specifications provided.

## Coding

I have used **Javascript** to code my components and have added comments to explain what each code or function does. I have tried my best to avoid repeating any codes and not overcomplicate them.

## Components

You can click on the title which will open a dropdown menu showcasing the data provided. It highlights the current menu with a 'check' icon and changes when the user selects a new menu. The dropdown closes when you click on the title or anywhere else in the browser. When you move your mouse over the menu, it will highlight for interactivity. The menu data have been **grouped** based on category and are separated with a **divider**.

## Testing

I have basic knowledge of testing my react app. I used different tools to test my components. To run testing using **Jest**, please run the command `npm run test:watch`

### Chrome Dev Tools / React Developer Tools / ESLint

I use **chrome dev tools** most of the time to get a quick analysis of my app, checking the console for possible errors, debugging and styling changes to get the correct structure as per specifications.

I also use **react developer tools**, which is a useful plugin for debugging and inspect my react components & hierarchies. Also, to test props that are passed.

**ESLint** extension for VSCode helps me to debug my code in the editor, find errors quickly & improve my code.

### Jest

I run tests using Jest by adding commands in `App.test.js` running the command `npm run test:watch` in the command line which constantly tests my component while I am coding. It is useful for testing & debugging. I ran basic tests on `App.js` like:

- Render Testing
- Checking availability for JSON Data
- Snapshot Testing with Jest using ‘React Test Renderer’

## Editor

I use Visual Studio Code as my editor which includes various plugins for debugging.
