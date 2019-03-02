module.exports = 
    {
        transform: {
            '^.+\\.js$': 'babel-jest'
        },
        moduleNameMapper: {
            '\\.(css|scss)$': '<rootDir>/mockcs.js',
        },
        transformIgnorePatterns:
            ['node_modules']
    };
