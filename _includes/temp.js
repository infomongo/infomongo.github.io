$(function() {

	 var $text = $('#fahrenheit');
	 var $input = $('#celsius');

	 $input.on("focus", function () {
		$(this).val('');
	 });

	 $input.on('keyup', function () {
	   var fahrenheit = convert($input.val());	   
	   $text.html(fahrenheit);
	 });

	 function convert(celsius) {
		var fahrenheit = (celsius * 1.8) + 32;
		return Math.round(fahrenheit);
	 }
});
