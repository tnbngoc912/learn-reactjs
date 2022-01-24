import classNames from "classnames";
import "./styles.scss";

interface todoListProps {
  todoList?: any;
  onTodoClick?: any;
}

export default function TodoList(props: todoListProps) {
  const handleTodoClick = (todo: any, idx: any) => {
    if (!props.onTodoClick) return;
    props.onTodoClick(todo, idx);
  };
  return (
    <ul className="todo-list">
      {props.todoList.map((todo: any, idx: any) => (
        <>
          <p>{todo.id}</p>
          <li
            key={todo.id}
            className={classNames({
              "todo-item": true,
              completed: todo.status === "completed",
            })}
            // className={todo.status === "completed" ? "completed" : ""}
            onClick={() => handleTodoClick(todo, idx)}
          >
            {todo.title}
          </li>
        </>
      ))}
    </ul>
  );
}
