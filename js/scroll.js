const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);

        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
            });
        }
    });
});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('active');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.anim-items');
  
  for (let elm of elements) {
    observer.observe(elm);
  }