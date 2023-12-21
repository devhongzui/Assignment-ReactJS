import { useTranslation } from "react-i18next";
import { checkPasswordConfirm, initSite } from "../../../helper.js";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, userData } from "../../../reduxers/user.jsx";
import Form from "../../../templates/Form.jsx";
import { useEffect, useState } from "react";
import { setToast } from "../../../reduxers/toast.jsx";
import ConfirmedEnableTwoFactorAuth from "./confirmed-two-factor-authentication/ConfirmedEnableTwoFactorAuth.jsx";
import TwoFactorRecoveryCodes from "./TwoFactorRecoveryCodes.jsx";
import {
    disableTwoFactorAuthentication,
    enableTwoFactorAuthentication,
} from "../../../services/profile.jsx";

export default function TwoFactorAuthentication() {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const web = {
        title: t("Two step authentication"),
        image: "storage/images/undraw/Code_typing.png",
    };

    initSite(web);

    useEffect(() => {
        checkPasswordConfirm();
    }, []);

    const [qr, setQr] = useState(null);

    const user = useSelector(userData);

    const status = user["two_factor_confirmed_at"]
        ? {
              text: {
                  class: "text-success",
                  label: t("Enabled"),
              },
              button: {
                  class: "btn-danger",
                  label: t("Disable"),
                  handleEvent: disableTwoStepAuthentication,
              },
          }
        : {
              text: {
                  class: "text-danger",
                  label: t("Disabled"),
              },
              button: {
                  class: "btn-success",
                  label: t("Enable"),
                  handleEvent: () => {
                      enableTwoFactorAuthentication()
                          .then((success) => {
                              dispatch(setToast(success.data));

                              setQr({ __html: success.data["qr_code"]["svg"] });
                          })
                          .catch((error) =>
                              dispatch(
                                  setToast({
                                      message: error.response.data.message,
                                  }),
                              ),
                          );
                  },
              },
          };

    function disableTwoStepAuthentication() {
        disableTwoFactorAuthentication()
            .then((success) => {
                dispatch(setToast(success.data));

                setQr(null);

                dispatch(refreshUser());
            })
            .catch((error) =>
                dispatch(setToast({ message: error.response.data.message })),
            );
    }

    return (
        <Form title={web.title} image={web.image}>
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("Two step authentication")}
                    <span className={status.text.class}>
                        {" "}
                        ({status.text.label})
                    </span>
                </div>
                <div className="col-md-7">
                    <div className="d-flex align-items-center">
                        <button
                            className={`btn ${status.button.class} mb-2 me-2`}
                            type="button"
                            role="button"
                            aria-label={status.button.label}
                            onClick={status.button.handleEvent}
                        >
                            {status.button.label}
                        </button>
                    </div>
                </div>
            </div>
            {user["two_factor_confirmed_at"] ? (
                <TwoFactorRecoveryCodes />
            ) : (
                <ConfirmedEnableTwoFactorAuth qr={qr} />
            )}
        </Form>
    );
}
