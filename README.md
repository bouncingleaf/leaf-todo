# Jessica Roy's To Do List App

## What is this?
This is a simple To Do List application written in React. 

## Steps I took to create this
1. I set up a React app from scratch, using these directions as a guide:
  https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

I was hoping that using this (as opposed to using create-react-app, or adding the React files as script tags) would allow me to avoid modifying the index.html. However, I wound up modifying it anyway. See "How and why index.html was modified," below.

2. I moved the provided `index.html` to a `public/` folder.

3. I moved `script.js` and `styles.css` to a `src/` folder.

3. I used the Intro to React tutorial here https://reactjs.org/tutorial/tutorial.html to answer many of my questions about React, especially state management. I had already completed a large amount of this tutorial fairly recently, so this was a convenient guide. 

4. I set up two scripts:

    * "build-dev": "webpack --mode development",
    * "start-dev": "webpack-dev-server --mode development",

If I had the occasion to deploy this to a production environment, I'd set up a "build" script with "webpack --mode production" instead. 

## How to run the app

You can see the app in its development form by running the following:

1. `npm install` - this will install all the necessary packages
2. `npm run start-dev` - this will start a development server on http://localhost:3000/.


## How and why index.html was modified

The instructions say "Inside of [index.html](/index.html), you'll find some starter HTML. You shouldn't need to edit this file at all." I did wind up editing it, however, for three reasons:

1. ***State management.*** I tried writing my own state management (which didn't go well) and I tried using Redux to manage state. In the end, it was easiest to have a parent component that managed state that was used across the app, but the existing html file wasn't set up to accommodate a single parent component.
2. ***React artifacts.*** Since I had set up React to use Babel for compiling and Webpack for bundling, the file names and locations for the css and js files were no longer the same as what was listed in the index.html file.
3. ***Bootstrap and FontAwesome.*** I like Bootstrap as a quick way to make an application look nicer, and I am using FontAwesome for the checkmark and x (delete) icons.

I woudn't normally leave commented-out code in a production environment without an excellent reason, but in this case I left the commented out code from index.html so you can more easily see exactly how I modified the file. 


## Future Development Work

If this were a real project, I would want to:

1. Make sure it used responsive design so that it would work well with smaller screen devices
2. Make sure it used proper HTML markup for accessible design
3. Add automated testing

Unfortunately, I can't claim to be an expert on #2 or #3 above, but those are both topics I would like to work with more.

Given more time on this project, I would do the following (which did not appear to be part of the requirements -- if I'm wrong, let me know and I'll be happy to add more!):

1. Write a back end to persist the data to a database -- I would probably use NodeJS and Express. I'd look first at MongoDB and PostgreSQL for the database, as I'm most familiar with those.
2. Improve the layout of the home screen.
3. Allow the user to sort, filter, and/or reorder the list.
4. Allow the user to undo if they delete something. In general, I'd rather make it easy for the user to recover from an error than make it harder for them to complete a task.
5. Make the screen more responsive - right now, if I click on an X to delete something, there's a noticeable pause before that is reflected in the display. There should be a more immediate indication to the user that something is happening, even if the delete itself can't be immediate for whatever reason. For example, the icon could change in some way to give feedback to the user in response to the click.
