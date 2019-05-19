const calc = () => {
    
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    document.body.addEventListener('input', (event) => {
        let target = event.target;
        event.target.value = event.target.value.replace(/[e\+]/g, '').replace(/[^0-9]/g, '').replace(/^0/, '');
        total = (daysSum+personsSum)*4000;

        if (target == persons) personsSum = +event.target.value;
        if (target == restDays) daysSum = +event.target.value;
        if (restDays.value == '' || restDays.value == 0 || personsSum == 0 || persons.value == '' || persons.value == 0 || daysSum == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
            animateValue(totalValue, 0, total, 7000);
        }       
    });

    //choose place
    place.addEventListener('change', (event) => {
        if (restDays.value == '' || persons.value == '' || daysSum == 0 || personsSum == 0) {
            totalValue.innerHTML = 0;
            } else {
            let a = total;
            totalValue.innerHTML = a * event.target.options[event.target.selectedIndex].value;
            animateValue(totalValue, 0, totalValue.innerHTML, 7000);
        }
    });

    // animation counter
    const animateValue = (name, start, end, duration) => {
        let range = start - end,
            current = start,           
            step = end > start? 100 : -100,
            stepTime = Math.abs(Math.floor(duration / range));
            
        let timer = setInterval(() => {
            current += step;
            name.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    };
};

module.exports = calc;