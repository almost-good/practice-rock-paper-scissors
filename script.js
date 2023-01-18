document.addEventListener('DOMContentLoaded', function() {
  
  let buttons = document.getElementsByTagName('button')

  for (let button of buttons) {
    
    button.addEventListener('click', function() {
      let userChoice = button.textContent
      runGame(userChoice)
    })
  }

})


function runGame(userChoice) {

  let choices = ['ROCK', 'PAPER', 'SCISSORS']
  let pcChoice = choices[Math.floor(Math.random() * 3)]
  let winner = calculateWinner(userChoice, pcChoice)

  img(userChoice, pcChoice)

  if (winner === 'USER') {
    increaseUserWin()
  } else if (winner === 'PC') {
    increasePcWin()
  }

  displayResult(winner)

}


function calculateWinner(userChoice, pcChoice) {

  if (userChoice === pcChoice) {
    return 'DRAW'
  } else {
    switch (userChoice) {
      case 'ROCK':
        switch (pcChoice) {
          case 'PAPER':
            return 'PC'
          case 'SCISSORS':
            return 'USER'
        }
      case 'PAPER':
        switch (pcChoice) {
          case 'SCISSORS':
            return 'PC'
          case 'ROCK':
            return 'USER'
        }   
      case 'SCISSORS':
        switch (pcChoice) {
          case 'ROCK':
            return 'PC'
          case 'PAPER':
            return 'USER'
        }
    }
  }

}


function increaseUserWin() {

  let oldScore = parseInt(document.getElementById('user-score').innerText)
  document.getElementById('user-score').innerText = ++oldScore

}


function increasePcWin() {
  
  let oldScore = parseInt(document.getElementById('pc-score').innerText)
  document.getElementById('pc-score').innerText = ++oldScore

}


function img(userChoice, pcChoice) {
  document.getElementById('user-img').src = `${userChoice}.png`
  document.getElementById('pc-img').src = `${pcChoice}.png`
}


function displayResult(winner) {
  let res 
  let color

  if (winner === 'DRAW') {
    res = winner
    color = 'black'
  } else if (winner === 'PC') {
    res = 'DEFEAT'
    color = 'red'
  } else {
    res = 'VICTORY'
    color = 'green'
  }

  document.getElementById('result').innerText = res
  document.getElementById('result').style.color = color
}