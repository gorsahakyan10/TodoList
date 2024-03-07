import ButtonClearList from "./ButtonClearList";
import ButtonCompleteTodo from "./ButtonCompleteTodo";
import ButtonDeleteTodo from "./ButtonDeleteTodo";
import ClearButtonVisibilityController from "./ClearButtonVisibilityController";
import CompleatedTodoList from "./CompleatedTodoList";
import TodoForm from "./TodoForm";
import TodoInput from "./TodoInput";

export default class TodoListLauncher {
  public static run() {
    TodoInput.setHandler();
    TodoForm.setHandler();
    ButtonDeleteTodo.setHandler();
    ButtonCompleteTodo.setHandler();
    CompleatedTodoList.setHandler();
    ButtonClearList.setHandler();
    ClearButtonVisibilityController.setHandler(); 
  }
}
