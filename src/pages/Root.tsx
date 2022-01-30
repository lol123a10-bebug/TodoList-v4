import { FC } from "react";
import TodoModal from "../components/TodoList/TodoModal";
import TodoList from "../components/TodoList";
import { useState } from "react";
import BaseButton from "../components/shared/ui/BaseButton";
import styled from "styled-components";
import useTodo from "../hookstate/hooks/useTodo";
import { TodoType } from "../hookstate/state/todoHookstate";

const Root: FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const { onTodoAdded, selectedTodo } = useTodo();

  const onShowAddModalChange = () => {
    setShowAddModal((show) => !show);
  };

  const handleTodoAdd = (todo: TodoType) => {
    onTodoAdded(todo);
  };

  return (
    <>
      {showAddModal && (
        <TodoModal onClose={onShowAddModalChange} onSubmit={handleTodoAdd} />
      )}

      <RootInner>
        <BaseButton onClick={onShowAddModalChange}>Add todo</BaseButton>
        <TodoList />
      </RootInner>
    </>
  );
};

const RootInner = styled.div`
  text-align: center;
`;

export default Root;
