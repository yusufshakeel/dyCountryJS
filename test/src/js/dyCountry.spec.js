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
            flagDir: 'path/to/dist/flags'
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
     * get name() country name using iso-alpha-2 code
     */
    it('should fetch country name by iso-alpha-2 code', () => {
        let countryData = obj.name('IN');
        assert.equal(countryData, 'India');
    });

    /**
     * get name() country name using iso-alpha-23 code
     */
    it('should fetch country name by iso-alpha-3 code', () => {
        let countryData = obj.name('IND');
        assert.equal(countryData, 'India');
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
     * get iso() of a country using iso-alpha-3 code and key
     */
    it('should fetch country iso by iso-alpha-3 code and key', () => {
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

    /**
     * get continent() of a country using iso-alpha-3 code
     */
    it('should fetch country continent by iso-alpha-3 code', () => {
        let countryData = obj.continent('IND');
        assert.equal(countryData.code, 'AS');
    });

    /**
     * get continent() of a country using iso-alpha-3 code and key
     */
    it('should fetch country continent by iso-alpha-3 code and key', () => {
        let countryData = obj.continent('IND', 'name');
        assert.equal(countryData, 'Asia');
    });

    /**
     * get tld() of a country using iso-alpha-2 code
     */
    it('should fetch country tld by iso-alpha-2 code', () => {
        let countryData = obj.tld('IN');
        assert.equal(countryData, 'in');
    });

    /**
     * get tld() of a country using iso-alpha-3 code
     */
    it('should fetch country tld by iso-alpha-3 code', () => {
        let countryData = obj.tld('IND');
        assert.equal(countryData, 'in');
    });

    /**
     * get timezone() of a country using iso-alpha-2 code
     */
    it('should fetch country timezone by iso-alpha-2 code', () => {
        let countryData = obj.timezone('IN');
        assert.equal(countryData, 'Asia/Kolkata');
    });

    /**
     * get timezone() of a country using iso-alpha-3 code
     */
    it('should fetch country timezone by iso-alpha-3 code', () => {
        let countryData = obj.timezone('IND');
        assert.equal(countryData, 'Asia/Kolkata');
    });

    /**
     * get fipsCode() of a country using iso-alpha-2 code
     */
    it('should fetch country fipsCode by iso-alpha-2 code', () => {
        let countryData = obj.fipsCode('IN');
        assert.equal(countryData, 'IN');
    });

    /**
     * get fipsCode() of a country using iso-alpha-3 code
     */
    it('should fetch country fipsCode by iso-alpha-3 code', () => {
        let countryData = obj.fipsCode('IND');
        assert.equal(countryData, 'IN');
    });

    /**
     * get phoneCode() of a country using iso-alpha-2 code
     */
    it('should fetch country phoneCode by iso-alpha-2 code', () => {
        let countryData = obj.phoneCode('IN');
        assert.equal(countryData[0], '91');
    });

    /**
     * get phoneCode() of a country using iso-alpha-3 code
     */
    it('should fetch country phoneCode by iso-alpha-3 code', () => {
        let countryData = obj.phoneCode('IND');
        assert.equal(countryData[0], '91');
    });

    /**
     * get currencies() of a country using iso-alpha-2 code
     */
    it('should fetch country currencies by iso-alpha-2 code', () => {
        let countryData = obj.currencies('IN');
        assert.equal(countryData[0], 'INR');
    });

    /**
     * get currencies() of a country using iso-alpha-3 code
     */
    it('should fetch country currencies by iso-alpha-3 code', () => {
        let countryData = obj.currencies('IND');
        assert.equal(countryData[0], 'INR');
    });

    /**
     * get languages() of a country using iso-alpha-2 code
     */
    it('should fetch country languages by iso-alpha-2 code', () => {
        let countryData = obj.languages('IN');
        assert.equal(countryData[0], 'en-IN');
    });

    /**
     * get languages() of a country using iso-alpha-3 code
     */
    it('should fetch country languages by iso-alpha-3 code', () => {
        let countryData = obj.languages('IND');
        assert.equal(countryData[0], 'en-IN');
    });

    /**
     * get all() countries detail
     */
    it('should fetch all countries detail', () => {
        let countryData = obj.all();
        let matchingData = obj.get(countryData[0]['iso']['alpha2']);
        assert.deepEqual(countryData[0], matchingData);
    });

    /**
     * get latlong() of a country using iso-alpha-2 code
     */
    it('should fetch country latlong by iso-alpha-2 code', () => {
        let countryData = obj.latlong('IN');
        assert.deepEqual(countryData, {lat: 20.593684, long: 78.96288});
    });

    /**
     * get latlong() of a country using iso-alpha-3 code
     */
    it('should fetch country latlong by iso-alpha-3 code', () => {
        let countryData = obj.latlong('IND');
        assert.deepEqual(countryData, {lat: 20.593684, long: 78.96288});
    });

    /**
     * get search() for a country using string query
     */
    it('should fetch country using string query', () => {
        let countryData = obj.search('India');
        assert.equal(countryData.match, 2);
        assert.deepEqual(countryData.result[1].name, 'India');
    });

    /**
     * get search() for a country using object name query
     */
    it('should fetch country using object name query', () => {
        let countryData = obj.search({name: 'India'});
        assert.equal(countryData.match, 2);
        assert.deepEqual(countryData.result[1].name, 'India');
    });

    /**
     * get search() for a country using object name array query
     */
    it('should fetch country using object name query', () => {
        let countryData = obj.search({name: ['India', 'Japan']});
        assert.equal(countryData.match, 3);
        assert.deepEqual(countryData.result[1].name, 'India');
    });

    /**
     * get search() for a country using object capital query
     */
    it('should fetch country using object capital query', () => {
        let countryData = obj.search({capital: 'delhi'});
        assert.equal(countryData.match, 1);
        assert.deepEqual(countryData.result[0].capital, 'New Delhi');
    });

    /**
     * get search() for a country using object capital array query
     */
    it('should fetch country using object capital array query', () => {
        let countryData = obj.search({capital: ['delhi', 'tokyo']});
        assert.equal(countryData.match, 2);
        assert.deepEqual(countryData.result[0].capital, 'New Delhi');
    });

    /**
     * get search() for a country using object topLevelDomain query
     */
    it('should fetch country using object topLevelDomain query', () => {
        let countryData = obj.search({topLevelDomain: 'in'});
        assert.equal(countryData.match, 1);
        assert.deepEqual(countryData.result[0].topLevelDomain, 'in');
    });

    /**
     * get search() for a country using object topLevelDomain array query
     */
    it('should fetch country using object topLevelDomain query', () => {
        let countryData = obj.search({topLevelDomain: ['in', 'au']});
        assert.equal(countryData.match, 2);
        assert.deepEqual(countryData.result[1].topLevelDomain, 'in');
    });

    /**
     * get search() for a country using object fipsCode query
     */
    it('should fetch country using object fipsCode query', () => {
        let countryData = obj.search({fipsCode: 'in'});
        assert.equal(countryData.match, 1);
        assert.deepEqual(countryData.result[0].fipsCode, 'IN');
    });

    /**
     * get search() for a country using object fipsCode array query
     */
    it('should fetch country using object fipsCode array query', () => {
        let countryData = obj.search({fipsCode: ['in', 'us']});
        assert.equal(countryData.match, 2);
        assert.deepEqual(countryData.result[0].fipsCode, 'IN');
    });

    /**
     * get search() for a country using object phoneCode query
     */
    it('should fetch country using object phoneCode query', () => {
        let countryData = obj.search({phoneCode: '91'});
        assert.equal(countryData.match, 1);
        assert.deepEqual(countryData.result[0].phoneCode[0], '91');
    });

    /**
     * get search() for a country using object phoneCode array query
     */
    it('should fetch country using object phoneCode array query', () => {
        let countryData = obj.search({phoneCode: ['91']});
        assert.equal(countryData.match, 1);
        assert.deepEqual(countryData.result[0].phoneCode[0], '91');
    });

    /**
     * get search() for a country using object currencies query
     */
    it('should fetch country using object currencies query', () => {
        let countryData = obj.search({currencies: 'inr'});
        assert.equal(countryData.match, 1);
        assert.deepEqual(countryData.result[0].currencies[0], 'INR');
    });

    /**
     * get search() for a country using object currencies array query
     */
    it('should fetch country using object currencies array query', () => {
        let countryData = obj.search({currencies: ['inr']});
        assert.equal(countryData.match, 1);
        assert.deepEqual(countryData.result[0].currencies[0], 'INR');
    });

    /**
     * get search() for a country using object languages query
     */
    it('should fetch country using object languages query', () => {
        let countryData = obj.search({languages: 'IN'});
        assert.deepEqual(countryData.result[0].languages[0], 'en-IN');
    });

    /**
     * get search() for a country using object languages array query
     */
    it('should fetch country using object languages array query', () => {
        let countryData = obj.search({languages: ['IN']});
        assert.deepEqual(countryData.result[0].languages[0], 'en-IN');
    });

    /**
     * get search() for a country using object continentCode query
     */
    it('should fetch country using object continentCode query', () => {
        let countryData = obj.search({continentCode: 'AS'});
        assert.deepEqual(countryData.result[0].continent.code, 'AS');
    });

    /**
     * get search() for a country using object continentCode array query
     */
    it('should fetch country using object continentCode array query', () => {
        let countryData = obj.search({continentCode: ['AS']});
        assert.deepEqual(countryData.result[0].continent.code, 'AS');
    });

    /**
     * get search() for a country using object continentName query
     */
    it('should fetch country using object continentName query', () => {
        let countryData = obj.search({continentName: 'Asia'});
        assert.deepEqual(countryData.result[0].continent.name, 'Asia');
    });

    /**
     * get search() for a country using object continentName array query
     */
    it('should fetch country using object continentName array query', () => {
        let countryData = obj.search({continentName: ['Asia']});
        assert.deepEqual(countryData.result[0].continent.name, 'Asia');
    });

    /**
     * get search() for multi query parameters
     */
    it('should fetch country using object having multi query parameters', () => {
        let countryData = obj.search({name: 'In', capital: 'del'});
        assert.deepEqual(countryData.result[0].name, 'India');
    });

});