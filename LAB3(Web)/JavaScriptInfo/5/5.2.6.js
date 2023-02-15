// now rand is from  (min-0.5) to (max+0.5)
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  alert( randomInteger(1, 3) );

// here rand is from min to (max+1)
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  alert( randomInteger(1, 3) );