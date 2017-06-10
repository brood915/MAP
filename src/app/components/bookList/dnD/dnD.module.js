import angular from 'angular';
import dragAndDropDirective from './dnD.directive';
import dragAndDropService from './dnD.service';

export default angular
    .module('dragAndDropModule', [])
    .directive('dragAndDrop', dragAndDropDirective)
    .service('dragAndDropService', dragAndDropService)
    .name;