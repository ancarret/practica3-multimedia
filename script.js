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

    const btnLetra = document.getElementById('mostrar-letra');
    const letraHimno = document.getElementById('letra-himno');
    
    if (btnLetra && letraHimno) {
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
