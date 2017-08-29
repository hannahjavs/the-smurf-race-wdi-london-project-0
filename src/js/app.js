$(() => {
  console.log('JS loaded');

  // CONST VARIABLES NEEDED FOR GAME
  const $smurf1 = $('#smurf1');
  const $smurf2 = $('#smurf2');
  const $annoyingShroom = $('#annoyingShroom');
  const $brokenTree = $('#brokenTree');
  const $smurfHouse = $('#smurfHouse');
  const $result = $('.result');
  const $start = $('.start');
  const $reset = $('.reset');
  const $smurf1score = $('.smurf1score');
  const $smurf2score = $('.smurf2score');

  // LET VARIABLES NEEDED FOR GAME
  let smurf1LastMove = 188;
  let smurf2LastMove = 90;
  let smurf1score = 0;
  let smurf2score = 0;
  let gameOver = true; // the game will not start when DOM is loaded

  // AUDIO VARIABLES
  const $winSound = $('.winSound')[0];


  // FUNCTIONS DOWN HERE

  function start() { // Do not generate race until start button is clicked
    gameOver = false;
  }

  function reset() {
    // move smurfs back to start position and reset the score.
    $smurf1.css({ left: '0%' });
    $smurf2.css({ left: '0%' });
    $result.html(''); // Do not display who has won. This is making an empty string.
    // resetScore();
  }



  function cpuMoves() {
      setInterval(() => {

       $cpu.animate({
          left: '-=20%'
        }, {
          duration: 200,
          progress: collisionCPU,
          complete() {
            console.log('complete');
            $cpu.animate({ left: '+=20%' }, 200);
          }
        });

     },5000);
    }


  function animateSmurf($smurf) {
    if($smurf.collided || gameOver) return false; // either smurf has been added or it is gameover.
    $smurf.animate({ left: '+=5%' }, 'slow', () => {
      console.log($smurf.offset());
      duration: 50,
      progress: collisionSmurfHouse,
      
      const name = $smurf.text();
      const smurfPos = $smurf.offset().left;
      const smurfHousePos = $smurfHouse.offset().left; // tells JS where the smurfHouse is on the screen, specifically where the left side of the house is.
      checkCollisionAnnoyingShroom($smurf); // Checking for a collision with the shroom everytime the smurf moves.
      console.log(checkCollisionAnnoyingShroom);

      checkCollisionBrokenTree($smurf); // Checking for a collision with the tree everytime the smurf moves.
      console.log(checkCollisionBrokenTree);

      if(smurfPos >= smurfHousePos) { // If the smurf position is greater or equal to the smurfHouse position then,
        $result.html(name + ' WINS!!!'); // this smurf has won!
        $winSound.play(); // when it hits 50px also play winsound!
        gameOver = true; // This tells the programme it is game over.


        // SCORE BOARD UPDATE FUNCTION
        if(name === 'Smurf' && smurfPos === smurfHousePos) {
          smurf1score++; // add one to the score
          console.log('smurf1score');
          $smurf1score.text(smurf1score) ;// diplay & update the score1
        } else {
          smurf2score++; // add one to the score
          console.log('smurf2score');
          $smurf2score.text(smurf2score); // diplay & update the score2
        }
      }
    });
  }


  // KEY FUNCTIONS
  $(window).keyup(function(e) {
    if(e.which === 190 && smurf1LastMove === 188 || e.which === 188 && smurf1LastMove === 190) {
      // e.which means the scomputer is waiting to see which keys are pressed
      smurf1LastMove = e.which;
      animateSmurf($smurf1);
    } else if(e.which === 90 && smurf2LastMove === 88 || e.which === 88 && smurf2LastMove === 90) {
      smurf2LastMove = e.which;
      animateSmurf($smurf2);
    }

    if($smurf1.collided && e.which === 76) { // if smurf1 collides with an object user presses up
      $smurf1.collided = false;
    }
    if($smurf2.collided && e.which === 83) { // if smurf2 collides with an object user presses up
      $smurf2.collided = false; // this allows user to continue race
    }
  });

  // Players must press the up arrow key to jump & continue the race.
  // Above function checks to see if the player has pressed key 190 AND then 188 or key 88 and then 90 in order to move.


  // MUSHROOM COLLISION FUNCTION

  function checkCollisionAnnoyingShroom($smurf) {
    const smurfPos = $smurf.offset();
    const annoyingShroomPos = $annoyingShroom.offset();

    const smurfRightPos = smurfPos.left + $smurf1.width();
    const annoyingShroomRightPos = annoyingShroomPos.left + $annoyingShroom.width();

    // if the right edge of the smurf is greater or equal to the left edge of the SHROOM
    // AND the left edge of the smurf is less or equal to the right edge of the SHROOM
    if((smurfRightPos >= annoyingShroomPos.left) && (smurfPos.left <= annoyingShroomRightPos)) {
      $smurf.collided = true;
    }
  }

  // TREE COLLISION FUNCTION
  function checkCollisionBrokenTree($smurf) {
    const smurfPos = $smurf.offset();
    const brokenTreePos = $brokenTree.offset();

    const smurfRightPos = smurfPos.left + $smurf1.width();
    const brokenTreeRightPos = brokenTreePos.left + $brokenTree.width();

    // if the right edge of the smurf is greater or equal to the left edge of the SHROOM
    // AND the left edge of the smurf is less or equal to the right edge of the SHROOM
    if((smurfRightPos >= brokenTreePos.left) && (smurfPos.left <= brokenTreeRightPos)) {
      $smurf.collided = true;
    }
  }

  // ALL EVENT LISTENERS

  $start.on('click', start);
  console.log($start);

  $reset.on('click', reset);
  console.log($reset);

});
