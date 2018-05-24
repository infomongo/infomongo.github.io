$(function() {
	// hide	
	//$( "#contact" ).addClass("hidden");
	$( "#contact .container" ).addClass("collapsed");
	//$( "#contact" ).slideUp(0);
	

	$( ".cta" ).bind( "click", function(e) {	  
	  if (e.currentTarget.className.indexOf("prevent") !== -1) {
		  //console.log($(window).height())
		  if ($(window).height() > 1000 ) {
			  e.preventDefault();
		  }
	  }
	  //$( "#initial" ).slideUp();
	  //$( "#contact" ).slideDown(500);
	  
	  //$( "#contact" ).removeClass("hidden");
	  $( "#contact .container" ).removeClass("collapsed");
	  $( "#contact .container" ).addClass("expanded");
	  //$( "#initial" ).addClass("collapsed");
	  
	  
	});
	
	// form validation
	$( "#contact-info" ).bind( "blur", function(e) {
		var input=$(this);
		checkInput(input);
	});
	$( "#contact-msg" ).bind( "blur", function(e) {
		var input=$(this);
		checkInput(input);
	});
	
	$( "#submit" ).bind( "click", function(e) {	  
		var input=$("#contact-info");
		checkInput(input);
		var area=$("#contact-msg");
		checkInput(area);
		
		var errors = $("#contact form .error:visible")
		//console.log(errors.length)
		
		if (errors.length > 0) {
			e.preventDefault();
		} else {
			
		}
	});
	
	function checkInput(input) {
		//console.log(input);
		//var input=$(this);
		
		if (input.val()){
			input.removeClass("error");
			hideError(input.attr("id"));
		} else {
			input.addClass("error");
			showError(input.attr("id"));
		}
	};
	
	function showError(id) {
		if (id == "contact-info") { 
			$("#contact-info-error").removeClass("hidden");
			$("#contact form .help").addClass("hidden");
		};
		if (id == "contact-msg") { $("#contact-msg-error").removeClass("hidden")};
	};
	
	function hideError(id) {
		if (id == "contact-info") { 
			$("#contact-info-error").addClass("hidden");
			$("#contact form .help").removeClass("hidden");
		};
		if (id == "contact-msg") { $("#contact-msg-error").addClass("hidden")};
	};
	
	
});