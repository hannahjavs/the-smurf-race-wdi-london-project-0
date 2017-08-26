$(() => {
  console.log('JS loaded');
  // List of variables needed for the game
  // const $gamePane = $('#gamePane');
  const $smurf1 = $('#smurf1');
  const $smurf2 = $('#smurf2');
  const $result = $('.result');
  // List of variables needed for the game
  let smurf1LastMove = 188;
  let smurf2LastMove = 90;

  // Audio variables.
  const $winSound = $('.winSound')[0];

  // FUNCTIONS HERE

  // PLAYER 1 & 2 Function that checks to see if the player has pressed key 190 AND then 188 in order to move. Computer checks the smurfs last move which will be if the user has pressed key 188 then the function then loops round

  // parseFloat() turns string into number so you can compare it to the finish line number

  // PLAYER 1
  $(window).keyup(function(e) {
    if(e.which === 190 && smurf1LastMove === 188) {
      // e.which means the computer is waiting to see which keys are pressed
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
        // when it hits 50px also play winsound!
        $winSound.play();
      });
    }
  });


  // PLAYER 2
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
        // when it hits 50px also play winsound!
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
        // when it hits 50px also play winsound!
        $winSound.play();
      });
    }
  });


  // COLLIDING WITH THE ANNOYING SHROOM




});
