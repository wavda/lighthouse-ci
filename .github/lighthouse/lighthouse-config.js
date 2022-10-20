module.exports = {
    extends: 'lighthouse:default',
    settings: {
        onlyCategories: ['performance'],
        passes: [
            {
                passName: 'fastPass',
                useThrottling: false,
            }
        ]
    },
  };