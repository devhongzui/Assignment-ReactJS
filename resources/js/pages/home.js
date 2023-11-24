import Swiper from "swiper/bundle";
import "swiper/css/bundle";

new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
    },
    loading: "lazy",
});
