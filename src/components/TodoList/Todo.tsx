import { useHookstate, State } from "@hookstate/core";
import useTodo from "../../hookstate/hooks/useTodo";
import { TodoType } from "../../hookstate/state/todoHookstate";
import BaseButton from "../shared/ui/BaseButton";
import styled from "styled-components";
import { useState } from "react";
import TodoModal from "./TodoModal";

type PropsType = {
  todo: State<TodoType>;
};

const Todo: React.FC<PropsType> = (props) => {
  const todo = useHookstate(props.todo);
  const { onTodoRemoved, onTodoEdited } = useTodo();

  const [editModal, setEditModal] = useState(false);

  const handleRemove = () => {
    window.confirm("Are you sure?") && onTodoRemoved(todo.id.value!);
  };

  const handleEditShow = () => {
    setEditModal((prev) => !prev);
  };

  const handleDone = () => {
    todo.isDone.set((isDone) => !isDone);
    onTodoEdited(todo.value);
  };

  const handleEditSubmit = (newTodo: TodoType) => {
    onTodoEdited(newTodo);
  };

  return (
    <>
      {editModal && (
        <TodoModal
          onClose={handleEditShow}
          onSubmit={handleEditSubmit}
          propTodo={todo.value}
        />
      )}

      <StyledLi isDone={todo.isDone.value}>
        <p>Title: {todo.name.value}</p>
        <p>Description: {todo.description.value}</p>
        <ButtonsWrapper>
          <BaseButton onClick={handleRemove}>Remove</BaseButton>
          <BaseButton onClick={handleEditShow}>Edit</BaseButton>
          <BaseButton onClick={handleDone}>
            {todo.isDone.value ? "Undone" : "Done"}
          </BaseButton>
        </ButtonsWrapper>
      </StyledLi>
    </>
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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`;

export default Todo;
