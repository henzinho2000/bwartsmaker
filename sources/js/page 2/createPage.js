const main = document.querySelector("main");

function createPage(name){
      main.innerHTML = `
                  <section class="congratulations">
                  <div class="text">
                        <h1>PARABÊNS!🥳</h1>
                        <p>
                              Você personalizou o seu tokem de pix, agora converse conosco para efetuar o pagamento.
                        </p>
                  </div>
                  <div class="buttons">
                        <a href="https://wa.me/5511987051565?text=Ol%C3%A1%2C%20eu%20me%20cadastrei%20pelo%20seu%20site%2C%20e%20queria%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20empresa%3A%20${name}" class="button" id="whatsapp">
                              <img src="../sources/styles/images/whatsapp.png" alt="">
                              <p>Whatsapp</p>
                        </a>
                        
                        <img src="../sources/styles/images/divisa.png" class="ou" alt="OU">

                        <a href="https://instagram.com/henzo_arty" class="button" id="instagram">
                              <img src="../sources/styles/images/instagram.png" alt="">
                              <p>Instagram</p>
                        </a>
                  </div>
            </section>
      `;
}

export default createPage;