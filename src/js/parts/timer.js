function timer() {
    let deadline = '2019-05-25';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/1000/60/60) % 24),
            days = Math.floor((t/(1000*60*60*24)));

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '0 дней';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            } else {
                days.textContent = text(t.days);
                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);
            }
        }

        function addZero(num) {
            if (num>=0 && num <10) {
                return '0' + num;
            } else {
                return num;
            }
        }

        function text(num) {
            let count = num % 10;
            if (count == 1) {
                return num + ' день';
            } if (count>1 && count <5) {
                return num + ' дня';
            } else {
                return num + ' дней';
            }
        }
    }

    setClock('timer', deadline);
}

module.exports = timer;