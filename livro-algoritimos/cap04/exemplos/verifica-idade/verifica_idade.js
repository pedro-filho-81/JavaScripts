// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  const vl_minutos = parseFloat(frm.inValor.value)
  const tempo_uso = parseFloat(frm.inTempo.value)

  // calcula o valor a pagar
  const vl_pagar = (tempo_uso * vl_minutos) / 15

  // exibir os resultado
  resp1.innerText = `Valor a Pagar R$ ${vl_pagar.toFixed(2)}`
  resp2.innerText = `Respostas`

  e.preventDefault()
})
