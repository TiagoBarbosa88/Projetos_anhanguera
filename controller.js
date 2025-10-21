document.getElementById('btnBuscar').addEventListener('click', async () => {
  const cepInput = document.getElementById('cep');
  const cep = cepInput.value.replaceAll(/\D/g, '');

  if (cep.length !== 8) {
    alert('CEP inválido! Digite 8 números.');
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      alert('CEP não encontrado.');
      return;
    }

    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.uf;
  } catch (error) {
    console.error('Erro ao buscar o CEP:', error);
    throw error;
  }
});
