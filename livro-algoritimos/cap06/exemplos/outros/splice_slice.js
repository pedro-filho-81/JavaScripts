// Declara e define os conteúdos do vetor
const letras = ['A', 'B', 'C', 'D']
console.log(`Cria o vetor letras:\nconst letras = [${letras}]`)

// cria o vetor letras2 usando os dois últimos elementos do vetor letras com a função splice(-2)
const letras2 = letras.slice(-2)
console.log(
  `\nCria o vetor letras2 com "splice(-2)"\nconst letras2 = [${letras2}]`
)

//cria o vetor letras3 fatiando o vetor letras do índice 0 até o último -1
const letras3 = letras.slice(0, -1)
console.log(
  `\nCria o vetor letra3 com "slice(0, -1)":\nconst letras3 = [${letras3}]`
)

// cria o vetor retira com um elemento da posição 2 do vetor letras
const retira = letras.splice(2, 1)
console.log(
  `\nExibe o vetor retira com o elemento da posição 2 do vetor letras:\nconst retira = letras.splice(2, 1):\nretira = [${retira}]`
)
