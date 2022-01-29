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
  const { onTodoRemoved, onTodoEdited } = useTodo();

  const handleRemove = () => {
    window.confirm("Are you sure?") && onTodoRemoved(todo.id.value!);
  };

  const handleDone = () => {
    onTodoEdited({
      id: todo.id.value!,
      key: "isDone",
      value: !todo.isDone.value,
    });
  };

  return (
    <StyledLi isDone={todo.isDone.value}>
      <p>Title: {todo.name.value}</p>
      <p>Description: {todo.description.value}</p>
      <BaseButton onClick={handleRemove}>Remove</BaseButton>
      <BaseButton onClick={handleDone}>
        {todo.isDone.value ? "Undone" : "Done"}
      </BaseButton>
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
  background-color: ${(props: { isDone: boolean }) =>
    props.isDone ? "lime" : "salmon"};
`;

export default Todo;
