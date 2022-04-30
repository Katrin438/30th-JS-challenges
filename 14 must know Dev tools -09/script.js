const cat = [{ name: 'Pizza', age: 5 }, { name: 'hugo', age: 7 }];
//when its clicked it turns red
function makeRed() {
  const p = document.querySelector('p');
  p.style.color = '#ff3333';
  p.style.fontSize = '30px';
}


// Error message
console.error('This is my bad!');
// a warning message
console.warn('Oh no');

// interpolated
console.log('Hello I am a %s string!', '<3');

// Styled
 console.log('%c I am some great text', 'font-size:50px; background:blue; text-shadow: 10px 10px 0 blue')

// Regular
console.log('Heyy');


// Info
console.info('Cats like to eat fish');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('oh'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// counting the names

console.count('Cathy');
console.count('Cathy');
console.count('Van');
console.count('Lora');
console.count('Cathy');
console.count('Van');
console.count('Van');
console.count('Lora');
// we group them here
cat.forEach(cat => {
  console.groupCollapsed(`${cat.name}`);
  console.log(`This is ${cat.name}`);
  console.log(`${cat.name} is ${cat.age} years old`);
  console.log(`${cat.name} is ${cat.age * 7} cat years old`);
  console.groupEnd(`${cat.name}`);
});

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });


console.table(cat);
