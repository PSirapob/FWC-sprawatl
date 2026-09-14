document.getElementById('bgBtn').addEventListener('click', function() {
	const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
	document.body.style.backgroundColor = randomColor;
});