// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', e => {
  e.preventDefault()

  // Recebe o valor digitado no formulário
  const quant_pessoas = Number(frm.inNumero.value)
  //   calcular o valor por pessoa
  let vl_pessoas = quant_pessoas * 20

  //   recebe a quantidade de peixes
  const quant_peixes = Number(frm.inPeixes.value)

  //   se a quantidade de pseeoas menor ou igual a quantidade de peixes
  if (quant_peixes <= quant_pessoas) {
    // exibir o total a pagar por pessoas
    resp1.innerText = `Total a pagar R$ ${vl_pessoas.toFixed(2)}`
    // se quantidade de peixes maior que a quantidade de pessoas
  } else if (quant_peixes > quant_pessoas) {
    // calcular o valor dos peixes extras
    let vl_cobrar = (quant_peixes - quant_pessoas) * 12 + vl_pessoas
    resp1.innerText = `Total a pagar R$ ${vl_cobrar.toFixed(2)}`
  }

  // calcula os valores divisiveis por 100
})
