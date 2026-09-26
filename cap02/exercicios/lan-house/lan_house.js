// vincula com o formulário
const frm = document.querySelector('form')
// vincula com o h4 para resposta
const resp = document.querySelector('#outResp')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  const vl_minutos = parseFloat(frm.inValor.value)
  const tempo_uso = parseFloat(frm.inTempo.value)

  // calcula o valor a pagar
  const vl_pagar = (tempo_uso * vl_minutos) / 15

  // exibir os resultado
  resp.innerText = `Valor a Pagar R$ ${vl_pagar.toFixed(2)}`

  e.preventDefault()
})
