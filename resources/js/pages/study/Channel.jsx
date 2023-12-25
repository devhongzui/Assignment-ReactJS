import { useTranslation } from "react-i18next";
import { assetHelper, initSite } from "../../helper.js";
import { useEffect, useState } from "react";
import { channel } from "../../services/study.jsx";
import { useParams } from "react-router-dom";
import Detail from "../../components/study/course/Detail.jsx";

export default function Channel() {
    const { t } = useTranslation();

    const { channel_id } = useParams();

    const [channelInformation, setChannelInformation] = useState(null);

    useEffect(() => {
        channel(channel_id).then((success) => {
            setChannelInformation(success.data);

            initSite({
                title: [t("Course"), success.data.title].join(": "),
                description: success.data.description,
                image: assetHelper(success.data.image),
            });
        });
    }, []);

    return (
        <div className="container my-3">
            {channelInformation && (
                <Detail
                    title={channelInformation.title}
                    subTitle={""}
                    description={channelInformation.description}
                    image={{
                        src:
                            channelInformation["thumbnails"][
                                channelInformation["thumbnails"].length - 1
                            ]?.url ?? assetHelper("logo.png"),
                        class: "object-fit-contain bg-light p-2",
                    }}
                    pills={[]}
                />
            )}
        </div>
    );
}
