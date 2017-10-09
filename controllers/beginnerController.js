angular
    .module("gymBroApp")
    .controller("beginnerController", function ($scope, $stateParams, $state, beginnerService) {

        if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
            $scope.heading = "Beginner Signup"
            $scope.submitButton = true;
            $scope.saveButton = false;


            beginnerService.getBeginnerById($stateParams.id, function (beginner) {
                $scope.beginner = beginner;
                console.log($scope.beginner)
            })
        }
        else {
            $scope.heading = "Update Posting"
            $scope.submitButton = false;
            $scope.saveButton = true;

            beginnerService.getBeginnerById($stateParams.id, function (beginner) {
                $scope.beginner = beginner;
                console.log($scope.beginner);
            })
        }

        beginnerService.getBeginner(function (response) {
            $scope.beginner = response
        })

        $scope.addBeginner = function () {
            beginnerService.addBeginner($scope.beginner)
        }

        $scope.saveBeginner = function () {
            beginnerService.updateBeginner($scope.beginner)
        }

        $scope.deleteBeginner = function (beginner) {
            beginnerService.deleteBeginner($stateParams.id)
        }
    })