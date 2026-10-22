// vincula com o formulário
const frm = document.querySelector('form')
frm.inValor.focus()

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
// const resp2 = document.querySelector('#outResp2')

let contador = 0
let mensagem = ''

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  const valor = Number(frm.inValor.value)

  // loop for para verificar se o valor é número primo
  for (let i = 2; i <= valor; i++) {
    if (valor % i == 0) {
      contador++
    }
  } // end for

  if (contador > 1) {
    mensagem = `${valor} NÃO é número primo.`
  } else {
    mensagem = `${valor} é número primo.`
  }

  // exibir os resultado
  resp1.innerText = `${mensagem}`

  frm.inValor.value = ''
  frm.inValor.focus()

  e.preventDefault()
}) // end add
