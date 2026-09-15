$(document).ready(function() {
	$('#bgBtn').click(function() {
		const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
		$('body').css('background-color', randomColor);
	});
});