import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Theme() {
    const { t } = useTranslation();

    const [theme, setTheme] = useState(
        localStorage.getItem("data-bs-theme") ?? "dark",
    );

    useEffect(() => {
        if (theme === "light") handleTheme(theme);
    }, []);

    function changeTheme() {
        handleTheme(
            document.querySelector("html").getAttribute("data-bs-theme") ===
                "dark"
                ? "light"
                : "dark",
        );
    }

    function handleTheme(theme) {
        setTheme(theme);

        localStorage.setItem("data-bs-theme", theme);

        document.querySelector("html").setAttribute("data-bs-theme", theme);
    }

    return (
        <button
            className="btn btn-sm"
            type="button"
            role="button"
            aria-label={t("Theme")}
            onClick={changeTheme}
        >
            <i
                className={
                    theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun"
                }
            ></i>
        </button>
    );
}
