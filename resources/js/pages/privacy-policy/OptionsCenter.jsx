import { useTranslation } from "react-i18next";

export default function OptionsCenter({ tag, title }) {
    const { t } = useTranslation();

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <h4>{t("How to contact us")}</h4>
            <p>
                {t(
                    "If you have any questions regarding our processing of your personal data or our use of cookies, or if you wish to raise any of your rights under data protection law current, please send an email to: trind@devhongzui.com or contact directly.",
                )}
            </p>
            <h4>{t("Privacy policy changes")}</h4>
            <p>
                {t(
                    "Where we change the way we process your personal data or use cookies, we will promptly update this privacy policy and publish it on this website.",
                )}
            </p>
        </section>
    );
}
