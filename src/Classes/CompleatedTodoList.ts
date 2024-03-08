import TodoList from "./TodoList";

export default class CompleatedTodoList{
    private _compleatedTodoList: HTMLElement = document.querySelector(".CompleatedTodoList") as HTMLElement;
    
    public static setHandler(){
        const { compleatedTodoList } = new CompleatedTodoList();
        compleatedTodoList.addEventListener("click", (e) => {
           if(e.target instanceof HTMLElement && 
              e.target.closest(".BtnDeleteTodo") &&
              e.target.parentElement instanceof HTMLElement){
              const todo = e.target.parentElement;
              console.log(todo,",,,")
              const { todoList } = new TodoList();

              if(todoList.firstElementChild instanceof HTMLElement){
               const BtnCompleteTodo = todo.querySelector(".BtnCompleteTodo") as HTMLElement;
                BtnCompleteTodo.hidden = false;
                todoList.firstElementChild.appendChild(todo);
              }
           }
        })
    }

    get compleatedTodoList(){
       return this._compleatedTodoList;
    }
}
