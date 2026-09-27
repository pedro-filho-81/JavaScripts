// vincula com o formulário html
const frm = document.querySelector('form')

// vincula com h2 da resposta
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

// recebe os valores dos campos do formulário
frm.addEventListener('submit', e => {
  // recebe o valoc do formulário
  const nome_aluno = frm.inNome.value
  // recebe o valor da primeira nota
  const nota1 = Number(frm.inNota1.value)
  // recebe o valor da segunda nota
  const nota2 = Number(frm.inNota2.value)

  // soma as duas notas
  const soma = nota1 + nota2
  const media = soma / 2

  // exibe os resultados
  resp1.innerText = `Média das Notas: ${media}`
  if (media >= 7.0) {
    resp2.innerHTML = `Parabéns <span>${nome_aluno}</span>! Você foi Aprovado(a)`
    // resp2.style.bacgroundcolor = 'yellow'
    resp2.style.color = 'blue'
  } else if (media < 7.0) {
    document.sty
    resp2.innerHTML = `OPS! <span>${nome_aluno}</span>! Você foi Reprovado(a)`
    resp2.style.color = 'red'
  }
  e.preventDefault() // evita fuga do formulário
})
