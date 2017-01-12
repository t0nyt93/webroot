angular.module('routerApp')
    .controller( 'HomeCtrl',[
        '$scope',
        function($scope){
            $scope.message = 'HelloWorld from the HomeCtrl!';
        }]);
