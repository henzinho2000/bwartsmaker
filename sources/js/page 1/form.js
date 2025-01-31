function gbForm() {
    function setDescription(){
        const elements = document.querySelectorAll(".elements");
        elements.forEach((element) => {
            const id = element.id;
            const descriptionDiv = document.querySelector(".description");
            element.addEventListener("mouseenter", (e) => {
                const descriptionP = document.querySelector("#description");

                descriptionDiv.style.display = "flex";
                const obj = {
                    name: "Digite aqui o nome da sua empresa",

                    uploadLogo: "Clique aqui para colocar a imagem da logo da sua empresa",

                    modelo: "Selecione o modelo do seu produto, tendo dois modelos: grande e pequeno ",

                    quantidade: "seleciona quantas unidades do produto você queira",

                    pix: "Coloque aqui o número do seu pix",

                    instagram: "Coloque a sua conta profissional do instagram ex: @conta_Instagram",

                    whatsapp: "Coloque o seu número de whatsapp \n (xx) xxxxx-xxxx \nou \n (xx) xxxx-xxxx",

                    catalogo:
                        "Coloque o link do seu site ou agenda, caso não tenha nenhum dos dois, aperte o botão: 'Precisa de ajuda?' para mudar esse campo",
                };
                descriptionP.innerText = obj[id];

                descriptionDiv.style.top = `${e.pageY + 10}px`;
                descriptionDiv.style.left = `${e.pageX - 100}px`;
            });
            element.addEventListener("mouseleave", () => {
                descriptionDiv.style.display = "none";
            });
        });
    }

    function presetWhatsapp(){
        const telefoneInput = document.getElementById("whatsapp");

        telefoneInput.addEventListener("input", (event) => {
            const input = event.target;
            const cursorPosition = input.selectionStart; // Posição do cursor no momento do input
            let value = input.value;

            const onlyNumbers = value.replace(/\D/g, "");

            if (onlyNumbers.length == 10) {
                value = onlyNumbers.replace(
                    /(\d{2})(\d{4})(\d{0,4})/,
                    "($1) $2-$3"
                );
            } else if(onlyNumbers.length > 10){
                value = onlyNumbers.replace(
                    /(\d{2})(\d{5})(\d{0,4})/,
                    "($1) $2-$3"
                );
            }
            else{
                value = onlyNumbers.replace(
                    /(\d{2})/,
                    "$1"
                );
            }

            input.value = value;

            const nextCursorPosition =
                cursorPosition +
                (value.length - input.value.replace(/\D/g, "").length);
            input.setSelectionRange(nextCursorPosition, nextCursorPosition);
        });
    }

    setDescription();
    presetWhatsapp();
}
export default gbForm;
