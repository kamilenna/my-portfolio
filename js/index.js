const projetos = [
  {
    capa: "../../assets/images/capa-projeto404.png",
    titulo: "PAGE 404 NOT FOUND",
    descricao: "Desafio do Devchallenges: O desafio era construir uma página 404 seguindo as histórias de usuários fornecidas.",
    techs: "HTML, CSS",
    linkGitHub: "https://github.com/kamilenna/page404",
    linkLive: "https://kamilenna.github.io/page404/",
    btnVisible: "visible",
  },
  {
    capa: "../../assets/images/Capa-selfcare.png",
    titulo: "Selfcare Store",
    descricao: "Uma página para exibição de produtos de uma loja online chamada selfcare.",
    techs: "HTML, CSS, JavaScript",
    linkGitHub: "https://github.com/kamilenna/selfcare-Devchallenge",
    linkLive: "https://selfcare-shop.netlify.app/",
    btnVisible: "visible",
  },
  {
    capa: "../../assets/images/Capa-fiber.png",
    titulo: "Fiber - Landing page",
    descricao: "Landing page de um site de gerador de portfólios online.",
    techs: "HTML, CSS, Bootstrap",
    linkGitHub: "https://github.com/kamilenna/Fiber-Challenge",
    linkLive: "https://fiber-page.netlify.app/",
    btnVisible: "visible",
  },
  {
    capa: "../../assets/images/Capa-advice-app.png",
    titulo: "Gerador de conselhos",
    descricao: "Projeto capaz de gerar conselhos aleatoriamente.",
    techs: "HTML, CSS, Javascript, ReactJs + ViteJs, Consumo de Api com Fetch",
    linkGitHub: "https://github.com/kamilenna/adviceapp",
    linkLive: "https://advicesgeneretor.netlify.app/",
    btnVisible: "visible",
  },
  {
    capa: "../../assets/images/Capa-viagens.png",
    titulo: "Agência de viagens",
    descricao: "Landing Page de uma agência de viagens.",
    techs: "HTML, CSS, Javascript, ReactJs + ViteJs, Biblioteca SplideJs",
    linkGitHub: "https://github.com/kamilenna/projetoViagens",
    linkLive: "https://tour-viagens.netlify.app/",
    btnVisible: "visible",
  },
  {
    capa: "../../assets/images/Capa-projeto-trailer.png",
    titulo: "Projeto trailer",
    descricao: "Projeto desenvolvido durante a Semana: Do zero a programador contratado, oferecida pelo canal Dev em Dobro. Página para exibir o trailer de um filme/série.",
    techs: "HTML, CSS, Javascript",
    linkGitHub: "https://github.com/kamilenna/projeto-trailer",
    linkLive: "https://kamilenna.github.io/projeto-trailer/",
    btnVisible: "visible",
  },
  {
    capa: "../../assets/images/Capa-music-player.png",
    titulo: "Melody Music Player",
    descricao: "Um site onde você pode encontrar e aproveitar suas musicas favoritas, consumindo a API do Deezer.",
    techs: "ReactJs + ViteJs, Axios, dotenv",
    linkGitHub: "https://github.com/kamilenna/projeto-music-player",
    linkLive: "https://melodyplay.netlify.app/",
    btnVisible: "visible",
  },
  {
    capa: "../../assets/images/Capa-projeto-my-links.png",
    titulo: "My Links",
    descricao: "Um página com links para as minhas redes, inspirada no linktree.",
    techs: "HTML, CSS",
    linkGitHub: "https://github.com/kamilenna/my-links",
    linkLive: "https://kamilenna.github.io/my-links/",
    btnVisible: "visible",
  },
  {
    capa: "../../assets/images/Capa-projeto-fresco.png",
    titulo: "Fresco - Restaurante italiano",
    descricao: "Projeto de site para uma restaurante italiano desenvolvido junto com o canal Curso em Video.",
    techs: "Wordpress, Editor Gutemberg, Tema Astra, microthemer, WpForms",
    linkGitHub: "#",
    linkLive: "https://frescorestaurante.great-site.net/",
    btnVisible: "hidden",
  },
  {
    capa: "../../assets/images/Capa-projeto-happy-pets.png",
    titulo: "Happy pets",
    descricao: "Projeto de um site para um centro de cuidado de animais.",
    techs: "Wordpress, Editor Elementor, Tema Astra, Microthemer, WpForms",
    linkGitHub: "#",
    linkLive: "https://happypets.great-site.net/",
    btnVisible: "hidden",
  },
  // {
  //   capa: "../../assets/images/Capa-em-breve.png",
  //   titulo: "&#x1F6A7 Em construção",
  //   descricao: "Projeto em processo de contrução, em breve estará disponível.",
  //   techs: "em breve",
  //   linkGitHub: "#",
  //   linkLive: "#",
  // },
]

function listarProjetos() {
  var cardsProjetos = document.getElementById("cards-projetos")

  projetos.map((item) => {
    cardsProjetos.innerHTML += `
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
                  
                  <a href="${item.linkLive}" target="_blank"
                    ><strong class="destaque">
                      VER PROJETO
                      <i class="fa-solid fa-arrow-right"></i> </strong
                  ></a>

                  <a
                    href="${item.linkGitHub}"
                    class="icon-git"
                    target="_blank"
                    style="visibility: ${item.btnVisible};"
                    ><strong class="destaque"
                      ><i class="fa-brands fa-github"></i>CÓDIGO</strong
                    ></a
                  >
                </div>
              </div>
            </div>
          </div>`
  })
}