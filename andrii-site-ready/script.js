const menuBtn=document.querySelector('.menu-btn');const menu=document.querySelector('.mobile-menu');
menuBtn?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.textContent=open?'×':'☰'});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.textContent='☰'}));
document.querySelectorAll('.service').forEach(s=>{s.querySelector('button')?.addEventListener('click',()=>{const was=s.classList.contains('active');document.querySelectorAll('.service').forEach(x=>x.classList.remove('active'));if(!was)s.classList.add('active')})});
