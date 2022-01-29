import { useHookstate, State } from "@hookstate/core";
import useTodo from "../../hookstate/hooks/useTodo";
import { TodoType } from "../../hookstate/state/todoHookstate";
import BaseButton from "../shared/ui/BaseButton";
import styled from "styled-components";

type PropsType = {
  todo: State<TodoType>;
};

const Todo: React.FC<PropsType> = (props) => {
  const todo = useHookstate(props.todo);
  const { onTodoRemoved } = useTodo();

  const handleRemove = () => {
    window.confirm("Are you sure?") && onTodoRemoved(todo.id.value!);
  };

  return (
    <StyledLi>
      <p>Title: {todo.name.value}</p>
      <p>Description: {todo.description.value}</p>
      <p>{todo.isDone.value}</p>
      <BaseButton onClick={handleRemove}>Remove</BaseButton>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  display: grid;
  gap: 0.5rem;
  width: 30%;
  margin: auto;
  max-width: 20rem;
  border: 1px solid #ccc;
  padding: 1.5rem 0.5rem;
`;

export default Todo;
