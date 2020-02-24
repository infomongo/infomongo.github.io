$(function() {

	var $bill = $('#bill'),
	$tip = $('#tip'),
	$total = $('#total'),
	$percent = $('#percent'),
	$xtip = $('#xtip'),
	$xtotal = $('#xtotal'),
	$xpercent = $('#xpercent'),
	$clear = $('#clear');

	$bill.on('keyup', function () {
	  format();
	});

	$clear.on('click', function () {
	  //console.log('boom');
	  //$bill.val('');
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
		var percent = 0.2,
		bill = Number($bill.val()),
		roundBill = Math.floor(bill),	
		baseTip = (roundBill * percent);
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
		
		var xtip = tip + 1,
		xtotal = xtip + bill,
		xpercent = xtip / bill;

		tip = cleanForDisplay(tip);
		total = cleanForDisplay(total);
		xtip = cleanForDisplay(xtip);
		xtotal = cleanForDisplay(xtotal);

		$tip.html(tip);
		$total.html(total);
		$xtip.html(xtip);
		$xtotal.html(xtotal);
		
		if (effectiveTip) {
			$percent.html(((tip/bill) * 100).toFixed(2) + "%");
			//$percent.html(effectiveTip + "%" );
		}
		if (xpercent) {
			$xpercent.html(((xtip/bill) * 100).toFixed(2) + "%");
			//$percent.html(effectiveTip + "%" );
		}
	}

	function cleanForDisplay(num) {
		var cleaned = parseFloat(Math.round(num * 100) / 100).toFixed(2)
		return cleaned;
	}

});