import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {i18nResources} from "./resources";

export function configureI18n() {
    i18n.use(initReactI18next)
        .init({
            resources: i18nResources as any,
            lng: "ar", fallbackLng: "ar",
            interpolation: {
                escapeValue: false
            }
        });
}