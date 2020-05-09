export default class CountdownTimer {

    /**
     * @param date
     *      Format: Jan 5, 2021 15:37:25
     * @param output
     *      '#demo-countdown-timer'
     */
    constructor(date, output) {
        this.countDownDate = new Date(date).getTime();
        this.outputEl = document.querySelector(output);

        this.timerLoop();
    }

    timerLoop() {
        let self = this,
            x = setInterval(function() {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = self.countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            //TODO: if will need add different formats
            self.outputEl.innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    }
}
