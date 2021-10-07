window.addEventListener('load', (event) => {
  startGame();
});
const settingsBtn = document.getElementById('set-btn');
const gameSetElm = document.querySelector('.settings');
const luckElm = document.getElementById('luck');
const playContElm = document.getElementById('play-container');
const imgContElm = document.getElementById('img-container');
const scoreElm = document.getElementById('score');
const timerElm = document.getElementById('time');
const textElm = document.getElementById('text');
const endGameElm = document.getElementById('endGameContainer')
const optionElm = document.getElementsByTagName('option');
const setFormEl = document.getElementById('set-form');

let textElmVal = "";
let score = 0;
let time = 15;
let difficulty ='easy';
const fourImgArr = [];

const images = [
  {
    source: "./img/balloon.jpg",
    id: "balloon"
  },
  {
    source: "./img/ice.jpg",
    id: "icecream"
  }
  ,
  {
    source: "./img/yoga.jpg",
    id: "yoga"
  }
  ,
  {
    source: "./img/planet.jpg",
    id: "planet"
  }
  ,
  {
    source: "./img/unicorn.jpg",
    id: "unicorn"
  }
  ,
  {
    source: "./img/pineapple.jpg",
    id: "pineapple"
  }
  ,
  {
    source: "./img/pizza.jpg",
    id: "pizza"
  }
  , {
    source: "./img/skull.jpg",
    id: "skull"
  },
  {
    source: "./img/tent.jpg",
    id: "tent"
  },
  {
    source: "./img/thumb.jpg",
    id: "thumb"
  },
  {
    source: "./img/umbrella.png",
    id: "umbrella"
  },
  {
    source: "./img/pacman.jpg",
    id: "pacman"
  },
  {
    source: "./img/cake.jpg",
    id: "cake"
  },
  {
    source: "./img/bomb.jpg",
    id: "bomb"
  },
  {
    source: "./img/burger.jpg",
    id: "burger"
  },
  {
    source: "./img/firework.jpg",
    id: "firework"
  },
  {
    source: "./img/mickey-mouse.png",
    id: "mickey"
  }
  ,
  {
    source: "./img/hello-kitty.webp",
    id: "kitty"
  },
  {
    source: "./img/donald-duck.png",
    id: "donald"
  },

  {
    source: "./img/tongue.png",
    id: "tongue"
  },
  {
    source: "./img/cherry.jpg",
    id: "cherry"
  },
  {
    source: "./img/avocado.jpg",
    id: "avocado"
  }
];
// initialize the game ???
function startGame() {

  getRandomFourImages();
  displayImgs();
  attachEventListeners();
  startTimer();
}
function updateScore() {
  score++;
  scoreElm.innerHTML = score;
}
// start directly from input field
//text.focus();


// to reach our images from our array
function getRandomFourImages() {

  // start from 0 and iterate +1 until it reaches where fourImgArr length is smaller that 4
  for (let i = 0; fourImgArr.length < 4; i++) {
    // getting random element from my array

    pushImgs();
  }
}
function pushImgs() {
  const rndmImg = getSingleImg();

  if (!fourImgArr.includes(rndmImg)) {
    // pushing my random element to my fourImgArr if it doesnt exist
    fourImgArr.push(rndmImg);
  }
}

function getRandomSixImages() {

  // start from 0 and iterate +1 until it reaches where fourImgArr length is smaller that 4
  for (let i = 0; fourImgArr.length < 6; i++) {
    // getting random element from my array

    pushImgs();
  }
}

function getSingleImg() {
  return images[Math.floor(Math.random() * images.length)];
}


function displayImgs() {

  let finalContent = '';

  for (let j = 0; j < fourImgArr.length; j++) {
    finalContent += `<img src="${fourImgArr[j].source}" id="${fourImgArr[j].id}">`;
  }

  imgContElm.innerHTML = finalContent;
}


function attachEventListeners() {
  textElm.addEventListener('input', e => {
    const target = e.target;
    const writtenText = e.target.value;
    checkMatch(target, writtenText);
  })
}

function checkMatch(inputElm, word) {
  for (let i = 0; i < fourImgArr.length; i++) {
    if (word === fourImgArr[i].id) {
      updateScore();
      inputElm.value = '';
      const newImg = getSingleImg();
      fourImgArr.splice(i, 1, newImg);
      displayImgs();
      increaseTimer();
    }
  }
}





settingsBtn.addEventListener('click', () => {
  gameSetElm.classList.toggle('hide')
});
const timeInterval = setInterval(startTimer, 1000);
setFormEl.addEventListener('change', e=>{
  difficulty = e.target.value;
  console.log(difficulty);
})
function startTimer() {
  time--;
  timerElm.innerHTML = time + 's';
  if (time === 0) {
    clearInterval(timeInterval);


    gameOver();
  }
}
function gameOver() {

  endGameElm.innerHTML = `

  <h1><b>🔥 Game Over 🔥</b></h1>
  <p style="margin-top:10px;"><b>Your Score : ${score}</b></p>
  <button class="refreshBtn" onClick="location.reload()")>Restart</button>
  `;
  endGameElm.style.display = 'flex';
}
function increaseTimer() {
  time = time + 3;
  timerElm.innerHTML = time + 's';
  timerElm.style.fontSize = "18px";
}
function refresh() {
  window.location.reload("Refresh")
}

// luckElm.innerHTML = "You can do it! 💪";
