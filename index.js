const readline =  require('readline-sync')
const randomize = require('randomatic');

function start(){
  const content = {}

  content.countKey = askAndReturnCountKey()
  content.key = Returncharactes()

  function askAndReturnCountKey(){
    return readline.question('Key size: ')
  }

  function Returncharactes(){
    return randomize('*', content.countKey)
  }

  console.log(content)
}

start()