import Glide from "@glidejs/glide";

const glideOptions = {
    type: 'carousel',
    autoplay: 4000,
    gap: 20,
    peek: 20,
    animationDuration: 600,
    breakpoints: {
        750: {
            perView: 1
        },
        1000: {
            perView: 2
        }
    }
};

const startSlider = () => {

    const carousel = new Glide('.testimonials__carousel', glideOptions);

    carousel.settings.classes = {
        ...carousel.settings.classes,
        nav: {
            active: 'testimonials__bullet--active'
        }
    };

    carousel.mount();

};

export default startSlider;