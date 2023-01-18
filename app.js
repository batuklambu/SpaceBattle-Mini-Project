console.log('window is loaded');
setTimeout(function () {
  alert('Welcome to  Space Battle Ground ! ');
  gameload();
  addalienArmy();
}, 2000);

var startGameBtn = document.getElementById('start-game-btn');
var exitGameBtn = document.getElementById('exit-btn');
var welcomesound = document.getElementById('sound1');
var captainwhitsound = document.getElementById('sound');
var alienhitsound = document.getElementById('sound2');
var RESULT_PLAYER_WINS = 'Captain OF USSAssembly Wins';
var RESULT_COMPUTER_WINS = 'Aliens Wins';
let = textarea = document.getElementById('textarea');
const ps = document.querySelectorAll('.wavy');

class USSAssembly {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
    this.isAlive = true;
  }

  attack(wader) {
    let ranNum = Math.random();
    // console.log(`Accuracy threshold is ${ranNum}`);
    if (ranNum < this.accuracy) {
      captainwhitsound.play();
      console.log(
        '%c Its Direct Hit !!',
        'font-style:bold;background: azure;color: red'
      );

      wader.hull = wader.hull - this.firepower;
      // console.log(`alien has ${wader.hull} hull points left.`);

      console.log(
        '%c Alien has ' + `${wader.hull}` + ' hull Points left',
        'font-style:bold;background: azure;color: red'
      );

      //   if (wader.hull <= 0) {
      //     wader.isAlive = false;
      //     console.log(`Alien ship is destroyed !!`);
      //   }
    } else {
      alienhitsound.play();
      alert(`You Missed`);
      console.log(
        '%c You Missed!!',
        'font-style: bold; background: azure;  color: green'
      );

      // console.log(
      //   '%c You Missed!,font-style:bold;background: azure; border: 2px solid red;color: red'
      // );
    }
  }
}

class AlienShip {
  constructor(hull, firepower, accuracy) {
    this.hull = Math.floor(Math.random() * (7 - 3) + 3);
    this.firepower = Math.floor(Math.random() * (5 - 2) + 2);
    this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
    this.isAlive = true;
  }

  attack(wader) {
    let ranNum = Math.random();
    // console.log(`Accuracy threshold is ${ranNum}`);
    if (ranNum < this.accuracy) {
      alienhitsound.play();
      alert(`You have been hit!!!`);
      console.log(
        '%c You have been hit!!',
        'font-style:bold;background: azure; color: red'
      );

      wader.hull = wader.hull - this.firepower;
      //   console.log(`captain has ${wader.hull} hull points left.`);

      //   if (wader.hull <= 0) {
      //     wader.isAlive = false;
      //     console.log(`Your game is over!!! `);
      //   }
    } else {
      captainwhitsound.play();
      alert(`You dodged the Attack!!`);
      console.log(
        '%c You dodged the Attack!',
        'font-style:bold;background: azure;color: red'
      );
    }
  }
}

const captain = new USSAssembly();
let addalienArr = [];

function addalienArmy() {
  for (let i = 0; i < 6; i++) {
    const alien1 = new AlienShip();
    addalienArr.push(alien1);
  }
}

var retreat = () => {
  textarea1.innerHTML = 'GAME  OVER';
  ps.forEach((p) => {
    p.innerHTML = p.innerText
      .split('')
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 25}ms">${letter}</span>`
      )
      .join('');
    alert(`Game Over`);
  });
};

var getWinner = () => {
  if (addalienArr.length == 0) {
    textarea.innerHTML = 'Winner is Captain';
    textarea.style.color = 'green';
    textarea.style.fontSize = '30px';
  } else {
    textarea.innerHTML = 'Winner is Alien';
    textarea.style.color = 'red';
    textarea.style.fontSize = '30px';
  }
  retreat();
};

const gameReload = () => {
  const selection = prompt('Want to Play again ? Type yes or No');
  if (selection.toLowerCase() == 'yes') {
    alert(`Welcome Again Captain ,Brace your seleves Up for the fight`);
    window.location.reload();
  } else {
    alert(`press Exit Button!!`);
    exitGameBtn.addEventListener('click', function () {
      window.close();
      captainwhitsound.play();
      alert('Good Bye !!!!');
    });
  }
};

const gameStart = () => {
  welcomesound.play();
  alert('Lets Battle Begin!!!');
  welcomesound.play();
  let arr = addalienArr.length;
  while (arr > 0) {
    captain.attack(addalienArr[0]);
    if (addalienArr[0].hull < 0) {
      console.log(
        '%c Alien Ship is destroyed !!!',
        'font-style:bold;background: azure; color: green'
      );
      captainwhitsound.play();
      alert(`Alien ship is destroyed !!! `);
      addalienArr.shift();
      if (addalienArr.length === 0) {
        // if (alien1.shiparr.length == 0) {
        // alert(`${RESULT_PLAYER_WINS}`);
        // console.log('array is completed');
        captainwhitsound.play();
        alert(`Winner is Captain`);
        console.log(
          '%c Winner is captain!!',
          'font-style:bold;background: azure; border: 5px solid red;color: green'
        );
        textarea.innerHTML = 'Winner is Captain';
        textarea.style.color = 'green';
        textarea.style.fontSize = '30px';
        break;
      }
    } else {
      alienhitsound.play();
      alert(`Alien Is Alive... !!!`);
      console.log(
        '%c...Alien Is Alive',
        'font-style:bold;background: azure; color: red'
      );
    }
    addalienArr[0].attack(captain);
    // console.log(captain.hull);
    // console.log(addalienArr);
    if (captain.hull <= 0) {
      alienhitsound.play();
      captain.hull = 0;
      alert(`Winner is Alien`);
      console.log(
        '%c Winner Is Alien!!!',
        'font-style:bold;background: azure; border: 5px solid red;color: red'
      );
      textarea.innerHTML = 'Winner is Alien';
      textarea.style.color = 'red';
      textarea.style.fontSize = '30px';
      break;
    } else {
      captainwhitsound.play();
      alert(`Aliens Is Not touch You !!!`);
      console.log(
        '%c Aliens Is Not touch You !!!',
        'font-style:bold;background: azure; color: green'
      );
    }
  }
  // getWinner();
  setTimeout(() => {
    retreat();
  }, 3000);
  setTimeout(() => {
    gameReload();
  }, 5000);
  // gameReload();
};

const gameload = () => {
  let selection = prompt('Want to join the game ? Type yes or No');
  if (selection.toLowerCase() == 'yes') {
    alert(`Welcome Captain,Buckle Up for the fight`);
    alert(`Press Start Game Button`);
    start();
  } else {
    window.close();
  }
};

const start = () => {
  startGameBtn.addEventListener('click', function () {
    // console.log('Game is starting...');
    console.log(
      '%c Game Is Starting.....',
      'font-style:bold;background: azure; color: blue'
    );

    welcomesound.play();
    gameStart();
  });
};
