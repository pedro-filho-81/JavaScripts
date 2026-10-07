// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')
const resp4 = document.querySelector('#outResp4')
const resp5 = document.querySelector('#outResp5')
const resp6 = document.querySelector('#outResp6')

frm.addEventListener('submit', e => {
  e.preventDefault()

  // Recebe o valor digitado no formulário
  const valor = Number(frm.inNumero.value)

  // calcula os valores divisiveis por 100
  let cem = Math.floor(valor / 100)

  // se o valor for maior que zero calcule.
  if (cem > 0) {
    resp1.innerText = `Notas de R$ 100: ${cem}`
  }

  // calcula os valores divisiveis por 50
  let cinquenta = Math.floor((valor % 100) / 50)

  // calcula os valores divisiveis por 10
  let dez = Math.floor((valor % 50) / 10)

  // calcula os valores divisiveis por 5
  let cinco = Math.floor((valor % 10) / 5)

  let dois = Math.floor((valor % 5) / 2)

  if (cinquenta != 0) {
    resp2.innerText = `Notas de R$ 50: ${cinquenta}`
  }
  if (dez != 0) {
    resp3.innerText = `Notas de R$ 10: ${dez}`
  } // end if dez
  if (cinco != 0) {
    resp4.innerText = `Notas de R$ 5: ${cinco}`
  } // end if dez
  if (dois != 0 && dois < 5) {
    resp5.innerText = `Notas de R$ 2: ${dois}`
  } // end if dez
})

frm.addEventListener('reset', () => {
  resp1.innerText = ''
  resp2.innerText = ''
  resp3.innerText = ''
  frm.inNumero.value = ''
  let valor = frm.inNumero.value
})
