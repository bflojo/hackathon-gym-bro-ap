angular
.module("gymBroApp")
.service("beginnerService", function ($http, $state) {
    var _beginners = []
    var _beginnerId = 3;

    this.getBeginner = function (cb) {
        if(_beginners.length == 0) {
            $http.get("../db/beginners.json")
                .success(function (response) {
                    _beginners = response
                    cb(_beginners)
                })
                .error(function (error) {
                    console.log(error);
                })
        }
        else {
            cb(_beginners)
        }
    }

    this.getBeginnerById = function(id, cb) {
        if (id == "" || id == undefined || id == null) {
            var beginner = {
                firstName: "",
                lastName: "",
                gender: "",
                age: "",
                zip: "",
                gym: "",
                daysAttending: "",
                timeAttending: "",
                exerciseType: "", 
                goals: "",                   
            }
            cb(beginner)
        }
        else {
            for (var i = 0; i <  _beginners.length; i++) {
                if (id == _beginners[i].id) {
                    cb(_beginners[i])
                }
            }
        }
    }

    this.addBeginner = function (beginner) {
        beginner.id = _beginnerId++
        _beginners.unshift(beginner)
        $state.go("beginnerShow", {id: beginner.id })
    }

    this.updateBeginner = function (beginner) {
        for (var i = 0; i < _beginners.length; i++) {
            if(_beginners[i].id == beginner.id)
            _beginners.splice(i, 1, beginner)
            $state.go("beginnerShow", {id: beginner.id })
            }
            this.deleteBeginner = function (beginner) {
                for( var i = 0; i < _beginners.length; i++) {
                    if(_beginners[i].id == beginner) {
                        _beginners.splice(i, 1)
                        $state.go("beginners")
                    }
                }
            }
    }
})