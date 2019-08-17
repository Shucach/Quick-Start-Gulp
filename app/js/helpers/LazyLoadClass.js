export default class LazyLoad {
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