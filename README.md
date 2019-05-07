# Jessica Roy's To Do List App

## Steps I took to create this

1. I cloned the repo provided for the exercise, removed .git to detach it from the MassMutual repo, renamed the folder, re-initialized git to connect it to a repo of my own. 

2. I installed ReactJS into a separate scratch space by doing `npx create-react-app` and then removing all the files in src as described here:
https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment

3. I replaced those default files with the starter files that came with the project.

4. I did some finagling to get `npm start` to work (it looks for index.js by default, so there's an index.js that just loads script.js)

5. I copied the file structure (except node_modules and the README) from the dummy into the my repo

6. I did `npm install` to rebuild node_modules

7. I ran `npm start` to confirm that all this did what I wanted it to. 

## Instructions
Inside of [index.html](/index.html), you'll find some starter HTML. You shouldn't need to edit this file at all. Open this file on your computer into any browser to run the project. Make sure that [script.js](/script.js) and [styles.css](/styles.css)
are in the same local directory. With the file open in your browser, you should see a `New TODO` button, which `alert`s when clicked. Your goal will be to get this button to create new TODOs.

[script.js](/script.js) is where most of your work will be done. There is some starter code for you in the file. The `classNames` variable can be used to link any elements you create in js with the associated CSS class names. The next 3 lines of code are the HTML elements that you'll need to update when creating new
TODOs. Lastly, you'll see the `addTodo()` function. This gets executed when creating a new TODO. You should replace the `alert()` call with logic to create new TODOs.

## Challenge! (Not Required)
If you finish early and are up for a challenge, try adding delete functionality. This should be in the form of a button within each TODO that removes that TODO when clicked.
