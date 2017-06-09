import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/style/main.scss';
import components from './components/components.module';
import appDirective from './app.directive';
import 'drag-drop-webkit-mobile'; //polyfill for mobiles

angular.module('app', [components])
  .directive('app', appDirective)