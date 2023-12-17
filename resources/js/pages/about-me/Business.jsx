import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { assetHelper } from "../../helper.js";

const ImageStyle = styled.img`
    height: 60px;
`;

export default function Business() {
    const { t } = useTranslation();

    const sliders = [
        {
            alt: "Ecommage",
            src: "storage/images/others/vtcacademy.png",
        },
        {
            alt: "VTC Academy",
            src: "storage/images/others/ecommage.png",
        },
        {
            alt: "CLEAR Go",
            src: "storage/images/others/cleargo.png",
        },
    ];

    const slidersElement = () => {
        const elements = [];

        const rendered = sliders.map((value, index) => (
            <SwiperSlide key={index}>
                <ImageStyle
                    src={assetHelper(value.src)}
                    alt={value.alt}
                    className="d-block w-100 object-fit-contain"
                />
            </SwiperSlide>
        ));

        for (let i = 0; i < 3; i++) elements.push(rendered);

        return (
            <Swiper
                modules={[Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                scrollbar={{ draggable: true }}
                loop
                autoplay={{ delay: 1000 }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 45,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                className="p-2"
            >
                {elements}
            </Swiper>
        );
    };

    return (
        <section className="mb-5 bg-dark-subtle rounded-2 py-3">
            <h3 className="text-center">{t("Business")}</h3>
            {slidersElement()}
        </section>
    );
}
