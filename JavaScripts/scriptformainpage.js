function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.querySelector(".main-content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.querySelector(".main-content").style.marginLeft = "0";
}

let currentColumn = '';

function addTask(columnId) {
    currentColumn = columnId;
    document.getElementById("taskModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("taskModal").style.display = "none";
}

function saveTask() {
    const taskName = document.getElementById("taskName").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskTime = document.getElementById("taskTime").value;

    if (taskName && taskDate && taskTime) {
        const taskList = document.getElementById(currentColumn);
        const taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.innerHTML = `
            <span>${taskName} - ${taskDate} ${taskTime}</span>
            <div class="task-item-buttons">
                <button class="move-left-btn">←</button>
                <button class="move-right-btn">→</button>
                <button class="delete-task-btn">Sil</button>
            </div>
        `;
        taskList.appendChild(taskItem);

        closeModal();

        // Silme butonuna event ekleniyor
        taskItem.querySelector(".delete-task-btn").addEventListener("click", function() {
            taskItem.remove();
        });

        // Sağa ve sola taşıma butonlarına event ekleniyor
        taskItem.querySelector(".move-left-btn").addEventListener("click", function() {
            moveTask(taskItem, "left");
        });

        taskItem.querySelector(".move-right-btn").addEventListener("click", function() {
            moveTask(taskItem, "right");
        });
    }
}

// Görevi sağa/sola taşımak için fonksiyon
function moveTask(taskItem, direction) {
    const parentColumn = taskItem.parentElement;
    let targetColumnId;

    if (direction === "left") {
        if (parentColumn.id === "baslangic") targetColumnId = "atanmamis";
        else if (parentColumn.id === "yapilmakta") targetColumnId = "baslangic";
        else if (parentColumn.id === "zamani") targetColumnId = "yapilmakta";
        else if (parentColumn.id === "tamamlanmis") targetColumnId = "zamani";
    } else if (direction === "right") {
        if (parentColumn.id === "atanmamis") targetColumnId = "baslangic";
        else if (parentColumn.id === "baslangic") targetColumnId = "yapilmakta";
        else if (parentColumn.id === "yapilmakta") targetColumnId = "zamani";
        else if (parentColumn.id === "zamani") targetColumnId = "tamamlanmis";
    }

    if (targetColumnId) {
        document.getElementById(targetColumnId).appendChild(taskItem);
    }
}

// Event Listenerlar
document.getElementById('closebtn').addEventListener('click', closeNav);
document.getElementById('openbtn').addEventListener('click', openNav);
document.getElementById('add-task-btn-atanmamis').addEventListener('click', () => addTask('atanmamis'));
document.getElementById('add-task-btn-baslangic').addEventListener('click', () => addTask('baslangic'));
document.getElementById('add-task-btn-yapilmakta').addEventListener('click', () => addTask('yapilmakta'));
document.getElementById('add-task-btn-zamani').addEventListener('click', () => addTask('zamani'));
document.getElementById('add-task-btn-tamamlanmis').addEventListener('click', () => addTask('tamamlanmis'));
document.getElementById('savebtn').addEventListener('click', saveTask);
document.getElementById('closbtn').addEventListener('click', closeModal);
