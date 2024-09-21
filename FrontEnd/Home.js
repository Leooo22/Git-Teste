// Home.js
function changeTheme(theme) {
    const body = document.body;
  
    // Remove todas as classes de tema existentes
    body.classList.remove('theme-dark', 'theme-light');
  
    // Adiciona a classe do novo tema
    if (theme === 'dark') {
      body.classList.add('theme-dark');
    } else if (theme === 'light') {
      body.classList.add('theme-light');
    }
  
    // Salva o tema no localStorage
    localStorage.setItem('theme', theme);
  }
  
  // Carrega o tema salvo no localStorage ao carregar a página
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      changeTheme(savedTheme);
    }
  }
  
  // Carrega o tema ao iniciar
  loadTheme();
  
  // Exemplo de uso
  document.getElementById('theme-dark').addEventListener('click', () => changeTheme('dark'));
  document.getElementById('theme-light').addEventListener('click', () => changeTheme('light'));
  document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-toggle");

    // Função para aplicar o tema
    function applyTheme(theme) {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
        
        // Atualiza o ícone do botão
        if (theme === "dark-theme") {
            themeToggleButton.classList.add("dark");
            themeToggleButton.classList.remove("light");
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Lua para o tema escuro
        } else {
            themeToggleButton.classList.add("light");
            themeToggleButton.classList.remove("dark");
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Sol para o tema claro
        }
    }

    // Verifica o tema salvo e aplica
    function loadTheme() {
        const savedTheme = localStorage.getItem("theme") || "light-theme";
        document.body.className = savedTheme;
        
        if (savedTheme === "dark-theme") {
            themeToggleButton.classList.add("dark");
            themeToggleButton.classList.remove("light");
            themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Lua para o tema escuro
        } else {
            themeToggleButton.classList.add("light");
            themeToggleButton.classList.remove("dark");
            themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Sol para o tema claro
        }
    }

    // Alterna o tema ao clicar no botão
    themeToggleButton.addEventListener("click", function() {
        const currentTheme = document.body.className;
        if (currentTheme === "dark-theme") {
            applyTheme("light-theme");
        } else {
            applyTheme("dark-theme");
        }
    });

    // Carregar o tema ao iniciar a página
    loadTheme();
});
