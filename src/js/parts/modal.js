function modal() {
    function getModal() {
        let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            popup = document.querySelector('.popup');

        more.addEventListener('click', (e) => {
            overlay.style.display = 'block';
            e.target.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', () => {
            overlay.style.display = 'none'; 
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });

        let descriptionBtns = document.querySelectorAll('.description-btn');

        descriptionBtns.forEach(item => {
            item.addEventListener('click', () => {
                overlay.style.display = 'block';
                item.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });
            close.addEventListener('click', () => {
                item.classList.remove('more-splash');
            });
        });

        let isIe = /InternetExplorer/.test(navigator.userAgent),
            edge = /Edge/.test(navigator.userAgent);

        if (window.screen.width < 500) {
            overlay.classList.remove('fade');
        } else {
            if (!(isIe || edge)) {  
                more.addEventListener('click', () => {                  
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
                });

                descriptionBtns.forEach(item => {
                    item.addEventListener('click', () => {
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
                    });
                });
            }
        } 

    }

    getModal();
}

module.exports = modal;