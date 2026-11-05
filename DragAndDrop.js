const draggables = document.querySelectorAll('.box');
const dropzones = document.querySelectorAll('.droppable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.classList.add('draggableFormat');
        console.log(`Started dragging: ${event.target.id}`);
    });

    draggable.addEventListener('dragend', (event) => {
        event.target.classList.remove('draggableFormat');
        console.log(`Ended dragging: ${event.target.id}`);
    });
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    dropzone.addEventListener('dragenter', (event) => {
        event.preventDefault();
        event.currentTarget.style.backgroundColor = '#e0e0e0';
    });

    dropzone.addEventListener('dragleave', (event) => {
        event.currentTarget.style.backgroundColor = '#ffffff';
    });

    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        event.currentTarget.style.backgroundColor = '#ffffff';

        const draggedId = event.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);

        if (draggedElement) {
            event.currentTarget.appendChild(draggedElement);
            console.log(`Dropped ${draggedId} into ${event.currentTarget.id}`);
        }
    });
});
