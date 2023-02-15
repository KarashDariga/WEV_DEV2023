function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
//no difference between them
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
}