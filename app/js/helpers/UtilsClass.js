export default class Utils {
    /**
     * Tabs
     */
    static tabsInit() {
        let $tabs = $('.tabs_wrap');

        $tabs.find('.tab_header').on('click', '.tab_menu:not(.active)', function () {
            let $this = $(this),
                idContent = $(this).attr('data-id');

            if(!idContent) {
                console.warn('Please set data-id');
                return false;
            }

            let $content = $(this).closest('.tabs_wrap').find('.tab_content');
            $content.find(' > div:not('+ idContent +')').fadeOut(200, function () {
                $content.find(idContent).fadeIn(200);
                $this.closest('.tab_header').find('.tab_menu').removeClass('active');
                $this.addClass('active');
            })

        })
    }

    /**
     * Toggles slide
     * @data-toggle-size - from max size to 0 rules for initial
     */
    static toggleInit() {
        let $toggle = $('.toggle_wrap'),
            widowWidth = $(window).width();

        $toggle.each(function () {
            let sizeInit = $(this).attr('data-toggle-size');
            if(!sizeInit || widowWidth <= Number(sizeInit)) {
                $(this).find('.toggle_header').on('click', function () {
                    $(this).siblings('.toggle_content').slideToggle(200);
                    $(this).toggleClass('open');
                })
            }
        });
    }

    /**
     * Check webp
     * @returns {*}
     */
    static supportsWebp() {
        if (!self.createImageBitmap) {
            $('html').addClass('no-webp');
        }

        const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
        const blob = fetch(webpData).then(r => r.blob());
        if(createImageBitmap(blob).then(() => true, () => false)) {
            $('html').addClass('webp');
        } else {
            $('html').addClass('no-webp');
        }
    }

    /**
     * https://github.com/aFarkas/lazysizes
     */
    static lazy() {
        //if ('loading' in HTMLImageElement.prototype) {
        //TODO: load all images. Try nex time
        // const images = document.querySelectorAll('img[loading="lazy"]');
        // images.forEach(img => {
        //     img.src = img.dataset.src;
        // });
        //} else {
        //Dynamically import the LazySizes library
        // const script = document.createElement('script');
        // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
        // document.body.appendChild(script);
        //}
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
        document.body.appendChild(script);
    }
}