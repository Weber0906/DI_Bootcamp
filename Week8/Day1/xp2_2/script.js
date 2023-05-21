function myMove() {
    const container = document.getElementById('container');
    const animate = document.getElementById('animate');
    const containerWidth = container.clientWidth;
    const animateWidth = animate.offsetWidth;

    let position = 0;
    const intervalId = setInterval(moveBox, 1);

    function moveBox() {
        if (position >= containerWidth - animateWidth) {
            clearInterval(IntervalId);  
        } else {
            position++;
            animate.style.left = position + 'px';
        }
    }
}