const linksMenu = document.querySelectorAll('.menu-principal a');

linksMenu.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    linksMenu.forEach((item) => item.classList.remove('ativo'));
    link.classList.add('ativo');
  });
});

const botaoConsulta = document.querySelector('.botao-principal');

if (botaoConsulta) {
  botaoConsulta.addEventListener('click', () => {
    botaoConsulta.textContent = 'Mensagem enviada';
    botaoConsulta.disabled = true;
    botaoConsulta.style.opacity = '0.8';
  });
}
