angular.module("myApp", []);

angular.module("myApp", [])
    .controller("userController", 
        function($scope) {
            $scope.nome = "Raffaele";
            $scope.cognome = "Ficcadenti";
    });