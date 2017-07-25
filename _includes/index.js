
$(function() {
  // Handler for .ready() called
  var links_checkbox = $('.links input'); 
  //console.log(links_checkbox);

  links_checkbox.prop( "checked", true );
  // check the checkbox by default
  open_new();
  links_checkbox.change(open_new);
  
  
  function open_new() {
	var new_window = links_checkbox.prop( "checked" );

	if (new_window ){
	  $('a[href]').not('.internal').attr( 'target', '_blank' );
	} else {
	  $('a[href]').not('.internal').removeAttr( "target" );		  
	};
  };

});
