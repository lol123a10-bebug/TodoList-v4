import { useEffect } from "react";
import useTodo from "../../hookstate/hooks/useTodo";
import Todo from "./Todo";
import styled from "styled-components";

const TodoList = () => {
  const { todoList, onTodoFetched } = useTodo();

  const handleTodoFetch = () => {
    onTodoFetched();
  };

  useEffect(() => {
    handleTodoFetch();
  }, []);

  return (
    <StyledUl>
      {todoList.map((todo) => (
        <Todo key={todo.id.value} todo={todo} />
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: grid;
  gap: 2rem;
  padding-top: 2.5rem;
`;

export default TodoList;
