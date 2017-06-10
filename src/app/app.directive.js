import angular from 'angular';


export default function app_directive () {
  return {
    template: require('./app.html'),
    replace: true,
    scope: {}
  }
};


