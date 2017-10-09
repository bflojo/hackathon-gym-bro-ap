angular
    .module("gymBroApp")
    .controller("advanceController", function($scope, $stateParams, $state, advanceService) {

        if($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
            $scope.heading = "Advance Signup"
            $scope.submitButton = true;
            $scope.saveButton = false;


            advanceService.getAdvanceById($stateParams.id, function(advance) {
                $scope.advance = advance;
                console.log($scope.advance)
            })
        }
        else {
            $scope.heading = "Update Posting"
            $scope.submitButton = false;
            $scope.saveButton = true;

            advanceService.getAdvanceById($stateParams.id, function (advance) {
                $scope.advance = advance;
                console.log($scope.advance);
            })
        }

        advanceService.getAdvance(function (response) {
            $scope.advance = response
        })

        $scope.saveAdvance = function() {
            advanceService.updateAdvance($scope.advance)
        }

        $scope.deleteAdvance = function (advance) {
            advanceService.deleteAdvanced($stateParams.id)
        }
    })