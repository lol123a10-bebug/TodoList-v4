import { useHookstate } from "@hookstate/core";
import todoHookstate, { todoActions, TodoType } from "../state/todoHookstate";

const useTodo = () => {
  const { todoList, selectedTodo } = useHookstate(todoHookstate);

  const onTodoAdded = (todo: TodoType) => {
    todoActions.addTodo(todo);
  };

  const onTodoRemoved = (id: string) => {
    todoActions.removeTodo(id);
  };

  const onTodoFetched = () => {
    todoActions.fetchTodos();
  };

  return {
    todoList: todoList,
    selectedTodo: selectedTodo,
    onTodoAdded,
    onTodoRemoved,
    onTodoFetched,
  };
};

export default useTodo;
