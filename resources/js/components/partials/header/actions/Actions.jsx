import Theme from "./Theme.jsx";
import Language from "./Language.jsx";
import Others from "./others/Others.jsx";

export default function Actions() {
    return (
        <div className="mt-2 mt-xl-0">
            <div className="row">
                <div className="col-md-6 col-xl-auto mb-2 mb-xl-0">
                    <Theme />
                    <Language />
                </div>
                <div className="col-md-6 col-xl-auto mb-2 mb-xl-0">
                    <Others />
                </div>
            </div>
        </div>
    );
}
