function showMessage(message) 
{
    alert(message);
}

function moveButton(button) 
{
    const buttonRect = button.getBoundingClientRect();
    const randomX = Math.random() * (window.innerWidth - buttonRect.width);
    const randomY = Math.random() * (window.innerHeight - buttonRect.height);
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
