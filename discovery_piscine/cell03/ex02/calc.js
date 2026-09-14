// ฟังก์ชันเช็กว่าเป็นจำนวนเต็มบวกหรือศูนย์
function isValidPositiveInteger(str) {
	return /^\d+$/.test(str.trim());
}

document.getElementById('calcForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const leftStr = document.getElementById('leftNum').value;
	const rightStr = document.getElementById('rightNum').value;
	const op = document.getElementById('operator').value;

	// ตรวจสอบความถูกต้องของ Input
	if (!isValidPositiveInteger(leftStr) || !isValidPositiveInteger(rightStr)) {
		alert('Error :(');
		return;
	}

	const left = parseInt(leftStr, 10);
	const right = parseInt(rightStr, 10);

	// ตรวจสอบการหาร/มอดุโลด้วย 0
	if ((op === '/' || op === '%') && right === 0) {
		const over9000Msg = "It's over 9000!";
		alert(over9000Msg);
		console.log(over9000Msg);
		return;
	}

	let result = 0;
	switch (op) {
		case '+': result = left + right; break;
		case '-': result = left - right; break;
		case '*': result = left * right; break;
		case '/': result = left / right; break;
		case '%': result = left % right; break;
	}

	alert(result);
	console.log(result);
});

// แจ้งเตือนทุกๆ 30 วินาที
setInterval(function() {
	alert('Please, use me...');
}, 30000);