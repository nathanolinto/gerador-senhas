const readline =  require('readline-sync')
const randomize = require('randomatic');

function start(){
  const content = {}

  content.countKey = askAndReturnCountKey()
  content.keys = Returncharactes()

  function askAndReturnCountKey(){
    return readline.question('Key size: ')
  }

  function Returncharactes(){
    const itens = []
    for(i=0; i<content.countKey; i++){
      itens.push(randomize('*', content.countKey))
    }
    return itens
  }

  console.log(content)
}

start()