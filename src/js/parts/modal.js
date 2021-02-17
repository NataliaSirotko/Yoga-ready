const modal = () => {

    const getModal = () => {
        let overlay = document.querySelector('.overlay'),
            popup = document.querySelector('.popup'),
            isActiveBtn;

        const bindModal = (overlayStatus, overflowStatus, classListMethod, elem) => {
            if (classListMethod == 'add') isActiveBtn = elem;
            if (!elem) elem = isActiveBtn;
            overlay.style.display = overlayStatus;
            elem.classList[classListMethod]('more-splash');
            document.body.style.overflow = overflowStatus;
        };

        document.body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('more') || target.classList.contains('description-btn')) bindModal('block', 'hidden', 'add', target);
            if (target.classList.contains('popup-close')) bindModal('none', '', 'remove');
        });    

        let isIe = /InternetExplorer/.test(navigator.userAgent),
            edge = /Edge/.test(navigator.userAgent);


        const getAnimate = () => {
            overlay.classList.remove('fade');
            overlay.animate([
                {width: '0'},
                {width: '100%'}
            ],
                {duration: 2500});
            popup.animate([
                {left: '0'},
                {left: '50%'}
            ],
                {duration: 1500}); 
        };
        

        if (window.screen.width < 500) {
            overlay.classList.remove('fade');
        } else {
            if (!(isIe || edge)) {  
                document.body.addEventListener('click', (event) => {
                    let target = event.target;
                    if (target.classList.contains('more') || target.classList.contains('description-btn'))  getAnimate();
                });
            }
        } 

    };

    getModal();
    
};

module.exports = modal;
