// Função para abrir o modal e preencher com os dados do projeto
function openModal(title, imageUrl, description) {
    // Atualiza o título, imagem e descrição do projeto no modal
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = imageUrl;
    document.getElementById("modal-description").innerHTML = description;  // Usar innerHTML para renderizar o link HTML

    // Exibe o modal
    const modal = document.getElementById("project-modal");
    modal.style.display = "block";
    
    // Limpar a descrição anterior e adicionar o link específico para o GitHub
    const viewButton = document.getElementById("viewProjectButton");

    if (title === 'Análise de Vendas de Cursos Online') {
        // Limpar descrição anterior e adicionar o novo conteúdo
        document.getElementById("modal-description").innerHTML += '<p>Confira o código no GitHub <a href="https://github.com/ltsilva23/TrilhaDadosJR-JUN15.git" target="_blank" rel="noopener noreferrer">aqui</a></p>';
        
        viewButton.onclick = function() { 
            window.location.href = "https://trilhadadosjr-jun15-python-dados-cursos.streamlit.app/"; 
        };
    } else if (title === 'Minha Primeira API - Projeto Back-End') {
        // Limpar descrição anterior e adicionar o novo conteúdo
        document.getElementById("modal-description").innerHTML += '<p>Confira o código no GitHub <a href="https://github.com/ltsilva23/meu-primeiro-projeto-back-end.git" target="_blank" rel="noopener noreferrer">aqui</a></p>';
        
        viewButton.onclick = function() { 
            window.location.href = "https://back-end-mz31.onrender.com/mulheres"; 
        };
    }
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("project-modal");
    modal.style.display = "none";
}
