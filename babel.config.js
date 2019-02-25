// babel.config.js
module.exports = {
    presets: [
        '@babel/preset-env'
    ],
    env: {
        test: {
            presets: [
                '@babel/preset-env'
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-modules-commonjs',
                'babel-plugin-dynamic-import-node',
                "transform-es2015-modules-commonjs"
            ],
        },
    },

};
