document.addEventListener("DOMContentLoaded", () => {
    let draggedCard = null;

    // Function to add drag events to a card
    function addDragEvents(card) {
        card.addEventListener("dragstart", (e) => {
            draggedCard = card;
            card.classList.add("dragging");
            e.dataTransfer.effectAllowed = "move";
            setTimeout(() => (card.style.opacity = "0.5"), 0);
        });

        card.addEventListener("dragend", () => {
            draggedCard.style.opacity = "1";
            draggedCard.classList.remove("dragging");
            draggedCard = null;
        });
    }

    // Apply drag events to all existing cards
    document.querySelectorAll(".card").forEach(addDragEvents);

    // Enable drop functionality in columns
    document.querySelectorAll(".cards").forEach((cardsContainer) => {
        cardsContainer.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
        });

        cardsContainer.addEventListener("drop", () => {
            if (draggedCard) {
                cardsContainer.appendChild(draggedCard);
                draggedCard.classList.remove("dragging");
            }
        });
    });
});

// ✅ **Fix: Newly Added Tasks Are Draggable**
function addTask(columnId) {
    const taskText = prompt("Enter the task:").trim();
    if (taskText) {
        const column = document.getElementById(columnId).querySelector(".cards");
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.draggable = true;
        newCard.textContent = taskText;
        column.appendChild(newCard);

        // **Apply drag events to new task**
        addDragEvents(newCard);
    }
}
