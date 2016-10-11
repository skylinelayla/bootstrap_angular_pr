angular
      .module('app',[])
      .controller("MyController",MyController)

    function MyController($scope) {

        $scope.clock={
            now: new Date()
        };
       
        var updateClock = function() {

          $scope.clock.now=new Date()
        };
        setInterval(function() {
          $scope.$apply(updateClock);
        }, 1000);
        updateClock();
      };


