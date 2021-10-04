module.exports = {
    purge: {
        content : [
            './src/**/*.ts',
            './src/**/*.tsx',
        ],
        enabled: true,
        mode : 'all',
    },
    theme: {
        extend: {
            colors: {
                "bg-primary": "#292851",
            },
            width: {
                '100px': "100px",
                "150px": "150px",
                "240px": "240px",
                "200px" : "200px"
            },
            height: {
                "240px": "240px",
                "150px": "150px",
                "200px" : "200px",
            }
        }
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ],
};
