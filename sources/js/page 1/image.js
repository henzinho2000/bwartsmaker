const btnImage = () => {
    const uploadLogo = document.getElementById("uploadLogo");
    const imageInput = document.getElementById("imageInput");

    uploadLogo.addEventListener("click", () => {
        imageInput.click();
    });

    imageInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();

            reader.onload = (e) => {
                uploadLogo.style.backgroundImage = `url('${e.target.result}')`;
                uploadLogo.textContent = "";
            };

            reader.readAsDataURL(file); 
        }
    });
};

export default btnImage;
