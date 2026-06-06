// Seleciona os elementos do HTML pelos IDs ou Classes
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Quando clicar em "Sign Up" (Cadastrar), adiciona a classe que ativa a animação
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Quando clicar em "Sign In" (Entrar), remove a classe para voltar ao início
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});