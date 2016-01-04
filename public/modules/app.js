(function() {

    'use strict'

    angular.module('main', ['ui.bootstrap', 'ui.router', 'ngResource', 'login', 'interview', 'hint', 'ngAnimate', 'CustomFilter'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            // remove hash
            $locationProvider.html5Mode(true);

            // set default router
            $urlRouterProvider.otherwise('/question')

            // provide router
            $stateProvider
                .state('question', {
                    url: '/question?qQuestion&qCompany&pSort&page&psize&psorta&befored&afterd&qTag',
                    templateUrl: 'modules/question/list.html',
                    controller: 'QuestionCtrl as question',
                    cache: false
                })
                .state('new', {
                    url: '/new',
                    templateUrl: 'modules/question/new.html',
                    controller: 'NewInterviewCtl'
                })
                .state('interview', {
                    url: '/interview?iClient&iCandidate&iType&pSort&page&psize&psorta&befored&afterd',
                    template: '<interview-panel></interview-panel>',
                    cache: false
                })
                .state('newUser', {
                    url: '/user/new',
                    templateUrl: 'modules/login/new.html',
                    controller: 'SignCtl'
                })
                .state('questionDetail', {
                    url: '/question/{qid}',
                    templateUrl: 'modules/question/detail.html',
                    controller: 'QuestionDetailCtl'
                })
                .state('comments', {
                    url: '/comments/:qid',
                    templateUrl: 'modules/comments/comments.html',
                    controller: 'CommentsCtrl as comments'
                })
                
            // add resource

        })
        .factory('Interview', function($resource) {
            return $resource('/api/it/:id', {
                id: '@id'
            }, {
                get: {
                    method: 'GET',
                    params: {
                        id: '@id'
                    }
                }
            })
        })
})()
