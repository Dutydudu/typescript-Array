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
