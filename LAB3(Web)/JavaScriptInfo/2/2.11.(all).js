//2.11.1.js
alert( null || 2 || undefined );
//2.11.2.js
alert( alert(1) || 2 || alert(3) );
//2.11.3.js
alert(1 && null && 2);
//2.11.4.js
alert( alert(1) && alert(2) );
//2.11.5.js
alert( null || 2 && 3 || 4 );
//2.11.6.js
if (age >= 14 && age <= 90);
//2.11.7.js
if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90);
//2.11.8.js
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
//2.11.9.js
let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
  let pass = prompt('Password?', '');
  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }
} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
