export default class StopScroll {

    /**
     *
     * @param el
     * @param wrapClass
     * @param scrollClass - we can skip this class is if wrapClass will be scroll area
     * version 1.0.1
     */
    constructor (el, wrapClass, scrollClass) {
        window.stElement = el;
        window.wrapClass = wrapClass;
        window.scrollClass = scrollClass;
        window.ts = '';
        window.direction = '';
    }

    /**
     * Fixed all scroll types except scroll inside selected block
     */
    disableScroll() {
        let self  = this;

        // Desktop
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', self.wheel);
        }
        window.addEventListener('wheel', self.wheel, { passive: false });
        document.onkeydown = self.keydown;

        // Mobile
        window.addEventListener('touchstart', self.__touchstart, { passive: false });

        // -webkit-overflow-scrolling touch
        // Need add padding bottom for some blocks for phones 80px
        // window.addEventListener('touchmove', self.mobileWheel, { passive: false });
        window.addEventListener('touchmove', self.mobileWheel, { passive: false });
    }

    __touchstart(e) {
        window.ts = e.touches[0].clientY;
    }

    /**
     * Clear all event and on scroll
     */
    enableScroll() {
        let self  = this;

        // Desktop
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', self.wheel);
        }
        window.removeEventListener('wheel', self.wheel, { passive: true });

        // Mobile
        window.removeEventListener('touchmove', self.mobileWheel, { passive: false });
    }

    /**
     * Stop scroll for desktop
     * @param e
     */
    wheel(e) {
        // Direction
        if (e.deltaY < 0) {
            window.direction = 'up';
        } else if (e.deltaY > 0) {
            window.direction = 'down';
        }

        // NOTE: window.stElement[0] - not sure if it will be ok if use clear js. check
        if(window.stElement[0] === e.target.closest(window.wrapClass) || window.stElement[0] === e.target) {
            let element = (window.stElement[0].querySelector(window.scrollClass)) ? window.stElement[0].querySelector(window.scrollClass) : window.stElement[0],
                scrollHeight = Math.round(element.scrollHeight - element.scrollTop) <= element.clientHeight,
                scrollTop = element.scrollTop;

            if (scrollTop === 0 && scrollHeight && window.direction === 'up' ||
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
        // Direction
        let te = e.changedTouches[0].clientY;
        if(window.ts > te + 5) {
            window.direction = 'down';
        } else if(ts < te - 5){
            window.direction = 'up';
        }

        if(window.stElement[0] === e.target.closest(window.wrapClass) || window.stElement[0] === e.target) {
            let element = (window.stElement[0].querySelector(window.scrollClass)) ?window.stElement[0].querySelector(window.scrollClass) : window.stElement,
                scrollHeight = Math.round(element.scrollHeight - element.scrollTop) <= element.clientHeight,
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
