import { useTranslation } from "react-i18next";

export default function TableOfContents({ list }) {
    const { t } = useTranslation();

    return (
        <>
            <h5 className="ms-3">{t("Table of contents")}</h5>
            <ol>
                {list.map((value, index) => (
                    <li key={index}>
                        <a
                            // External links
                            href={"#" + value.tag}
                            role="link"
                            aria-label={value.title}
                        >
                            {value.title}
                        </a>
                    </li>
                ))}
            </ol>
        </>
    );
}
