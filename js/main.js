// Validação simples do formulário e envio via fetch para um endpoint (substitua pela sua integração)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('budget-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');

  const requiredFields = ['nome', 'sobrenome', 'telefone', 'mensagem'];

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = '';

    // Validação
    let ok = true;
    requiredFields.forEach((id) => {
      const field = document.getElementById(id);
      const msg = field.parentElement.querySelector('.error-msg');
      field.classList.remove('error');
      msg.textContent = '';

      if (!field.value.trim()) {
        field.classList.add('error');
        msg.textContent = 'Campo obrigatório.';
        ok = false;
      }
    });

    if (!ok) {
      statusEl.textContent = 'Verifique os campos obrigatórios.';
      return;
    }

    // Exemplo de payload
    const payload = {
      nome: document.getElementById('nome').value.trim(),
      sobrenome: document.getElementById('sobrenome').value.trim(),
      telefone: document.getElementById('telefone').value.trim(),
      mensagem: document.getElementById('mensagem').value.trim(),
      origem: 'site-FGA'
    };

    // Substitua esta URL pelo seu backend (Node, PHP, Formspree, etc.)
    const endpoint = 'https://example.com/api/orcamento';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Falha no envio');

      statusEl.textContent = 'Mensagem enviada com sucesso! Vamos retornar em breve.';
      form.reset();
    } catch (err) {
      statusEl.textContent = 'Não foi possível enviar. Tente novamente mais tarde.';
      console.error(err);
    }
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

