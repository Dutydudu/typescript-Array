let list: number[] = [1,2,3];

let otherList: Array<number> = [1,2,3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2>List: ${list}</h2>
<h2>other list: ${otherList}</h2>
`;