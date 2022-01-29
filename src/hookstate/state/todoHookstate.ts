import { createState, none } from "@hookstate/core";

export type TodoType = {
  id: string;
  name: string;
  description: string;
  isDone: boolean;
};

type InitStateType = {
  todoList: TodoType[];
  selectedTodo: TodoType | null;
};

const todoHookstate = createState<InitStateType>({
  todoList: [],
  selectedTodo: null,
});

const addTodo = (todo: TodoType) => {
  todoHookstate.todoList.merge([todo]);
};

const removeTodo = (id: string) => {
  const foundTodo = todoHookstate.todoList.find((todo) => todo.id.value === id);

  foundTodo?.set(none);
};

export const todoActions = { addTodo, removeTodo };

export default todoHookstate;
