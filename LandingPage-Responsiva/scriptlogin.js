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
