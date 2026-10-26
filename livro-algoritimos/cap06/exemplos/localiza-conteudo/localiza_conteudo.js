// cria vetor idade
const idade = [5, 6, 8, 3, 6, 9]
console.log(`Cria o vetor idade:\nconst idade = [${idade}]`)

// pesquisa qual a posição do número 6 começando a pesquisa  no início do array até o final ${idade.indexOf(valor)}
console.log(
  `\nQual a posição do nº 6 no array?\nidade.indexOf(6) = ${idade.indexOf(
    6
  )}ª posição.`
)
// pesquisa qual a posição do número 6 começando a pesquisa no final do array para o início ${idade.lastIndexOf(6)}
console.log(
  `\nQual a posição do nº 6 no array idade?\nidade.lastIndexOf(6) = ${idade.lastIndexOf(
    6
  )}ª posição`
)

// pesquisa qual a posição do número que não existe no array ${idade.indexOP(7)}
console.log(
  `\nQual a posição do nº 7 no array idade?:\nidade.indexOf(7) = ${idade.indexOf(
    7
  )}ª posição.\nRetorna um número negativo, indicando a não existência.`
)

// pesquisa se o número está incluido no array idade,
// se sim retorna true se não retorna false
console.log(
  `\nO número x está incluído no array idade?\nSe sim retorna (true), se não retorna (false)\nidade.includes(3) = ${idade.includes(
    3
  )}\n`
)
