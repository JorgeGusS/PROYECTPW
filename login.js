document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validar credenciales
    if (username === 'Nicolas' && password === 'admin123') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'inventory.html';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
        errorMessage.style.display = 'block';
    }
});
