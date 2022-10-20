module.exports = {
    extends: 'lighthouse:default',
    settings: {
        onlyCategories: ['performance'],
        passes: [
            {
                passName: 'fastPass',
                recordTrace: true,
                useThrottling: false,
            }
        ]
    },
  };