module.exports = {
    extends: 'lighthouse:default',
    settings: {
      formFactor: "desktop",
      screenEmulation: 'disabled',
      onlyCategories: ['performance'],
      throttlingMethod: "provided"
  }
}