import { useState } from "react";
import TodoList from "./components/TodoList";

export default function TodoFeature() {
  const initTodoList = [
    { id: 1, title: "eat", status: "new" },
    { id: 2, title: "sleep", status: "completed" },
    { id: 3, title: "code", status: "completed" },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo: any, idx: any) => {
    //clone current array to new one
    const newTodoList = [...todoList];
    console.log("idx", newTodoList[idx]);
    //toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    console.log("newTodo", newTodo);
    newTodoList[idx] = newTodo;

    //update todo list
    setTodoList(newTodoList);
  };

  //FILTER
  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  console.log(renderedTodoList);

  return (
    <>
      <h2>Todo list</h2>
      <TodoList
        todoList={renderedTodoList}
        onTodoClick={(todo: any, idx: any) => handleTodoClick(todo, idx)}
      />
      <button onClick={handleShowAllClick}>Show all</button>
      <button onClick={handleShowCompletedClick}>Show completed</button>
      <button onClick={handleShowNewClick}>Show new</button>
    </>
  );
}
