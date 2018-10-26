module.exports = {
    moduleFileExtensions: ['js'],
    transform: {
        '^.+\\.(js)?$': 'babel-jest'
    },
    testMatch: [
        '<rootDir>/*.test.js'
    ],
    transformIgnorePatterns: ['./node_modules/']
};