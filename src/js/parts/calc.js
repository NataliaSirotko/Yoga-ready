function calc() {
    
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    //persons
    persons.addEventListener('input', function() {
        this.value = this.value.replace(/[e\+]/g, '').replace(/[^0-9]/g, '').replace(/^0/, '');
        personsSum = +this.value;
        total = (daysSum+personsSum)*4000;

        if (restDays.value == '' || restDays.value == 0 || personsSum == 0 ) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
            animateValue(totalValue, 0, total, 7000);
        }
    });

    //days
    restDays.addEventListener('input', function() { 
        this.value = this.value.replace(/[e\+]/g, '').replace(/[^0-9]/g, '').replace(/^0/, '');
        daysSum = +this.value; 
        total = (daysSum+personsSum)*4000;

        if (persons.value == '' || persons.value == 0 || daysSum == 0 ) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
            animateValue(totalValue, 0, total, 7000);
        }
    });

    //choose place
    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '' || daysSum == 0 || personsSum == 0) {
            totalValue.innerHTML = 0;
            } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            animateValue(totalValue, 0, totalValue.innerHTML, 7000);
        }
    });

    // animation counter
    function animateValue(name, start, end, duration) {
        let range = start - end;
        let current = start;               
        let step = end > start? 100 : -100;
        let stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
            current += step;
            name.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }  
}

module.exports = calc;