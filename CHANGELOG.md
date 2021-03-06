# Change Log

All notable changes to this project will be documented in this file.

---

# [0.8.1](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.8.1) - 2018-07-31

### Added

* search countries by multiple queries using `search()` method.

### Update

* search countries by
  * `name` array like ['ind', 'aus']
  * `capital` array like ['delhi', 'tokyo']
  * `topLevelDomain` array like ['in', 'us']
  * `fipsCode` array like ['in', 'us']

* index.html - Methods doc update.
* README.md - Methods doc update.

---

# [0.7.2](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.7.2) - 2018-07-31

### Update

* README.md - Documentation of methods.

---

# [0.7.1](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.7.1) - 2018-07-30

### Added

* getSelectHTML method - Configuration to sort list of countries.
* getSelectHTML method - Adding HTML data attribute.

---

# [0.6.9](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.6.9) - 2018-07-30

### Updated

* getSelectHTML method.

---

# [0.6.7](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.6.7) - 2018-07-30

### Added

* getSelectHTML method to get HTML select element with configurable options.


### Updated

* README.md file - Added details of the methods.

---

# [0.6.5](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.6.5) - 2018-07-26

### Added

* `search` by continentCode, continentName

---

# [0.6.3](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.6.3) - 2018-07-24

### Added

* `search` by phoneCode, currencies, languages

---

# [0.6.0](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.6.0) - 2018-07-23

### Added

* `search` by name, capital, topLevelDomain, fipsCode

---

# [0.5.1](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.5.1) - 2018-07-23

### Added

* `latlong` parameter which holds the latitude and longitude of the country.

### Sample Output:

```
{
  "lat": 20.593684,
  "long": 78.96288
}
```

---

# [0.4.1](https://github.com/yusufshakeel/dyCountryJS/releases/tag/v0.4.1) - 2018-07-20

### Added

Following data will be listed:

* Country Name
* Country Capital
* Continent
  * Name
  * Code
* ISO
  * Alpha2 Code
  * Alpha3 Code
  * Numeric
* Timezone
  * Capital
* Top Level Domain
* FIPS Code
* Phone Code
* Currencies
* Languages
* Flag Image

### Sample Ouptut

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

---