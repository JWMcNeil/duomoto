document.querySelector('#menuButton').addEventListener('click', () => {
    const navLinks = document.querySelector('#navLinks');
    const firstSpan = document.querySelector('#menuButton span:nth-child(1)');
    const secondSpan = document.querySelector('#menuButton span:nth-child(2)');
    // Toggle visability of links 
    navLinks.classList.toggle('hidden');

    // Toggle animation of menu button
    firstSpan.classList.toggle('w-9');
    firstSpan.classList.toggle('rotate-45');
    firstSpan.classList.toggle('translate-y-1.5');
    secondSpan.classList.toggle('w-9');
    secondSpan.classList.toggle('-translate-y-1.5');
    secondSpan.classList.toggle('-rotate-45');
});