
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput ===  'sciscors' || userInput ==='bomb'){return userInput;
  }else{
    console.log('Error')
  }
}

const getComputerChoice = computerChoice => {
  compChoice = Math.floor(Math.random() * 3);
  switch(compChoice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'sciscors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === 'bomb'){
    return 'you win donald trump'
  }
  if(userChoice === computerChoice){
    return 'draw'
  }
  if(userChoice === 'rock'){
   if(computerChoice === 'paper'){
      return 'computer wins'
    } else{
    return 'player wins';}
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'sciscors'){
      return 'computer wins'
      }else {return 'player wins'
  }
}
  if(userChoice === 'sciscors'){
    if(computerChoice === 'rock'){ return 'computer wins'}
    else{return 'player wins'
  }
}
}

const playGame = () => {
  userChoice = getUserChoice('bomb');
  console.log(userChoice);
  computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
