// vincula com o formulário
const frm = document.querySelector('form')
// vincula com o h4 para resposta
const resp = document.querySelector('#outResp1')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  const num1 = Number(frm.inNumero1.value)
  const num2 = Number(frm.inNumero2.value)

  // calcula o valor
  const somar = num1 + num2

  // exibir os resultado
  resp.innerText = `A soma entre ${num1} e ${num2} é ${somar}`

  e.preventDefault()
})
