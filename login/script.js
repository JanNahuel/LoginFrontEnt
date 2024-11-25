//referencias a los elementos del dom 
const loginForm= document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

//datos de ejemplo para el usuario y la contraseña validos
const validUsername = 'usuario';
const validPassword = '12345'

//funcion para manejar el envio del formulario
loginForm.addEventListener('submit', function(event){
    event.preventDefault();//evita que la pagina se recargue

    //obtener valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //verificar si los datos son correctos
    if (username === validUsername && password === validPassword) {
        loginMessage.textContent = 'Inicio exitoso. ¡Bienvenido!';
        loginMessage.style.color = '#4caf50';
    } else {
        loginMessage.textContent = 'Usuario o contraseña incorrectos.';
        loginMessage.style.color = '#d32f2f';
    }
});