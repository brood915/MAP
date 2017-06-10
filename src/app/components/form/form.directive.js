import controller from './form.controller';

export default function formDirective () {
  return {
    template: require('./form.html'),
    controller,
    controllerAs: 'form',
    replace: true,
    scope: {}
  }
};


