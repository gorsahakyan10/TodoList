import CompleatedTodoList from "./CompleatedTodoList";
import TodoList from "./TodoList";

export default class ButtonCompleteTodo{    
    public static setHandler(){
        const { todoList } = new TodoList();
        todoList.addEventListener("click", (e) => {
           if(e.target instanceof HTMLElement && 
              e.target.closest(".BtnCompleteTodo") &&
              e.target.parentElement instanceof HTMLElement){
              const todo = e.target.parentElement;
              console.log(todo);
              const { compleatedTodoList } = new CompleatedTodoList();
              
              if(compleatedTodoList.firstElementChild instanceof HTMLElement){
                const BtnCompleteTodo = todo.querySelector(".BtnCompleteTodo") as HTMLElement;
                BtnCompleteTodo.hidden = true;
                compleatedTodoList.firstElementChild.appendChild(todo);
              }
           }
        })
    }
}
