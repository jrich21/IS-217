var myMotorcycle = {

  name: "Honda XR650L",

  drive: function () {
    console.log( "This is AWESOME!!! LOL!" );
  },

  panic: function () {
    console.log( "OMG! I'm losing balance!" );
  }

};

// Use Object.create to instantiate a new car
var yourMotorcycle = Object.create( myMotorcycle );

// Now we can see that one is a prototype of the other
console.log( yourMotorcycle.name );