/*we set our secret word to be dog,everytime
a button is pressed it's beign stored in a array,then the pressed symbols 
are shown together so they can make the word,we check if the combined symbols
create the secret word and if the result is true it shows on the screen 
'ding dong'*/
const pressed = [];
const secretCode = 'dog';
window.addEventListener('keydown', function(e){
pressed.push(e.key);
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
document.querySelector('p').innerHTML = `${pressed}`;
if(pressed.join('').includes(secretCode)){
document.querySelector('p').innerHTML = `Suprisee!`;
cornify_add();
}
}, false);