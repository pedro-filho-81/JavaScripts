// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
resp1.innerText = 'aaaaaaaaaaa'
// const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  const valor = Number(frm.inValor.value)

  // exibir os resultado
  resp1.innerText = `${valor}`

  e.preventDefault()
})
