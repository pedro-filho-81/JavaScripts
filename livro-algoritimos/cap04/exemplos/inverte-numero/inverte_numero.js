// vincula com o formulário
const frm = document.querySelector('form')

// vincula com as respostas
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', e => {
  e.preventDefault()

  // Recebe o valor digitado no formulário
  const centena = Number(frm.inNumero.value)
  // se centena maior ou igual a 100
  // e centena menor ou igual 999
  if (centena >= 100 && centena <= 999) {
    // recebe o valor da centena
    let cem = Math.floor(centena / 100)
    // recebe o valor da dezena
    let dez = Math.floor((centena % 100) / 10)
    //  recebe o valor da unidade
    let um = Math.floor(centena % 10) / 1
    // exibe o valor invertido
    resp1.innerText = `Valor invertido: ${um}${dez}${cem}`
    // se não for um valor entre 100 e 999
  } else {
    // exibe mensagem de erro
    resp1.innerText = `ERRO! digite um valor entre 100 e 999`
  }
})
