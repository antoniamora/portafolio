const miNombre = document.getElementById('nombre');
const boton = document.getElementById('button');

boton.addEventListener('click', function() {
    const section1 = document.getElementById('seccion1');
    const section2 = document.getElementById('seccion2');
    section1.style.display = 'none';
    section2.style.display = 'flex';
    section2.style.backgroundColor = 'white';
    section2.style.height = '100vh';
    section2.style.width = '100vw';
});

function escribirComoMaquinaDeEscribir(elemento, texto, delay = 120) {
    let i = 0;
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            elemento.textContent += texto.charAt(i);
            i++;
            if (i === texto.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

function mostrarDescripcion() {
    const description = 'Antonia Mora';
    miNombre.textContent = '';
    escribirComoMaquinaDeEscribir(miNombre, description);
}

window.addEventListener('load', mostrarDescripcion);
