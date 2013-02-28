var mySingleton = (function () {

  // Instance stores a reference to the Singleton
  var instance;

  function init() {

    // Singleton

    // Private methods and variables
    function privateMethod(){
        console.log( "Me in person is Private, Leave." );
    }

    var privateVariable = "No you leave, I'm also Private.";

    return {

      // Public methods and variables
      publicMethod: function () {
        console.log( "No! The public can see me!" );
      },

      publicProperty: "The public can see me too. LOL!"
    };

  };

  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {

      if ( !instance ) {
        instance = init();
      }

      return instance;
    }

  };

})();

// Usage:

var singleA = mySingleton;
var singleB = mySingleton;
console.log( singleA === singleB ); // true