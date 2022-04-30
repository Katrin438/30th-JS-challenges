
const players = ['Niki', 'Row', 'Lorenco'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

const team2 = players.slice();

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Any Tomson',
    age: 26
};

// to make a copy
const cap2 = Object.assign({}, person, { number: 26, age: 12 });
console.log(cap2);


// assingning object with values
const any = {
    name: 'Any',
    age: 100,
    facebook: 'anyy.an'
    }


// makeing a reference to the wes object
const refCopy = any;
console.clear();
console.log(any);

const dev = Object.assign({}, any);

// making a hard copy of "any"
const dev2 = JSON.parse(JSON.stringify(any));