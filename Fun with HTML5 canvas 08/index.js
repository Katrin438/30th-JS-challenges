  //we set the painter parameters
  const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;
//we set the isDrawins as false so when the mouse is only pressed 
//its active
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e) {
  //stop the function from running when they are not moused down
  if (!isDrawing) return;
  console.log(e);
  ctx.beginPath();
  // start
  ctx.moveTo(lastX, lastY);
  // to show how the drawn line goes 
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

}
//when the mouse is pressed isDrawing is turning true so we can start 
//drawing
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

//when we are using the mouse we can draw ,when we are no longer 'pressing' the
//the value changes to false and the drawing stops
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);