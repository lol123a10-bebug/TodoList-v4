import { createState, none } from "@hookstate/core";
import {
  fetchData,
  removeData,
  sendData,
  updateData,
} from "../../utils/helpers/network";

export type TodoType = {
  id?: string;
  name: string;
  description: string;
  isDone: boolean;
};

export type EditTodoType = { id: string; key: keyof TodoType; value: any };

type InitStateType = {
  todoList: TodoType[];
  selectedTodo: TodoType | null;
};

const todoHookstate = createState<InitStateType>({
  todoList: [],
  selectedTodo: null,
});

const fetchTodos = async () => {
  const todos = await fetchData("/todos.json");

  const todosArray: TodoType[] = [];

  for (const todoId in todos) todosArray.push({ ...todos[todoId], id: todoId });

  todoHookstate.todoList.set(todosArray);
};

const addTodo = async (todo: TodoType) => {
  const todoRes = await sendData("/todos.json", todo);

  const newTodo = { ...todo };
  newTodo.id = todoRes.name;

  todoHookstate.todoList.merge([newTodo]);
};

const removeTodo = async (id: string) => {
  await removeData("/todos", id);
  const foundTodo = todoHookstate.todoList.find((todo) => todo.id.value === id);

  foundTodo?.set(none);
};

const editTodo = async (data: EditTodoType) => {
  const { id, key, value } = data;

  await updateData(`/todos/${id}.json`, { [key]: value });

  const foundTodo = todoHookstate.todoList.find((todo) => todo.id.value === id);
  foundTodo?.[key].set(value);
};

export const todoActions = { addTodo, removeTodo, fetchTodos, editTodo };

export default todoHookstate;
