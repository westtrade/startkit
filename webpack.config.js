const easy = require('@easy-webpack/core');
const sass = require('@easy-webpack/config-sass');
const css = require('@easy-webpack/config-css');
const babel = require('@easy-webpack/config-babel');
const json = require('@easy-webpack/config-json');
const fonts = require('@easy-webpack/config-fonts-and-images');

const entry = './src/entry.js';
const output =  {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
};

const config = easy.generateConfig(
    { entry, output, },
    sass(), css(), json(), fonts(),
    babel({
        options: {
            presets: ['env'],
        },
    }),
);

delete config.metadata;

module.exports = config;