document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('swap').addEventListener('click', function() {
    const img1 = document.getElementById('first-image');
    img1.src = img1.src.includes('picture.jpg') ? "https://images.unsplash.com/photo-1738253145888-e8f1e20ab05b" : 'picture.jpg';
});

document.getElementById('swap').addEventListener('click', function() {
    const img2 = document.getElementById('second-image');
    img2.src = img2.src.includes('picture.jpg') ? "https://images.unsplash.com/photo-1738253145888-e8f1e20ab05b" : 'picture.jpg';
});
