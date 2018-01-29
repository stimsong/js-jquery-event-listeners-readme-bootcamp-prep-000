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
  $(document).on('keypress', function() {
    if (key.which == 71){
      alert('g was pressed');
    }
  });
}

$(document).ready(function(){

// call functions here

});
