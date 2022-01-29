import { FC } from "react";
import AddTodoModal from "../components/TodoList/AddTodoModal";
import TodoList from "../components/TodoList";
import { useState } from "react";
import BaseButton from "../components/shared/ui/BaseButton";

const Root: FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const onShowAddModalChange = () => {
    setShowAddModal((show) => !show);
  };

  return (
    <>
      {showAddModal && <AddTodoModal onClose={onShowAddModalChange} />}
      <div>
        <BaseButton onClick={onShowAddModalChange}>Add todo</BaseButton>
        <TodoList />
      </div>
    </>
  );
};

export default Root;
