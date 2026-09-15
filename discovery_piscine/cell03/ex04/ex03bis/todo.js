$(document).ready(function() {
	loadTodos();

	$('#newBtn').click(function() {
		const text = prompt('Enter a new TO DO:');
		if (text && $.trim(text) !== '') {
			addTodo($.trim(text));
			saveTodos();
		}
	});

	function addTodo(text) {
		const $div = $('<div></div>').addClass('todo-item').text(text);
		$div.click(function() {
			if (confirm('Do you want to remove this TO DO?')) {
				$(this).remove();
				saveTodos();
			}
		});
		$('#ft_list').prepend($div);
	}

	function saveTodos() {
		const todos = [];
		$('#ft_list .todo-item').each(function() {
			todos.push(encodeURIComponent($(this).text()));
		});
		const d = new Date();
		d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
		document.cookie = "ft_list=" + JSON.stringify(todos) + ";expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
	}

	function loadTodos() {
		const cookies = document.cookie.split(';');
		for (let c of cookies) {
			c = $.trim(c);
			if (c.indexOf('ft_list=') === 0) {
				try {
					const todos = JSON.parse(c.substring(8));
					for (let i = todos.length - 1; i >= 0; i--) {
						addTodo(decodeURIComponent(todos[i]));
					}
				} catch (e) {}
				break;
			}
		}
	}
});