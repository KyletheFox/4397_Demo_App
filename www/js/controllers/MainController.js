app.controller('MainController', ['$scope', function($scope) {
	$scope.default = "Hello Everyone";
	$scope.display = 0;			// Counter for switching displays
	
	// Determines which content to load
	$scope.hideOpen = 0;
	$scope.hideTech = 1;
	$scope.hideAcad = 1;
	$scope.hideVolu = 1;
	$scope.hideLogIn = 1;
	
	$scope.changeDis = function(newDisp) {
		$scope.display = newDisp;
		console.log("newDisp: " + newDisp);
		console.log("Scope.display: " + $scope.display);

		//  Display Academics.php
		if (newDisp == 1) {
			$scope.hideOpen = 1;
			$scope.hideAcad = 1;
			$scope.hideTech = 0;
			$scope.hideVolu = 1;
			$scope.hideLogIn = 1;
		}

		// Display techProj
		else if (newDisp == 2) {
			$scope.hideOpen = 1;
			$scope.hideAcad = 0;
			$scope.hideTech = 1;
			$scope.hideVolu = 1;
			$scope.hideLogIn = 1;
		}

		// Display volProj
		else if (newDisp == 3 ) {
			$scope.hideOpen = 1;
			$scope.hideTech = 1;
			$scope.hideAcad = 1;
			$scope.hideVolu = 0;
			$scope.hideLogIn = 1;
		}

		// Display Log In Screen
		else {
			$scope.hideOpen = 1;
			$scope.hideTech = 1;
			$scope.hideAcad = 1;
			$scope.hideVolu = 1;
			$scope.hideLogIn = 0;
		}
	};
}]);