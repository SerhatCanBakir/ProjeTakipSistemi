document.getElementById('fileInput').addEventListener('change', function (event) {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    const files = event.target.files;

    Array.from(files).forEach((file, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${file.name}
            <button id="link-${index}" class="link">İlişkilendir</button>
            <button id="unlink-${index}" class="unlink">İlişkiyi Boz</button>
        `;
        fileList.appendChild(listItem);

        document.getElementById(`link-${index}`).addEventListener('click', function () {
            console.log(`Link button clicked for file: ${file.name}`);
        });

        document.getElementById(`unlink-${index}`).addEventListener('click', function () {
            console.log(`Unlink button clicked for file: ${file.name}`);
        });
    });
});
