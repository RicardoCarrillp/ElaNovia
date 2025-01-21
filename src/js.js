const yesBtn = document.querySelector('#yesBtn');

    yesBtn.addEventListener('click',function () {
        let message = document.querySelector('.contenedor-aceptado');
        let question = document.querySelector('.pregunta');
        message.style.display = "block";
        noBtn.style.display = "none";
        yesBtn.style.display = "none";
        question.style.display = "none";
    });

const noBtn = document.querySelector('#noBtn');

    noBtn.addEventListener('mouseover', function () {
        const randomY = parseInt(Math.random()*100);
        const randomX = parseInt(Math.random()*100);
        noBtn.style.setProperty('top',randomY+'%');
        noBtn.style.setProperty('left',randomX+'%');
        noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
    })