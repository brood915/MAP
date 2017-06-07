import angular from 'angular';
import AppCtrl from './app.controller';

export default function app_directive () {
  return {
    template: require('./app.html'),
    controller: AppCtrl,
    controllerAs: 'app'
  }
};



    