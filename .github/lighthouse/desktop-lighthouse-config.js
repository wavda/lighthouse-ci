module.exports = {
    extends: 'lighthouse:default',
    settings: {
      screenEmulation: {
        "disabled": true
      },
      onlyCategories: ['performance'],
      throttlingMethod: "provided"
  }
}