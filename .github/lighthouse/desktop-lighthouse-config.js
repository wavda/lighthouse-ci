module.exports = {
    extends: 'lighthouse:default',
    settings: {
      formFactor: "desktop",
      screenEmulation: {
        "mobile": false,
        "width": 1366,
        "height": 768,
        "deviceScaleFactor": 2,
        "emulatedUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Safari/537.36 Chrome-Lighthouse"
      },
      onlyCategories: ['performance'],
      throttlingMethod: "provided"
  }
}