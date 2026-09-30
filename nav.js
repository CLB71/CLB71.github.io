  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle && navLinks){
    navToggle.addEventListener('click', ()=>{
      const open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.nav-drop-trigger').forEach(function(trigger){
    const menu = trigger.nextElementSibling;
    trigger.addEventListener('click', function(e){
      e.stopPropagation();
      const isOpen = !menu.classList.contains('open');
      document.querySelectorAll('.nav-drop-menu.open').forEach(function(otherMenu){
        if(otherMenu !== menu){
          otherMenu.classList.remove('open');
          otherMenu.style.display = 'none';
          const otherTrigger = otherMenu.previousElementSibling;
          if(otherTrigger){ otherTrigger.classList.remove('open'); }
        }
      });
      menu.classList.toggle('open', isOpen);
      trigger.classList.toggle('open', isOpen);
      menu.style.display = isOpen ? 'flex' : 'none';
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        menu.classList.remove('open');
        trigger.classList.remove('open');
        menu.style.display = 'none';
      });
    });
  });
  document.addEventListener('click', function(e){
    document.querySelectorAll('.nav-drop-menu.open').forEach(function(menu){
      const trigger = menu.previousElementSibling;
      if(!menu.contains(e.target) && !trigger.contains(e.target)){
        menu.classList.remove('open');
        trigger.classList.remove('open');
        menu.style.display = 'none';
      }
    });
  });
