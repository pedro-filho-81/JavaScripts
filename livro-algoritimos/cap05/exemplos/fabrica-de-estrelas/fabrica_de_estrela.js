// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')

// adiciona eventos quando o botão for clicado
frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  let valor = Number(frm.inNumero.value)

  // variável para receber as estrelas
  let estrelas = ''

  // loop para exibir as estrelas
  for (let i = 1; i <= valor; i++) {
    // se o valor for ímpar
    if (i % 2 == 1) {
      // estreça recebe o asterisco
      estrelas += '*'
    } else {
      // se for par
      // estrela recebe o traço baixo
      estrelas += '-'
    } // fim else
  } // end for

  // exibe a quantidade de asterisco
  resp1.innerText = `${estrelas}`

  // limpa o campo
  frm.inNumero.value = ''
  // coloca o focus no campo
  // para nova numeração
  frm.inNumero.focus()

  e.preventDefault()
})
