document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add form submission logic here
    alert('Registro efetuado com sucesso');
});


document.getElementById('cpf').addEventListener('input', function (event) {
    let input = event.target;
    input.value = formatCPF(input.value);
});

function formatCPF(value) {
    value = value.replace(/\D/g, ""); // Remove all non-digit characters
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Add dot after the first 3 digits
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Add dot after the next 3 digits
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Add dash before the last 2 digits
    return value;
}

document.getElementById('cpf').addEventListener('keypress', function (event) {
    if (!isNumberKey(event)) {
        event.preventDefault();
    }
});

function isNumberKey(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
        return false;
    }
    return true;
}