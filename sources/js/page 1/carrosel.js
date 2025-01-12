function gbCarrosel() {
    const carrosel = document.querySelector(".carrosel");
    const points = document.querySelectorAll(".point");

    let currentIndex = 0;
    const totalImages = carrosel.children.length;

    function updateCarrosel(index) {
        carrosel.style.transform = `translateX(-${index * 25}%)`;
        points.forEach((point, i) => {
            point.classList.toggle("active", i === index);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarrosel(currentIndex);
    }

    points.forEach((point) => {
        point.addEventListener("click", () => {
            currentIndex = parseInt(point.dataset.index, 10);
            updateCarrosel(currentIndex);
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(autoSlide, 3000); // Reinicia o auto slide
        });
    });

    let autoSlideInterval = setInterval(autoSlide, 3000); // Troca automática a cada 3s
}

export default gbCarrosel;