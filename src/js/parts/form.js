const form = () => {

    const sendForm = (form, popup) => {
    
        let input = form.getElementsByTagName('input');
    
        let inputTel = form.querySelector('[type="tel"]');

        inputTel.addEventListener('keyup', () => {
            let re = /(\+{0,1}\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/,
                elem = inputTel.value.replace(/[^0-9\+]/g, '').match(re);

            inputTel.value = !elem[2] ? elem[1] : elem[1] + ' (' + elem[2] + (elem[3] ? ') ' + elem[3] : '') + (elem[4] ? '-' + elem[4] : '') + (elem[5] ? '-' + elem[5] : '');       
        });
          
        let img = document.createElement('img'); 

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            popup.appendChild(img);

            let formData = new FormData(form);

            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            const postData = (data) => {                  

                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');     
                    request.addEventListener('readystatechange', () => {
                        if (request.readyState < 4) {
                            resolve()                
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve()
                        } else {
                            reject()
                        }      
                    });

                    request.send(data);
                })  
               
            }; // end postData

            const clearInput = () => {
                for (let i=0; i<input.length; i++) {
                    input[i].value = '';
                }
            };
                
                postData(json)
                    .then(() => {
                        form.style.display = 'none';
                        img.style.display = "block";
                        img.src = "/src/icons/ajax-loader.gif";
                        img.style.margin = "30px 200px 0";
                    })
                    .then(() => {                   
                        img.src = "/src/icons/herbal.png";
                        img.style.width = "150px";
                    })
                    .catch(() => {
                        img.src = "/src/icons/fish.psd";
                        img.style.width = "150px";
                    })
                    .then(clearInput)
            
            document.body.addEventListener('click', (event) => {
                let target = event.target;
              
                if (target.classList.contains('more') || target.classList.contains('description-btn')) {
                    form.style.display = 'block';
                    img.style.display = "none";
                }                
            }); 
        });                 
    };

    let form = document.getElementsByTagName('form'),
        popup = document.querySelectorAll('div[class$="-form"]');

    sendForm(form[1], popup[1]);
    sendForm(form[0], popup[0]);
};

module.exports = form;