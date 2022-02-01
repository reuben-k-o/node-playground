// const fs = require("fs");
// fs.writeFileSync("Hello.txt", "Hello world from nodejs");

class FieldName {
	constructor(name) {
		const field = document.createElement("li");
		field.textContent = name;
		const listHook = document.querySelector("#names");
		listHook.appendChild(field);
	}
}

class NameGenerator {
	constructor() {
		const btn = document.querySelector("button");
		// this.addName();
		// btn.addEventListener("click", this.addName.bind(this));
		btn.addEventListener("click", () => {
			this.addName();
		});
	}

	addName() {
		const name = new FieldName("Reuben");
	}
}

// const generator = new NameGenerator();
const person = {
	name: "reuben",
	age: 24,
	greet() {
		console.log(`Hello there ${this.name}! From nodejs`);
	},
};

//desctructuring objects
const namePerson = ({ name }) => console.log(`My name is ${name}`);
namePerson(person);

const { name, age } = person;
// console.log(name, age);
const array = ["reuben", "mercy", "joy", "jane"];

let [first, second, third, fourth] = array;
// console.log(first, second);

const fetchData = (callback) => {
	console.log("Hello from fetch data");
	// setTimeout(() => {
	// 	callback("Done!");
	// }, 1000);
};

const timeData = setTimeout(() => {
	console.log("first");
	fetchData((text) => {
		console.log(text);
	});
	console.log("Hello everyone from the setTimeout function");
}, 2000);

console.log("I am out!");
