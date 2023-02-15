// Error: Cannot read property 'name' of undefined
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
//let user = makeUser();
  alert( user.ref.name ); 

// Error: Cannot read property 'name' of undefined
function makeUser(){
    return this;
  }
  alert( makeUser().name );
// Dana
function makeUser() {
    return {
      name: "Dana",
      ref() {
        return this;
      }
    };
  }
  let user = makeUser();
  alert( user.ref().name ); 