const cidades = ['Pelotas'] //declara e define o conteúdo inicial do vetor
console.log(`Cria o vetor:\nconst cidades = ['${cidades}']`)

cidades.push(' São Lourenço') // adiciona o elemento no final do vetor

console.log(
  `Adiciona um elemento no final do vetor com push:\ncidades.push("São Lourenço")`
)

console.log(`Exibe o vetor cidades após 'puch':\ncidades = [${cidades}]\n`)

cidades.unshift('Porto Alegre')

console.log(
  `Adiciona um elemento no início do vetor com "unshift":\ncidades.unshift('Porto Alegre')`
)

console.log(`Exibe o vetor cidades após "unshift":\ncidades = [${cidades}]`)

// exclui o último elemento do vetor usando a função pop()
const ultimo = cidades.pop()
console.log(`\nExclui o último elemento do vetor com pop()`)
console.log('cidades.pop()')
console.log(
  `Exibe o vetor após excluir o último elemento:\ncidades = [${cidades}]\n`
)

// exclui o pru=imeiro elemento do vetor
const primeiro = cidades.shift()
console.log(
  `Exclui o primeiro elemento do vetor com "shift()":\ncidades.shift()`
)
console.log(
  `Exibe o vetor após excluir o elemento com "shift()":\ncidades= [${cidades}]`
)
