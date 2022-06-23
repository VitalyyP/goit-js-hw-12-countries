import { ITodoList } from "../../interfaces";

const TodoList: React.FC<ITodoList> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return <p className="center">List of todos is empty</p>;
  }
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li key={todo.id} className={classes.join(" ")}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
                // onChange={() => onToggle(todo.id)}
              />

              <span className="indigo-text">{todo.title}</span>
              <i
                className="material-icons indigo-text"
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
