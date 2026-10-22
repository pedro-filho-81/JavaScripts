// vincula com o formulário
const frm = document.querySelector('form')

// vincula com o h2 para resposta
const resp1 = document.querySelector('#outResp1')
// const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', e => {
  // recebe os valores dos campos do formulário
  let fruta = frm.inNome.value
  let qtd_fruta = parseInt(frm.inNumero.value)

  // loop for para repetição da fruta
  for (let i = 1; i <= qtd_fruta; i++) {
    if (i == qtd_fruta) {
      resp1.innerText += `${fruta}`
      break
    } else {
      resp1.innerText += `${fruta}, `
    } // end else
  } // end for

  e.preventDefault()
})
