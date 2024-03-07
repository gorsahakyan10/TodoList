import Todo from "./Todo";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default class TodoForm {
    public static setHandler(): void {
        const form: HTMLElement = document.querySelector("form") as HTMLElement;
        form.addEventListener("submit", (e) => {
            debugger;
            e.preventDefault();
            debugger; 
            if(TodoInput.todoText.length === 0){
                return;
            }
            
            const { todo } = new Todo();
            const cloneTodo = todo.cloneNode(true) as HTMLElement;
                  cloneTodo.classList.remove("invisible");
                  cloneTodo.id = String(++Todo.id);
                  console.log(cloneTodo,"<<<");
            const { todoList } = new TodoList();

            if (cloneTodo.firstElementChild instanceof HTMLElement &&
                todoList.firstElementChild instanceof HTMLElement 
               ) {
                cloneTodo.firstElementChild.innerHTML = TodoInput.todoText;
                todoList.firstElementChild.appendChild(cloneTodo);
                TodoInput.todoInput.value = "";
                TodoInput.todoText = "";
            }
        });
    }
}
