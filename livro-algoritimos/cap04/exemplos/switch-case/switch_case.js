// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')

frm.addEventListener('submit', e => {
  let taxa_entrega // recebe o valor da taxa de entrega

  // recebe os valores dos campos do formulário
  const bairro = frm.inBairro.value.toUpperCase()
  // CRIA OPÇÕES COm SWITCH CASE
  // DOS BAIRROS ONDE FAZEmOS AS ENTREGAS
  switch (bairro) {
    case 'Centro':
      taxa_entrega = 5.0
      break
    case 'Fragata':
    case 'Três vendas':
      taxa_entrega = 7.0
      break
    case 'Laranjal':
      taxa_entrega = 10.0
      break
    default:
      taxa_entrega = 8.0
      break // break em default é opiciona
  } // end switch

  // exibir os resultado
  resp1.innerText = `Valor a Pagar R$ ${taxa_entrega.toFixed(2)}`

  e.preventDefault()
})

frm.addEventListener('reset', () => {
  inBairro = '' // limpa o campo
  outResp1.innerText = '' // limpa a resposta
})
