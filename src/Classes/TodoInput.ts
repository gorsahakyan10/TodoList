export default class TodoInput{
   public static todoText: string = "";
   public static todoInput: HTMLInputElement = document.querySelector(".TodoInput") as HTMLInputElement;

   public static setHandler(){
      TodoInput.todoInput.addEventListener("input", (e) => {
         if(e.target instanceof HTMLInputElement){
            TodoInput.todoText = e.target.value;
         }
      })
   }
}

