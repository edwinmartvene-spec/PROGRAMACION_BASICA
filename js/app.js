document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const idSeccion = this.getAttribute('href');
        document.querySelector(idSeccion).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});


document.querySelectorAll('.btn-info').forEach(boton => {
    boton.addEventListener('click', function() {
        const idInfo = this.getAttribute('data-target');
        const divInfo = document.getElementById(idInfo);
        
        if (divInfo.style.display === 'block') {
            divInfo.style.display = 'none';
            this.textContent = 'Ver más';
        } else {
            divInfo.style.display = 'block';
            this.textContent = 'Ver menos';
        }
    });
});


window.addEventListener('scroll', () => {
    let secciones = document.querySelectorAll('section');
    let links = document.querySelectorAll('nav a');
    
    secciones.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.style.backgroundColor = '';
                if (link.getAttribute('href') === '#' + id) {
                    link.style.backgroundColor = '#2a5298';
                }
            });
        }
    });
});
