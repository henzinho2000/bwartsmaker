function changeTheme (){
    const btnTheme = document.querySelector(".btTheme");
    let dark = false;

    function changeColor(varCss,newColor){
        const root = document.documentElement;
        root.style.setProperty(varCss, newColor);
    }
    function changeBtnTheme(newClass,color){
        const btnI = document.querySelector("#btnI");
        btnI.style.color = color;
        btnI.className = newClass;
    }

    function changeColorSubmit(newColor){
        const submit = document.querySelector("#submit");
        submit.style.background = newColor;
    }

    function setDarkMode(){
        changeColor("--color2","#3b2112");
        changeColor("--color6","#6c3719");
        changeColor("--color8","#f17d1e");
        changeColor("--color9","#1b0d03");
        changeColor("--color10","black");
        changeBtnTheme("fa-solid fa-sun","var(--color5)");

        changeColorSubmit("#f17d1e");
    }
    function setLightMode(){
        changeColor("--color2","#fff2dc");
        changeColor("--color6","#f17d1e");
        changeColor("--color8","#6c3719");
        changeColor("--color9","#3b2112");
        changeColor("--color10","#1b0d03");
        changeBtnTheme("fa-solid fa-moon","var(--color10)");
    
        changeColorSubmit("var(--color9)");
    }


    btnTheme.addEventListener("click",()=>{
        if(!dark){
            setDarkMode();
            dark = true;
        }else{
            setLightMode();
            dark = false;
        }
    })

}

export default changeTheme;