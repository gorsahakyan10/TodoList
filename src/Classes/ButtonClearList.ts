export default class ButtonClearList{
   public static setHandler(){
       const buttonsClearList = Array.from(document.querySelectorAll(".ButtonClearList")) as HTMLElement[];
       buttonsClearList.forEach((btn) => {
           btn.addEventListener("click", (e) => {
              if(e.target instanceof HTMLElement &&
                 e.target.previousElementSibling instanceof HTMLElement
                )
              {
                 const list =  e.target.previousElementSibling;
                 list.innerHTML = "<ul></ul>";
              }
           })
       })
   }
}
