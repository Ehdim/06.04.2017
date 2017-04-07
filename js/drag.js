function Draggable(container) {
    var self = this;
    var source;
    self.container = document.querySelector(container);
     self.myfunc=function(a, b) {
    if (a.parentNode == b.parentNode) {
      for ( goturulen = a;goturulen;  goturulen =goturulen.previousSibling) {
        if (goturulen === b) { 
          return true;
        }
      }
    }else{
    return false;}
  }  
    self.container.addEventListener('dragover', function(ev) {
        ev.preventDefault();
    });
    self.container.addEventListener('dragenter', function(event) {
        event.preventDefault();
        var id = event.dataTransfer.getData("id");
        // self.container.appendChild(document.getElementById(id));
         if (self.myfunc(source, event.target)) {
      event.target.parentNode.insertBefore(source, event.target);
    }
    else {
      event.target.parentNode.insertBefore(source, event.target.nextSibling);
    }
    });


    for (var i = 0; i < self.container.childElementCount; i++) {
        self.container.children[i].setAttribute('draggable', true);
        self.container.children[i].id = 'item_' + (i + 1);

        self.container.children[i].addEventListener('dragstart', function(event) {
            event.dataTransfer.setData("id", event.target.id);
              source = event.target;
              event.dataTransfer.effectAllowed = 'move';
              console.log(event.dataTransfer.effectAllowed)
        });
    }
}