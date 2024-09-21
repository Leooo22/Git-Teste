// Função para mudar o tema
function changeTheme(theme) {
  const body = document.body;
  const themeToggleButton = document.getElementById('theme-toggle');

  // Remove todas as classes de tema existentes
  body.classList.remove('theme-dark', 'theme-light');

  // Aplica o tema correto
  if (theme === 'dark') {
    body.classList.add('theme-dark');
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Ícone de sol
  } else {
    body.classList.add('theme-light');
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Ícone de lua
  }

  // Salva o tema no localStorage
  localStorage.setItem('theme', theme);
}

// Carrega o tema salvo no localStorage ao carregar a página
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Padrão para o tema claro
  changeTheme(savedTheme);
}

document.addEventListener("DOMContentLoaded", function() {
  const themeToggleButton = document.getElementById('theme-toggle');

  // Carrega o tema ao iniciar a página
  loadTheme();

  // Alterna o tema ao clicar no botão
  themeToggleButton.addEventListener('click', function() {
    const currentTheme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    changeTheme(newTheme);
  });

  // Faz a requisição ao backend para buscar os veículos
  fetch('http://localhost:5000/api/veiculos')
    .then(response => response.json())
    .then(data => {
      const vehiclesList = document.getElementById('vehicles-list');
      vehiclesList.innerHTML = '';
      data.forEach(vehicle => {
        const listItem = document.createElement('li');
        listItem.textContent = `${vehicle.marca} ${vehicle.modelo} - ${vehicle.ano}`;
        vehiclesList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Erro:', error));
});
