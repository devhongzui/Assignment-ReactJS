import Swiper from "swiper/bundle";
import "swiper/css/bundle";

new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 2000,
    },
    loading: "lazy",
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 42,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 45,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 47,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
