export default function OAuth() {
    return (
        <>
            <hr className="mt-4" />

            <h4 className="my-4">{t("Fast authentication")}</h4>

            <div className="row">
                <div className="col-xl-4">
                    <a
                        className="w-100 mb-2 me-2 btn btn-primary"
                        role="link"
                        aria-label="Facebook"
                    >
                        <i className="fa-brands fa-facebook"></i>
                        <strong>Facebook</strong>
                    </a>
                </div>
                <div className="col-xl-4">
                    <a
                        className="w-100 mb-2 me-2 btn btn-primary"
                        role="link"
                        aria-label="Google"
                    >
                        <i className="fa-brands fa-google"></i>
                        <strong>Google</strong>
                    </a>
                </div>
                <div className="col-xl-4">
                    <button
                        className="mb-2 btn btn-outline-primary"
                        type="button"
                        role="button"
                        aria-label="t('Others')"
                        data-bs-toggle="collapse"
                        data-bs-target="#open-auth-collapse"
                    >
                        <i className="fa-solid fa-sort-down"></i>
                    </button>
                    <div id="open-auth-collapse" className="collapse">
                        <a
                            className="w-100 mb-2 me-2 btn btn-primary"
                            role="link"
                            aria-label="Github"
                        >
                            <i className="fa-brands fa-github"></i>
                            <strong>Github</strong>
                        </a>
                        <a
                            className="w-100 mb-2 me-2 btn btn-primary"
                            role="link"
                            aria-label="Spotify"
                        >
                            <i className="fa-brands fa-spotify"></i>
                            <strong>Spotify</strong>
                        </a>
                        <a
                            className="w-100 mb-2 me-2 btn btn-primary"
                            role="link"
                            aria-label="Yahoo"
                        >
                            <i className="fa-brands fa-yahoo"></i>
                            <strong>Yahoo</strong>
                        </a>
                        <a
                            className="w-100 mb-2 me-2 btn btn-primary"
                            role="link"
                            aria-label="Twitter"
                        >
                            <i className="fa-brands fa-twitter"></i>
                            <strong>Twitter</strong>
                        </a>
                        <a
                            className="w-100 mb-2 me-2 btn btn-primary"
                            role="link"
                            aria-label="Zalo"
                        >
                            <i className="fa-solid fa-z"></i>
                            <strong>Zalo</strong>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
