import { FC } from "react";
import AddTodoModal from "../components/TodoList/AddTodoModal";
import TodoList from "../components/TodoList";
import { useState } from "react";
import BaseButton from "../components/shared/ui/BaseButton";
import styled from "styled-components";

const Root: FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const onShowAddModalChange = () => {
    setShowAddModal((show) => !show);
  };

  return (
    <>
      {showAddModal && <AddTodoModal onClose={onShowAddModalChange} />}
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
