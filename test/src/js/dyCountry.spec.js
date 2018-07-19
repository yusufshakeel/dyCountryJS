/*!
 * dyCountryJS
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyCountryJS
 *
 * MIT license
 * Copyright (c) 2018 Yusuf Shakeel
 *
 * Date: 2016-04-05 Tuesday
 */

const assert = require('chai').assert;
const dyCountry = require('../../../temp/js/dyCountry.forTest.min');

describe('Testing dyCountryJS', () => {

    let obj;

    beforeEach(() => {
        obj = new dyCountry();
    });

    /**
     * Check obj is an instance of the class
     */
    it('check obj is an instance of dyCountryJS class.', () => {
        assert.instanceOf(obj, dyCountry, 'obj is instance of dyCountry class');
    });

    /**
     * get() country detail using iso-alpha-2 code
     */
    it('should fetch country by iso-alpha-2 code', () => {
        let countryData = obj.get('IN');
        assert(countryData.iso.alpha2, 'IN', 'iso-alpha-2 country code is a match');
    });

    /**
     * get() country detail using iso-alpha-3 code
     */
    it('should fetch country by iso-alpha-3 code', () => {
        let countryData = obj.get('IND');
        assert(countryData.iso.alpha3, 'IND', 'iso-alpha-3 country code is a match');
    });

    /**
     * get capital() of a country using iso-alpha-2 code
     */
    it('should fetch country capital by iso-alpha-2 code', () => {
        let countryData = obj.capital('IN');
        assert(countryData, 'New Delhi', 'iso-alpha-2 country capital is a match');
    });

    /**
     * get capital() of a country using iso-alpha-3 code
     */
    it('should fetch country capital by iso-alpha-3 code', () => {
        let countryData = obj.capital('IND');
        assert(countryData, 'New Delhi', 'iso-alpha-3 country capital is a match');
    });

});