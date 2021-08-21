let answers = [],
	questions = ["Как ваше имя?", "Как ваша фамилия?", "Сколько Вам лет?"];

for (let i = 0; i < questions.lenght; i++) {
	answers[i] = prompt(questions[i], "");
}

console.log(answers);

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

let i = 0;
while (i < 10) {
	console.log(i); // 0
	i++; // 10
}
