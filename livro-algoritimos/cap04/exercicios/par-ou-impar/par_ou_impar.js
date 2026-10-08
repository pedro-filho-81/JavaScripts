// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')

frm.addEventListener('submit', e => {
  e.preventDefault()

  // Recebe o valor digitado no formulário
  const valor = Number(frm.inNumero.value)
  // se centena maior ou igual a 100
  // e centena menor ou igual 999
  if (valor % 2 == 0) {
    resp1.innerText = `${valor} é par.`
  } else {
    // exibe mensagem de erro
    resp1.innerText = `${valor} é ímpar.`
  }
})
