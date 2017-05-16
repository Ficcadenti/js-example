angular.module('contactsMgr', [])

.directive("titolo1", function() { 
    return { 
        restrict: "E", 
        template: "<h1>Questo è un titolo</h1>" 
    }; 
  })

.filter('truncate', function(){
    return function(input, limit){
        return (input.length > limit) ? input.substr(0, limit)+'…' : input;
    };
})

.controller('AppCtl', function($scope, $filter, jsonFilter)
{
	$scope.config={"appname": "Esempio 04 - I Filtri"};
	$scope.missioni = [{
			nome: 'Swift',
            lancio: '743634345123'
        },
        {
        	nome: 'Nustar',
            lancio: '943634345438'
        },
        {
        	nome: 'Fermi',
            lancio: '643634245436'
        },
        {
        	nome: 'Pamela',
            lancio: '593134345436'
        }];

    console.log(jsonFilter($scope.missioni));   
});