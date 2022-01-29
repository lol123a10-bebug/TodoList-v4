import { useHookstate, State } from "@hookstate/core";
import useTodo from "../../hookstate/hooks/useTodo";
import { TodoType } from "../../hookstate/state/todoHookstate";
import BaseButton from "../shared/ui/BaseButton";

type PropsType = {
  todo: State<TodoType>;
};

const Todo: React.FC<PropsType> = (props) => {
  const todo = useHookstate(props.todo);
  const { onTodoRemoved } = useTodo();

  const handleRemove = () => {
    window.confirm("Are you sure?") && onTodoRemoved(todo.id.value);
  };

  return (
    <li>
      <p>Title: {todo.name.value}</p>
      <p>Description: {todo.description.value}</p>
      <p>{todo.isDone.value}</p>
      <BaseButton onClick={handleRemove}>Remove</BaseButton>
    </li>
  );
};

export default Todo;
