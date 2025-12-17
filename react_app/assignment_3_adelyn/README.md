# Intro

This project was created by running: `npm create vite@latest todo_app -- --template react`

To get set up:
- Run `npm install`
- Run `npm run dev`, and visit the url it gives you

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/)

# PLAN

Create 4 static components (header, footer, TodoList, Card)
-For this I'll duplicate the example the instructor arrange in class (duplicating files)
-Each component needs a file on its own (.jsx and .css)
-It doesn't need to be dynamic 

Each component musts
-Header must have Title 'h1', message 'p'
-Footer must have message 'p', default message "Copyright © 2023 My Website. All rights reserved."
-TodoList must have
    -Shoud be displayed as a list
    -each item should have its own checkbox and text
    -button to remove the items from the list
-Cards must have title 'h2', subtitle 'h3', content 'p', image 'img'

# Plan execution

After creating the header, I duplicated it in the footer and modified the tags it should have.
For the TodoList, I changed the `onform` method to `ontoggle` because I won't be using the form for this exercise.
For the card, I duplicated the header elements and modified the tags.
All the components CSS were modified in some way.

