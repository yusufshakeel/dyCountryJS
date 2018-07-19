# dyCountryJS
Dictionary to get country info.


### Status

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yusufshakeel/dyCountryJS)
[![npm version](https://img.shields.io/badge/npm-0.1.3-blue.svg)](https://www.npmjs.com/package/dycountryjs)
[![Build Status](https://travis-ci.org/yusufshakeel/dyCountryJS.svg?branch=master)](https://travis-ci.org/yusufshakeel/dyCountryJS)
[![](https://data.jsdelivr.com/v1/package/npm/dycountryjs/badge)](https://www.jsdelivr.com/package/npm/dycountryjs)


### Getting Started
* Download the [latest release](https://github.com/yusufshakeel/dyCountryJS/releases) of the project.
* Clone the repo: `git clone https://github.com/yusufshakeel/dyCountryJS.git`
* Install via npm: `npm install --save dycountryjs`
* Use from jsDelivr CDN: `https://www.jsdelivr.com/package/npm/dycountryjs`


### Documentation
Check the `index.html` file of this project.


### How to use?

1. Create an instance of dyCountry class.

```
var obj = new dyCountry();
```

2. Call method like ```get``` to fetch data of a country based on ISO-Alpha-2 or ISO-Alpha-3 code.

```
var data = obj.get('IN');
```

#### Result

```
{
  "name": "India",
  "capital": "New Delhi",
  "continent": {
    "code": "AS",
    "name": "Asia"
  },
  "iso": {
    "alpha2": "IN",
    "alpha3": "IND",
    "numeric": "356"
  },
  "timezone": {
    "capital": "Asia/Kolkata"
  },
  "topLevelDomain": "in",
  "fipsCode": "IN",
  "phoneCode": [
    "91"
  ],
  "currencies": [
    "INR"
  ],
  "languages": [
    "en-IN"
  ],
  "flag": "dist/flags/in.png"
}
```

### License
It's free and released under [MIT License](https://github.com/yusufshakeel/dyCountryJS/blob/master/LICENSE) Copyright (c) 2018 Yusuf Shakeel


### Donate
Feeling generous :-) Buy me a cup of tea.

[Donate via PayPal](https://www.paypal.me/yusufshakeel)


### How to setup?

Run `npm install` to install all the packages.

Then run `npm run all` to build and run the tests.

You will get the minified file inside `dist/js` directory.