const draggables = document.querySelectorAll('.box');
const dropzones = document.querySelectorAll('.droppable');

// 1. Handle Dragging State
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        // Store the ID of the dragged element
        event.dataTransfer.setData('text/plain', event.target.id);
        
        // Visual feedback when dragging starts
        event.target.classList.add('draggableFormat');
        console.log(`Started dragging: ${event.target.id}`);
    });

    draggable.addEventListener('dragend', (event) => {
        // Remove visual feedback when drag ends
        event.target.classList.remove('draggableFormat');
        console.log(`Ended dragging: ${event.target.id}`);
    });
});

// 2. Handle Dropzones
dropzones.forEach(dropzone => {
    // Required: prevent default to allow a drop event
    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    // Optional visual highlight when hovering over a dropzone
    dropzone.addEventListener('dragenter', (event) => {
        event.preventDefault();
        event.currentTarget.style.backgroundColor = '#e0e0e0';
    });

    dropzone.addEventListener('dragleave', (event) => {
        event.currentTarget.style.backgroundColor = '#ffffff';
    });

    // Handle the actual drop
    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        
        // Reset background color
        event.currentTarget.style.backgroundColor = '#ffffff';

        // Retrieve the dragged element's ID
        const draggedId = event.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);

        // Ensure element exists before appending using currentTarget
        if (draggedElement) {
            event.currentTarget.appendChild(draggedElement);
            console.log(`Successfully dropped ${draggedId} into ${event.currentTarget.id}`);
        }
    });
});
