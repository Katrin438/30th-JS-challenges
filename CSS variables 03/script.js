//we take the html element "controls" and put them in empty array
const container = document.querySelector('.controls');
const input = [].slice.call(document.querySelectorAll('input'));

//The property HTMLElement.dataset allows
// access, in read and write mode, to all 
//custom data attributes in the element. 
//It is a DOMString map , with an entry for each custom data attribute.
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  console.log(this.dataset);

}

input.forEach(input => input.addEventListener('change', handleUpdate));
input.forEach(input => input.addEventListener('mousemove', handleUpdate));
