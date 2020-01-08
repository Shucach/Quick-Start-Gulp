export default class StopScroll {

    /**
     * @param scrollClass
     */
    constructor (scrollClass) {
        this.scrollClass = scrollClass;
        this.res = '';
    }

    /**
     * Fixed all scroll types except scroll inside selected block
     */
    disableScroll() {
        let self  = this;

        //Desktop
        if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', self.preventDefault);
        }
        window.addEventListener('mousewheel', self.preventDefault, { passive: false });
        document.onkeydown = self.keydown;

        //Mobile
        let ts;
        $(window).bind('touchstart.fixed.popup', function (e){
            ts = e.originalEvent.touches[0].clientY;
        });
        $(window).bind('touchmove.fixed.popup', function(e) {
            let te = e.originalEvent.changedTouches[0].clientY;
            if(ts > te + 5){
                self.res = 'down';
            } else if(ts < te - 5){
                self.res = 'up';
            }
        });

        //-webkit-overflow-scrolling touch
        //Need add padding bottom for some blocks for phones 80px
        window.addEventListener('touchmove', self.mobileWheel, { passive: false });

        //window.addEventListener('touchmove', function () {self.mobileWheel(event, self.scrollClass, self.res)}, { passive: false });
    }


    /**
     * Cancel all event and on scroll
     */
    enableScroll() {
        let self  = this;

        //Desktop
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', self.preventDef);
        }
        window.removeEventListener('mousewheel', self.preventDef, { passive: true });

        //Mobile
        window.removeEventListener('touchmove', self.mobileWheel, { passive: false });
        //window.removeEventListener('touchmove', function () {self.mobileWheel(event, self.scrollClass, 'down')}, { passive: false });
        //window.removeEventListener('touchmove', function () {self.mobileWheel(event, self.scrollClass, 'up')}, { passive: false });

        $(window).unbind('touchstart.fixed.popup');
        $(window).unbind('touchmove.fixed.popup');

    }


    //Helpers functions
    wheel(e) {
        let self = this;
        self.preventDefault(e)
    }

    preventDef(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
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
                    this.preventDefault(e);
                    return;
                }
            }
        }
    }

    mobileWheel(e, scrollClass, res) {
        console.log(scrollClass);
        console.log(res);

        if($(e.target).hasClass(scrollClass) || $(e.target).closest(scrollClass).length) {
            let element = $(e.target).closest(scrollClass)[0],
                scrollHeight = Math.round(element.scrollHeight - element.scrollTop) === element.clientHeight,
                scrollTop = element.scrollTop;

            if(scrollTop === 0 && scrollHeight && res === 'up' ||
                scrollTop === 0 && res === 'up' ||
                scrollHeight && res === 'down') {
                e.preventDefault();
            }
        } else {
            e.preventDefault();
        }
    }

}