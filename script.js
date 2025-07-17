// Inicializar la librería AOS (Animate On Scroll)
// Esto debe ir en un archivo de script separado o al final de la etiqueta body.
AOS.init({
    // Configuración global:
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 

    // Configuración que se puede anular por elemento:
    offset: 120, // desplazamiento (en px) desde el punto de disparo original
    delay: 0, // valores de 0 a 3000, con paso de 50ms
    duration: 1000, // valores de 0 a 3000, con paso de 50ms
    easing: 'ease-in-out', // easing predeterminado para las animaciones AOS
    once: true, // si la animación debe ocurrir solo una vez, al desplazarse hacia abajo
    mirror: false, // si los elementos deben animarse al pasar por ellos
    anchorPlacement: 'top-bottom', // define qué posición del elemento con respecto a la ventana debe activar la animación
});

// Aquí puedes añadir otros scripts personalizados, por ejemplo:
// - Desplazamiento suave para navegadores antiguos (AOS lo proporciona implícitamente)
// - Elementos interactivos (por ejemplo, un modal de producto, funcionalidad de añadir al carrito)
// - Carga de contenido dinámico
// Dado que el sitio actual es estático, AOS es el uso principal de este archivo.