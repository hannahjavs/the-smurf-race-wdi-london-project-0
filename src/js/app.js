$(() => {
  console.log('JS loaded');

  // CONST VARIABLES NEEDED FOR GAME
  const $smurf1 = $('#smurf1');
  const $smurf2 = $('#smurf2');
  const $mushroomOne = $('#mushroomOne');
  const $mushroomTwo = $('#mushroomTwo');
  const $mushroomThree = $('#mushroomThree');
  const $mushroomFour = $('#mushroomFour');
  const $mushroomFive = $('#mushroomFive');
  const $mushroomSix = $('#mushroomSix');
  const $finishLine = $('#finishLine');
  const $result = $('.result');
  const $start = $('.start');
  const $reset = $('.reset');
  const $smurf1score = $('.smurf1score');
  const $smurf2score = $('.smurf2score');
  const $instructions = $('.instructions');
  const $mainMenu = $('.mainMenu');

  // LET VARIABLES NEEDED FOR GAME
  let smurf1LastMove = 188;
  let smurf2LastMove = 90;
  let smurf1score = 0;
  let smurf2score = 0;
  let gameOver = true; // the game will not start when DOM is loaded
  let player1Chosen = null;

  // AUDIO VARIABLES
  const $winSound = $('.winSound')[0];
  const $mushroomSound = $('.mushroomSound')[0];


  // FUNCTIONS

  // Pick your character
  //once player 1 and player 2 have picked a character,
  //UHIDE the characters and show instructions.

  // Start Function
  function start() { // Do not generate race until start button is clicked
    $instructions.css('visibility', 'visible');
    $mainMenu.css('visibility', 'hidden');
    gameOver = false;
    //When start button is pressed again save the score for the next round.
  }

  // Reset Function
  function reset() {
    // move smurfs back to start position and reset the score.
    $smurf1.css({ left: '0%' });
    $smurf2.css({ left: '0%' });
    $mushroomOne.show();
    $mushroomTwo.show();
    $mushroomThree.show();
    $mushroomFour.show();
    $mushroomFive.show();
    $mushroomSix.show();
  }

  function animateSmurf($smurf) {
    if($smurf.collided || gameOver || $smurf.is(':animated')) return false; // either smurf has been added or it is gameover.
    $smurf.animate({ left: '+=5%' }, 'fast', () => {
      console.log($smurf.offset());
      const name = $smurf.text();
      const smurfPos = $smurf.offset().left;
      const finishLinePos = $finishLine.offset().left; // tells JS where the finishLine is on the screen, specifically where the left side of the house is.
      checkCollisionMushroomOne($smurf1);
      checkCollisionMushroomTwo($smurf1);
      checkCollisionMushroomThree($smurf1);
      checkCollisionMushroomFour($smurf2);
      checkCollisionMushroomFive($smurf2);
      checkCollisionMushroomSix($smurf2);
      if(smurfPos >= finishLinePos) { // If smurf pos is >= to the finishLine position then,
        $result.html(name + ' WINS!!!'); // this smurf has won!
        $winSound.play(); // when it hits 50px also play winsound!
        gameOver = true; // This tells the programme it is game over.

        // Score Board Function
        if(name === 'SMURF' && smurfPos >= finishLinePos) {
          smurf1score++; // add one to the score
          $smurf1score.text(smurf1score) ;// diplay & update the score1
        } else if(name ==='SMURFETTE' && smurfPos >= finishLinePos) {
          smurf2score++; // add one to the score
          $smurf2score.text(smurf2score); // diplay & update the score2
        }
      }
    });
  }

  // Player 1 & 2 Key Functions
  // e.which means computer is waiting to see which keys are pressed
  $(window).keyup(function(e) {
    if(e.which === 190 && smurf1LastMove === 188 || e.which === 188 && smurf1LastMove === 190) {
      smurf1LastMove = e.which;
      animateSmurf($smurf1);
    } else if(e.which === 90 && smurf2LastMove === 88 || e.which === 88 && smurf2LastMove === 90) {
      smurf2LastMove = e.which;
      animateSmurf($smurf2);
    }
    if($smurf1.collided && e.which === 76) {
      // if smurf1 collides with an object user presses up and boundes 3 times
      $smurf1.effect( 'bounce', {times: 3}, 300 );
      $mushroomSound.play();
      $smurf1.collided = false; // allows user to continue race
      $smurf1.collidedWith.hide();
      // use bounce effect to jump on mushrooms and they disappear after
    }
    if($smurf2.collided && e.which === 83) {
      $smurf2.effect( 'bounce', {times: 3}, 300 );
      $mushroomSound.play();
      $smurf2.collided = false;
      $smurf2.collidedWith.hide();
    }
  });

  // Players must press the up arrow key to jump & continue the race.
  // Above function checks to see if the player has pressed key 190 AND then 188 or key 88 and then 90 in order to move.
  // if the right edge of the smurf is greater or equal to the left edge of the SHROOM
  // AND the left edge of the smurf is less or equal to the right edge of the SHROOM

  // Mushroom One Collision
  function checkCollisionMushroomOne($smurf) {
    const smurfPos = $smurf.offset();
    const mushroomOnePos = $mushroomOne.offset();
    const smurfRightPos = smurfPos.left + $smurf1.width();
    const mushroomOneRightPos = mushroomOnePos.left + $mushroomOne.width();
    if((smurfRightPos >= mushroomOnePos.left + 15) && (smurfPos.left <= mushroomOneRightPos)) {
      $smurf.collided = true;
      $smurf1.collidedWith = $mushroomOne;
    }
  }
  // Mushroom Two Collision
  function checkCollisionMushroomTwo($smurf) {
    const smurfPos = $smurf.offset();
    const mushroomTwoPos = $mushroomTwo.offset();
    const smurfRightPos = smurfPos.left + $smurf1.width();
    const mushroomTwoRightPos = mushroomTwoPos.left + $mushroomTwo.width();
    if((smurfRightPos >= mushroomTwoPos.left + 15) && (smurfPos.left <= mushroomTwoRightPos)) {
      $smurf.collided = true;
      $smurf1.collidedWith = $mushroomTwo;
    }
  }
  // Mushroom Three Collision
  function checkCollisionMushroomThree($smurf) {
    const smurfPos = $smurf.offset();
    const mushroomThreePos = $mushroomThree.offset();
    const smurfRightPos = smurfPos.left + $smurf1.width();
    const mushroomThreeRightPos = mushroomThreePos.left + $mushroomThree.width();
    if((smurfRightPos >= mushroomThreePos.left + 15) && (smurfPos.left <= mushroomThreeRightPos)) {
      $smurf.collided = true;
      $smurf1.collidedWith = $mushroomThree;
    }
  }
  // Mushroom Four Collision
  function checkCollisionMushroomFour($smurf) {
    const smurfPos = $smurf.offset();
    const mushroomFourPos = $mushroomFour.offset();
    const smurfRightPos = smurfPos.left + $smurf2.width();
    const mushroomFourRightPos = mushroomFourPos.left + $mushroomFour.width();
    if((smurfRightPos >= mushroomFourPos.left + 15) && (smurfPos.left <= mushroomFourRightPos)) {
      $smurf.collided = true;
      $smurf2.collidedWith = $mushroomFour;
    }
  }
  // Mushroom Five Collision
  function checkCollisionMushroomFive($smurf) {
    const smurfPos = $smurf.offset();
    const mushroomFivePos = $mushroomFive.offset();
    const smurfRightPos = smurfPos.left + $smurf2.width();
    const mushroomFiveRightPos = mushroomFivePos.left + $mushroomFive.width();
    if((smurfRightPos >= mushroomFivePos.left + 15) && (smurfPos.left <= mushroomFiveRightPos)) {
      $smurf.collided = true;
      $smurf2.collidedWith = $mushroomFive;
    }
  }
  // Mushroom Six Collision
  function checkCollisionMushroomSix($smurf) {
    const smurfPos = $smurf.offset();
    const mushroomSixPos = $mushroomSix.offset();
    const smurfRightPos = smurfPos.left + $smurf2.width();
    const mushroomSixRightPos = mushroomSixPos.left + $mushroomSix.width();
    if((smurfRightPos >= mushroomSixPos.left + 15) && (smurfPos.left <= mushroomSixRightPos)) {
      $smurf.collided = true;
      $smurf2.collidedWith = $mushroomSix;
    }
  }
  // if the right edge of the smurf is greater or equal to the left edge of the SHROOM
  // AND the left edge of the smurf is less or equal to the right edge of the SHROOM




  // ALL EVENT LISTENERS

  $start.on('click', start);
  console.log($start);

  $reset.on('click', reset);
  console.log($reset);

  // add event listers to the smurfs at the top
  // this will call a function called chooseSmurf
  // inside chooseSmurf, grab the ID of the smurf you cliked on, and console log it

  const $characters = $('.character');
  $characters.on('click', (e) => {
    if($(e.target).hasClass('selected')) return false;
    const id = $(e.target).attr('id');

    if(!player1Chosen) {
      $smurf1.find('img').attr('src', `images/${id}.png`);
      player1Chosen = true;
    } else {
      $smurf2.find('img').attr('src', `images/${id}.png`);
      // here you could call the start function if you want the game to start once the second player has clicked
    }
    $(e.target).addClass('selected');
  });



});
