const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

// โหลดข้อมูล Cookie เมื่อเปิดหน้าเว็บ
window.onload = function() {
	loadTodosFromCookie();
};

newBtn.addEventListener('click', function() {
	const todoText = prompt('Enter a new TO DO:');
	if (todoText && todoText.trim() !== '') {
		addTodo(todoText.trim());
		saveTodosToCookie();
	}
});

// ฟังก์ชันสร้าง element TO DO และใส่ไว้บนสุด
function addTodo(text) {
	const todoDiv = document.createElement('div');
	todoDiv.className = 'todo-item';
	todoDiv.textContent = text;

	// เมื่อคลิกที่รายการ ให้ยืนยันก่อนลบ
	todoDiv.addEventListener('click', function() {
		if (confirm('Do you want to remove this TO DO?')) {
			todoDiv.remove();
			saveTodosToCookie();
		}
	});

	// แทรกไว้ที่ด้านบนสุดของ #ft_list
	ftList.insertBefore(todoDiv, ftList.firstChild);
}

// ฟังก์ชันบันทึกรายการทั้งหมดลง Cookie
function saveTodosToCookie() {
	const todos = [];
	const items = ftList.children;
	
	// เก็บจากล่างขึ้นบนเพื่อให้ตอนโหลดกลับมาแทรกด้านบนจะได้ลำดับถูกต้อง
	for (let i = items.length - 1; i >= 0; i--) {
		todos.push(encodeURIComponent(items[i].textContent));
	}
	
	const jsonString = JSON.stringify(todos);
	const d = new Date();
	d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // เก็บไว้ 7 วัน
	document.cookie = "ft_list=" + encodeURIComponent(jsonString) + ";expires=" + d.toUTCString() + ";path=/";
}

// ฟังก์ชันดึงข้อมูลจาก Cookie มาสร้าง DOM
function loadTodosFromCookie() {
	const cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		let c = cookies[i].trim();
		if (c.indexOf('ft_list=') === 0) {
			const jsonStr = decodeURIComponent(c.substring('ft_list='.length));
			try {
				const todos = JSON.parse(decodeURIComponent(jsonStr));
				todos.forEach(text => addTodo(text));
			} catch (e) {
				console.error("Error parsing cookie data", e);
			}
			break;
		}
	}
}