import { Comments, FacebookProvider } from "react-facebook";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Comment() {
    const { t } = useTranslation();

    function getFullLocale() {
        switch (i18next.language) {
            case "vi":
                return "vi_VN";
            case "en":
                return "en_US";
        }
    }

    return (
        <div className="card">
            <div className="card-header p-0">
                <h3 className="text-center text-md-start mt-2 ms-md-2">
                    {t("Comment")}
                </h3>
            </div>
            <div className="card-body p-0">
                <div className="bg-light rounded-bottom-3 pb-3">
                    <FacebookProvider
                        appId={import.meta.env.VITE_FACEBOOK_APP_ID}
                        language={getFullLocale()}
                    >
                        <Comments
                            href={document.location.href}
                            width="100%"
                            colorScheme="dark"
                            mobile
                            lazy
                        />
                    </FacebookProvider>
                </div>
            </div>
        </div>
    );
}
