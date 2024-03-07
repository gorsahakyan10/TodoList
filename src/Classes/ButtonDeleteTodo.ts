import TodoList from "./TodoList";

export default class ButtonDeleteTodo{
   public static setHandler(){
      const { todoList } = new TodoList();
      todoList.addEventListener("click", (e) => {
         if(e.target instanceof HTMLElement && 
            e.target.closest(".BtnDeleteTodo") &&
            e.target.parentElement instanceof HTMLElement){
            const todo = e.target.parentElement;
                  todo.remove();
         }
      })
   }  
}
