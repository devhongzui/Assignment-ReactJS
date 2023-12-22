import { useTranslation } from "react-i18next";
import { initSite } from "../../helper.js";

export default function Contact() {
    const { t } = useTranslation();

    const web = {
        title: t("Contact"),
        image: "storage/images/undraw/Contact_us.png",
    };

    initSite(web);

    const information = [
        {
            title: t("Responsible for the content"),
            description: "Nguyễn Đức Trí",
        },
        {
            title: t("Address detail"),
            description: t(
                "No. 8, My A Street, Dong My, Thanh Tri, City. Hanoi",
            ),
        },
        {
            title: t("Phone number"),
            description: "0982213854",
        },
        {
            title: t("Email"),
            description: "trind@devhongzui.com",
        },
    ];

    return (
        <div className="container">
            <h2 className="my-4 text-center">{web.title}</h2>

            {information.map((value, index) => (
                <div key={index} className="row mb-3">
                    <div className="offset-xl-1 col-xl-3 text-primary fw-bold">
                        {value.title}
                    </div>
                    <div className="col-xl-7">{value.description}</div>
                </div>
            ))}

            <div className="row mb-3">
                <div className="offset-xl-1 col-xl-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7453.56412274543!2d105.8832887!3d20.9210861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1692459738842!5m2!1svi!2s"
                        height="600"
                        allowFullScreen
                        loading="lazy"
                        className="w-100 rounded-2"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
