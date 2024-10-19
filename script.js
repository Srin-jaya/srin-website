function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function smoothScroll(target, duration) {
    const targetElement = document.getElementById(target);
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easeInOutQuad = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, startPosition + distance * easeInOutQuad);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('.arrow, .another-arrow').forEach((arrow) => {
  arrow.addEventListener('click', function() {
      const targetSection = this.getAttribute('data-target');
      smoothScroll(targetSection, 800);
  });
});
