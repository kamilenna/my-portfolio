const projetos = [
    {
        capa: "../../assets/images/Capa-selfcare.png",
        titulo: "Selfcare Store",
        descricao: "Uma página para exibição de produtos de uma loja online chamada selfcare.",
        techs: "HTML, CSS, JavaScript",
        linkGitHub: "https://github.com/kamilenna/selfcare-Devchallenge",
        linkLive: "https://selfcare-shop.netlify.app/",
    },
    {
        capa: "../../assets/images/Capa-fiber.png",
        titulo: "Fiber - Landing page",
        descricao: "Landing page de um site de gerador de portfólios online.",
        techs: "HTML, CSS, Bootstrap",
        linkGitHub: "https://github.com/kamilenna/Fiber-Challenge",
        linkLive: "https://fiber-page.netlify.app/",
    },
    {
      capa: "../../assets/images/Capa-em-breve.png",
      titulo: "&#x1F6A7 Em construção",
      descricao: "Projeto em processo de contrução, em breve estará disponível.",
      techs: "em breve",
      linkGitHub: "#",
      linkLive: "#",
  },
]

function listarProjetos() {
    var cardsProjetos = document.getElementById("cards-projetos")

    projetos.map((item) => {
        cardsProjetos.innerHTML+= `
        <div class="projeto">
            <div class="card">
              <div class="card-img">
                <img src="${item.capa}" alt="" />
              </div>
              <div class="card-content">
                <div class="card-title">
                  <p><strong>${item.titulo}</strong></p>
                </div>
                <div class="card-descricao">
                  <p>
                    ${item.descricao}
                  </p>
                  <p>
                    <strong>Tecnologias Utilizadas: </strong>${item.techs}
                  </p>
                </div>
                <div class="links-projeto">
                  <a
                    href="${item.linkGitHub}"
                    class="icon-git"
                    target="_blank"
                    ><strong class="destaque"
                      ><i class="fa-brands fa-github"></i>CÓDIGO</strong
                    ></a
                  >
                  <a href="${item.linkLive}" target="_blank"
                    ><strong class="destaque">
                      VER PROJETO
                      <i class="fa-solid fa-arrow-right"></i> </strong
                  ></a>
                </div>
              </div>
            </div>
          </div>`
    })
}