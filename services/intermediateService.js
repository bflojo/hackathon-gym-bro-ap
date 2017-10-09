angular
.module("gymBroApp")
.service("intermediateService", function ($http, $state) {
    var _intermediates = []
    var _intermediateId = 3;

    var Intermediate = function(id, firstName, lastName, gender, age, zip, gym, daysAttending, timeAttending, exerciseType, goals) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.zip = zip;
        this.gym = gym;
        this.daysAttending = daysAttending;
        this.timeAttending = timeAttending;
        this.exerciseType = exerciseType;
        this.goals = goals;
    }

    this.getIntermediate = function (cb) {
        if(_intermediates.length == 0) {
            $http.get("../db/intermediates.json")
                .success(function (response) {
                    _intermediates = response
                    cb(_intermediates)
                })
                .error(function (error) {
                    console.log(error);
                })
        }
        else {
            cb(_intermediates)
        }
    }

    this.getIntermediateById = function(id, cb) {
        if (id == "" || id == undefined || id == null) {
            var intermediate = {
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
            cb(intermediate)
        }
        else {
            for (var i = 0; i <  _intermediates.length; i++) {
                if (id == _intermediates[i].id) {
                    cb(_intermediates[i])
                }
            }
        }
    }


    this.addIntermediate = function (intermediate) {
        intermediate.id = _intermediateId++
        _intermediates.unshift(intermediate)
        $state.go("intermediateShow", { id: intermediate.id })
    }

    this.updateIntermediate = function (intermediate) {
        for (var i = 0; i < _intermediates.length; i++) {
            if(_intermediates[i].id == intermediate.id)
            _intermediates.splice(i, 1, intermediate)
            $state.go("intermediateShow", {id: intermediate.id })
            }
            this.deleteIntermediate = function (intermediate) {
                for( var i = 0; i < _intermediates.length; i++) {
                    if(_intermediates[i].id == intermediate) {
                        _intermediates.splice(i, 1)
                        $state.go("intermediates")
                    }
                }
            }
    }
})