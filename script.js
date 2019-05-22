$(document).ready(function(){
  console.log('test');

  $.post( 'https://szaizen.github.io/ajax/second.html', 'test=aaa' )
  .done(function( data ) {
    console.log( data.form );
  })

});
