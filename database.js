//Criando data base

const livros = [
  {
    id: 1,
    nome: 'Espinhos do tempo',
    autor: 'Zibia Gasparetto',
    categoria: 'Espirita',
    paginas: 416,
    recomendo: true,
    leu: false
  },
  {
    id: 2,
    nome: 'Tecnologia para aprender',
    autor: 'Carla Viana Coscarelli',
    categoria: 'Tecnologia',
    paginas: 500,
    recomendo: true,
    leu: true
  },
  {
    id: 3,
    nome: 'Uma breve história do tempo, de Stephen Hawking',
    autor: 'Stephen Hawking',
    categoria: 'Astrofísica',
    paginas: 256,
    recomendo: true,
    leu: false
  },
  {
    id: 4,
    nome: 'Muito longe de casa: memórias de um menino-soldado, de Ishmael Beah',
    autor: 'Ishmael Beah',
    categoria: 'Biografia',
    paginas: 224,
    recomendo: false,
    leu: true
  },
  {
    id: 5,
    nome: 'Deus, você está aí?',
    autor: 'Judy Blume',
    categoria: 'Espirita',
    paginas: 350,
    recomendo: false,
    leu: true
  },
  {
    id: 6,
    nome: 'Harry Potter',
    autor: ' J. K. Rowling',
    categoria: 'Aventura',
    paginas: 3000,
    recomendo: true,
    leu: true
  }
]

//Exportando Arquivos
module.exports = livros
