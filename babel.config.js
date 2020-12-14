module.exports = function (api) {
    api.cache(true);

    return {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "useBuiltIns": "entry",
                    "corejs": "3"
                }
            ],
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        "plugins": [
            "babel-plugin-styled-components",
            "babel-plugin-macros"
        ]
    }
}