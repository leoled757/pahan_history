function loadText(file, targetId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll('.content').forEach(el => el.style.display = 'none'); 
            const content = document.getElementById(targetId);
            content.innerText = data;
            content.style.display = 'block';
        })
        .catch(error => console.error('Помилка завантаження:', error));
}