module.exports = function (api) {
    return {
        presets: [
            [
                "next/babel",
                {
                    "styled-jsx": {
                        sourceMaps: api.env("development"),
                        plugins: ["styled-jsx-plugin-postcss"],
                    },
                },
            ],
        ],
        plugins: [
            api.env("production") && "babel-plugin-clean-code",
            "@babel/plugin-transform-react-constant-elements",
        ].filter(Boolean),
    };
};
