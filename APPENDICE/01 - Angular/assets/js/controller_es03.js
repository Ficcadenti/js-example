function AppCtrl($scope){

	$scope.clickHandler = function(){
		//window.alert('Clicked!');
        $scope.isHidden = !$scope.isHidden;
    };

	$scope.nome="Raffaele";
	$scope.cognome="Ficcadenti";

	$scope.contacts = [
        {
            name: 'Valeria Greco',
            phone: '01234567890',
            email: 'valeria5.greco@gmail.com'
        },
        {
            name: 'Raffaele Ficcadenti',
            phone: '340-4020010',
            email: 'raffaele.ficcadenti@gmail.com'
        }
    ];

    $scope.styleDemo = function(){
	    if(!$scope.styler){
	        return;
	    }

	    return {
	        background: 'red',
	        fontWeight: 'bold'
	    };
	};
}