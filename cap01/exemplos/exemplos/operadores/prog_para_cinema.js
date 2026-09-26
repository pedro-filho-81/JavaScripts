// cria referência ao formulário e aos elementos h3 e h4
const frm = document.querySelector('form')
// cria referencia ao h3 do Html
const resposta1 = document.querySelector('h3')
// cria referência ao h4
const resposta2 = document.querySelector('h4')

// cria um 'ouvinte' de evento,
// acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  // obtém o conteúdo do campo título
  const titulo = frm.inTitulo.value
  // obtém o conteúdo co campo duração
  const duracao = Number(frm.inDuracao.value)
  // arredonda para baixo o conteúdo do campo horas
  const horas = Math.floor(duracao / 60)
  // obtém o resto da divisão do campo duração
  const minutos = duracao % 60

  // Exibe a resposta na tag html h3
  resposta1.innerText = `Titulo: ${titulo}`
  // exibe a resposta na tag Html h4
  resposta2.innerText = `Horário: ${horas} hora(s) e ${minutos} minuto(s)`

  // evita envio do formulário
  e.preventDefault()
})
