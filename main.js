
const fg = document.querySelector('.foreground');
const mg = document.querySelector('.midground');
const bg = document.querySelector('.background');
const title = document.querySelector('.firstpage h1');

document.addEventListener('scroll', (ev) => {
    const Yoff = window.pageYOffset;
    const SCALE_END = 500;
    if(Yoff < SCALE_END) {
      const perc = Yoff / SCALE_END;    
      fg.style.transform = `scale(${1 + 0.4 * perc})`;
      mg.style.transform = `scale(${1 + 0.1 * perc})`;
      bg.style.transform = `scale(${1 + 0.04 * perc})`;
      title.style.transform = `scale(${1 + 0.035 * perc})`;
    }
});