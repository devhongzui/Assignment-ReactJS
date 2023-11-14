import Swiper from "swiper/bundle";
import "swiper/css/bundle";

new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 1000,
    },
    loading: "lazy",
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
