import angular from 'angular';
import trashDirective from './trash.directive';
import './trash.scss';


export default angular.module('trashModule', [])
    .directive('trash', trashDirective)
    .name;