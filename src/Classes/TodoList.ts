export default class TodoList{
   private _todoList: HTMLElement = document.querySelector(".TodoList") as HTMLElement;
   
   get todoList(){
     return this._todoList; 
   }
}
