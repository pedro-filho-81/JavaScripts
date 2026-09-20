// Cria a referência com o form
// vincula o javascript com o form Html
const frm = document.querySelector('form')
// vincula o JS com a tag h3 da página Html
const resp = document.querySelector('h3')

// cria um "ouvinte" de evento,
// acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  // cria a variável que vai receber o valor digitado
  const nome = frm.inNome.value // obtem o nome digitado no form
  // resp recebe o nome digitadoe exibe junto com o texto na tag h3
  resp.innerText = `Olá, ${nome}` // exibe a resposta do programa
  e.preventDefault() // evita envio do form
})
