const scroll = () => {
    let anchors = document.querySelectorAll('a[href*="#"]');

    for (let item of anchors) {
        item.addEventListener('click', event => {
            event.preventDefault();

            let elemId = item.getAttribute('href');

            document.querySelector(`${elemId}`).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
};

module.exports = scroll;