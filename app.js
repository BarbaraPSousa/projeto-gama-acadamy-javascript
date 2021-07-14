//imprtando arquiso data base
const livros = require('./database')

// pega input de usuario
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N: ')
console.log()

//se for sim, mostra categorias desponivel e pergunta qual actegoria escolhe.

// se resposta for S
if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Estás são as categorias disponiveis: ')
  console.log()
  console.log('Espirita / Tecnologia / Astrofísica / Biografia / Aventura') // mostra a lista de cadegoria disponivel
  console.log()
  const entradaCategoria = readline.question('Qual categoria deseja: ') //input do usuario para saber categoria desejada

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria) // filtra a lista e tras apenas a informação do luvro escolhido por categoria

  console.table(retorno) // imprime a resposta em formato de tabela
}
//se não mostra todos so livros em ordem cresente pela contidade de paginas
else {
  const livrosOdernados = livros.sort((a, b) => a.paginas - b.paginas) // ordenando a lista por pagnas
  console.log('Estão são os livros disponiveis: ')
  console.log()
  console.table(livrosOdernados) // imprimindo lista de livros ordenados por paginas
}
