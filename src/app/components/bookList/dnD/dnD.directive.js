import angular from 'angular';


export default function dragAndDropDirective(dragAndDropService) {
    return function (scope, element, attrs) {
        let el = element[0]; //get the div container of each book
        el.draggable = true; //make it draggable

        function isBefore(a, b) {
            for (let current = a; current; current = current.previousSibling) {
                if (current === b) {
                    return true;
                }
            }
            return false;
        }

        el.addEventListener('dragstart', function () {
            dragAndDropService.dragged = this.id; //needed as each instance of this directive has different scopes
            this.classList.add('drag'); 
        });

        el.addEventListener('dragenter', function (event) {
            let current = document.getElementById(dragAndDropService.dragged); //get the element being dragged
            if (event.target.classList.contains('bookList')) {
                //To disregard text nodes inside the container
                if (isBefore(current, event.target)) {
                    event.target.parentNode.insertBefore(current, event.target); //insert above target
                } else {
                    event.target.parentNode.insertBefore(current, event.target.nextSibling); //insert below target
                }
            }
        });

        el.addEventListener('dragover', function (e) {
            e.preventDefault(); //makes siblings droppable
        });

        el.addEventListener('dragend', function (event) {
            this.classList.remove('drag');
        });
    };
}