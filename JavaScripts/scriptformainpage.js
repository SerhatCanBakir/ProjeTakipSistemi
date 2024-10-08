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
        taskItem.textContent = `${taskName} - ${taskDate} ${taskTime}`;
        taskList.appendChild(taskItem);

        closeModal();
    }
}

document.getElementById('closebtn').addEventListener('click',()=>closeNav());
    document.getElementById('openbtn').addEventListener('click',()=>openNav())
    document.getElementById('add-task-btn-atanmamis').addEventListener('click',()=>addTask('atanmamis'));
    document.getElementById('add-task-btn-baslangic').addEventListener('click',()=>addTask('baslangic'));
    document.getElementById('add-task-btn-yapilmakta').addEventListener('click',()=>addTask('yapilmakta'));
    document.getElementById('add-task-btn-zamani').addEventListener('click',()=>addTask('zamani'));
    document.getElementById('add-task-btn-tamamlanmis').addEventListener('click',()=>addTask('tamamlanmis'));
    document.getElementById('savebtn').addEventListener('click',()=>saveTask());
    document.getElementById('closbtn').addEventListener('click',()=>closeModal());