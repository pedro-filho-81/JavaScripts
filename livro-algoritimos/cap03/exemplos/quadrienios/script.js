// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  const salario = parseFloat(frm.inSal.value)
  const tempo = parseInt(frm.inTempo.value)

  // variável recebe o valor inteiro do tempo
  let quadrienio = Math.floor(tempo / 4)

  // se quadrienio maior que zero
  if (quadrienio > 0.0) {
    // calcular bonos
    let bonos = salario * 0.01 * quadrienio
    // calcular novo salário
    const novo_salario = salario + bonos

    // exibir resultado
    resp1.innerText = `Quadriênio: ${quadrienio}`
    resp2.innerText = `Salário Final R$ ${novo_salario.toFixed(2)}`
  } else {
    // exibir os resultado
    resp1.innerText = `Salário Final R$ ${salario.toFixed(2)}`
  }

  e.preventDefault()
})
