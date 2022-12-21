function initAccordion() {
    const activeClass = 'ativo';
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const accordionListContent = document.querySelectorAll('.js-accordion dd');

    function activeAccordion(index) {
        accordionListContent.forEach((content) => {
            content.classList.remove(activeClass);
        });
        accordionListContent[index].classList.toggle(activeClass);

        accordionList.forEach((content) => {
            content.classList.remove(activeClass);
        });
        accordionList[index].classList.toggle(activeClass);
    };

    accordionList.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeAccordion(index);
        });
    });

}
initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        //Forma alternativa
        /*  const topo = section.offsetTop;
         window.scrollTo({
             top: topo,
             behavior: 'smooth',
         }); */
    };

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
};

initScrollSuave();

const menu = document.querySelector('.menu');
const banner = document.querySelector('.banner');

const alturaMenu = menu.clientHeight;
const alturaTopoBanner = banner.offsetTop;


console.log(alturaTopoBanner);