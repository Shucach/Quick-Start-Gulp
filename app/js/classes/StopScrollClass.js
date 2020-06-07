export default class StopScroll {

    /**
     *
     * @param el
     * @param wrapClass
     * @param scrollClass - we can skip this class is if wrapClass will be scroll area
     * version 0.2
     */
    constructor (el, wrapClass, scrollClass) {
        window.stElement = el;
        window.wrapClass = wrapClass;
        window.scrollClass = scrollClass;
        window.direction = '';
    }

    /**
     * Fixed all scroll types except scroll inside selected block
     */
    disableScroll() {
        let self  = this;

        //Desktop
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', self.wheel);
        }
        window.addEventListener('wheel', self.wheel, { passive: false });
        document.onkeydown = self.keydown;

        //Mobile
        let ts;
        $(window).bind('touchstart.fixed.popup', function (e){
            ts = e.originalEvent.touches[0].clientY;
        });
        $(window).bind('touchmove.fixed.popup', function(e) {
            let te = e.originalEvent.changedTouches[0].clientY;
            if(ts > te + 5){
                window.direction = 'down';
            } else if(ts < te - 5){
                window.direction = 'up';
            }
        });

        //Desktop
        $(window).bind('wheel.fixed.popup', function(e) {
            if (e.originalEvent.deltaY < 0) {
                window.direction = 'up';
            } else if (e.originalEvent.deltaY > 0) {
                window.direction = 'down';
            }
        });

        //-webkit-overflow-scrolling touch
        //Need add padding bottom for some blocks for phones 80px
        //window.addEventListener('touchmove', self.mobileWheel, { passive: false });
        window.addEventListener('touchmove', self.mobileWheel, { passive: false });
    }

    /**
     * Clear all event and on scroll
     */
    enableScroll() {
        let self  = this;

        //Desktop
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', self.wheel);
        }
        window.removeEventListener('wheel', self.wheel, { passive: true });
        $(window).unbind('wheel.fixed.popup');

        //Mobile
        window.removeEventListener('touchmove', self.mobileWheel, { passive: false });
        $(window).unbind('touchstart.fixed.popup');
        $(window).unbind('touchmove.fixed.popup');

    }

    /**
     * Stop scroll for desktop
     * @param e
     */
    wheel(e) {
        if(window.stElement[0] === $(e.target).closest(window.wrapClass)[0] || window.stElement[0] === $(e.target)[0]) {
            let element = ($(window.stElement).find(window.scrollClass).last()[0]) ? $(window.stElement).find(window.scrollClass).last()[0] : $(window.stElement)[0],
                scrollHeight = Math.round(element.scrollHeight - element.scrollTop) === element.clientHeight,
                scrollTop = element.scrollTop;

            if(scrollTop === 0 && scrollHeight && window.direction === 'up' ||
                scrollTop === 0 && window.direction === 'up' ||
                scrollHeight && window.direction === 'down') {
                e.preventDefault();
            }
        } else {
            e.preventDefault();
        }
    }

    /**
     * Stop scroll for mobile
     * @param e
     */
    mobileWheel(e) {
        if(window.stElement[0] === $(e.target).closest(window.wrapClass)[0] || window.stElement[0] === $(e.target)[0]) {
            let element = ($(window.stElement).find(window.scrollClass)[0]) ? $(window.stElement).find(window.scrollClass)[0] : $(window.stElement)[0],
                scrollHeight = Math.round(element.scrollHeight - element.scrollTop) === element.clientHeight,
                scrollTop = element.scrollTop;

            if(scrollTop === 0 && scrollHeight && window.direction === 'up' ||
                scrollTop === 0 && window.direction === 'up' ||
                scrollHeight && window.direction === 'down') {
                e.preventDefault();
            }
        } else {
            e.preventDefault();
        }
    }

    keydown(e) {
        let keys = [32,33,34,35,36,37,38,39,40];
        for (let i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                if(e.target.type !== 'text' &&
                    e.target.type !== 'textarea' &&
                    e.target.type !== 'search' &&
                    e.target.type !== 'tel' &&
                    e.target.type !== 'email') {
                    e.preventDefault();
                    return;
                }
            }
        }
    }

}
