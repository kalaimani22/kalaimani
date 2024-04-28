// jest.config.js
module.exports = {
    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx', // Add this line
        'jsx',     // Add this line
        'node',
      ],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
  };
  