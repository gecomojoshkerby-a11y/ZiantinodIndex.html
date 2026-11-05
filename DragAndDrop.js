const draggableElements = document.querySelectorAll('.box');
const droppableElements = document.querySelectorAll('.droppable');

draggableElements.forEach(element => {
    element.addEventListener('dragstart', (drgStart) => {
        drgStart.dataTransfer.setData('text/plain', drgStart.target.id);
        drgStart.currentTarget.classList.add('draggableFormat');
        console.log('dragstart activated for:', drgStart.target.id);
    });

    element.addEventListener('dragend', (drgEnd) => {
        drgEnd.currentTarget.classList.remove('draggableFormat');
    });
});

droppableElements.forEach(element => {
    element.addEventListener('dragover', (drgOverEvt) => {
        drgOverEvt.preventDefault();
    });

    element.addEventListener('drop', (drpEvt) => {
        drpEvt.preventDefault();
        const droppedElementId = drpEvt.dataTransfer.getData('text/plain');
        const draggedNode = document.getElementById(droppedElementId);

        if (draggedNode) {
            drpEvt.currentTarget.appendChild(draggedNode);
            console.log('Dropped element:', droppedElementId, 'into container:', drpEvt.currentTarget.id);
        }
    });
});
