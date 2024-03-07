export default class ClearButtonVisibilityController{
    public static setHandler(){
        const form = document.querySelector("form") as HTMLElement;
        form.addEventListener("submit", () => {
         ClearButtonVisibilityController.defineVisibilityClearBtn(".TodoList"); 
        })

        document.addEventListener("click", () => {
          ClearButtonVisibilityController.defineVisibilityClearBtn(".CompleatedTodoList")
          ClearButtonVisibilityController.defineVisibilityClearBtn(".TodoList") 
         })
    }

    private static defineVisibilityClearBtn(selector: string){
      const list = document.querySelector(selector) as HTMLElement;
      if(list instanceof HTMLElement &&
         list.firstElementChild instanceof HTMLElement &&
         list.nextElementSibling instanceof HTMLElement
        )
      {
         if(list.firstElementChild.innerHTML === ""){
            list.nextElementSibling.classList.add("invisible")
         }else{
            list.nextElementSibling.classList.remove("invisible")
         }
      } 
    }
}