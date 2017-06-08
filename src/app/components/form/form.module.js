import angular from 'angular';
import formDirective from './form.directive';
import '../../../assets/style/form.scss';


export default angular.module('formModule', [])
    .directive('addForm', formDirective)
    .name;