routes.$inject = ['$routeProvider', '$locationProvider'];

export default function routes($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            template: require('./list.html'),
            controller: 'ListController',
        })
        .when('/add', {
            template: require('./add.html'),
            controller: 'AddController'
        });

    $locationProvider.html5Mode(true);
}