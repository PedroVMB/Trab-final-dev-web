// SPA: o scroll suave entre seções já está ativado diretamente via CSS com `scroll-behavior: smooth` no `html`.

// Variável global que armazena o idioma atual da página.
// Começa em português (pt), mas pode alternar para inglês (en).
let lang = "pt";

// ================================
// FORMULÁRIO DE CONTATO
// ================================

// Adiciona um ouvinte de evento para o envio do formulário com ID "contact-form"
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio tradicional do formulário

  // Define a mensagem de alerta de acordo com o idioma atual
  const msg = lang === "pt"
    ? "Mensagem enviada com sucesso!"
    : "Message sent successfully!";

  alert(msg); // Exibe a mensagem apropriada
  this.reset(); // Limpa todos os campos do formulário
});

// ================================
// CARROSSEL DE PRATOS
// ================================

// Seleciona a faixa onde os cards do carrossel estão posicionados
const track = document.querySelector('.carousel-track');

// Botões de navegação do carrossel
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Índice que rastreia qual card está sendo exibido
let currentIndex = 0;

// Ao clicar no botão "próximo"
nextBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.carousel .card'); // Todos os cards no carrossel
  const maxIndex = cards.length - 1; // Último índice disponível
  if (currentIndex < maxIndex) currentIndex++; // Avança se não for o último card
  updateCarousel(); // Atualiza a posição do carrossel
});

// Ao clicar no botão "anterior"
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--; // Retrocede se não for o primeiro card
  updateCarousel(); // Atualiza a posição do carrossel
});

// Atualiza a posição da faixa (track) do carrossel com base no índice atual
function updateCarousel() {
  const cardWidth = document.querySelector('.carousel .card').offsetWidth + 32; // Largura do card + margem
  track.style.transform = `translateX(-${cardWidth * currentIndex}px)`; // Move os cards horizontalmente
}

// ================================
// TROCA DE IDIOMA (BILÍNGUE)
// ================================

// Seleciona o botão de alternância de idioma
const toggleBtn = document.getElementById("lang-toggle");

// Ao clicar no botão de idioma
toggleBtn.addEventListener("click", () => {
  // Alterna entre "pt" e "en"
  lang = lang === "pt" ? "en" : "pt";

  // Atualiza o texto do botão (EN → PT ou PT → EN)
  toggleBtn.textContent = lang === "pt" ? "EN" : "PT";

  // Para cada elemento com data-pt e data-en,
  // troca o conteúdo de texto com base no idioma atual
  document.querySelectorAll("[data-pt]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
});
