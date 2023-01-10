function initAccordion() {
    const activeClass = 'ativo';
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const accordionListContent = document.querySelectorAll('.js-accordion dd');

    function activeAccordion(index) {
        accordionListContent.forEach((content) => {

            content.classList.remove(activeClass);
        });
        accordionListContent[index].classList.add(activeClass);

        accordionList.forEach((content) => {
            content.classList.remove(activeClass);
        });
        accordionList[index].classList.add(activeClass);
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
    const menu = document.querySelector('.menu');
    const alturaMenu = menu.clientHeight;
    const banner = document.querySelector('.banner');
    banner.style.marginTop = alturaMenu + 'px';

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        /*   section.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
          }) */

        //Forma alternativa
        const topo = section.offsetTop - alturaMenu;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    };

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
};

initScrollSuave();

/* const menu = document.querySelector('.menu');

const alturaMenu = menu.clientHeight;

const banner = document.querySelector('.banner');

banner.style.marginTop = alturaMenu + 'px';
 */
