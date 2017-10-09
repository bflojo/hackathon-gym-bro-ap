var app = angular.module("gymBroApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "homeController"
        })

        // .state("users", {
        //     url: '/users',
        //     templateUrl: "./views/users.html",
        //     controller: "userController"
        // })

        // .state("usersNew", {
        //     url: '/users/new',
        //     templateUrl: "./views/user.html",
        //     controller: "userController"
        // })

        // .state("usersShow", {
        //     url: '/users/:id',
        //     templateUrl: "./views/user.html",
        //     controller: "userController"
        // })

        // .state("userUpdate", {
        //     url: '/users/:id/edit',
        //     templateUrl: "./views/users-form.html",
        //     controller: "userController"
        // })

        .state("beginners", {
            url: '/beginners',
            templateUrl: "./views/beginners.html",
            controller: "beginnerController"
        })

        .state("beginnersNew", {
            url: '/beginners/new',
            templateUrl: "./views/beginners-form.html",
            controller: "beginnerController"
        })
        .state("beginnerShow", {
            url: '/beginners/:id',
            templateUrl: "./views/beginner.html",
            controller: "beginnerController"
        })

        .state("beginnersUpdate", {
            url: '/beginners/:id/edit',
            templateUrl: "./views/beginners-form.html",
            controller: "beginnerController"
        })
        .state("intermediates", {
            url: '/intermediates',
            templateUrl: "./views/intermediates.html",
            controller: "intermediateController"
        })

        .state("intermediatesNew", {
            url: '/intermediates/new',
            templateUrl: "./views/intermediates-form.html",
            controller: "intermediateController"
        })
        .state("intermediateShow", {
            url: '/intermediates/:id',
            templateUrl: "./views/intermediate.html",
            controller: "intermediateController"
        })

        .state("intermediatesUpdate", {
            url: '/intermediate/:id/edit',
            templateUrl: "./views/intermediates-form.html",
            controller: "intermediateController"
        })

        .state("advances", {
            url: '/advances',
            templateUrl: "./views/advances.html",
            controller: "advanceController"
        })

        .state("advancesNew", {
            url: '/advances/new',
            templateUrl: "./views/advances-form.html",
            controller: "advanceController"
        })
        .state("advanceShow", {
            url: '/advances/:id',
            templateUrl: "./views/advance.html",
            controller: "advanceController"
        })

        .state("advancesUpdate", {
            url: '/advances/:id/edit',
            templateUrl: "./views/advances-form.html",
            controller: "advanceController"
        })
}) 