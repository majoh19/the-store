function validateForm(event) {
    event.preventDefault() //Prevenir el envio del formulario

    // Reestablecer mensajes de error
    document.getElementById('nameError').classList.add('d-none')
    document.getElementById('priceError').classList.add('d-none')
    document.getElementById('inventoryError').classList.add('d-none')

    // Verificar que los campos esten vacios
    var nameField = document.getElementById('name')
    var priceField = document.getElementById('price')
    var inventoryField = document.getElementById('inventory')
    var isValid = true

    if (nameField.value.trim() === '') {
        document.getElementById('nameError').classList.remove('d-none')
        isValid = false
    }

    if (priceField.value.trim() === '') {
        document.getElementById('priceError').classList.remove('d-none')
        isValid = false
    }

    if (inventoryField.value.trim() === '') {
        document.getElementById('inventoryError').classList.remove('d-none')
        isValid = false
    }

    // Mostrar alerta y limpiar campos
    if (isValid) {
        alert('Producto creado')
        nameField.value = ''
        priceField.value = ''
        inventoryField.value = ''
    }
}