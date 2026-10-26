// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  let numero = Number(frm.inNumero.value)

  let msg = ''
  let soma = 0

  // loop for para repetição
  for (let i = numero; i >= 1; i--) {
    // se número dividido por i igual a zero
    // e i menor que o número
    if (numero % i == 0 && i < numero) {
      if (i == 1) {
        msg += `${i}`
        soma += i
        break
      } // end if
      // exibe a mensagem
      msg += `${i}, `
      soma += i
    } // end if
  } // end for

  resp1.innerText = `Divisor de ${numero}: ${msg} (soma: ${soma})`

  if (soma == numero) {
    msg = `${numero} é um Número Perfeito.`
  } else {
    msg = `${numero} Não é um Número Perfeito.`
  }

  resp2.innerText = `${msg}`

  frm.inNumero.value = ''
  frm.inNumero.focus()

  e.preventDefault()
})
