const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    if (!container.classList.contains("active")) {
        container.classList.add("active");
    }
});

loginBtn.addEventListener('click', () => {
    if (container.classList.contains("active")) {
        container.classList.remove("active");
    }
});


function performLogin() {
    
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    
    if (email === 'emailteste@gmail.com' && password === '123456789') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Credenciais incorretas. Tente novamente!');
    }
}