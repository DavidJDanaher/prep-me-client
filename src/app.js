import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiKit from 'uikit';
import kitIcons from 'uikit/dist/js/uikit-icons';

import otherView from './features/another-view/another-view.module.js';
import myComponent from './components/my-component/my-component.module.js';
import HomeViewController from './features/home.controller.js';

require('./resources/styles/app.style.scss');
uiKit.use(kitIcons);

export default angular.module('prep-me', [uiRouter, 'myComponent', 'AnotherViewModule'])
    .config(confgure)
    .controller('HomeViewController', HomeViewController);

function confgure($stateProvider) {
    $stateProvider
        .state('Dashboard', {
            url: '',
            template: require('./features/home.html'),
            controller: 'HomeViewController',
            controllerAs: 'homeVm'
        }).state('Feature', {
            url: '/otherFeature',
            template: require('./features/another-view/another-view.html'),
            controller: 'AnotherViewCtrl',
            controllerAs: 'anotherVm'
        });
}
