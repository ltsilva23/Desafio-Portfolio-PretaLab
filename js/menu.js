/// Função para alternar o menu
function toggleMenu() {
    const toggleButton = document.querySelector('.toggle-btn');
    const menu = document.querySelector('.menu');
    
    // Alterna a classe 'open' no botão para trocar o ícone
    toggleButton.classList.toggle('open');
    
    // Alterna a classe 'active' no menu para exibir/ocultar
    menu.classList.toggle('active');
}
