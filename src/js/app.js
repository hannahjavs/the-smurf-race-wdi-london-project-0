$(() => {
  console.log('JS loaded');
  // List of variables needed for the game
  const $smurf1 = $('#smurf1');
  const $smurf2 = $('#smurf2');
  const $result = $('.result');

  // List of variables needed for the game
  let smurf1LastMove = 188;
  let smurf2LastMove = 90;

  // Audio variables.
  const $winSound = $('.winSound')[0];


  // FUNCTIONS HERE

  // PLAYER 1 KEY FUNCTIONS
  $(window).keyup(function(e) {
    if(e.which === 190 && smurf1LastMove === 188) {
      // e.which means the scomputer is waiting to see which keys are pressed
      smurf1LastMove = 190;
      console.log('smurf1LastMove is:', smurf1LastMove);
      $smurf1.animate({ left: '+=10%' }, 'fast', () => {
        const smurfPosition = parseFloat($smurf1.css('left'));
        console.log(smurfPosition);
        if(smurfPosition >= 50) $result.html('SMURF 1 YOU WIN!!!');
        else if
        (smurfPosition < 50) $result.html('SMURF 1 YOU LOOOSE!!!');
        // when it hits 50px also play winsound!
        $winSound.play();
      });

    } else if (e.which === 188 && smurf1LastMove === 190) {
      smurf1LastMove = 188;
      console.log('smurf1LastMove is:', smurf1LastMove);
      $smurf1.animate({ left: '+=10%' }, 'fast', () => {
        const smurfPosition = parseFloat($smurf1.css('left'));
        console.log(smurfPosition);
        if(smurfPosition >= 50) $result.html('SMURF 1 YOU WIN!!!');
        else if
        (smurfPosition < 50) $result.html('SMURF 1 YOU LOOOSE!!!');
        $winSound.play();
      });
    }
  });


  // PLAYER 2 KEY FUNCTIONS
  $(window).keyup(function(e) {
    console.log('keyup');
    if(e.which === 90 && smurf2LastMove === 88) {
      smurf2LastMove = 90;
      console.log('smurf2LastMove is:', smurf2LastMove);
      $smurf2.animate({ left: '+=10%' }, 'fast', () => {
        const smurfPosition = parseFloat($smurf2.css('left'));
        if(smurfPosition >= 50) $result.html('SMURF 2 YOU WIN!!!');
        else if
        (smurfPosition < 50) $result.html('SMURF 2 YOU LOOOSE!!!');
        $winSound.play();
      });

    } else if (e.which === 88 && smurf2LastMove === 90) {
      smurf2LastMove = 88;
      console.log('smurf2LastMove is:', smurf2LastMove);
      $smurf2.animate({ left: '+=10%' }, 'fast', () => {
        const smurfPosition = parseFloat($smurf2.css('left'));
        console.log(smurfPosition);
        if(smurfPosition >= 50) $result.html('SMURF 2 YOU WIN!!!');
        else if
        (smurfPosition < 50) $result.html('SMURF 2 YOU LOOOSE!!!');
        $winSound.play();
      });
    }
  });

  // Above function checks to see if the player has pressed key 190 AND then 188 or key 88 and then 90 in order to move.
  // parseFloat() turns string into number so you can compare it to the finish line number.


  // COLLIDING WITH THE ANNOYING SHROOM.
  // Players must press the up arrow key to jump & continue the race.
  function checkCollision() {
    const smurf1Pos = $smurf1Pos.offset();
    const smurf2Pos = $smurf2Pos.offset();
    const $annoyingShroomPos = $annoyingShroomPos.offset();

    const $smurf1RightPos = $smurf1Pos + $smurf1.width();
    const $smurf2RightPos = $smurf2Pos + $smurf2.width();
  }

  // If smurf1 reaches the annoyingShroom then,
  if((smurf1RightPos >= annoyingShroomPos.left)) {
    // when smurf one reaches annoyingShroom it is held up aka stops!
    smurf1.stop();
    // player then has to press key #38 in order to jump over the shroom.
    $(window).keyup(function(e) {
      (e.which === 38)
      // and smurf1 will jump over mushroom and continue to smurf house.
      console.log('smurf1 jumped');
    }

    // Same for Smurf2
    if((smurf2RightPos >= annoyingShroomPos.left)) {
      smurf2.stop();
      $(window).keyup(function(e) {
        (e.which === 38)
        console.log('smurf2 jumped');
      }




      // COLLIDING AND DUCKING UNDER THE BROKEN TREE BRANCH.
      // Players must press the down arrow key duck and continue the race.
      function checkCollision() {

      }


    });
