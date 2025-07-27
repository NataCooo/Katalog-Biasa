const items = document.querySelectorAll('.item img');
const overlay = document.getElementById('imageOverlay');
const zoomedImage = document.getElementById('zoomedImage');

items.forEach(img => {
  img.addEventListener('click', () => {
    zoomedImage.src = img.src;
    overlay.classList.add('show');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
  zoomedImage.src = "";
});
