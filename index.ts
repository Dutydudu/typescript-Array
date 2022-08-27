let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2>List: ${list}</h2>
<h2>other list: ${otherList}</h2>
`;

let me: [string, number];

me = ['Dudu', 23];

const appDiv2: HTMLElement = document.getElementById('tupla');
appDiv2.innerHTML = `
<h1>Tuple</h1>
<h2Me chamo ${me[0]} e tenho ${me[1]} anos.</h2>
`;

enum Color {
  Red,
  Green,
  Blue,
}
let color1: Color = Color.Green;

enum ColorWithRef {
  Red = 10,
  Green = 20,
  Blue = 30,
}
let color2: ColorWithRef = ColorWithRef.Blue;

const appDiv3: HTMLElement = document.getElementById('enum');
appDiv3.innerHTML = `
<h1>Enumerated types</h1>
<h2>Cor 1: ${color1}</h2>
<h2>Cor 2: ${color2}</h2>
`;

let notSure: any = 4;
notSure = 'Maybe I am a string';
notSure = false; //okay, definitely a boolean

const appDiv4: HTMLElement = document.getElementById('any');
appDiv4.innerHTML = `
<h1>Any variable</h1>
<h2>${notSure}</h2>
`;

function warUser(): void {
  console.log('This is my warning message');
}

let myFunction: void = warUser();

let unusable: void = undefined;
unusable = null;

myFunction;

const appDiv5: HTMLElement = document.getElementById('void');
appDiv5.innerHTML = `
<h1>Void</h1>
<h2>unusable: ${unusable}</h2>
<h2>myFunction: ${myFunction}</h2>
`;
/*
declare function create(o: object | null): void;
create({ prop: 0 }); //ok
create(null); //ok
create(undefined); //ok
*/

/*
create(42); erro
create("string"); erro
create(false); erro

const appDiv6: HTMLElement = document.getElementById('object');
appDiv6.innerHTML = `
<h1>Object</h1>
`;
*/

let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

let someValue2: any = 'this is a string';
let strLength2: number = (someValue2 as string).length;

const appDiv7: HTMLElement = document.getElementById('assertions');
appDiv7.innerHTML = `
<h1>Type assertions</h1>
`;

/*
function sum(n1: number, n2: number): number {
  return n1 + n2;
}
function fullName(pessoa: { name: string; lastname: string }): string {
  return pessoa.name + ' ' + pessoa.lastname;
}

const appDiv8: HTMLElement = document.getElementById('function');
appDiv8.innerHTML = `
<h1>Functions</h1>
<h2>Soma de 2 e 3: ${sum(2, 3)}</h2>
<h2>Soma de 11 e 329: ${sum(11, 329)}</h2>
<h2>Meu nome completo: ${fullName({
  lastname: 'Duarte',
  name: 'Luis Ed.',
})}</h2>
`;
*/

//import stylesheets
import './style.css';

let title: string = 'Events';
let paragraph: string = 'Blablabla...';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p');
  appP.innerHTML = 'Contador: ' + counter;
}, 1000);

const btn = document.getElementById('app.btn');
btn?.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando com typescript');
}

// Write TypeScript code!
const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('Class');

const appDiv9: HTMLElement = document.getElementById('class');
appDiv9.innerHTML = `
<h1>Class</h1>
<h2>${greeter.greet()}!</h2>
`;
