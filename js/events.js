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
  $('form').on('keydown', function() {
    if ($( "input:first"    key.which == 71){
      alert('The G key was pressed');
    }
  });
}

$(document).ready(function(){

// call functions here

});
