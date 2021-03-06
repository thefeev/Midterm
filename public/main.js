//factory of dummy accounts, maybe 4-5 people
    //login ==opens model with sign in info
// make them find each other on google map (add marker on map) or at least how far away they are from each other [Bob is 4 miles away] list 
//add SoundCloud link
//add Eventful API for concerts search favorite band
//


angular.module('JamSession', ['ngRoute']);

// In order to use ngRoute as our router, we have to define what routes it should be looking for
angular.module('JamSession')
  .config(Router);

Router.$inject = ['$routeProvider']; // Inject component from ngRoute




function Router ($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl   : '/home.html',// URL on your server that leads to an html file to be used for this page
      controller    : 'jamTime', // String name of the angular controller you would like to use on this page
      controllerAs  : 'jCtrl'  // Object name for `this` in your html from the specified controller 
    })
 
    .when('/profilepage', {
      templateUrl   : '/profilepage.html',
    //  controller    : "jCtrl.saveUser()"
    })
    .when('/connect', {
      templateUrl   : '/connect.html',
    })
    .when('/signup', {
      templateUrl   : '/signup.html',
    })
//     .when('/login', {
//       templateUrl   : '/login.html',
//     })
}






// User Factory here

angular.module("JamSession")
  .controller("jamTime", userCtrl)

userCtrl.$inject = ["userFactory", "$location"] //factory, $location

function userCtrl (userFactory, $location) {
  var jCtrl = this;
   jCtrl.userInfo= userFactory.userdata;

    
    
    //    
   jCtrl.saveUser = function (){
       userFactory.userdata.push(jCtrl.newUser)
       userFactory.currentUser = jCtrl.newUser
       $location.url("/profilepage");
   }
   jCtrl.connectUser = function (){
       $location.url("/connect");
   }
/*   
    jCtrl.addUser = function(){
    jCtrl.userFactory.push(jCtrl.newUser); 
     // Take the object newUser that came from ngModel and push it into the collectibles array
     // this will reset the form AND create a new object
  }
*/
   jCtrl.newUser = {};
}




// ----------FACTORY------------


angular.module("JamSession")
  .factory("userFactory", mainuserFactory);



function mainuserFactory () {
  var userInfo = [
    {
      fn : "Kevin",
      ln : "LeFevre",
      email: "kevin.lefevre@gmail.com",
      instrument: "Guitar",
      zipcode: 80526,
      host: "Yes",
      othersplay: "No",
      genre1: "Blues",
      genre2: "Indie",
      genre3: "Rock",
    },
       {
      fn : "",
      ln : "",
      email: "",
      instrument: "",
      zipcode: "",
      host: "",
      othersplay: "",
      genre1: "",
      genre2: "",
      genre3: "",
    },
       {
      fn : "",
      ln : "",
      email: "",
      instrument: "",
      zipcode: "",
      host: "",
      othersplay: "",
      genre1: "",
      genre2: "",
      genre3: "",
    },

  ];
  
  //   ALL FACTORIES MUST HAVE A RETURN STATEMENT!
  return {
    userdata : userInfo
  }
  
}



