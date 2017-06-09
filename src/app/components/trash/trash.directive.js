export default function trashDirective (dragAndDropService) {
  return {
    template: require('./trash.html'),
    replace: true,
    scope: {},
    link: function (scope, element, attrs) {
     let el = element[0];

        el.addEventListener('dragstart', function() {
            dragAndDropService.trashDragged = true; //to let the dnD directive know it is trash
        });

        el.addEventListener ('dragenter', function () {
           dragAndDropService.remove = dragAndDropService.dragged;
        });
      
        el.addEventListener('dragleave', function() {
            dragAndDropService.remove = null;
        });

        el.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
    }
  };
}


