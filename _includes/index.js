
$(function() {
  // Handler for .ready() called
  var links_checkbox = $('.links input'),
   physList = ["/img/phys-loc-search.jpg", "/img/phys-loc-results.png", "/img/phys-loc-details.jpg", "/img/phys-loc-cart.png" ],
  benchList = ["/img/workbench-img-1.png", "/img/workbench-img-2.png", "/img/workbench-img-3.jpg", "/img/workbench-img-4.png" , "/img/workbench-img-5.png" ],
  smashList = ["/img/smash-1-search.png", "/img/smash-2-results.jpg", "/img/smash-3-details.jpg"],
  bigList = ["/img/big-1-search.png", "/img/big-2-results.png", "/img/big-3-details.png"],
  nwList = ["/img/nw-mob.jpg", "/img/nw-1-search.png", "/img/nw-2-search.png", "/img/nw-3-results.jpg", "/img/nw-4-details.png", "/img/nw-5-details.png", "/img/nw-6-details.jpg" ]
  ;

  links_checkbox.prop( "checked", true );
  // check the checkbox by default
  open_new();
  links_checkbox.change(open_new);
  
  $('.img-switch').on('click', function(e) {
	//console.log($(this));
	switchImage($(this));
	e.preventDefault();
  });
  
  function switchImage(clickedNode) {
   	//console.log(clickedNode);
   	//console.log($(clickedNode).children());
   	

  
   	var targetFlag = clickedNode.attr('data-id'),
   	thisLink = $(clickedNode),
   	thisImage = thisLink.children(),
   	listIndex = thisImage.attr('data-count'),
   	nextIndex, newSrc, targetList;
  
  	if (targetFlag == 'phys') targetList = physList;
  	if (targetFlag == 'bench') targetList = benchList;
  	if (targetFlag == 'smash') targetList = smashList;
  	if (targetFlag == 'big') targetList = bigList;
  	if (targetFlag == 'nw') targetList = nwList;
    
   	if (targetList.length > 1) {
  
   		nextIndex = parseInt(listIndex) + 1;
   		if (nextIndex == targetList.length) nextIndex = 0;
  
   		newSrc = targetList[nextIndex];
  
   		thisLink.addClass('slide-up');
   		//thisImage.addClass('slide-up');
  
   		setTimeout(function(){
   			thisImage.attr('src', newSrc );
   			thisImage.attr('data-count', nextIndex );
   		}, 750);
  
   		setTimeout(function(){
   			thisLink.removeClass('slide-up');
   			//thisImage.removeClass('slide-up');
   		}, 1000);
  
   	}
  }
  
  function open_new() {
	var new_window = links_checkbox.prop( "checked" );

	if (new_window ){
	  $('a[href]').not('.internal').attr( 'target', '_blank' );
	} else {
	  $('a[href]').not('.internal').removeAttr( "target" );		  
	};
  };

});
