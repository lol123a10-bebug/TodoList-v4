import { useHookstate } from "@hookstate/core";
import todoHookstate, {
  EditTodoFnType,
  todoActions,
  TodoType,
} from "../state/todoHookstate";

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

  const onTodoEdited: EditTodoFnType = (todo) => {
    todoActions.editTodo(todo);
  };

  return {
    todoList: todoList,
    selectedTodo: selectedTodo,
    onTodoAdded,
    onTodoRemoved,
    onTodoFetched,
    onTodoEdited,
  };
};

export default useTodo;
