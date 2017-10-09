angular
    .module("gymBroApp")
    .service("advanceService", function ($http, $state) {
        var _advances = []
        var _advanceId = 3;

        this.getAdvance = function (cb) {
            if (_advances.length == 0) {
                $http.get("../db/advances.json")
                    .success(function (response) {
                        _advances = response
                        cb(_advances)
                    })
                    .error(function (error) {
                        console.log(error);
                    })
            }
            else {
                cb(_advances)
            }
        }

        this.getAdvanceById = function (id, cb) {
            if (id == "" || id == undefined || id == null) {
                var advance = {
                    firstName: "",
                    lastName: "",
                    gender: "",
                    age: "",
                    zip: "",
                    gym: "",
                    daysAttending: "",
                    timeAttending: "",
                    exerciseType: "",
                }
                cb(advance)
            }
            else {
                for (var i = 0; i < _advances.length; i++) {
                    if (id == _advances[i].id) {
                        cb(_advances[i])
                    }
                }
            }
        }

        this.addAdvance = function (advance) {
            advance.id = _advanceId++
            _advances.unshift(advance)
            $state.go("advanceShow", { id: advance.id })
        }

        this.updateAdvance = function (advance) {
            for (var i = 0; i < _advances.length; i++) {
                if (_advances[i].id == advance.id)
                    _advances.splice(i, 1, advance)
                $state.go("advanceShow", { id: advance.id })
            }
            this.deleteAdvance = function (advance) {
                for (var i = 0; i < _advances.length; i++) {
                    if (_advances[i].id == advance) {
                        _advances.splice(i, 1)
                        $state.go("advances")
                    }
                }
            }
        }
    })