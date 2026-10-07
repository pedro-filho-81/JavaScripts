// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  e.preventDefault()

  const numero = Number(frm.inNumero.value)
  const raizQuadrada = Math.sqrt(numero)
  const potencia = Math.pow(raizQuadrada, 2)

  if (Number.isInteger(raizQuadrada)) {
    resp1.innerText = `A raiz quadrade de ${numero} é ${raizQuadrada} potência ${potencia}`
  } else {
    resp1.innerText = `${numero} Não tem raiz exata.`
  }
})
