export const i18nResources: TranslationResources = {
    en: {
        translation: {
            import_box_message: 'Upload Your Excel File (Click Or Drop Your File Here)',
            date: 'Date',
            upload: 'Upload',
            search_by_name_or_phone : 'search by name or phone ...'
        }
    },
    ar: {
        translation: {
            import_box_message: 'ارفع ملف الاكسل (اضغط او اسحب الملف هنا)',
            date: 'التاريخ',
            upload: 'ارفع الملفات',
            search_by_name_or_phone : 'ابحث بواسطة الاسم او الهاتف'
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
    search_by_name_or_phone : string;
}