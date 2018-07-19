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
        obj = new dyCountry({
            flagDirPath: 'path/to/dist/flags'
        });
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
        assert.equal(countryData.iso.alpha2, 'IN');
    });

    /**
     * get() country detail using iso-alpha-3 code
     */
    it('should fetch country by iso-alpha-3 code', () => {
        let countryData = obj.get('IND');
        assert.equal(countryData.iso.alpha3, 'IND');
    });

    /**
     * get capital() of a country using iso-alpha-2 code
     */
    it('should fetch country capital by iso-alpha-2 code', () => {
        let countryData = obj.capital('IN');
        assert.equal(countryData, 'New Delhi');
    });

    /**
     * get capital() of a country using iso-alpha-3 code
     */
    it('should fetch country capital by iso-alpha-3 code', () => {
        let countryData = obj.capital('IND');
        assert.equal(countryData, 'New Delhi');
    });

    /**
     * get iso() of a country using iso-alpha-2 code
     */
    it('should fetch country iso by iso-alpha-2 code', () => {
        let countryData = obj.iso('IN');
        assert.equal(countryData.alpha2, 'IN');
    });

    /**
     * get iso() of a country using iso-alpha-2 code and type
     */
    it('should fetch country iso by iso-alpha-2 code and type', () => {
        let countryData = obj.iso('IN', 'alpha2');
        assert.equal(countryData, 'IN');
    });

    /**
     * get iso() of a country using iso-alpha-3 code
     */
    it('should fetch country iso by iso-alpha-3 code', () => {
        let countryData = obj.iso('IND');
        assert.equal(countryData.alpha3, 'IND');
    });

    /**
     * get iso() of a country using iso-alpha-3 code and type
     */
    it('should fetch country iso by iso-alpha-3 code and type', () => {
        let countryData = obj.iso('IND', 'alpha3');
        assert.equal(countryData, 'IND');
    });

    /**
     * get flag() of a country using iso-alpha-2 code
     */
    it('should fetch country flag by iso-alpha-2 code', () => {
        let countryData = obj.flag('IN');
        assert.equal(countryData, 'path/to/dist/flags/in.png');
    });

    /**
     * get flag() of a country using iso-alpha-3 code
     */
    it('should fetch country flag by iso-alpha-3 code', () => {
        let countryData = obj.flag('IND');
        assert.equal(countryData, 'path/to/dist/flags/in.png');
    });

});