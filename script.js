var gameApp = angular.module('gameApp',[]);
 

gameApp.controller("ticController", function ($scope){

//variables ==================================
// var TTTRef = new Firebase("https://tmnt-ttt.firebaseIO.com") ;

// $scope.remoteGameContainer = $firebase(new Firebase("https://tmnt-ttt.firebaseIO.com" + '/remoteGameContainer')) ;
// $scope.remoteTurn = $firebase(new Firebase("https://nickmro-tic-tac-toe.firebaseio.com/remoteTurn"));
    
var board
$scope.board = [" ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "];
$scope.clicked = 0;
$scope.loader = 0;
$scope.charaimage = "images/leo.png",
$scope.charnum = 0;
$scope.lastOindex = -1
$scope.p1future = 0
$scope.p2future = 0
$scope.playerwin = 0
$scope.playerwin2 = 0
$scope.p1fcheck = 0
$scope.p2fcheck = 0


$scope.gameContainer = {
    cellListArray: $scope.board,    
  } ;


// turn counter and image placer==============================
$scope.clicker = function(b) {
  if($scope.clicked > 1) {
    if ($scope.board[b] === " " ){
      $scope.clicked++;
      // console.log($scope.clicked);
        if ($scope.clicked % 2 === 0) { 
        $scope.board[b] = 'O';
        $scope.lastOindex = b
        $scope.checkrow();
        $scope.checkcol();
        $scope.checkdiag();
        
        mattack1()
      } else {
        $scope.board[b] = 'X';
        $scope.checkrow();
        $scope.checkcol();
        $scope.checkdiag();
        
        dattack1();
           
      }
    }
  } else {
      $scope.clicked++;
      if ($scope.clicked === 0) {
          $scope.p1future = b;
          console.log($scope.p1future)
      } else {
        $scope.p1future = $index;
        console.log($scope.p1future)
      }
  }
};

// alternate win solution
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


// wincheck solution===================================

  $scope.checkrow = function(){
    console.log('1st ok')
    var rl = 4
    for (i=0; i < (rl*rl); i += rl) {
        if ($scope.board[i] === $scope.board[i+1] && $scope.board[i] === $scope.board[i+2] && $scope.board[i] === $scope.board[i+3] && ($scope.board[i] != " ")) {
          $scope.p1fcheck = i
          $scope.p2fcheck = i
          $scope.futurewin();
          $scope.youwin();
        }
        else {
          console.log('2nd ok')
        }
    }; 
  };

  $scope.checkcol = function(){
    var rl = 4
    for (i=0; i<rl; ++i) {
      if ($scope.board[i] === $scope.board[i+rl] && $scope.board[i] === $scope.board[i+(2*rl)] && $scope.board[i] === $scope.board[i+(3*rl)] && ($scope.board[i] != " ")) {
          $scope.youwin();
        } else {
        }
      }; 
    }; 

    $scope.checkdiag = function() {
      var rl = 4
      for (var i = 0; i < rl; ++i) {
        if ( i === 0 || i === 3) {
        if ($scope.board[i] === $scope.board[i+(rl+1)] && $scope.board[i] === $scope.board[(i+2)+(2*rl)] && $scope.board[i] === $scope.board[(i+3)+(3*rl)] && ($scope.board[i] != " ")) {
          $scope.youwin();
         } else if ($scope.board[i] === $scope.board[2*i] && $scope.board[i] === $scope.board[3*i] && $scope.board[i] === $scope.board[4*i] && (i != 0) && ($scope.board[i] != " ")) {
          $scope.p1fcheck = i
          $scope.p2fcheck = i
          $scope.youwin();
        } else {
        }
      };
    };
    };

$scope.youwin = function() {
  

  ++$scope.playerwin;
   var sfx = new Audio('images/cow.mp3')
   sfx.play()
 
};

$scope.futurewin = function() {
  if ($scope.p1check === $scope.p1future) {
    
    ++$scope.playerwin2;
   
  }else if ($scope.p2check === $scope.p2future) {
    ++$scope.playerwin2;  
  }
}


//loading screen select click function=====================
$scope.select = function() {
  if ($scope.loader === 0) {
    $scope.loader = 1; 
  } else {
    ++$scope.loader
  };
};

$scope.video = function() {
    setTimeout(function(){++$scope.loader},14000);
    dstand();
}



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


// Calling init on video timer===============================

window.onload = $scope.video();


// $scope.remoteGameContainer.$bind($scope, "gameContainer");
// $scope.remoteTurn.$bind($scope, "turn");

//      $scope.$watch('gameContainer', function() {
//     console.log('gameCountainer changed!') ;



}); //end of controller

