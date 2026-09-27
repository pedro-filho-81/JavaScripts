// vincula a variável com o formulário
const frm = document.querySelector('form')
// vincula a variável resp1 com a tag h3 html
const resp1 = document.querySelector('#outResp')

// cria o 'ouvinte' para o evento,
// quando o botao submit for clicado
frm.addEventListener('submit', e => {
  // recebe o valor do campo inQuilo
  const vl_quilo = Number(frm.inQuilo.value)
  // recebe o valor do campo inGrama
  const consumo = Number(frm.inGrama.value)
  // calcula o valor a pagar
  const vl_pagar = (vl_quilo / 1000) * consumo

  // envia a resposta para o h3
  resp1.innerText = `Valor a pagar R$ ${vl_pagar.toFixed(2)}`

  e.preventDefault() // evita fuga do formulário
})
