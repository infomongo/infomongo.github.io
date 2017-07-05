
$(function() {
  // Handler for .ready() called
  var links_checkbox = $('.links input'); 
  //console.log(links_checkbox);

  links_checkbox.prop( "checked", true );
  // check the checkbox by default
  open_new();
  links_checkbox.change(open_new);
  
  //hide it by default
  $('#essay-menu').addClass('top');
  $('#essay-menu').removeClass('bottom');

  // click  to show essay menu
  $( '#essays' ).click(function(e) {
    $('#essay-menu').removeClass('top');
    $('#essay-menu').addClass('view');
    e.preventDefault();
  });
  
  //click close x in menu
  $( '#close-menu' ).click(function(e) {
    $('#essay-menu').addClass('top');
    $('#essay-menu').removeClass('view');
    e.preventDefault();
  });
  
  function open_new() {
	var new_window = links_checkbox.prop( "checked" );

	if (new_window ){
	  $('a[href]').not('.internal').attr( 'target', '_blank' );
	} else {
	  $('a[href]').not('.internal').removeAttr( "target" );		  
	};
  };

});
