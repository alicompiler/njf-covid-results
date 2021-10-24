export const i18nResources: TranslationResources = {
    en: {
        translation: {
            import_box_message: 'Upload Your Excel File (Click Or Drop Your File Here)',
            date: 'Date',
            upload: 'Upload'
        }
    },
    ar: {
        translation: {
            import_box_message: 'ارفع ملف الاكسل (اضغط او اسحب الملف هنا)',
            date: 'التاريخ',
            upload: 'ارفع الملفات'
        }
    }
};


interface TranslationResources {
    en: {
        translation: TranslationItems;
    };
    ar: {
        translation: TranslationItems;
    };
}

interface TranslationItems {
    import_box_message: string;
    date: string;
    upload: string;
}