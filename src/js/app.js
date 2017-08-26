$(() => {

  const $gamePane = $('#gamePane');
  const $smurf1 = $('#smurf1');
  const $smurf2 = $('#smurf2');


  // FUNCTIONS HERE


  $(window).keyup(function(e) {
    if(e.which === 188) { // if , left is pressed and then . right
      console.log('right');
      const currentPosition = $smurf1.css('left');
      console.log(currentPosition);
      $smurf1.animate({ left: '+=10' }, 'fast');
      if(currentPosition === '900px') alert('Smurf wins!!!');
    }
  });

  $(window).keyup(function(e) {
    if(e.which === 88) { // if , left is pressed and then . right
      console.log('right');
      const currentPosition = $smurf2.css('left');
      console.log(currentPosition);
      $smurf2.animate({ left: '+=10' }, 'fast');
      if(currentPosition === '900px') alert('Smurfette wins!!!');
    }
  });



// BUTTONS HERE


});
