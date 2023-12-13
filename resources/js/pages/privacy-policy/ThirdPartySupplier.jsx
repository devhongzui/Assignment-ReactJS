import { useTranslation } from "react-i18next";

export default function ThirdPartySupplier({ tag, title }) {
    const { t } = useTranslation();

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <p>
                {[
                    t(
                        "Please note that our website contains links to other websites and offers content from third party providers",
                    ),
                    t(
                        "This privacy policy applies only to our website and services",
                    ),
                    t(
                        "When you click on links to other websites or use third party services and products, you should read their privacy policies",
                    ),
                    t(
                        "Additionally, if you choose to contact us via social media, this privacy policy will not apply to any personal data submitted by you as part of the contact process. - in this case, we advise you to read the privacy policy of that social media provider.",
                    ),
                ].join(". ")}
            </p>
        </section>
    );
}
