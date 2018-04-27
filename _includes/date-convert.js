$(function() {
	
	var $currentDay = $('#current-day'),
	errorElem = $('#date-convert .error'),
	monthChosen = $("#current-month").val(),
	dayEntered = $("#current-day").val();

	
	$currentDay.on('keyup', function () {
	  validateDay(this.value);
	  
	});
	
	$currentDay.change(function () {
	  validateDay(this.value);
	});

	 
	$("#current-month").change(function () {
		monthChosen = this.value;
		validateDay($("#current-day").val())
	});
	
	function validateDay(day){
		var showError = false,
		changeError = false;
		
		if (day < 1 || day > 31 ) {
			showError = true;
		} 
		
		if (monthChosen == 'Apr' || monthChosen == 'Jun' || monthChosen == 'Sep' || monthChosen == 'Nov') {
			if (day < 1 || day > 30 ) {
				showError = true;
				changeError = true;
			} 
		};
		
		if (monthChosen == 'Feb') {
			if (day < 1 || day > 28 ) {
				showError = true;
				changeError = true;
			} 
		};
				
		if (changeError == true){
			if (monthChosen == 'Feb') {
				$('#num').html('28');
			} else {
				$('#num').html('30');
			}
		} else {
			$('#num').html('31');
		}
		
		if (showError ) {
			errorElem.removeClass('transparent');
			$('.new-date').addClass('transparent');
		} else {
			errorElem.addClass('transparent');
			convertDate()
		};
		
	}
	
	function convertDate(){
		//console.log(monthChosen);
		dayEntered = $("#current-day").val();
		//console.log(dayEntered);
		
		dayEntered = Number(dayEntered);
		
		var offset = 0,
		divisor, modulo, dayofyear, newMonth, dayofweek, weekDay;
		
		switch (monthChosen) {
			case 'Feb':
				offset = 31;
				break;
			case 'Mar':
				offset = 59;
				break;
			case 'Apr':
				offset = 90;
				break;
			case 'May':
				offset = 120;
				break;
			case 'Jun':
				offset = 151;
				break;
			case 'Jul':
				offset = 181;
				break;
			case 'Aug':
				offset = 212;
				break;
			case 'Sep':
				offset = 243;
				break;
			case 'Oct':
				offset = 273;
				break;
			case 'Nov':
				offset = 304;
				break;
			case 'Dec':
				offset = 334;
		}
		
		dayofyear = offset + dayEntered;
		divisor = Math.ceil(dayofyear / 28);
		modulo = dayofyear % 28;
		if (modulo == 0) {modulo = 28};
		dayofweek = modulo % 7;
		
		switch (divisor) {
			case 1:
				newMonth = "Arp";
				break;
			case 2:
				newMonth = "Baw";
				break;
			case 3:
				newMonth = "Cor";
				break;
			case 4:
				newMonth = "Dur";
				break;
			case 5:
				newMonth = "Ell";
				break;
			case 6:
				newMonth = "Fen";
				break;
			case 7:
				newMonth = "Gam";
				break;
			case 8:
				newMonth = "Hob";
				break;
			case 9:
				newMonth = "Isp";
				break;
			case 10:
				newMonth = "Jom";
				break;
			case 11:
				newMonth = "Kro";
				break;
			case 12:
				newMonth = "Lem";
				break;
			case 13:
				newMonth = "Mog";
				break;
			case 14:
				newMonth = "Non";
		}
		
		switch (dayofweek) {
			case 0:
				weekDay = "Saturday";
				break;
			case 1:
				weekDay = "Sunday";
				break;
			case 2:
				weekDay = "Monday";
				break;
			case 3:
				weekDay = "Tuesday";
				break;
			case 4:
				weekDay = "Wednesday";
				break;
			case 5:
				weekDay = "Thursday";
				break;
			case 6:
				weekDay = "Friday";
				break;
			case 7:
				weekDay = "Saturday";
		}
		
		if (newMonth == 'Non') {weekDay = "Freeday"};
		
		// console.log('divisor ' + divisor);
		// console.log('modulo ' + modulo);
		// console.log('newMonth ' + newMonth);
		// console.log('weekDay ' + weekDay);
		// console.log('dayofweek ' + dayofweek);
		
		$('.new-date').addClass('transparent');
		
		$('#new-month').html(newMonth);
		$('#new-day').html(modulo);
		$('#dayofweek').html(weekDay);
		$('#short-date').html( divisor + '/' + modulo);
		
		setTimeout(function(){
			$('.new-date').removeClass('transparent');
		}, 300);
		
		
		
	}
});
