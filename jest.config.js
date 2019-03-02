module.exports =
    {
        transform: {
            '^.+\\.js$': 'babel-jest'
        },
        moduleNameMapper: {
            '\\.(css|scss)$': '<rootDir>/mockcss.js',
        },
        transformIgnorePatterns:
            ['node_modules']
    };
