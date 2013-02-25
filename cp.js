function Motorcycle( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

}


// Note here that we are using Object.prototype.newMethod rather than 
// Object.prototype so as to avoid redefining the prototype object
Motorcycle.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

// Usage:

var XR650L = new Motorcycle( "Honda XR650L", 2010, 5000 );
var KLX250S = new Motorcycle( "Kawasaki KLX250S", 2010, 4000 );

console.log( XR650L.toString() );
console.log( KLX250S.toString() );
