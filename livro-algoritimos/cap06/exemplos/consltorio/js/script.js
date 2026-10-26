// vincula o js ao form html
const frm = document.querySelector('form')

// vincula-se ao span
const respNome = document.querySelector('span')

// vincula-se ao pre
const respLista = document.querySelector('pre')

// cria a lista de pacientes
const pacientes = []

// evento ao cliicar no botão submit
frm.addEventListener('submit', e => {
  const nome = frm.inPaciente.value // recebe a string do form
  // adiciona um nome no final do vetor lista
  pacientes.push(nome)

  // variável para concatenar pacientes
  let lista = ''

  // loop for enquando i menor que o tamanho do vetor
  for (let i = 0; i < pacientes.length; i++) {
    // lista recebe os nomes dos pacientes
    lista += `${i + 1}. ${pacientes[i]}\n`
  } // end for

  //   exibe a lista de nomes
  respLista.innerText = lista

  frm.inPaciente.value = '' // limpa o campo paciente
  // coloca o focus no campo paciente
  frm.inPaciente.focus()

  e.preventDefault() // evita envio do form
})

// Adiciona um "ouvinte" para o evento click no btUrgencia que está no form frm.
frm.btnUrgencia.addEventListener('click', () => {
  // verifica se as validações do form estão ok (no caso, paciente is required)
  if (!frm.checkValidity()) {
    alert('Informe o nome do paciente a ser atendido em caráter de urgência')

    frm.inPaciente.focus() // posiciona o cursor no campo inPaciente
    return // retorna ao form
  }
})

const nome = frm.inPaciente.value // obtém nome do paciente
pacientes.unshift(nome) // adiciona paciente no início do vetor
let lista = '' // string para concatenar pacientes
// forEach aplicado sobre o array pacientes
pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))

respLista.innerText = lista // exibe a lista de pacientes na página

frm.inPaciente.value = '' // limpa conteúdo do campo de formulário
frm.inPaciente.focus() // posiciona o cursor no campo })

frm.btnAtender.addEventListener('click', () => {
  // se o tamanho do vetor = 0
  if (pacientes.length == 0) {
    alert('Não há pacientes na lista de espera')
    frm.inPaciente.focus()
    return
  }

  const atender = pacientes.shift() // remove do início da fila (e obtém nome)

  respNome.innerText = atender // exibe o nome do paciente em atendimento

  let lista = '' // string para concatenar pacientes

  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))

  respLista.innerText = lista // exibe a lista de pacientes na página
})
