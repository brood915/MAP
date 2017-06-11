import angular from 'angular';


export default function dragAndDropDirective(dragAndDropService) {
    return function (scope, element, attrs) {
        let el = element[0]; //get the div container of each book
        el.draggable = true; //make it draggable

        function isAfter(a, b) { //a = dragged target. b = dragenter target.
            let current = a;
            while(current){
                current = current.previousSibling; //set current equal to its previous sibling node
                if (current === b) { //compare it with the dragenter target
                    return true; // This means the dragged target was originally below the dragenter target
                }
            }
            return false; //this means the dragged target was originally above the dragenter target
        }

        el.addEventListener('dragstart', function () {
            dragAndDropService.dragged = this.id; //needed as each instance of this directive has different scopes
            this.classList.add('drag'); 
            document.getElementById('selectOptions').classList.add('hide'); //hide sortBy options when dragged
        });

        el.addEventListener('dragenter', function (event) {
            let current = document.getElementById(dragAndDropService.dragged); //get the element being dragged
            if (event.target.classList.contains('bookList')) {//To disregard text nodes inside the container
                if (isAfter(current, event.target)) { //current changes automatically as it dragenters different nodes
                    event.target.parentNode.insertBefore(current, event.target); //insert above target
                } else {
                    event.target.parentNode.insertBefore(current, event.target.nextSibling); //insert below target or same position
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