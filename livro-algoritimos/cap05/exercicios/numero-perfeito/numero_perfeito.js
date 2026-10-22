// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
// const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  let chinchilas = Number(frm.inNumero.value)
  let anos = parseInt(frm.inAno.value)

  let mensagem = ''
  // loop for para repetição da fruta
  for (let i = 1; i <= anos; i++) {
    if (i == 1) {
      mensagem += `${i}º Ano: ${chinchilas} Chinchilas\n`
    } else {
      chinchilas *= 3
      mensagem += `${i}º Ano: ${chinchilas} Chinchilas\n`
    } // end else
    // exibe a mensagem
    resp1.innerText = `${mensagem}`
  } // end for

  e.preventDefault()
})
