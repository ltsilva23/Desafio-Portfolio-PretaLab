document.addEventListener("DOMContentLoaded", function() {
    // Função para exibir conteúdo de uma seção com base na página selecionada
    function showPage(sectionId, pageNum) {
        const section = document.getElementById(sectionId);
        const items = section.querySelectorAll('.timeline');
        
        items.forEach(item => {
            const itemPage = item.getAttribute('data-page');
            if (itemPage == pageNum) {
                item.style.display = 'block'; // Exibe o item
            } else {
                item.style.display = 'none'; // Oculta o item
            }
        });
    }

    // Adiciona evento de clique para a paginação da Experiência
    const experienciaPagination = document.getElementById('pagination-experiencia');
    experienciaPagination.addEventListener('click', function(event) {
        if (event.target.classList.contains('dot')) {
            const pageNum = event.target.getAttribute('data-page');
            showPage('experiencia', pageNum);
        }
    });

    // Adiciona evento de clique para a paginação da Formação
    const formacaoPagination = document.getElementById('pagination-formacao');
    formacaoPagination.addEventListener('click', function(event) {
        if (event.target.classList.contains('dot')) {
            const pageNum = event.target.getAttribute('data-page');
            showPage('formacao', pageNum);
        }
    });

    // Adiciona evento de clique para a paginação dos Cursos
    const cursosPagination = document.getElementById('pagination-cursos');
    cursosPagination.addEventListener('click', function(event) {
        if (event.target.classList.contains('dot')) {
            const pageNum = event.target.getAttribute('data-page');
            showPage('cursos', pageNum);
        }
    });

    // Adiciona evento de clique para a paginação dos Cursos
    const certificacoesPagination = document.getElementById('pagination-certificacoes');
    certificacoesPagination.addEventListener('click', function(event) {
        if (event.target.classList.contains('dot')) {
            const pageNum = event.target.getAttribute('data-page');
            showPage('certificacoes', pageNum);
        }
    });

    // Inicializa a visualização das primeiras páginas
    showPage('experiencia', 1);
    showPage('formacao', 5);
    showPage('cursos', 7);
    showPage('certificacoes', 11);
});

