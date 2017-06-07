import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/style/main.scss';
import common from './common/common.module.js';
import app_directive from './app.directive';

angular.module('app', [])
  .directive('app', app_directive);