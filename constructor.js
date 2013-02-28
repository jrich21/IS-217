function Motorcycle( model, year, miles ) {

  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}

// Usage:

// We can create new instances of the motorcycle
var XR650L = new Motorcycle( "Honda XR650L", 2009, 20000 );
var KLX250S = new Motorcycle( "Kawasaki KLX250S", 2010, 5000 );

// and then open our browser console to view the 
// output of the toString() method being called on 
// these objects
console.log( XR650L.toString() );
console.log( KLX250S.toString() );
