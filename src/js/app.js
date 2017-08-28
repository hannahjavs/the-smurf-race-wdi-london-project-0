$(() => {
  console.log('JS loaded');
  // List of variables needed for the game
  const $smurf1 = $('#smurf1');
  const $smurf2 = $('#smurf2');
  const $annoyingShroom = $('#annoyingShroom');
  const $brokenTree = $('#brokenTree');
  const $smurfHouse = $('#smurfHouse');
  const $result = $('.result');

  // List of let variables needed for the game
  let smurf1LastMove = 188;
  let smurf2LastMove = 90;
  let gameOver = false;

  // Audio variables.
  const $winSound = $('.winSound')[0];

  // FUNCTIONS HERE
  function animateSmurf($smurf) {
    if($smurf.collided || gameOver) return false;
    $smurf.animate({ left: '+=10%' }, 'fast', () => {
      const smurfPos = $smurf.offset().left;
      const smurfHousePos = $smurfHouse.offset().left;
      checkCollisionAnnoyingShroom($smurf);
      checkCollisionBrokenTree($smurf);
      if(smurfPos >= smurfHousePos) {
        $result.html($smurf.text() + ' YOU WIN!!!');
        // when it hits 50px also play winsound!
        $winSound.play();
        gameOver = true;
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

    if($smurf1.collided && e.which === 76) {
      $smurf1.collided = false;
    }
    if($smurf2.collided && e.which === 83) {
      $smurf2.collided = false;
    }
  });


  // Above function checks to see if the player has pressed key 190 AND then 188 or key 88 and then 90 in order to move.


  // COLLIDING WITH ANNOYING SHROOM.
  // Players must press the up arrow key to jump & continue the race.
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

  // COLLIDING WITH TREE
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
});

// RESET BUTTON

// GAME OVER FUNCTION
