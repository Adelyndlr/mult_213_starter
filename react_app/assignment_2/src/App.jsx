
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import TodoList from './TodoList.jsx';
import Card from './Card.jsx';
import { useState } from 'react';
//import viteLogo from '/vite.svg';
//import reactLogo from './assets/react.svg';



function App() {
  // Define the TODO models
  const [todos, setTodos] = useState([]);


  return (
    <>

      <Header title="Welcome to My Website!" message="Thanks for visiting my site." />

      <TodoList todos={[
        { id: 1, text: "Complete React assignment", completed: false },
        { id: 2, text: "Study for math test", completed: false },
        { id: 3, text: "Do laundry", completed: true }
      ]} />

      <Card title="My Card Title" subtitle="My Card Subtitle" content="This is the content of my card." image="https://example.com/my-image.jpg" />

      <Footer message="Contact me at contact@mywebsite.com" />

    </>
  )
}

export default App

///*******I think I don't need all this (from the in class example)
// It was inside the function  */
  //todos is going to be an empty list
  // if I want to change todos, I need to use the setTodos() callback function 

  // Build up the UI element for the TODOs
 /* let listContent = <></>;

  if (todos.length == 0) {
    // If there are no TODOs, tell the user what to do
    listContent = <li className="todo-list__empty">No tasks yet. Add your first TODO above.</li>;
  } else {
    // If there are TODOs, render them as li elements
    listContent = todos.map((item, i) => {
      return <li className="todo-item">
        <input type="checkbox" className="todo-item__checkbox" data-id={i} id={"todo-" + i} />
        <label for={"todo-" + i} className="todo-item__label">{item.name}</label>
      </li>
    })
  }

  // Set up add new TODO form handler
  const handleFormSubmit = (formData) => {
    const titleField = formData.get('title');
    console.log(`Handling new TODO: ${titleField}`);

    // Make new TODO model
    const newTodo = {
      name: titleField
    };

    // We need to make a new list, otherwise React will not update
    const newTodos = [...todos, newTodo];

    // We call the React hook to update the application state
    setTodos(newTodos);
  };*/