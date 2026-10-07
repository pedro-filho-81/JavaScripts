// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', e => {
  e.preventDefault()

  // Recebe o valor digitado no formulário
  const vl_copra = Number(frm.inNumero.value)
  // calcula a quantidade das parcelas com base no valor das compras
  let parcelas = Math.floor(vl_copra / 20)

  // se cálculo das parcelas for maior que 6
  if (parcelas > 6) {
    // parcelas recebe 6 que é a quantidade máxima de parcelas
    parcelas = 6
  }

  // calcula o valor das parcelas
  const vl_parcelas = vl_copra / parcelas

  // se valor das compras menor que 40
  if (vl_copra < 40) {
    // imprima
    resp1.innerText = `Valor a pagar R$ ${vl_copra.toFixed(2)}`
  } else {
    // se não
    // imprima
    resp1.innerText = `Valor das compras R$ ${vl_copra.toFixed(2)}`
    resp2.innerText = `Pague em até ${parcelas} parcelas de R$ ${vl_parcelas.toFixed(
      2
    )}`
  }
})
