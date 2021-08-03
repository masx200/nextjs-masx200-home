module.exports = function (api) {
    return {
        presets: ["next/babel"],
        plugins: [api.env("production") && "babel-plugin-clean-code"].filter(
            Boolean
        ),
    };
};
