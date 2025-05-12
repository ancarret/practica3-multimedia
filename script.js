document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('main section');
  
    function showSection(id) {
      sections.forEach(sec => {
        if (sec.id === id) {
          sec.classList.add('active');
          sec.classList.remove('hidden');
          sec.focus();
        } else {
          sec.classList.add('hidden');
          sec.classList.remove('active');
        }
      });
    }
  
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        showSection(target);
      });
    });
  
    const form = document.getElementById('form-postal');
    const mensaje = document.getElementById('mensaje-postal');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
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
    }

    // Funcionalidad de mostrar/ocultar letra del himno - corregido
    const btnLetra = document.getElementById('mostrar-letra');
    const letraHimno = document.getElementById('letra-himno');
    
    if (btnLetra && letraHimno) {
      // Asegurar que la letra esté oculta inicialmente
      if (!letraHimno.classList.contains('hidden')) {
        letraHimno.classList.add('hidden');
      }
      
      btnLetra.addEventListener('click', function() {
        if (letraHimno.classList.contains('hidden')) {
          letraHimno.classList.remove('hidden');
          this.textContent = 'Ocultar letra del himno';
          this.setAttribute('aria-expanded', 'true');
        } else {
          letraHimno.classList.add('hidden');
          this.textContent = 'Mostrar letra del himno';
          this.setAttribute('aria-expanded', 'false');
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.altKey) {
        switch (e.key) {
          case '1':
            e.preventDefault();
            showSection('inicio');
            break;
          case '2':
            e.preventDefault();
            showSection('video');
            break;
          case '3':
            e.preventDefault();
            showSection('postal');
            break;
          case '4':
            e.preventDefault();
            showSection('contacto');
            break;
          case '5':
            e.preventDefault();
            showSection('ayuda');
            break;
          case '0':
            e.preventDefault();
            document.querySelector('.skip-link').click();
            break;
        }
      }
    });
});
