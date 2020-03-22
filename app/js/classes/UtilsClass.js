import StopScroll from "./StopScrollClass";

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
     * TODO: option for auto close open tab
     */
    static toggleInit() {
        let $toggle = $('.toggle_wrap');

        $toggle.each(function () {
            $(this).find('.toggle_header').on('click', function () {
                $(this).siblings('.toggle_content').slideToggle(200);
                $(this).toggleClass('active');
            });
        });
    }

    /**
     * Open|close fade popup
     */
    static fadePopup() {
        let $overlayPage = $('.overlay_page'),
            $popups = $('.wrap_popup');

        //Need for Chrome.
        if($popups.length) {
            //Position for all popup on desktop
            if ($(window).width() >= 1200) {

                let wW = $(window).width(),
                    wH = $(window).height();

                $popups.each(function () {
                    let blW = $(this).outerWidth(true),
                        blH = $(this).outerHeight(true);

                    $(this).css({
                        'left': (wW - blW) / 2,
                        'top': (wH - blH) / 2,
                    })
                });
            }

            //TODO: check what solution will better.
            //TODO: document on click OR reinit
            $(document).on('click', '.open-popup', function (e) {
                e.preventDefault();
                let $this = $(this),
                    id = $(this).attr('data-id');

                if(!id) {
                    console.warn('Please set data-fade attribute');
                    return false;
                }

                $(id).fadeIn(200, function () {
                    //Set autofocus on input
                    if($this.attr('data-focus')) {
                        let inputF = $(id).find('input[name='+ $this.attr('data-focus') +']');
                        if(inputF.length) {
                            inputF.focus();
                        } else {
                            console.warn('Input not found. Check input name!');
                        }
                    }
                });
                $overlayPage.fadeIn(200);
                setCloseOverlay(true);

                if($(this).attr('data-scroll-class')) {
                    //Set other scroll area
                    //data-scroll-class=".product_wrap" - need set to open btn
                    self.stopScrollSwipe = new StopScroll($(id), '.wrap_popup', $(this).attr('data-scroll-class'));
                } else {
                    self.stopScrollSwipe = new StopScroll($(id), '.wrap_popup');
                }

                self.stopScrollSwipe.disableScroll();
            });


            //Close
            $popups.on('click', '.header .icon-clear, .close-popup', function (e) {
                e.preventDefault();
                allClose();
            });
        }

        function setCloseOverlay(set) {
            if(set) {
                $overlayPage.bind('click.fade.popup', function () {
                    allClose()
                });
            } else {
                $overlayPage.unbind('click.fade.popup');
            }
        }

        function allClose() {
            $overlayPage.fadeOut(200);
            $popups.each(function () {
                let $eThis = $(this);
                $eThis.fadeOut(200);
            });
            setCloseOverlay(false);

            self.stopScrollSwipe.enableScroll();
        }

    }

    /**
     * Custom select actions
     * Idea from: https://m.habr.com/ru/post/491000/
     */
    static customSelect() {
        let selectSingle = document.querySelector('.custom_select');
        let selectSingle_title = selectSingle.querySelector('.select_title');
        let selectSingle_labels = selectSingle.querySelectorAll('.select_label');

        // Toggle menu
        selectSingle_title.addEventListener('click', () => {
            if ('active' === selectSingle.getAttribute('data-state')) {
                selectSingle.setAttribute('data-state', '');
            } else {
                selectSingle.setAttribute('data-state', 'active');
            }
        });

        // Close when click to option
        for (let i = 0; i < selectSingle_labels.length; i++) {
            selectSingle_labels[i].addEventListener('click', (evt) => {
                selectSingle_title.textContent = evt.target.textContent;
                selectSingle.setAttribute('data-state', '');
            });
        }

        // Reset title
        // const reset = document.querySelector('.reset');
        // reset.addEventListener('click', () => {
        //     selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
        // });
    }

    /**
     * Check webp
     * @returns {*}
     */
    static supportsWebp() {
        if (!self.createImageBitmap) {
            $('html').addClass('no-webp');
            return false;
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