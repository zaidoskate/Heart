const heart = document.querySelector('.heart');
const message = document.querySelector('.megustas');

heart.addEventListener('click', () => {
    message.style.opacity = '1';

    setTimeout(() => {
        message.style.opacity = '0';
    }, 2000);
});
