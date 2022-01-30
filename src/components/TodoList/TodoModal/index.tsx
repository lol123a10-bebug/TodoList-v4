import { useState } from "react";
import styled from "styled-components";
import { ChangeEvent, FormEvent } from "react";
import ModalWrapper from "../../shared/ui/ModalWrapper";
import BaseButton from "../../shared/ui/BaseButton";
import { TodoType } from "../../../hookstate/state/todoHookstate";

type PropsType = {
  onClose: Function;
  onSubmit: (todo: TodoType) => void;
  propTodo?: TodoType;
};

const initTodo = {
  id: "",
  name: "",
  description: "",
  isDone: false,
};

const TodoModal: React.FC<PropsType> = (props) => {
  const { onClose, onSubmit, propTodo } = props;

  const [todo, setTodo] = useState(propTodo || initTodo);

  const handleTodoValue = (key: "name" | "description") => todo[key];

  const handleTodoChange =
    (key: "name" | "description") => (e: ChangeEvent<HTMLInputElement>) => {
      setTodo((todo) => ({ ...todo, [key]: e.target.value }));
    };

  const handleClose = () => onClose();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo.name.trim() === "") return alert("Please fill name.");

    onSubmit(todo);
    handleClose();
  };

  return (
    <ModalWrapper onClose={handleClose}>
      <StyledAddTodo name={todo.id} onSubmit={handleSubmit}>
        <Label htmlFor="name">Title:</Label>
        <Input
          id="name"
          onChange={handleTodoChange("name")}
          value={handleTodoValue("name")}
        />

        <Label htmlFor="description">Description:</Label>
        <Input
          id="description"
          onChange={handleTodoChange("description")}
          value={handleTodoValue("description")}
        />

        <StyledButton type="submit">OK</StyledButton>
      </StyledAddTodo>
    </ModalWrapper>
  );
};

const Label = styled.label`
  color: #fff;
`;

const StyledButton = styled(BaseButton)`
  grid-column-end: -1;
`;

const Input = styled.input`
  padding: 0.5rem 0.5rem;
`;

const StyledAddTodo = styled.form`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  align-items: center;
  column-gap: 0.5rem;
  row-gap: 1rem;
`;

export default TodoModal;
