angular
.module("gymBroApp")
.controller("intermediateController", function($scope, $stateParams, $state, intermediateService) {

    if($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
        $scope.heading = "Intermediate Signup"
        $scope.submitButton = true;
        $scope.saveButton = false;


        intermediateService.getIntermediateById($stateParams.id, function(intermediate) {
            $scope.intermediate = intermediate;
            console.log($scope.intermediate)
        })
    }
    else {
        $scope.heading = "Update Posting"
        $scope.submitButton = false;
        $scope.saveButton = true;

        intermediateService.getIntermediateById($stateParams.id, function (intermediate) {
            $scope.intermediate = intermediate;
            console.log($scope.intermediate);
        })
    }

    intermediateService.getIntermediate(function (response) {
        $scope.intermediate = response
    })

    $scope.saveIntermediate = function() {
        intermediateService.updateIntermediate($scope.intermediate)
    }

    $scope.deleteIntermediate = function (intermediate) {
        intermediateService.deleteIntermediate($stateParams.id)
    }
})