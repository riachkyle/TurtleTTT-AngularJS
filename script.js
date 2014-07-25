var gameApp = angular.module('gameApp',[]);
 

gameApp.controller("ticController", function ($scope){

//variables ==================================
var board
$scope.board = [" ", " "," "," "," "," "," "," "," "];
$scope.clicked = 0;
$scope.loader = 0;
$scope.charaimage = "images/leo.png",
$scope.charnum = 0;
// var TTTRef = new Firebase("https://tttbyrichard.firebaseIO.com")

// var i = 0;
// var k = 0;
// var rl = 3;
 
// turn counter and image placer
$scope.clicker = function(b) {
if ($scope.board[b] == " ") {

    $scope.clicked++;
    // console.log($scope.clicked);
      if ($scope.clicked % 2 == 0) { 
      $scope.board[b] = 'O';
      $scope.checkrow();
      $scope.checkcol();
      $scope.checkdiag();
     
    } 
    else {
      $scope.board[b] = 'X';
      $scope.checkrow();
      $scope.checkcol();
      $scope.checkdiag();
      console.log('1st ok');    
    }
  }
  };

  $scope.checkrow = function(){
    console.log('1st ok')
    var rl = 3
    for (i=0; i < (rl*rl); i += rl) {
        if ($scope.board[i] === $scope.board[i+1] && $scope.board[i] === $scope.board[i+2] && ($scope.board[i] != " ")) {
          $scope.youwin();
        }
        else {
          console.log('2nd ok')
        }
    }; 
  };


  $scope.checkcol = function(){
    var rl = 3
    for (i=0; i<rl; ++i) {
      if ($scope.board[i] === $scope.board[i+rl] && $scope.board[i] === $scope.board[i+(2*rl)] && ($scope.board[i] != " ")) {
          $scope.youwin();
        } 
      else {
        
          console.log('3nd ok')
        }
      }; 
    }; 


    $scope.checkdiag = function() {
      var rl = 3
      for (i = 0; i < rl; ++i) {
        if (i === 0 || i === 2) {
        if ($scope.board[i] === $scope.board[i+(rl+1)] && $scope.board[i] === $scope.board[(i+2)+(2*rl)] && ($scope.board[i] != " ")) {
          $scope.youwin();
         } else if ($scope.board[i] === $scope.board[2*i] && $scope.board[i] === $scope.board[3*i] && (i != 0) && ($scope.board[i] != " ")) {
          $scope.youwin();
        } else {
            console.log('4 ok');
        }
      };
    };
    };


//alternate win solution
// $scope.wincheckrow = function() {
//   var rl = 3; 
//   for (var i=0; i < (rl*rl); i+=rl) {
//     var k;
//     for (k=0; k < (rl - 1);) {
//       if(($scope.board[i + k]!= $scope.board[i + k+1]) || ($scope.board[i + k] == " ")) break;
//       if(++k == (rl-1))
//         console.log('All are ok - row ' + (i/3));
//     }
//     console.log($scope.board[k])
//   };
// //  $scope.checkcol();
// };

$scope.youwin = function() {
  alert("you win!");
};


//loading screen select click function
$scope.select = function() {
  if ($scope.loader == 0) {
    $scope.loader = 1; 
  } else {
    ++$scope.loader
  };
};

//character select mouseover functions=======
$scope.mikeyf = function() {
 
  if ($scope.charaimage != "images/mikey.png") {
    $scope.charaimage = "images/mikey.png";
  }
};

$scope.donf = function() {
 
  if ($scope.charaimage != "images/don.png") {
    $scope.charaimage = "images/don.png";
  }
};

$scope.raphf = function() {
 
  if ($scope.charaimage != "images/raph.png") {
    $scope.charaimage = "images/raph.png";
  }
};
$scope.leof = function() {
 
  if ($scope.charaimage != "images/leo.png") {
    $scope.charaimage = "images/leo.png";
  }
};
//=============================================


// $scope.character = [
//     {
//       name: 'decaf',
//       roastLevel: 8,
//       origin: 'South America',
//       image: "images/coffee1.jpg",
//       showPuppy: false,
//       price: 3,
//       quantity: 0
//     },
//     {
//       name: 'espresso',
//       roastLevel: 6,
//       origin: 'Hawaii',
//       image: "images/coffee2.jpg",
//       showPuppy: false,
//       price: 10,
//       quantity: 1000
//     },
//     {
//       name: 'double shot of espresso',
//       roastLevel: 6,
//       origin: 'Hawaii',
//       image: "images/coffee3.jpg",
//       price: 20,
//       quantity: 24 
//     },
//     {
//       name: 'cappuccino',
//       roastLevel: 6,
//       origin: 'Hawaii',
//       image: "images/coffee3.jpg",
//       price: 7,
//       quantity: 0
//     }
//   ]


}); //end of controller