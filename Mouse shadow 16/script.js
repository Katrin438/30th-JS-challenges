const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 300; 
    //function for mouse hover that triggers the shadow
  function shadow(e){
    const {offsetWidth: width, offsetWidth: height } = hero;
    let { offsetX: x, offsetY: y} = e;
    //here we set it on the text
    if(this !== e.target){
      x += e.target.offsetLeft;
      y += e.target.offsetTop;
    }
    //cordination for the movement
    const X_Walk = Math.round((x / width * walk ) - (walk / 2));
    const Y_Walk = Math.round((x / width * walk ) - (walk / 2));

    //here are the other three colors
    text.style.textShadow = `${X_Walk}px ${Y_Walk}px 0 rgba(255,0,0,0.3),
    ${X_Walk * -1}px ${X_Walk}px 0 rgba(0,255,0,0.3),
    ${X_Walk}px ${X_Walk * -1}px 0 rgba(0,0,255,0.3),
    ${X_Walk * -1}px ${X_Walk}px 0 rgba(123,468,225,0.5)`;

    console.log(X_Walk, Y_Walk);
  }

  hero.addEventListener('mousemove', shadow);