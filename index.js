






let accordions = document.querySelectorAll('.content-container');

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}
