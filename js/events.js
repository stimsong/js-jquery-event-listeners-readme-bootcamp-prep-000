//define functions here

function getIt() {
 $('p').on('click', function() {
   alert("Hey!");
 });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if ( key.which == 71 ){
      alert('The G key was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    if ($( 'input:first' ).val())
  })
}

$(document).ready(function(){

// call functions here

});
