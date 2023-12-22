export default function Actions() {
    function backToTop() {
        scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="fixed-bottom">
            <div className="position-relative">
                <div className="position-absolute bottom-0 end-0">
                    <button
                        className="btn btn-primary rounded-5 mb-3 me-3"
                        onClick={backToTop}
                    >
                        <i className="fa-solid fa-arrow-turn-up"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
