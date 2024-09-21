// Capturamos el formulario y la tabla de inventario
const productForm = document.getElementById('product-form');
const inventoryBody = document.getElementById('inventory-body');

// Función para agregar productos
productForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const productName = document.getElementById('product-name').value;
    const productCategory = document.getElementById('product-category').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productExpiration = document.getElementById('product-expiration').value;
    const productImage = document.getElementById('product-image').files[0];

    // Verificar si se seleccionó una imagen
    if (productImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Crear una nueva fila
            const row = document.createElement('tr');

            // Llenar la fila con los datos, incluyendo la imagen
            row.innerHTML = `
                <td><img src="${e.target.result}" alt="${productName}" class="product-image"></td>
                <td>${productName}</td>
                <td>${productCategory}</td>
                <td>${productQuantity}</td>
                <td>${productExpiration}</td>
                <td><button class="delete-btn">Eliminar</button></td>
            `;

            // Añadir la fila al cuerpo de la tabla
            inventoryBody.appendChild(row);

            // Limpiar el formulario
            productForm.reset();

            // Función para eliminar productos
            row.querySelector('.delete-btn').addEventListener('click', function() {
                inventoryBody.removeChild(row);
            });
        };
        reader.readAsDataURL(productImage);  // Convertir la imagen en base64 para mostrarla
    }
});

// Cerrar sesión
document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
});
