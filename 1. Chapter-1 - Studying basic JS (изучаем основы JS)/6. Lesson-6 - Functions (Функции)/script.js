// function humanSayHello() {
// 	console.log('Hello World!');
// }

// humanSayHello();

// let count = 5;
// // function Declaration
// function humanSayHello(user) {
// 	let count = 10;
// 	count++;
// 	console.log(count);
// 	console.log('Hello ' + user + '!');
// }

// humanSayHello('Max');
// console.log(count);

// // function Expression
// let calc = function(a, b) {
// 	return a + b;
// };

// calc(4, 5);


function myFirstApp(name, age) {
	name = prompt('Как твое имя?: ', '');
	alert(`Привет ${name}! `, '');

	function showSkills() {
		let skills = ['html', 'css', 'js'];
		for (let i = 0; i < skills.length; i++) {
			console.log(`У меня есть навыки владения: ` + skills[i]);
		}
	}

	function checkAge() {
		age = +prompt('Сколько тебе лет?: ', '');
		if (age < 18) {
			alert(`Замечательно что ты предпочел заниматся программирование в свои ${age} лет!`);
		} else {
			alert(`Это же отлично что в свои ${age} год ты решил стать разработчиком, продолжай в том же духе!`);
		}
	}

	function calcPow(num) {
		num = +prompt('Введите число: ', '');
		return alert(num * num);
	}

	showSkills();
	checkAge();
	calcPow();
}

myFirstApp();
