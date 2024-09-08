import Navbar from "../../components/navbar"
import GuideParagraph from "../../components/guides/paragraph"
import TitleAuthor from "../../components/guides/title_author"
import { useTranslation } from "react-i18next"

export default function LowerHomeWorkout() {

    const {t} = useTranslation()
    return (
        <div className="relative flex flex-col items-center pb-12">
            <Navbar></Navbar>
            <div className="w-full px-6 md:w-1/2 mt-36">
                <TitleAuthor title={t("a3t")} author={t("a3a")} date={"2022/09/08"}></TitleAuthor>

                <GuideParagraph>
                {t("a3p1")}
                </GuideParagraph>

                <GuideParagraph title={t("a3t2")}>
                {t("a3p2")}
                </GuideParagraph>
                <GuideParagraph>
                {t("a3p3")}
                </GuideParagraph>
                <GuideParagraph>
                {t("a3p4")}
                </GuideParagraph>
                <GuideParagraph>
                {t("a3p5")}
                </GuideParagraph>

                <GuideParagraph title={""}>
                <hr className="border border-black"/>
                </GuideParagraph>
                <GuideParagraph title={t("a3t6")}>
                {t("a3p6")}
                </GuideParagraph>
                <GuideParagraph title={""}>
                {t("a3p7")}
                </GuideParagraph>
                <GuideParagraph title={""}>
                {t("a3p8")}
                </GuideParagraph>

                <GuideParagraph title={""}>
                <hr className="border border-black"/>
                </GuideParagraph>

                <GuideParagraph title={t("a3t9")}>
                {t("a3p9")}
                </GuideParagraph>
                <GuideParagraph title={""}>
                {t("a3p10")}
                </GuideParagraph>
                <GuideParagraph title={""}>
                <hr className="border border-black"/>
                </GuideParagraph>
                <GuideParagraph title={""}>
                {t("a3p11")}
                </GuideParagraph>
                
            </div>

        </div>
    )
}