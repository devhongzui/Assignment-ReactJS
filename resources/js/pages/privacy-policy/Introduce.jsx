import { useTranslation } from "react-i18next";

export default function Introduce() {
    const { t } = useTranslation();

    return (
        <p>
            {[
                t("This website is operated by Tri Nguyen Duc"),
                t(
                    "We process a variety of personal data, such as names, email addresses and information related to the services I provide",
                ),
                t(
                    "Therefore, we take data security very seriously and strictly comply with data protection laws",
                ),
                t(
                    "This privacy policy explains how we collect, store, use and disclose any personal data we collect about you when you use this website, and how we I protect your privacy and personal information security",
                ),
                t(
                    "Your privacy is important to us so whether you're new to our services or are a long-time user, please take the time to learn about our practices - and get in touch us if you have any questions.",
                ),
            ].join(". ")}
        </p>
    );
}
