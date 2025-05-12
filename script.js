document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('main section');
  
    // Muestra solo la sección con el id especificado
    function showSection(id) {
      sections.forEach(sec => {
        if (sec.id === id) {
          sec.classList.add('active');
          sec.classList.remove('hidden');
          sec.focus(); // mover foco para accesibilidad
        } else {
          sec.classList.add('hidden');
          sec.classList.remove('active');
        }
      });
    }
  
    // Listener para botones de navegación
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        showSection(target);
      });
    });
  
    // Manejo del envío de postal (simulado)
    const form = document.getElementById('form-postal');
    const mensaje = document.getElementById('mensaje-postal');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // no recargar la página
      const formData = new FormData(form);
      const img = formData.get('imagen');
  
      if (!img) {
        mensaje.textContent = 'Por favor, selecciona una imagen.';
        mensaje.classList.remove('hidden');
        return;
      }
      
      mensaje.textContent = `¡Postal con la imagen "${img}" enviada con éxito!`;
      mensaje.classList.remove('hidden');
    });

    // Funcionalidad para mostrar/ocultar letra del himno
    const btnLetra = document.getElementById('mostrar-letra');
    const letraHimno = document.getElementById('letra-himno');
    
    if (btnLetra && letraHimno) {
      // Asegurar que la letra esté oculta inicialmente
      letraHimno.classList.add('hidden');
      
      btnLetra.addEventListener('click', () => {
        const isHidden = letraHimno.classList.contains('hidden');
        
        if (isHidden) {
          letraHimno.classList.remove('hidden');
          btnLetra.textContent = 'Ocultar letra del himno';
          btnLetra.setAttribute('aria-expanded', 'true');
        } else {
          letraHimno.classList.add('hidden');
          btnLetra.textContent = 'Mostrar letra del himno';
          btnLetra.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Accesibilidad por teclado - atajos de teclado
    document.addEventListener('keydown', (e) => {
      // Atajos ALT + número para navegación
      if (e.altKey) {
        switch (e.key) {
          case '1': // Inicio
            e.preventDefault();
            showSection('inicio');
            break;
          case '2': // Tour
            e.preventDefault();
            showSection('video');
            break;
          case '3': // Postal
            e.preventDefault();
            showSection('postal');
            break;
          case '4': // Contacto
            e.preventDefault();
            showSection('contacto');
            break;
          case '5': // Ayuda
            e.preventDefault();
            showSection('ayuda');
            break;
          case '0': // Skip to main content
            e.preventDefault();
            document.querySelector('.skip-link').click();
            break;
        }
      }
    });
});