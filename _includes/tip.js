$(function() {

	var $bill = $('#bill');
	var $tip = $('#tip');
	var $total = $('#total');
	var $percent = $('#percent')

	$bill.on('keyup', function () {
	  format();
	  //calculate();
	});

	function format() {
		var bill = $bill.val();

		var pos = bill.indexOf(".");
		if (pos > 0){
			var n = bill.replace(".", "");
			bill = n;
			//console.log('strip . ' + bill);
		}

		if (bill.length > 2){
			var newBill = bill.slice(0, -2);
			var endBill = bill.slice(-2);
			bill = newBill + '.' + endBill;
			//console.log('newBill ' + newBill);
			//console.log('endBill ' + endBill);
			//console.log('bill ' + bill);
			var flag = 1 ;
		}

		if (flag) {
			$bill.val(bill);

		}
		calculate()
	}

	function calculate() {
		var percent = 0.2;
		var bill = Number($bill.val());
		var roundBill = Math.floor(bill);	
		var baseTip = (roundBill * percent);
		//console.log(typeof baseTip);

		var total = Math.ceil(bill + baseTip);
		var tip = total - bill ;
		var effectiveTip =  Math.round( (tip / bill) * 100 );
		// var effectiveTip = (tip / bill) * 100;
		// effectiveTip = effectiveTip.toFixed(2);


		if (effectiveTip > 20 && bill > 20 ) {
			if (tip > 1 ) tip = tip - 1;
			total = bill + tip;
			effectiveTip =  Math.round( (tip / bill) * 100 );
			// effectiveTip = (tip / bill) * 100;
			// effectiveTip = effectiveTip.toFixed(2);
			var flag = 1;
			//console.log("> than 21% " + tip);
		}

		tip = cleanForDisplay(tip);
		total = cleanForDisplay(total);

		$tip.html(tip);
		$total.html(total);
		if (effectiveTip) {
			$percent.html(((tip/bill) * 100).toFixed(2) + "%");
			//$percent.html(effectiveTip + "%" );
		}
	}

	function cleanForDisplay(num) {
		var cleaned = parseFloat(Math.round(num * 100) / 100).toFixed(2)
		return cleaned;
	}

});