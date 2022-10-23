let count = false;

const pruebaAnimation = async () => {

    const parrafoPrueba = document.querySelector("#text-presentation");
    const btn = document.querySelector('#logo-button')

    const development = document.querySelector("#softwareDevelopment");
    const jeison = document.querySelector("#jeisonRedondo");
    const learn = document.querySelector("#learning");
    const passion = document.querySelector("#passion");
    const programming = document.querySelector("#Programming");

    if (count == false) {
        development.classList.remove('developmentPst');
        jeison.classList.remove('jeisonPst');
        learn.classList.remove('learningPst');
        passion.classList.remove('passionPst');
        programming.classList.remove('programmingPst');

        parrafoPrueba.classList.add('changeColor');

        development.classList.add('muestra');
        jeison.classList.add('muestra');
        learn.classList.add('muestra');
        passion.classList.add('muestra');
        programming.classList.add('muestra');

        // btn.textContent("See Less")
        count = true;
        
    } else {
        development.classList.remove('muestra');
        jeison.classList.remove('muestra');
        learn.classList.remove('muestra');
        passion.classList.remove('muestra');
        programming.classList.remove('muestra');

        parrafoPrueba.classList.remove('changeColor');

        development.classList.add('developmentPst');
        jeison.classList.add('jeisonPst');
        learn.classList.add('learningPst');
        passion.classList.add('passionPst');
        programming.classList.add('programmingPst');

        count = false;
    }
};