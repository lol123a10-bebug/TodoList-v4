import useTodo from "../../hookstate/hooks/useTodo";
import Todo from "./Todo";

const TodoList = () => {
  const { todoList } = useTodo();

  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id.value} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
