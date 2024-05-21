// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('nav ul li a');

// Função para rolar suavemente até a seção correspondente
function smoothScrollToSection(event) {
  event.preventDefault(); // Impede o comportamento padrão do link

  const targetId = event.target.getAttribute('href'); // Obtém o ID da seção alvo
  const targetSection = document.querySelector(targetId); // Seleciona a seção alvo

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção alvo
  }
}

// Adiciona um evento de clique a cada link de navegação
navLinks.forEach(link => {
  link.addEventListener('click', smoothScrollToSection);
});
