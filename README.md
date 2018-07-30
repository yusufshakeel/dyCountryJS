# dyCountryJS
Dictionary to get country info.


## Status

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yusufshakeel/dyCountryJS)
[![npm version](https://img.shields.io/badge/npm-0.6.7-blue.svg)](https://www.npmjs.com/package/dycountryjs)
[![Build Status](https://travis-ci.org/yusufshakeel/dyCountryJS.svg?branch=master)](https://travis-ci.org/yusufshakeel/dyCountryJS)
[![](https://data.jsdelivr.com/v1/package/npm/dycountryjs/badge)](https://www.jsdelivr.com/package/npm/dycountryjs)


## Getting Started
* Download the [latest release](https://github.com/yusufshakeel/dyCountryJS/releases) of the project.
* Clone the repo: `git clone https://github.com/yusufshakeel/dyCountryJS.git`
* Install via npm: `npm install --save dycountryjs`
* Use from jsDelivr CDN: `https://www.jsdelivr.com/package/npm/dycountryjs`


## Documentation
Check the `index.html` file of this project.


## How to setup?

Run `npm install` to install all the packages.

Then run `npm run all` to build and run the tests.

You will get the minified file inside `dist/js` directory.


## How to use?

1. Include dyCountry.min.js file.

```HTML
<!DOCTYPE html>
<html>
<head>
  <title>dyCountryJS Demo</title>
</head>
<body>

<!-- some html goes here -->

<!-- script -->
<script src="path/to/dyCountry.min.js"></script>
</body>
</html>
```


2. Create an instance of dyCountry class and pass an optional config.

```JavaScript
var config = {
  flagDir: 'path/to/dist/flags'
};
var obj = new dyCountry(config);
```


3. Call methods like ```get``` to fetch data of a country based on ISO-Alpha-2 or ISO-Alpha-3 code.

```
var data = obj.get('IN');
```


# Methods


## ```get()``` returns the country detail

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country information.

```JavaScript
obj.get('IN');
```

```JavaScript
obj.get('IND');
```

### Result

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
  "latlong": {
    "lat": 20.593684,
    "long": 78.96288
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


## ```name()``` returns the country name

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country name.

```JavaScript
obj.name('IN');
```

```JavaScript
obj.name('IND');
```

### Result

```
"India"
```


## ```capital()``` returns the country capital

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country capital.

```JavaScript
obj.capital('IN');
```

```JavaScript
obj.capital('IND');
```

### Result

```
"New Delhi"
```


## ```flag()``` returns the country flag image path

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country flag image path.

```JavaScript
obj.flag('IN');
```

```JavaScript
obj.flag('IND');
```

### Result

```
"dist/flags/in.png"
```

Using the flag path in ```img``` HTML element:

![India Flag](https://cdn.jsdelivr.net/npm/dycountryjs@0.6.5/dist/flags/in.png)


## ```latlong()``` returns the country lat-long data

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country lat-long data.

```JavaScript
obj.latlong('IN');
```

```JavaScript
obj.latlong('IND');
```

### Result

```
{
  "lat": 20.593684,
  "long": 78.96288
}
```

Pass ISO-Alpha-2 or ISO-Alpha-3 country code and key to the method and it will return either country lat/long country data.

```JavaScript
obj.latlong('IN', 'lat');
```

```JavaScript
obj.latlong('IND', 'lat');
```

### Result

```
20.593684
```


## ```iso()``` returns the country iso data

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country iso data.

```JavaScript
obj.iso('IN');
```

```JavaScript
obj.iso('IND');
```

### Result

```
{
  "alpha2": "IN",
  "alpha3": "IND",
  "numeric": "356"
}
```

Pass ISO-Alpha-2 or ISO-Alpha-3 country code and key to the method and it will return specify country iso data.

```JavaScript
obj.iso('IN', 'alpha3');
```

```JavaScript
obj.iso('IND', 'alpha3');
```

### Result

```
"IND"
```


## ```continent()``` returns the country continent data

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country continent data.

```JavaScript
obj.continent('IN');
```

```JavaScript
obj.continent('IND');
```

### Result

```
{
  "code": "AS",
  "name": "Asia"
}
```

Pass ISO-Alpha-2 or ISO-Alpha-3 country code and key to the method and it will return specify country continent data.

```JavaScript
obj.continent('IN', 'name');
```

```JavaScript
obj.continent('IND', 'name');
```

### Result

```
"Asia"
```


## ```tld()``` returns the country top level domain

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country tld.

```JavaScript
obj.tld('IN');
```

```JavaScript
obj.tld('IND');
```

### Result

```
"in"
```


## ```timezone()``` returns the country timezone for capital

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country timezone.

```JavaScript
obj.timezone('IN');
```

```JavaScript
obj.timezone('IND');
```

### Result

```
"Asia/Kolkata"
```


## ```fipsCode()``` returns the country fips code

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country fips code.

```JavaScript
obj.fipsCode('IN');
```

```JavaScript
obj.fipsCode('IND');
```

### Result

```
"IN"
```


## ```phoneCode()``` returns the country phone code

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country phone code.

```JavaScript
obj.phoneCode('IN');
```

```JavaScript
obj.phoneCode('IND');
```

### Result

```
[
  "91"
]
```


## ```currencies()``` returns the country currencies

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country currencies.

```JavaScript
obj.currencies('IN');
```

```JavaScript
obj.currencies('IND');
```

### Result

```
[
  "INR"
]
```


## ```languages()``` returns the country languages

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return the country languages.

```JavaScript
obj.languages('IN');
```

```JavaScript
obj.languages('IND');
```

### Result

```
[
  "en-IN"
]
```


## ```all()``` returns all the countries detail

Pass ISO-Alpha-2 or ISO-Alpha-3 country code to the method and it will return all the countries detail.

```JavaScript
obj.all();
```

### Result

```
[
  { country-detail },
  { country-detail },
  ...
  ...
]
```

## More methods...

* ```search()``` returns all the countries matching the search query

* ```getSelectHTML()``` returns HTML select element of countries

Check the `index.html` file of this project.



# License

It's free and released under [MIT License](https://github.com/yusufshakeel/dyCountryJS/blob/master/LICENSE) Copyright (c) 2018 Yusuf Shakeel

Do whatever you want with this :-)


# Donate

Feeling generous :-) Buy me a cup of tea.

[Donate via PayPal](https://www.paypal.me/yusufshakeel)