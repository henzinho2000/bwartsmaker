import gbForm from "./form.js";
import gbCarrosel from "./carrosel.js";
import btnTheme from "../globals/btnTheme.js";
import btnImage from "./image.js"

btnImage()
gbForm();
gbCarrosel();
btnTheme();

const submit = document.getElementById("submit");
import createPage from "../page 2/createPage.js";

submit.addEventListener("click", (e)=>{
      e.preventDefault();
      const name = document.getElementById("name");
      const elements = document.querySelectorAll(".elements");
      for (let i in elements){
            console.log(elements[i].value);
            if(elements[i].value.length >= 0){
                  return;
            }
      }
      createPage(name.value);
})