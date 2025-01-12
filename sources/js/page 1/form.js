function setEventInElements() {
    const elements = document.querySelectorAll(".elements");
    elements.forEach((element) => {
        const id = element.id;
        const descriptionDiv = document.querySelector(".description");
        element.addEventListener("mouseenter", (e) => {
            const descriptionP = document.querySelector("#description");

            descriptionDiv.style.display = "flex";
            const obj = {
                logo: "Clique aqui para colocar a imagem da logo da sua empresa",

                modelo: "Selecione o modelo do seu produto, tendo dois modelos: grande e pequeno ",

                quantidade: "seleciona quantas unidades do produto você queira",

                pix: "Coloque aqui o número do seu pix",

                instagram: "Coloque o seu arroba profissional",

                whatsapp: "Coloque o seu número de whatsapp",

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
export default setEventInElements;