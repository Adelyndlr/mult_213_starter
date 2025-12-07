import './TodoList.css';


/*This what my assistan suggested 
-'onform' to 'ontoggle'(we are not using the form)
-It took the second section from the TodoList function and 
the input part from the App.jsx function.
*/

function TodoList({ todos, onToggle }) {
  return (
    <main>
      <section>
        <h2>My TODOs:</h2>
        <ul className="todo-list">
          {todos.length === 0 ? (
            <li className="todo-list__empty">No tasks yet.</li>
          ) : (
            todos.map(todo => (
              <li key={todo.id} className="todo-item">
                <input
                  type="checkbox"
                  className="todo-item__checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`todo-item__label ${todo.completed ? "completed" : ""}`}
                >
                  {todo.text}
                </label>

              </li>
            ))
          )}
        </ul>
          <button
                  className="todo-item__delete"
                  onClick={() => onDelete(todo.id)}
                >
                  Delete
                </button>
      </section>
    </main>
  );
}


export default TodoList;


//This is how it was before but wasn't working
/*function TodoList({ todos, onFormSubmit }) {
  return (
    <main>
      <section>
        <form id="todo-form" onSubmit={onFormSubmit}>
          <input
            className="todo-form__input"
            id="todo-input"
            name="title"
            type="text"
            placeholder="Add a new task…"
            autoComplete="off"
            required
          />
          <button className="todo-form__button" type="submit">Add</button>
        </form>
      </section>

      <section>
        <h2>My TODOs:</h2>
        <ul className="todo-list" id="todo-list">
          {todos.length === 0 ? (
            <li className="todo-list__empty">No tasks yet. Add your first TODO above.</li>
          ) : (
            todos.map(todo => (
              <li key={todo.id} className={todo.completed ? "completed" : ""}>
                {todo.text}
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}*/