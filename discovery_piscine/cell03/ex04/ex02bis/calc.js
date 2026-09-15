$(document).ready(function() {
	function isPosInt(str) {
		return /^\d+$/.test($.trim(str));
	}

	$('#calcForm').submit(function(e) {
		e.preventDefault();
		const leftStr = $('#leftNum').val();
		const rightStr = $('#rightNum').val();
		const op = $('#operator').val();

		if (!isPosInt(leftStr) || !isPosInt(rightStr)) {
			alert('Error :(');
			return;
		}

		const left = parseInt(leftStr, 10);
		const right = parseInt(rightStr, 10);

		if ((op === '/' || op === '%') && right === 0) {
			alert("It's over 9000!");
			console.log("It's over 9000!");
			return;
		}

		let res = 0;
		if (op === '+') res = left + right;
		else if (op === '-') res = left - right;
		else if (op === '*') res = left * right;
		else if (op === '/') res = left / right;
		else if (op === '%') res = left % right;

		alert(res);
		console.log(res);
	});

	setInterval(function() {
		alert('Please, use me...');
	}, 30000);
});