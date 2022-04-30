const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
//we take the bands name and check if there is the , a ,an and if they exist we remove them
function strip(bandName) {
  if(bandName.includes('the ')) {
    return bandName.replace('the ', '');
  } else if (bandName.includes('a ')) {
    return bandName.replace('a ', '');
  } else if (bandName.includes('an ')) {
    return bandName.replace('an ', '');
  }
  return bandName;
}
//we sort the bands alph order
const sortedBands = bands.sort((a, b) => strip(a.toLowerCase()) > strip(b.toLowerCase()) ? 1 : -1);
//here we show them in the html
document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);

