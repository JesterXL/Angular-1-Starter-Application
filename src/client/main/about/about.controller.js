(function () {

	angular.module("main.about")
		.controller("fsAboutController", fsAboutController);

	/* @ngInject */
    function fsAboutController($scope, $http)
    {
        var vm = this;
        vm.title = "Loading...";
        vm.content = "";
    }
})();
