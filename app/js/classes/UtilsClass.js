import StopScroll from "./StopScrollClass";
import JSHelpers from "./JSHelpersClass";

export default class Utils extends JSHelpers {

    constructor() {
        super()
        this.tabsInit();
        this.toggleInit();
    }

    /**
     * Tabs
     */
    tabsInit() {
        let self = this,
            speed = 200,
            $tabs = document.getElementsByClassName('tabs_wrap');

        for (let i = 0; i < $tabs.length; i++) {
            let $menus = $tabs[i].getElementsByClassName('tab_menu')
            for (let i = 0; i < $menus.length; i++) {
                $menus[i].addEventListener("click", function() {
                    if(this.classList.contains('active')) return;

                    let $tabMenu = this,
                        dataID = this.getAttribute('data-id'),
                        $contentShow = document.getElementById(dataID);


                    //Add active class
                    $tabMenu.parentNode.getElementsByClassName('active')[0].classList.remove('active');
                    $tabMenu.classList.add('active');

                    //Siblings elements
                    let allSibling = self.getSiblings($contentShow.parentNode.childNodes);

                    //Move to opacity 0 all elements
                    for (let i = 0; i < allSibling.length; i++) {
                        if(allSibling[i].getAttribute('id') !== dataID) {
                            allSibling[i].classList.add('tab_fade_out');
                        }
                    }

                    //Start show new elements
                    setTimeout(function () {
                        for (let i = 0; i < allSibling.length; i++) {
                            if(allSibling[i].getAttribute('id') !== dataID) {
                                allSibling[i].style.display = 'none';
                                allSibling[i].classList.remove('tab_fade_out');
                            }
                        }

                        $contentShow.classList.add('tab_fade_in');
                        $contentShow.removeAttribute('style');

                        setTimeout(function () {
                            $contentShow.classList.remove('tab_fade_in');
                        }, speed);
                    }, speed - 20);
                });
            }
        }
    }

    /**
     * Toggles slide
     * TODO: option for auto close open tab
     */
    toggleInit() {
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
     * Triggers:
     *   Open popup: $(document).trigger('trigger.show.popup', ['#id_popup', '.scrollClass', 'focusNameInput']);
     *   Position all popups: $(document).trigger('trigger.position.all.popups');
     */
    static fadePopup() {
        let $overlayPage = $('.overlay_page'),
            $popups = $('.wrap_popup');

        //Need for Chrome.
        if($popups.length) {
            positionPopup();

            $(document).on('click', '.open-popup', function (e) {
                e.preventDefault();
                let $this = $(this),
                    id = $(this).attr('data-id');

                if(!id) {
                    console.warn('Please set data-fade attribute');
                    return false;
                }

                openPopup(id, $(this).attr('data-scroll-class'), $this.attr('data-focus'));
            });

            //Trigger open popup
            $(document).bind('trigger.show.popup', function (e, id, thisScrollClass, thisFocus) {
                openPopup(id, thisScrollClass, thisFocus);
            });

            //Trigger position all popups
            $(document).bind('trigger.position.all.popups', function () {
                positionPopup();
            });


            //Close
            $popups.on('click', '.header .icon-clear, .close-popup', function (e) {
                e.preventDefault();
                allClose();
            });
        }

        //Position for all popup on desktop
        function positionPopup() {
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
        }

        function openPopup(id, thisScrollClass, thisFocus) {
            $(id).fadeIn(200, function () {
                //Set autofocus on input
                if(thisFocus) {
                    let inputF = $(id).find('input[name='+ thisFocus +']');
                    if(inputF.length) {
                        inputF.focus();
                    } else {
                        console.warn('Input not found. Check input name!');
                    }
                }
            });
            $overlayPage.fadeIn(200);
            setCloseOverlay(true);

            if(thisScrollClass) {
                //Set other scroll area
                //data-scroll-class=".product_wrap" - need set to open btn
                self.stopScrollSwipe = new StopScroll($(id), '.wrap_popup', thisScrollClass);
            } else {
                self.stopScrollSwipe = new StopScroll($(id), '.wrap_popup');
            }

            self.stopScrollSwipe.disableScroll();
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
