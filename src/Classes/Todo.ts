export default class Todo{
   private _todo: HTMLElement;
   
   public static id = 0;

   constructor(){
      this._todo = document.querySelector("#original") as HTMLElement;
   }

   get todo(){
     return this._todo;
   }
}
