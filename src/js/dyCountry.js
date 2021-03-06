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

class dyCountry {

    /**
     * The constructor.
     *
     * @param {object} config
     */
    constructor(config) {

        this._config = config;

        this._data = {
            "AF": {
                "name": "Afghanistan",
                "capital": "Kabul",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "AF",
                    "alpha3": "AFG",
                    "numeric": "004"
                },
                "timezone": {
                    "capital": "Asia/Kabul"
                },
                "latlong": {
                    "lat": 33.93911,
                    "long": 67.709953
                },
                "topLevelDomain": "af",
                "fipsCode": "AF",
                "phoneCode": ["93"],
                "currencies": ["AFN"],
                "languages": ["fa-AF", "ps", "uz-AF", "tk"]
            },
            "AX": {
                "name": "Aland",
                "capital": "Mariehamn",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "AX",
                    "alpha3": "ALA",
                    "numeric": "248"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": 60.1995487,
                    "long": 20.3711715
                },
                "topLevelDomain": "",
                "fipsCode": "",
                "phoneCode": ["358"],
                "currencies": ["EUR"],
                "languages": ["sv-AX"]
            },
            "AL": {
                "name": "Albania",
                "capital": "Tirana",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "AL",
                    "alpha3": "ALB",
                    "numeric": "008"
                },
                "timezone": {
                    "capital": "Europe/Tirane"
                },
                "latlong": {
                    "lat": 41.153332,
                    "long": 20.168331
                },
                "topLevelDomain": "al",
                "fipsCode": "AL",
                "phoneCode": ["355"],
                "currencies": ["ALL"],
                "languages": ["sq", "el"]
            },
            "DZ": {
                "name": "Algeria",
                "capital": "Algiers",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "DZ",
                    "alpha3": "DZA",
                    "numeric": "012"
                },
                "timezone": {
                    "capital": "Africa/Algiers"
                },
                "latlong": {
                    "lat": 28.033886,
                    "long": 1.659626
                },
                "topLevelDomain": "dz",
                "fipsCode": "AG",
                "phoneCode": ["213"],
                "currencies": ["DZD"],
                "languages": ["ar-DZ"]
            },
            "AS": {
                "name": "American Samoa",
                "capital": "Pago Pago",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "AS",
                    "alpha3": "ASM",
                    "numeric": "016"
                },
                "timezone": {
                    "capital": "Pacific/Pago_Pago"
                },
                "latlong": {
                    "lat": -14.270972,
                    "long": -170.132217
                },
                "topLevelDomain": "as",
                "fipsCode": "AQ",
                "phoneCode": ["1-684"],
                "currencies": ["USD"],
                "languages": ["en-AS", "sm", "to"]
            },
            "AD": {
                "name": "Andorra",
                "capital": "Andorra la Vella",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "AD",
                    "alpha3": "AND",
                    "numeric": "020"
                },
                "timezone": {
                    "capital": "Europe/Andorra"
                },
                "latlong": {
                    "lat": 42.546245,
                    "long": 1.601554
                },
                "topLevelDomain": "ad",
                "fipsCode": "AN",
                "phoneCode": ["376"],
                "currencies": ["EUR"],
                "languages": ["ca"]
            },
            "AO": {
                "name": "Angola",
                "capital": "Luanda",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "AO",
                    "alpha3": "AGO",
                    "numeric": "024"
                },
                "timezone": {
                    "capital": "Africa/Luanda"
                },
                "latlong": {
                    "lat": -11.202692,
                    "long": 17.873887
                },
                "topLevelDomain": "ao",
                "fipsCode": "AO",
                "phoneCode": ["244"],
                "currencies": ["AOA"],
                "languages": ["pt-AO"]
            },
            "AI": {
                "name": "Anguilla",
                "capital": "The Valley",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "AI",
                    "alpha3": "AIA",
                    "numeric": "660"
                },
                "timezone": {
                    "capital": "America/Anguilla"
                },
                "latlong": {
                    "lat": 18.220554,
                    "long": -63.068615
                },
                "topLevelDomain": "ai",
                "fipsCode": "AV",
                "phoneCode": ["1-264"],
                "currencies": ["XCD"],
                "languages": ["en-AI"]
            },
            "AQ": {
                "name": "Antarctica",
                "capital": "",
                "continent": {
                    "code": "AN"
                },
                "iso": {
                    "alpha2": "AQ",
                    "alpha3": "ATA",
                    "numeric": "010"
                },
                "timezone": {
                    "capital": "Antarctica/Troll"
                },
                "latlong": {
                    "lat": -75.250973,
                    "long": -0.071389
                },
                "topLevelDomain": "aq",
                "fipsCode": "AY",
                "phoneCode": [],
                "currencies": [],
                "languages": []
            },
            "AG": {
                "name": "Antigua and Barbuda",
                "capital": "St. John's",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "AG",
                    "alpha3": "ATG",
                    "numeric": "028"
                },
                "timezone": {
                    "capital": "America/Antigua"
                },
                "latlong": {
                    "lat": 17.060816,
                    "long": -61.796428
                },
                "topLevelDomain": "ag",
                "fipsCode": "AC",
                "phoneCode": ["1-268"],
                "currencies": ["XCD"],
                "languages": ["en-AG"]
            },
            "AR": {
                "name": "Argentina",
                "capital": "Buenos Aires",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "AR",
                    "alpha3": "ARG",
                    "numeric": "032"
                },
                "timezone": {
                    "capital": "America/Argentina/Buenos_Aires"
                },
                "latlong": {
                    "lat": -38.416097,
                    "long": -63.616672
                },
                "topLevelDomain": "ar",
                "fipsCode": "AR",
                "phoneCode": ["54"],
                "currencies": ["ARS"],
                "languages": ["es-AR", "en", "it", "de", "fr", "gn"]
            },
            "AM": {
                "name": "Armenia",
                "capital": "Yerevan",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "AM",
                    "alpha3": "ARM",
                    "numeric": "051"
                },
                "timezone": {
                    "capital": "Asia/Yerevan"
                },
                "latlong": {
                    "lat": 40.069099,
                    "long": 45.038189
                },
                "topLevelDomain": "am",
                "fipsCode": "AM",
                "phoneCode": ["374"],
                "currencies": ["AMD"],
                "languages": ["hy"]
            },
            "AW": {
                "name": "Aruba",
                "capital": "Oranjestad",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "AW",
                    "alpha3": "ABW",
                    "numeric": "533"
                },
                "timezone": {
                    "capital": "America/Aruba"
                },
                "latlong": {
                    "lat": 12.52111,
                    "long": -69.968338
                },
                "topLevelDomain": "aw",
                "fipsCode": "AA",
                "phoneCode": ["297"],
                "currencies": ["AWG"],
                "languages": ["nl-AW", "pap", "es", "en"]
            },
            "AU": {
                "name": "Australia",
                "capital": "Canberra",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "AU",
                    "alpha3": "AUS",
                    "numeric": "036"
                },
                "timezone": {
                    "capital": "Australia/Sydney"
                },
                "latlong": {
                    "lat": -25.274398,
                    "long": 133.775136
                },
                "topLevelDomain": "au",
                "fipsCode": "AS",
                "phoneCode": ["61"],
                "currencies": ["AUD"],
                "languages": ["en-AU"]
            },
            "AT": {
                "name": "Austria",
                "capital": "Vienna",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "AT",
                    "alpha3": "AUT",
                    "numeric": "040"
                },
                "timezone": {
                    "capital": "Europe/Vienna"
                },
                "latlong": {
                    "lat": 47.516231,
                    "long": 14.550072
                },
                "topLevelDomain": "at",
                "fipsCode": "AU",
                "phoneCode": ["43"],
                "currencies": ["EUR"],
                "languages": ["de-AT", "hr", "hu", "sl"]
            },
            "AZ": {
                "name": "Azerbaijan",
                "capital": "Baku",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "AZ",
                    "alpha3": "AZE",
                    "numeric": "031"
                },
                "timezone": {
                    "capital": "Asia/Baku"
                },
                "latlong": {
                    "lat": 40.143105,
                    "long": 47.576927
                },
                "topLevelDomain": "az",
                "fipsCode": "AJ",
                "phoneCode": ["994"],
                "currencies": ["AZN"],
                "languages": ["az", "ru", "hy"]
            },
            "BS": {
                "name": "Bahamas",
                "capital": "Nassau",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "BS",
                    "alpha3": "BHS",
                    "numeric": "044"
                },
                "timezone": {
                    "capital": "America/Nassau"
                },
                "latlong": {
                    "lat": 25.03428,
                    "long": -77.39628
                },
                "topLevelDomain": "bs",
                "fipsCode": "BF",
                "phoneCode": ["1-242"],
                "currencies": ["BSD"],
                "languages": ["en-BS"]
            },
            "BH": {
                "name": "Bahrain",
                "capital": "Manama",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "BH",
                    "alpha3": "BHR",
                    "numeric": "048"
                },
                "timezone": {
                    "capital": "Asia/Bahrain"
                },
                "latlong": {
                    "lat": 25.930414,
                    "long": 50.637772
                },
                "topLevelDomain": "bh",
                "fipsCode": "BA",
                "phoneCode": ["973"],
                "currencies": ["BHD"],
                "languages": ["ar-BH", "en", "fa", "ur"]
            },
            "BD": {
                "name": "Bangladesh",
                "capital": "Dhaka",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "BD",
                    "alpha3": "BGD",
                    "numeric": "050"
                },
                "timezone": {
                    "capital": "Asia/Dhaka"
                },
                "latlong": {
                    "lat": 23.684994,
                    "long": 90.356331
                },
                "topLevelDomain": "bd",
                "fipsCode": "BG",
                "phoneCode": ["880"],
                "currencies": ["BDT"],
                "languages": ["bn-BD", "en"]
            },
            "BB": {
                "name": "Barbados",
                "capital": "Bridgetown",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "BB",
                    "alpha3": "BRB",
                    "numeric": "052"
                },
                "timezone": {
                    "capital": "America/Barbados"
                },
                "latlong": {
                    "lat": 13.193887,
                    "long": -59.543198
                },
                "topLevelDomain": "bb",
                "fipsCode": "BB",
                "phoneCode": ["1-246"],
                "currencies": ["BBD"],
                "languages": ["en-BB"]
            },
            "BY": {
                "name": "Belarus",
                "capital": "Minsk",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "BY",
                    "alpha3": "BLR",
                    "numeric": "112"
                },
                "timezone": {
                    "capital": "Europe/Minsk"
                },
                "latlong": {
                    "lat": 53.709807,
                    "long": 27.953389
                },
                "topLevelDomain": "by",
                "fipsCode": "BO",
                "phoneCode": ["375"],
                "currencies": ["BYR"],
                "languages": ["be", "ru"]
            },
            "BE": {
                "name": "Belgium",
                "capital": "Brussels",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "BE",
                    "alpha3": "BEL",
                    "numeric": "056"
                },
                "timezone": {
                    "capital": "Europe/Brussels"
                },
                "latlong": {
                    "lat": 50.503887,
                    "long": 4.469936
                },
                "topLevelDomain": "be",
                "fipsCode": "BE",
                "phoneCode": ["32"],
                "currencies": ["EUR"],
                "languages": ["nl-BE", "fr-BE", "de-BE"]
            },
            "BZ": {
                "name": "Belize",
                "capital": "Belmopan",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "BZ",
                    "alpha3": "BLZ",
                    "numeric": "084"
                },
                "timezone": {
                    "capital": "America/Belize"
                },
                "latlong": {
                    "lat": 17.189877,
                    "long": -88.49765
                },
                "topLevelDomain": "bz",
                "fipsCode": "BH",
                "phoneCode": ["501"],
                "currencies": ["BZD"],
                "languages": ["en-BZ", "es"]
            },
            "BJ": {
                "name": "Benin",
                "capital": "Porto-Novo",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "BJ",
                    "alpha3": "BEN",
                    "numeric": "204"
                },
                "timezone": {
                    "capital": "Africa/Porto-Novo"
                },
                "latlong": {
                    "lat": 9.30769,
                    "long": 2.315834
                },
                "topLevelDomain": "bj",
                "fipsCode": "BN",
                "phoneCode": ["229"],
                "currencies": ["XOF"],
                "languages": ["fr-BJ"]
            },
            "BM": {
                "name": "Bermuda",
                "capital": "Hamilton",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "BM",
                    "alpha3": "BMU",
                    "numeric": "060"
                },
                "timezone": {
                    "capital": "Atlantic/Bermuda"
                },
                "latlong": {
                    "lat": 32.321384,
                    "long": -64.75737
                },
                "topLevelDomain": "bm",
                "fipsCode": "BD",
                "phoneCode": ["1-441"],
                "currencies": ["BMD"],
                "languages": ["en-BM", "pt"]
            },
            "BT": {
                "name": "Bhutan",
                "capital": "Thimphu",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "BT",
                    "alpha3": "BTN",
                    "numeric": "064"
                },
                "timezone": {
                    "capital": "Asia/Thimphu"
                },
                "latlong": {
                    "lat": 27.514162,
                    "long": 90.433601
                },
                "topLevelDomain": "bt",
                "fipsCode": "BT",
                "phoneCode": ["975"],
                "currencies": ["BTN"],
                "languages": ["dz"]
            },
            "BO": {
                "name": "Bolivia",
                "capital": "Sucre",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "BO",
                    "alpha3": "BOL",
                    "numeric": "068"
                },
                "timezone": {
                    "capital": "America/La_Paz"
                },
                "latlong": {
                    "lat": -16.290154,
                    "long": -63.588653
                },
                "topLevelDomain": "bo",
                "fipsCode": "BL",
                "phoneCode": ["591"],
                "currencies": ["BOB"],
                "languages": ["es-BO", "qu", "ay"]
            },
            "BQ": {
                "name": "Bonaire",
                "capital": "",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "BQ",
                    "alpha3": "BES",
                    "numeric": "535"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": 12.201890,
                    "long": -68.262383
                },
                "topLevelDomain": "",
                "fipsCode": "",
                "phoneCode": ["599"],
                "currencies": ["USD"],
                "languages": ["nl", "pap", "en"]
            },
            "BA": {
                "name": "Bosnia and Herzegovina",
                "capital": "Sarajevo",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "BA",
                    "alpha3": "BIH",
                    "numeric": "070"
                },
                "timezone": {
                    "capital": "Europe/Sarajevo"
                },
                "latlong": {
                    "lat": 43.915886,
                    "long": 17.679076
                },
                "topLevelDomain": "ba",
                "fipsCode": "BK",
                "phoneCode": ["387"],
                "currencies": ["BAM"],
                "languages": ["bs", "hr-BA", "sr-BA"]
            },
            "BW": {
                "name": "Botswana",
                "capital": "Gaborone",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "BW",
                    "alpha3": "BWA",
                    "numeric": "072"
                },
                "timezone": {
                    "capital": "Africa/Gaborone"
                },
                "latlong": {
                    "lat": -22.328474,
                    "long": 24.684866
                },
                "topLevelDomain": "bw",
                "fipsCode": "BC",
                "phoneCode": ["267"],
                "currencies": ["BWP"],
                "languages": ["en-BW", "tn-BW"]
            },
            "BV": {
                "name": "Bouvet Island",
                "capital": "",
                "continent": {
                    "code": "AN"
                },
                "iso": {
                    "alpha2": "BV",
                    "alpha3": "BVT",
                    "numeric": "074"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": -54.423199,
                    "long": 3.413194
                },
                "topLevelDomain": "",
                "fipsCode": "BV",
                "phoneCode": [],
                "currencies": ["NOK"],
                "languages": []
            },
            "BR": {
                "name": "Brazil",
                "capital": "Brasilia",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "BR",
                    "alpha3": "BRA",
                    "numeric": "076"
                },
                "timezone": {
                    "capital": "America/Sao_Paulo"
                },
                "latlong": {
                    "lat": -14.235004,
                    "long": -51.92528
                },
                "topLevelDomain": "br",
                "fipsCode": "BR",
                "phoneCode": ["55"],
                "currencies": ["BRL"],
                "languages": ["pt-BR", "es", "en", "fr"]
            },
            "IO": {
                "name": "British Indian Ocean Territory",
                "capital": "Diego Garcia",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "IO",
                    "alpha3": "IOT",
                    "numeric": "086"
                },
                "timezone": {
                    "capital": "Indian/Chagos"
                },
                "latlong": {
                    "lat": -6.343194,
                    "long": 71.876519
                },
                "topLevelDomain": "io",
                "fipsCode": "IO",
                "phoneCode": ["246"],
                "currencies": ["USD"],
                "languages": ["en-IO"]
            },
            "VG": {
                "name": "British Virgin Islands",
                "capital": "Road Town",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "VG",
                    "alpha3": "VGB",
                    "numeric": "092"
                },
                "timezone": {
                    "capital": "America/Tortola"
                },
                "latlong": {
                    "lat": 18.420695,
                    "long": -64.639968
                },
                "topLevelDomain": "vg",
                "fipsCode": "VI",
                "phoneCode": ["1-284"],
                "currencies": ["USD"],
                "languages": ["en-VG"]
            },
            "BN": {
                "name": "Brunei",
                "capital": "Bandar Seri Begawan",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "BN",
                    "alpha3": "BRN",
                    "numeric": "096"
                },
                "timezone": {
                    "capital": "Asia/Brunei"
                },
                "latlong": {
                    "lat": 4.535277,
                    "long": 114.727669
                },
                "topLevelDomain": "bn",
                "fipsCode": "BX",
                "phoneCode": ["673"],
                "currencies": ["BND"],
                "languages": ["ms-BN", "en-BN"]
            },
            "BG": {
                "name": "Bulgaria",
                "capital": "Sofia",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "BG",
                    "alpha3": "BGR",
                    "numeric": "100"
                },
                "timezone": {
                    "capital": "Europe/Sofia"
                },
                "latlong": {
                    "lat": 42.733883,
                    "long": 25.48583
                },
                "topLevelDomain": "bg",
                "fipsCode": "BU",
                "phoneCode": ["359"],
                "currencies": ["BGN"],
                "languages": ["bg", "tr-BG", "rom"]
            },
            "BF": {
                "name": "Burkina Faso",
                "capital": "Ouagadougou",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "BF",
                    "alpha3": "BFA",
                    "numeric": "854"
                },
                "timezone": {
                    "capital": "Africa/Ouagadougou"
                },
                "latlong": {
                    "lat": 12.238333,
                    "long": -1.561593
                },
                "topLevelDomain": "bf",
                "fipsCode": "UV",
                "phoneCode": ["226"],
                "currencies": ["XOF"],
                "languages": ["fr-BF", "mos"]
            },
            "BI": {
                "name": "Burundi",
                "capital": "Bujumbura",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "BI",
                    "alpha3": "BDI",
                    "numeric": "108"
                },
                "timezone": {
                    "capital": "Africa/Bujumbura"
                },
                "latlong": {
                    "lat": -3.373056,
                    "long": 29.918886
                },
                "topLevelDomain": "bi",
                "fipsCode": "BY",
                "phoneCode": ["257"],
                "currencies": ["BIF"],
                "languages": ["fr-BI", "rn"]
            },
            "KH": {
                "name": "Cambodia",
                "capital": "Phnom Penh",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "KH",
                    "alpha3": "KHM",
                    "numeric": "116"
                },
                "timezone": {
                    "capital": "Asia/Phnom_Penh"
                },
                "latlong": {
                    "lat": 12.565679,
                    "long": 104.990963
                },
                "topLevelDomain": "kh",
                "fipsCode": "CB",
                "phoneCode": ["855"],
                "currencies": ["KHR"],
                "languages": ["km", "fr", "en"]
            },
            "CM": {
                "name": "Cameroon",
                "capital": "Yaounde",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "CM",
                    "alpha3": "CMR",
                    "numeric": "120"
                },
                "timezone": {
                    "capital": "Africa/Douala"
                },
                "latlong": {
                    "lat": 7.369722,
                    "long": 12.354722
                },
                "topLevelDomain": "cm",
                "fipsCode": "CM",
                "phoneCode": ["237"],
                "currencies": ["XAF"],
                "languages": ["en-CM", "fr-CM"]
            },
            "CA": {
                "name": "Canada",
                "capital": "Ottawa",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "CA",
                    "alpha3": "CAN",
                    "numeric": "124"
                },
                "timezone": {
                    "capital": "America/Toronto"
                },
                "latlong": {
                    "lat": 56.130366,
                    "long": -106.346771
                },
                "topLevelDomain": "ca",
                "fipsCode": "CA",
                "phoneCode": ["1"],
                "currencies": ["CAD"],
                "languages": ["en-CA", "fr-CA", "iu"]
            },
            "CV": {
                "name": "Cape Verde",
                "capital": "Praia",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "CV",
                    "alpha3": "CPV",
                    "numeric": "132"
                },
                "timezone": {
                    "capital": "Atlantic/Cape_Verde"
                },
                "latlong": {
                    "lat": 16.002082,
                    "long": -24.013197
                },
                "topLevelDomain": "cv",
                "fipsCode": "CV",
                "phoneCode": ["238"],
                "currencies": ["CVE"],
                "languages": ["pt-CV"]
            },
            "KY": {
                "name": "Cayman Islands",
                "capital": "George Town",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "KY",
                    "alpha3": "CYM",
                    "numeric": "136"
                },
                "timezone": {
                    "capital": "America/Cayman"
                },
                "latlong": {
                    "lat": 19.513469,
                    "long": -80.566956
                },
                "topLevelDomain": "ky",
                "fipsCode": "CJ",
                "phoneCode": ["1-345"],
                "currencies": ["KYD"],
                "languages": ["en-KY"]
            },
            "CF": {
                "name": "Central African Republic",
                "capital": "Bangui",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "CF",
                    "alpha3": "CAF",
                    "numeric": "140"
                },
                "timezone": {
                    "capital": "Africa/Bangui"
                },
                "latlong": {
                    "lat": 6.611111,
                    "long": 20.939444
                },
                "topLevelDomain": "cf",
                "fipsCode": "CT",
                "phoneCode": ["236"],
                "currencies": ["XAF"],
                "languages": ["fr-CF", "sg", "ln", "kg"]
            },
            "TD": {
                "name": "Chad",
                "capital": "N'Djamena",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "TD",
                    "alpha3": "TCD",
                    "numeric": "148"
                },
                "timezone": {
                    "capital": "Africa/Ndjamena"
                },
                "latlong": {
                    "lat": 15.454166,
                    "long": 18.732207
                },
                "topLevelDomain": "td",
                "fipsCode": "CD",
                "phoneCode": ["235"],
                "currencies": ["XAF"],
                "languages": ["fr-TD", "ar-TD", "sre"]
            },
            "CL": {
                "name": "Chile",
                "capital": "Santiago",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "CL",
                    "alpha3": "CHL",
                    "numeric": "152"
                },
                "timezone": {
                    "capital": "America/Santiago"
                },
                "latlong": {
                    "lat": -35.675147,
                    "long": -71.542969
                },
                "topLevelDomain": "cl",
                "fipsCode": "CI",
                "phoneCode": ["56"],
                "currencies": ["CLP"],
                "languages": ["es-CL"]
            },
            "CN": {
                "name": "China",
                "capital": "Beijing",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "CN",
                    "alpha3": "CHN",
                    "numeric": "156"
                },
                "timezone": {
                    "capital": "Asia/Shanghai"
                },
                "latlong": {
                    "lat": 35.86166,
                    "long": 104.195397
                },
                "topLevelDomain": "cn",
                "fipsCode": "CH",
                "phoneCode": ["86"],
                "currencies": ["CNY"],
                "languages": ["zh-CN", "yue", "wuu", "dta", "ug", "za"]
            },
            "CX": {
                "name": "Christmas Island",
                "capital": "Flying Fish Cove",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "CX",
                    "alpha3": "CXR",
                    "numeric": "162"
                },
                "timezone": {
                    "capital": "Indian/Christmas"
                },
                "latlong": {
                    "lat": -10.447525,
                    "long": 105.690449
                },
                "topLevelDomain": "cx",
                "fipsCode": "KT",
                "phoneCode": ["61"],
                "currencies": ["AUD"],
                "languages": ["en", "zh", "ms-CC"]
            },
            "CC": {
                "name": "Cocos [Keeling] Islands",
                "capital": "West Island",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "CC",
                    "alpha3": "CCK",
                    "numeric": "166"
                },
                "timezone": {
                    "capital": "Indian/Cocos"
                },
                "latlong": {
                    "lat": -12.164165,
                    "long": 96.870956
                },
                "topLevelDomain": "cc",
                "fipsCode": "CK",
                "phoneCode": ["61"],
                "currencies": ["AUD"],
                "languages": ["ms-CC", "en"]
            },
            "CO": {
                "name": "Colombia",
                "capital": "Bogota",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "CO",
                    "alpha3": "COL",
                    "numeric": "170"
                },
                "timezone": {
                    "capital": "America/Bogota"
                },
                "latlong": {
                    "lat": 4.570868,
                    "long": -74.297333
                },
                "topLevelDomain": "co",
                "fipsCode": "CO",
                "phoneCode": ["57"],
                "currencies": ["COP"],
                "languages": ["es-CO"]
            },
            "KM": {
                "name": "Comoros",
                "capital": "Moroni",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "KM",
                    "alpha3": "COM",
                    "numeric": "174"
                },
                "timezone": {
                    "capital": "Indian/Comoro"
                },
                "latlong": {
                    "lat": -11.875001,
                    "long": 43.872219
                },
                "topLevelDomain": "km",
                "fipsCode": "CN",
                "phoneCode": ["269"],
                "currencies": ["KMF"],
                "languages": ["ar", "fr-KM"]
            },
            "CK": {
                "name": "Cook Islands",
                "capital": "Avarua",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "CK",
                    "alpha3": "COK",
                    "numeric": "184"
                },
                "timezone": {
                    "capital": "Pacific/Rarotonga"
                },
                "latlong": {
                    "lat": -21.236736,
                    "long": -159.777671
                },
                "topLevelDomain": "ck",
                "fipsCode": "CW",
                "phoneCode": ["682"],
                "currencies": ["NZD"],
                "languages": ["en-CK", "mi"]
            },
            "CR": {
                "name": "Costa Rica",
                "capital": "San Jose",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "CR",
                    "alpha3": "CRI",
                    "numeric": "188"
                },
                "timezone": {
                    "capital": "America/Costa_Rica"
                },
                "latlong": {
                    "lat": 9.748917,
                    "long": -83.753428
                },
                "topLevelDomain": "cr",
                "fipsCode": "CS",
                "phoneCode": ["506"],
                "currencies": ["CRC"],
                "languages": ["es-CR", "en"]
            },
            "HR": {
                "name": "Croatia",
                "capital": "Zagreb",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "HR",
                    "alpha3": "HRV",
                    "numeric": "191"
                },
                "timezone": {
                    "capital": "Europe/Zagreb"
                },
                "latlong": {
                    "lat": 45.1,
                    "long": 15.2
                },
                "topLevelDomain": "hr",
                "fipsCode": "HR",
                "phoneCode": ["385"],
                "currencies": ["HRK"],
                "languages": ["hr-HR", "sr"]
            },
            "CU": {
                "name": "Cuba",
                "capital": "Havana",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "CU",
                    "alpha3": "CUB",
                    "numeric": "192"
                },
                "timezone": {
                    "capital": "America/Havana"
                },
                "latlong": {
                    "lat": 21.521757,
                    "long": -77.781167
                },
                "topLevelDomain": "cu",
                "fipsCode": "CU",
                "phoneCode": ["53"],
                "currencies": ["CUP"],
                "languages": ["es-CU", "pap"]
            },
            "CW": {
                "name": "Curacao",
                "capital": " Willemstad",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "CW",
                    "alpha3": "CUW",
                    "numeric": "531"
                },
                "timezone": {
                    "capital": "America/Curacao"
                },
                "latlong": {
                    "lat": 12.2135221,
                    "long": -68.9495816
                },
                "topLevelDomain": "cw",
                "fipsCode": "UC",
                "phoneCode": ["599"],
                "currencies": ["ANG"],
                "languages": ["nl", "pap"]
            },
            "CY": {
                "name": "Cyprus",
                "capital": "Nicosia",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "CY",
                    "alpha3": "CYP",
                    "numeric": "196"
                },
                "timezone": {
                    "capital": "Asia/Nicosia"
                },
                "latlong": {
                    "lat": 35.126413,
                    "long": 33.429859
                },
                "topLevelDomain": "cy",
                "fipsCode": "CY",
                "phoneCode": ["357"],
                "currencies": ["EUR"],
                "languages": ["el-CY", "tr-CY", "en"]
            },
            "CZ": {
                "name": "Czech Republic",
                "capital": "Prague",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "CZ",
                    "alpha3": "CZE",
                    "numeric": "203"
                },
                "timezone": {
                    "capital": "Europe/Prague"
                },
                "latlong": {
                    "lat": 49.817492,
                    "long": 15.472962
                },
                "topLevelDomain": "cz",
                "fipsCode": "EZ",
                "phoneCode": ["420"],
                "currencies": ["CZK"],
                "languages": ["cs", "sk"]
            },
            "CD": {
                "name": "Democratic Republic of the Congo",
                "capital": "Kinshasa",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "CD",
                    "alpha3": "COD",
                    "numeric": "180"
                },
                "timezone": {
                    "capital": "Africa/Kinshasa"
                },
                "latlong": {
                    "lat": -4.038333,
                    "long": 21.758664
                },
                "topLevelDomain": "cd",
                "fipsCode": "CG",
                "phoneCode": ["243"],
                "currencies": ["CDF"],
                "languages": ["fr-CD", "ln", "ktu", "kg", "sw", "lua"]
            },
            "DK": {
                "name": "Denmark",
                "capital": "Copenhagen",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "DK",
                    "alpha3": "DNK",
                    "numeric": "208"
                },
                "timezone": {
                    "capital": "Europe/Copenhagen"
                },
                "latlong": {
                    "lat": 56.26392,
                    "long": 9.501785
                },
                "topLevelDomain": "dk",
                "fipsCode": "DA",
                "phoneCode": ["45"],
                "currencies": ["DKK"],
                "languages": ["da-DK", "en", "fo", "de-DK"]
            },
            "DJ": {
                "name": "Djibouti",
                "capital": "Djibouti",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "DJ",
                    "alpha3": "DJI",
                    "numeric": "262"
                },
                "timezone": {
                    "capital": "Africa/Djibouti"
                },
                "latlong": {
                    "lat": 11.825138,
                    "long": 42.590275
                },
                "topLevelDomain": "dj",
                "fipsCode": "DJ",
                "phoneCode": ["253"],
                "currencies": ["DJF"],
                "languages": ["fr-DJ", "ar", "so-DJ", "aa"]
            },
            "DM": {
                "name": "Dominica",
                "capital": "Roseau",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "DM",
                    "alpha3": "DMA",
                    "numeric": "212"
                },
                "timezone": {
                    "capital": "America/Dominica"
                },
                "latlong": {
                    "lat": 15.414999,
                    "long": -61.370976
                },
                "topLevelDomain": "dm",
                "fipsCode": "DO",
                "phoneCode": ["1-767"],
                "currencies": ["XCD"],
                "languages": ["en-DM"]
            },
            "DO": {
                "name": "Dominican Republic",
                "capital": "Santo Domingo",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "DO",
                    "alpha3": "DOM",
                    "numeric": "214"
                },
                "timezone": {
                    "capital": "America/Santo_Domingo"
                },
                "latlong": {
                    "lat": 18.735693,
                    "long": -70.162651
                },
                "topLevelDomain": "do",
                "fipsCode": "DR",
                "phoneCode": ["1-809", "1-829"],
                "currencies": ["DOP"],
                "languages": ["es-DO"]
            },
            "TL": {
                "name": "East Timor",
                "capital": "Dili",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "TL",
                    "alpha3": "TLS",
                    "numeric": "626"
                },
                "timezone": {
                    "capital": "Asia/Dili"
                },
                "latlong": {
                    "lat": -8.874217,
                    "long": 125.727539
                },
                "topLevelDomain": "tl",
                "fipsCode": "TT",
                "phoneCode": ["670"],
                "currencies": ["USD"],
                "languages": ["tet", "pt-TL", "id", "en"]
            },
            "EC": {
                "name": "Ecuador",
                "capital": "Quito",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "EC",
                    "alpha3": "ECU",
                    "numeric": "218"
                },
                "timezone": {
                    "capital": "America/Guayaquil"
                },
                "latlong": {
                    "lat": -1.831239,
                    "long": -78.183406
                },
                "topLevelDomain": "ec",
                "fipsCode": "EC",
                "phoneCode": ["593"],
                "currencies": ["USD"],
                "languages": ["es-EC"]
            },
            "EG": {
                "name": "Egypt",
                "capital": "Cairo",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "EG",
                    "alpha3": "EGY",
                    "numeric": "818"
                },
                "timezone": {
                    "capital": "Africa/Cairo"
                },
                "latlong": {
                    "lat": 26.820553,
                    "long": 30.802498
                },
                "topLevelDomain": "eg",
                "fipsCode": "EG",
                "phoneCode": ["20"],
                "currencies": ["EGP"],
                "languages": ["ar-EG", "en", "fr"]
            },
            "SV": {
                "name": "El Salvador",
                "capital": "San Salvador",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "SV",
                    "alpha3": "SLV",
                    "numeric": "222"
                },
                "timezone": {
                    "capital": "America/El_Salvador"
                },
                "latlong": {
                    "lat": 13.794185,
                    "long": -88.89653
                },
                "topLevelDomain": "sv",
                "fipsCode": "ES",
                "phoneCode": ["503"],
                "currencies": ["USD"],
                "languages": ["es-SV"]
            },
            "GQ": {
                "name": "Equatorial Guinea",
                "capital": "Malabo",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "GQ",
                    "alpha3": "GNQ",
                    "numeric": "226"
                },
                "timezone": {
                    "capital": "Africa/Malabo"
                },
                "latlong": {
                    "lat": 1.650801,
                    "long": 10.267895
                },
                "topLevelDomain": "gq",
                "fipsCode": "EK",
                "phoneCode": ["240"],
                "currencies": ["XAF"],
                "languages": ["es-GQ", "fr"]
            },
            "ER": {
                "name": "Eritrea",
                "capital": "Asmara",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "ER",
                    "alpha3": "ERI",
                    "numeric": "232"
                },
                "timezone": {
                    "capital": "Africa/Asmara"
                },
                "latlong": {
                    "lat": 15.179384,
                    "long": 39.782334
                },
                "topLevelDomain": "er",
                "fipsCode": "ER",
                "phoneCode": ["291"],
                "currencies": ["ERN"],
                "languages": ["aa-ER", "ar", "tig", "kun", "ti-ER"]
            },
            "EE": {
                "name": "Estonia",
                "capital": "Tallinn",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "EE",
                    "alpha3": "EST",
                    "numeric": "233"
                },
                "timezone": {
                    "capital": "Europe/Tallinn"
                },
                "latlong": {
                    "lat": 58.595272,
                    "long": 25.013607
                },
                "topLevelDomain": "ee",
                "fipsCode": "EN",
                "phoneCode": ["372"],
                "currencies": ["EUR"],
                "languages": ["et", "ru"]
            },
            "ET": {
                "name": "Ethiopia",
                "capital": "Addis Ababa",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "ET",
                    "alpha3": "ETH",
                    "numeric": "231"
                },
                "timezone": {
                    "capital": "Africa/Addis_Ababa"
                },
                "latlong": {
                    "lat": 9.145,
                    "long": 40.489673
                },
                "topLevelDomain": "et",
                "fipsCode": "ET",
                "phoneCode": ["251"],
                "currencies": ["ETB"],
                "languages": ["am", "en-ET", "om-ET", "ti-ET", "so-ET", "sid"]
            },
            "FK": {
                "name": "Falkland Islands",
                "capital": "Stanley",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "FK",
                    "alpha3": "FLK",
                    "numeric": "238"
                },
                "timezone": {
                    "capital": "Atlantic/Stanley"
                },
                "latlong": {
                    "lat": -51.796253,
                    "long": -59.523613
                },
                "topLevelDomain": "fk",
                "fipsCode": "FK",
                "phoneCode": ["500"],
                "currencies": ["FKP"],
                "languages": ["en-FK"]
            },
            "FO": {
                "name": "Faroe Islands",
                "capital": "Torshavn",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "FO",
                    "alpha3": "FRO",
                    "numeric": "234"
                },
                "timezone": {
                    "capital": "Atlantic/Faroe"
                },
                "latlong": {
                    "lat": 61.892635,
                    "long": -6.911806
                },
                "topLevelDomain": "fo",
                "fipsCode": "FO",
                "phoneCode": ["298"],
                "currencies": ["DKK"],
                "languages": ["fo", "da-FO"]
            },
            "FJ": {
                "name": "Fiji",
                "capital": "Suva",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "FJ",
                    "alpha3": "FJI",
                    "numeric": "242"
                },
                "timezone": {
                    "capital": "Pacific/Fiji"
                },
                "latlong": {
                    "lat": -16.578193,
                    "long": 179.414413
                },
                "topLevelDomain": "fj",
                "fipsCode": "FJ",
                "phoneCode": ["679"],
                "currencies": ["FJD"],
                "languages": ["en-FJ", "fj"]
            },
            "FI": {
                "name": "Finland",
                "capital": "Helsinki",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "FI",
                    "alpha3": "FIN",
                    "numeric": "246"
                },
                "timezone": {
                    "capital": "Europe/Helsinki"
                },
                "latlong": {
                    "lat": 61.92411,
                    "long": 25.748151
                },
                "topLevelDomain": "fi",
                "fipsCode": "FI",
                "phoneCode": ["358"],
                "currencies": ["EUR"],
                "languages": ["fi-FI", "sv-FI", "smn"]
            },
            "FR": {
                "name": "France",
                "capital": "Paris",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "FR",
                    "alpha3": "FRA",
                    "numeric": "250"
                },
                "timezone": {
                    "capital": "Europe/Paris"
                },
                "latlong": {
                    "lat": 46.227638,
                    "long": 2.213749
                },
                "topLevelDomain": "fr",
                "fipsCode": "FR",
                "phoneCode": ["33"],
                "currencies": ["EUR"],
                "languages": ["fr-FR", "frp", "br", "co", "ca", "eu", "oc"]
            },
            "GF": {
                "name": "French Guiana",
                "capital": "Cayenne",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "GF",
                    "alpha3": "GUF",
                    "numeric": "254"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": 3.933889,
                    "long": -53.125782
                },
                "topLevelDomain": "",
                "fipsCode": "FG",
                "phoneCode": ["594"],
                "currencies": ["EUR"],
                "languages": ["fr-GF"]
            },
            "PF": {
                "name": "French Polynesia",
                "capital": "Papeete",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "PF",
                    "alpha3": "PYF",
                    "numeric": "258"
                },
                "timezone": {
                    "capital": "Pacific/Tahiti"
                },
                "latlong": {
                    "lat": -17.679742,
                    "long": -149.406843
                },
                "topLevelDomain": "pf",
                "fipsCode": "FP",
                "phoneCode": ["689"],
                "currencies": ["XPF"],
                "languages": ["fr-PF", "ty"]
            },
            "TF": {
                "name": "French Southern Territories",
                "capital": "Port-aux-Francais",
                "continent": {
                    "code": "AN"
                },
                "iso": {
                    "alpha2": "TF",
                    "alpha3": "ATF",
                    "numeric": "260"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": -49.280366,
                    "long": 69.348557
                },
                "topLevelDomain": "",
                "fipsCode": "FS",
                "phoneCode": [],
                "currencies": ["EUR"],
                "languages": ["fr"]
            },
            "GA": {
                "name": "Gabon",
                "capital": "Libreville",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "GA",
                    "alpha3": "GAB",
                    "numeric": "266"
                },
                "timezone": {
                    "capital": "Africa/Libreville"
                },
                "latlong": {
                    "lat": -0.803689,
                    "long": 11.609444
                },
                "topLevelDomain": "ga",
                "fipsCode": "GB",
                "phoneCode": ["241"],
                "currencies": ["XAF"],
                "languages": ["fr-GA"]
            },
            "GM": {
                "name": "Gambia",
                "capital": "Banjul",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "GM",
                    "alpha3": "GMB",
                    "numeric": "270"
                },
                "timezone": {
                    "capital": "Africa/Banjul"
                },
                "latlong": {
                    "lat": 13.443182,
                    "long": -15.310139
                },
                "topLevelDomain": "gm",
                "fipsCode": "GA",
                "phoneCode": ["220"],
                "currencies": ["GMD"],
                "languages": ["en-GM", "mnk", "wof", "wo", "ff"]
            },
            "GE": {
                "name": "Georgia",
                "capital": "Tbilisi",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "GE",
                    "alpha3": "GEO",
                    "numeric": "268"
                },
                "timezone": {
                    "capital": "Asia/Tbilisi"
                },
                "latlong": {
                    "lat": 42.315407,
                    "long": 43.356892
                },
                "topLevelDomain": "ge",
                "fipsCode": "GG",
                "phoneCode": ["995"],
                "currencies": ["GEL"],
                "languages": ["ka", "ru", "hy", "az"]
            },
            "DE": {
                "name": "Germany",
                "capital": "Berlin",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "DE",
                    "alpha3": "DEU",
                    "numeric": "276"
                },
                "timezone": {
                    "capital": "Europe/Berlin"
                },
                "latlong": {
                    "lat": 51.165691,
                    "long": 10.451526
                },
                "topLevelDomain": "de",
                "fipsCode": "GM",
                "phoneCode": ["49"],
                "currencies": ["EUR"],
                "languages": ["de"]
            },
            "GH": {
                "name": "Ghana",
                "capital": "Accra",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "GH",
                    "alpha3": "GHA",
                    "numeric": "288"
                },
                "timezone": {
                    "capital": "Africa/Accra"
                },
                "latlong": {
                    "lat": 7.946527,
                    "long": -1.023194
                },
                "topLevelDomain": "gh",
                "fipsCode": "GH",
                "phoneCode": ["233"],
                "currencies": ["GHS"],
                "languages": ["en-GH", "ak", "ee", "tw"]
            },
            "GI": {
                "name": "Gibraltar",
                "capital": "Gibraltar",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "GI",
                    "alpha3": "GIB",
                    "numeric": "292"
                },
                "timezone": {
                    "capital": "Europe/Gibraltar"
                },
                "latlong": {
                    "lat": 36.137741,
                    "long": -5.345374
                },
                "topLevelDomain": "gi",
                "fipsCode": "GI",
                "phoneCode": ["350"],
                "currencies": ["GIP"],
                "languages": ["en-GI", "es", "it", "pt"]
            },
            "GR": {
                "name": "Greece",
                "capital": "Athens",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "GR",
                    "alpha3": "GRC",
                    "numeric": "300"
                },
                "timezone": {
                    "capital": "Europe/Athens"
                },
                "latlong": {
                    "lat": 39.074208,
                    "long": 21.824312
                },
                "topLevelDomain": "gr",
                "fipsCode": "GR",
                "phoneCode": ["30"],
                "currencies": ["EUR"],
                "languages": ["el-GR", "en", "fr"]
            },
            "GL": {
                "name": "Greenland",
                "capital": "Nuuk",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "GL",
                    "alpha3": "GRL",
                    "numeric": "304"
                },
                "timezone": {
                    "capital": "America/Godthab"
                },
                "latlong": {
                    "lat": 71.706936,
                    "long": -42.604303
                },
                "topLevelDomain": "gl",
                "fipsCode": "GL",
                "phoneCode": ["299"],
                "currencies": ["DKK"],
                "languages": ["kl", "da-GL", "en"]
            },
            "GD": {
                "name": "Grenada",
                "capital": "St. George's",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "GD",
                    "alpha3": "GRD",
                    "numeric": "308"
                },
                "timezone": {
                    "capital": "America/Grenada"
                },
                "latlong": {
                    "lat": 12.262776,
                    "long": -61.604171
                },
                "topLevelDomain": "gd",
                "fipsCode": "GJ",
                "phoneCode": ["1-473"],
                "currencies": ["XCD"],
                "languages": ["en-GD"]
            },
            "GP": {
                "name": "Guadeloupe",
                "capital": "Basse-Terre",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "GP",
                    "alpha3": "GLP",
                    "numeric": "312"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": 16.995971,
                    "long": -62.067641
                },
                "topLevelDomain": "",
                "fipsCode": "GP",
                "phoneCode": ["590"],
                "currencies": ["EUR"],
                "languages": ["fr-GP"]
            },
            "GU": {
                "name": "Guam",
                "capital": "Hagatna",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "GU",
                    "alpha3": "GUM",
                    "numeric": "316"
                },
                "timezone": {
                    "capital": "Pacific/Guam"
                },
                "latlong": {
                    "lat": 13.444304,
                    "long": 144.793731
                },
                "topLevelDomain": "gu",
                "fipsCode": "GQ",
                "phoneCode": ["1-671"],
                "currencies": ["USD"],
                "languages": ["en-GU", "ch-GU"]
            },
            "GT": {
                "name": "Guatemala",
                "capital": "Guatemala City",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "GT",
                    "alpha3": "GTM",
                    "numeric": "320"
                },
                "timezone": {
                    "capital": "America/Guatemala"
                },
                "latlong": {
                    "lat": 15.783471,
                    "long": -90.230759
                },
                "topLevelDomain": "gt",
                "fipsCode": "GT",
                "phoneCode": ["502"],
                "currencies": ["GTQ"],
                "languages": ["es-GT"]
            },
            "GG": {
                "name": "Guernsey",
                "capital": "St Peter Port",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "GG",
                    "alpha3": "GGY",
                    "numeric": "831"
                },
                "timezone": {
                    "capital": "Europe/Guernsey"
                },
                "latlong": {
                    "lat": 49.465691,
                    "long": -2.585278
                },
                "topLevelDomain": "gg",
                "fipsCode": "GK",
                "phoneCode": ["44-1481"],
                "currencies": ["GBP"],
                "languages": ["en", "nrf"]
            },
            "GN": {
                "name": "Guinea",
                "capital": "Conakry",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "GN",
                    "alpha3": "GIN",
                    "numeric": "324"
                },
                "timezone": {
                    "capital": "Africa/Conakry"
                },
                "latlong": {
                    "lat": 9.945587,
                    "long": -9.696645
                },
                "topLevelDomain": "gn",
                "fipsCode": "GV",
                "phoneCode": ["224"],
                "currencies": ["GNF"],
                "languages": ["fr-GN"]
            },
            "GW": {
                "name": "Guinea-Bissau",
                "capital": "Bissau",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "GW",
                    "alpha3": "GNB",
                    "numeric": "624"
                },
                "timezone": {
                    "capital": "Africa/Bissau"
                },
                "latlong": {
                    "lat": 11.803749,
                    "long": -15.180413
                },
                "topLevelDomain": "gw",
                "fipsCode": "PU",
                "phoneCode": ["245"],
                "currencies": ["XOF"],
                "languages": ["pt-GW", "pov"]
            },
            "GY": {
                "name": "Guyana",
                "capital": "Georgetown",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "GY",
                    "alpha3": "GUY",
                    "numeric": "328"
                },
                "timezone": {
                    "capital": "America/Guyana"
                },
                "latlong": {
                    "lat": 4.860416,
                    "long": -58.93018
                },
                "topLevelDomain": "gy",
                "fipsCode": "GY",
                "phoneCode": ["592"],
                "currencies": ["GYD"],
                "languages": ["en-GY"]
            },
            "HT": {
                "name": "Haiti",
                "capital": "Port-au-Prince",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "HT",
                    "alpha3": "HTI",
                    "numeric": "332"
                },
                "timezone": {
                    "capital": "America/Port-au-Prince"
                },
                "latlong": {
                    "lat": 18.971187,
                    "long": -72.285215
                },
                "topLevelDomain": "ht",
                "fipsCode": "HA",
                "phoneCode": ["509"],
                "currencies": ["HTG"],
                "languages": ["ht", "fr-HT"]
            },
            "HM": {
                "name": "Heard Island and McDonald Islands",
                "capital": "",
                "continent": {
                    "code": "AN"
                },
                "iso": {
                    "alpha2": "HM",
                    "alpha3": "HMD",
                    "numeric": "334"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": -53.08181,
                    "long": 73.504158
                },
                "topLevelDomain": "",
                "fipsCode": "HM",
                "phoneCode": [],
                "currencies": ["AUD"],
                "languages": []
            },
            "HN": {
                "name": "Honduras",
                "capital": "Tegucigalpa",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "HN",
                    "alpha3": "HND",
                    "numeric": "340"
                },
                "timezone": {
                    "capital": "America/Tegucigalpa"
                },
                "latlong": {
                    "lat": 15.199999,
                    "long": -86.241905
                },
                "topLevelDomain": "hn",
                "fipsCode": "HO",
                "phoneCode": ["504"],
                "currencies": ["HNL"],
                "languages": ["es-HN", "cab", "miq"]
            },
            "HK": {
                "name": "Hong Kong",
                "capital": "Hong Kong",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "HK",
                    "alpha3": "HKG",
                    "numeric": "344"
                },
                "timezone": {
                    "capital": "Asia/Hong_Kong"
                },
                "latlong": {
                    "lat": 22.396428,
                    "long": 114.109497
                },
                "topLevelDomain": "hk",
                "fipsCode": "HK",
                "phoneCode": ["852"],
                "currencies": ["HKD"],
                "languages": ["zh-HK", "yue", "zh", "en"]
            },
            "HU": {
                "name": "Hungary",
                "capital": "Budapest",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "HU",
                    "alpha3": "HUN",
                    "numeric": "348"
                },
                "timezone": {
                    "capital": "Europe/Budapest"
                },
                "latlong": {
                    "lat": 47.162494,
                    "long": 19.503304
                },
                "topLevelDomain": "hu",
                "fipsCode": "HU",
                "phoneCode": ["36"],
                "currencies": ["HUF"],
                "languages": ["hu-HU"]
            },
            "IS": {
                "name": "Iceland",
                "capital": "Reykjavik",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "IS",
                    "alpha3": "ISL",
                    "numeric": "352"
                },
                "timezone": {
                    "capital": "Atlantic/Reykjavik"
                },
                "latlong": {
                    "lat": 64.963051,
                    "long": -19.020835
                },
                "topLevelDomain": "is",
                "fipsCode": "IC",
                "phoneCode": ["354"],
                "currencies": ["ISK"],
                "languages": ["is", "en", "de", "da", "sv", "no"]
            },
            "IN": {
                "name": "India",
                "capital": "New Delhi",
                "continent": {
                    "code": "AS"
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
                "phoneCode": ["91"],
                "currencies": ["INR"],
                "languages": ["en-IN", "hi", "bn", "te", "mr", "ta", "ur", "gu", "kn", "ml", "or", "pa", "as", "bh", "sat", "ks", "ne", "sd", "kok", "doi", "mni", "sit", "sa", "fr", "lus", "inc"]
            },
            "ID": {
                "name": "Indonesia",
                "capital": "Jakarta",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "ID",
                    "alpha3": "IDN",
                    "numeric": "360"
                },
                "timezone": {
                    "capital": "Asia/Jakarta"
                },
                "latlong": {
                    "lat": -0.789275,
                    "long": 113.921327
                },
                "topLevelDomain": "id",
                "fipsCode": "ID",
                "phoneCode": ["62"],
                "currencies": ["IDR"],
                "languages": ["id", "en", "nl", "jv"]
            },
            "IR": {
                "name": "Iran",
                "capital": "Tehran",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "IR",
                    "alpha3": "IRN",
                    "numeric": "364"
                },
                "timezone": {
                    "capital": "Asia/Tehran"
                },
                "latlong": {
                    "lat": 32.427908,
                    "long": 53.688046
                },
                "topLevelDomain": "ir",
                "fipsCode": "IR",
                "phoneCode": ["98"],
                "currencies": ["IRR"],
                "languages": ["fa-IR", "ku"]
            },
            "IQ": {
                "name": "Iraq",
                "capital": "Baghdad",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "IQ",
                    "alpha3": "IRQ",
                    "numeric": "368"
                },
                "timezone": {
                    "capital": "Asia/Baghdad"
                },
                "latlong": {
                    "lat": 33.223191,
                    "long": 43.679291
                },
                "topLevelDomain": "iq",
                "fipsCode": "IZ",
                "phoneCode": ["964"],
                "currencies": ["IQD"],
                "languages": ["ar-IQ", "ku", "hy"]
            },
            "IE": {
                "name": "Ireland",
                "capital": "Dublin",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "IE",
                    "alpha3": "IRL",
                    "numeric": "372"
                },
                "timezone": {
                    "capital": "Europe/Dublin"
                },
                "latlong": {
                    "lat": 53.41291,
                    "long": -8.24389
                },
                "topLevelDomain": "ie",
                "fipsCode": "EI",
                "phoneCode": ["353"],
                "currencies": ["EUR"],
                "languages": ["en-IE", "ga-IE"]
            },
            "IM": {
                "name": "Isle of Man",
                "capital": "Douglas, Isle of Man",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "IM",
                    "alpha3": "IMN",
                    "numeric": "833"
                },
                "timezone": {
                    "capital": "Europe/Isle_of_Man"
                },
                "latlong": {
                    "lat": 54.236107,
                    "long": -4.548056
                },
                "topLevelDomain": "im",
                "fipsCode": "IM",
                "phoneCode": ["44-1624"],
                "currencies": ["GBP"],
                "languages": ["en", "gv"]
            },
            "IL": {
                "name": "Israel",
                "capital": "Jerusalem",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "IL",
                    "alpha3": "ISR",
                    "numeric": "376"
                },
                "timezone": {
                    "capital": "Asia/Jerusalem"
                },
                "latlong": {
                    "lat": 31.046051,
                    "long": 34.851612
                },
                "topLevelDomain": "il",
                "fipsCode": "IS",
                "phoneCode": ["972"],
                "currencies": ["ILS"],
                "languages": ["he", "ar-IL", "en-IL", ""]
            },
            "IT": {
                "name": "Italy",
                "capital": "Rome",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "IT",
                    "alpha3": "ITA",
                    "numeric": "380"
                },
                "timezone": {
                    "capital": "Europe/Rome"
                },
                "latlong": {
                    "lat": 41.87194,
                    "long": 12.56738
                },
                "topLevelDomain": "it",
                "fipsCode": "IT",
                "phoneCode": ["39"],
                "currencies": ["EUR"],
                "languages": ["it-IT", "de-IT", "fr-IT", "sc", "ca", "co", "sl"]
            },
            "CI": {
                "name": "Ivory Coast",
                "capital": "Yamoussoukro",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "CI",
                    "alpha3": "CIV",
                    "numeric": "384"
                },
                "timezone": {
                    "capital": "Africa/Abidjan"
                },
                "latlong": {
                    "lat": 7.539989,
                    "long": -5.54708
                },
                "topLevelDomain": "ci",
                "fipsCode": "IV",
                "phoneCode": ["225"],
                "currencies": ["XOF"],
                "languages": ["fr-CI"]
            },
            "JM": {
                "name": "Jamaica",
                "capital": "Kingston",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "JM",
                    "alpha3": "JAM",
                    "numeric": "388"
                },
                "timezone": {
                    "capital": "America/Jamaica"
                },
                "latlong": {
                    "lat": 18.109581,
                    "long": -77.297508
                },
                "topLevelDomain": "jm",
                "fipsCode": "JM",
                "phoneCode": ["1-876"],
                "currencies": ["JMD"],
                "languages": ["en-JM"]
            },
            "JP": {
                "name": "Japan",
                "capital": "Tokyo",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "JP",
                    "alpha3": "JPN",
                    "numeric": "392"
                },
                "timezone": {
                    "capital": "Asia/Tokyo"
                },
                "latlong": {
                    "lat": 36.204824,
                    "long": 138.252924
                },
                "topLevelDomain": "jp",
                "fipsCode": "JA",
                "phoneCode": ["81"],
                "currencies": ["JPY"],
                "languages": ["ja"]
            },
            "JE": {
                "name": "Jersey",
                "capital": "Saint Helier",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "JE",
                    "alpha3": "JEY",
                    "numeric": "832"
                },
                "timezone": {
                    "capital": "Europe/Jersey"
                },
                "latlong": {
                    "lat": 49.214439,
                    "long": -2.13125
                },
                "topLevelDomain": "je",
                "fipsCode": "JE",
                "phoneCode": ["44-1534"],
                "currencies": ["GBP"],
                "languages": ["en", "fr", "nrf"]
            },
            "JO": {
                "name": "Jordan",
                "capital": "Amman",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "JO",
                    "alpha3": "JOR",
                    "numeric": "400"
                },
                "timezone": {
                    "capital": "Asia/Amman"
                },
                "latlong": {
                    "lat": 30.585164,
                    "long": 36.238414
                },
                "topLevelDomain": "jo",
                "fipsCode": "JO",
                "phoneCode": ["962"],
                "currencies": ["JOD"],
                "languages": ["ar-JO", "en"]
            },
            "KZ": {
                "name": "Kazakhstan",
                "capital": "Astana",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "KZ",
                    "alpha3": "KAZ",
                    "numeric": "398"
                },
                "timezone": {
                    "capital": "Asia/Almaty"
                },
                "latlong": {
                    "lat": 48.019573,
                    "long": 66.923684
                },
                "topLevelDomain": "kz",
                "fipsCode": "KZ",
                "phoneCode": ["7"],
                "currencies": ["KZT"],
                "languages": ["kk", "ru"]
            },
            "KE": {
                "name": "Kenya",
                "capital": "Nairobi",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "KE",
                    "alpha3": "KEN",
                    "numeric": "404"
                },
                "timezone": {
                    "capital": "Africa/Nairobi"
                },
                "latlong": {
                    "lat": -0.023559,
                    "long": 37.906193
                },
                "topLevelDomain": "ke",
                "fipsCode": "KE",
                "phoneCode": ["254"],
                "currencies": ["KES"],
                "languages": ["en-KE", "sw-KE"]
            },
            "KI": {
                "name": "Kiribati",
                "capital": "Tarawa",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "KI",
                    "alpha3": "KIR",
                    "numeric": "296"
                },
                "timezone": {
                    "capital": "Pacific/Tarawa"
                },
                "latlong": {
                    "lat": -3.370417,
                    "long": -168.734039
                },
                "topLevelDomain": "ki",
                "fipsCode": "KR",
                "phoneCode": ["686"],
                "currencies": ["AUD"],
                "languages": ["en-KI", "gil"]
            },
            "XK": {
                "name": "Kosovo",
                "capital": "Pristina",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "XK",
                    "alpha3": "XKX",
                    "numeric": "0"
                },
                "timezone": {
                    "capital": "Europe/Podgorica"
                },
                "latlong": {
                    "lat": 42.602636,
                    "long": 20.902977
                },
                "topLevelDomain": "",
                "fipsCode": "KV",
                "phoneCode": [],
                "currencies": ["EUR"],
                "languages": ["sq", "sr"]
            },
            "KW": {
                "name": "Kuwait",
                "capital": "Kuwait City",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "KW",
                    "alpha3": "KWT",
                    "numeric": "414"
                },
                "timezone": {
                    "capital": "Asia/Kuwait"
                },
                "latlong": {
                    "lat": 29.31166,
                    "long": 47.481766
                },
                "topLevelDomain": "kw",
                "fipsCode": "KU",
                "phoneCode": ["965"],
                "currencies": ["KWD"],
                "languages": ["ar-KW", "en"]
            },
            "KG": {
                "name": "Kyrgyzstan",
                "capital": "Bishkek",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "KG",
                    "alpha3": "KGZ",
                    "numeric": "417"
                },
                "timezone": {
                    "capital": "Asia/Bishkek"
                },
                "latlong": {
                    "lat": 41.20438,
                    "long": 74.766098
                },
                "topLevelDomain": "kg",
                "fipsCode": "KG",
                "phoneCode": ["996"],
                "currencies": ["KGS"],
                "languages": ["ky", "uz", "ru"]
            },
            "LA": {
                "name": "Laos",
                "capital": "Vientiane",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "LA",
                    "alpha3": "LAO",
                    "numeric": "418"
                },
                "timezone": {
                    "capital": "Asia/Vientiane"
                },
                "latlong": {
                    "lat": 19.85627,
                    "long": 102.495496
                },
                "topLevelDomain": "la",
                "fipsCode": "LA",
                "phoneCode": ["856"],
                "currencies": ["LAK"],
                "languages": ["lo", "fr", "en"]
            },
            "LV": {
                "name": "Latvia",
                "capital": "Riga",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "LV",
                    "alpha3": "LVA",
                    "numeric": "428"
                },
                "timezone": {
                    "capital": "Europe/Riga"
                },
                "latlong": {
                    "lat": 56.879635,
                    "long": 24.603189
                },
                "topLevelDomain": "lv",
                "fipsCode": "LG",
                "phoneCode": ["371"],
                "currencies": ["EUR"],
                "languages": ["lv", "ru", "lt"]
            },
            "LB": {
                "name": "Lebanon",
                "capital": "Beirut",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "LB",
                    "alpha3": "LBN",
                    "numeric": "422"
                },
                "timezone": {
                    "capital": "Asia/Beirut"
                },
                "latlong": {
                    "lat": 33.854721,
                    "long": 35.862285
                },
                "topLevelDomain": "lb",
                "fipsCode": "LE",
                "phoneCode": ["961"],
                "currencies": ["LBP"],
                "languages": ["ar-LB", "fr-LB", "en", "hy"]
            },
            "LS": {
                "name": "Lesotho",
                "capital": "Maseru",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "LS",
                    "alpha3": "LSO",
                    "numeric": "426"
                },
                "timezone": {
                    "capital": "Africa/Maseru"
                },
                "latlong": {
                    "lat": -29.609988,
                    "long": 28.233608
                },
                "topLevelDomain": "ls",
                "fipsCode": "LT",
                "phoneCode": ["266"],
                "currencies": ["LSL"],
                "languages": ["en-LS", "st", "zu", "xh"]
            },
            "LR": {
                "name": "Liberia",
                "capital": "Monrovia",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "LR",
                    "alpha3": "LBR",
                    "numeric": "430"
                },
                "timezone": {
                    "capital": "Africa/Monrovia"
                },
                "latlong": {
                    "lat": 6.428055,
                    "long": -9.429499
                },
                "topLevelDomain": "lr",
                "fipsCode": "LI",
                "phoneCode": ["231"],
                "currencies": ["LRD"],
                "languages": ["en-LR"]
            },
            "LY": {
                "name": "Libya",
                "capital": "Tripolis",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "LY",
                    "alpha3": "LBY",
                    "numeric": "434"
                },
                "timezone": {
                    "capital": "Africa/Tripoli"
                },
                "latlong": {
                    "lat": 26.3351,
                    "long": 17.228331
                },
                "topLevelDomain": "ly",
                "fipsCode": "LY",
                "phoneCode": ["218"],
                "currencies": ["LYD"],
                "languages": ["ar-LY", "it", "en"]
            },
            "LI": {
                "name": "Liechtenstein",
                "capital": "Vaduz",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "LI",
                    "alpha3": "LIE",
                    "numeric": "438"
                },
                "timezone": {
                    "capital": "Europe/Vaduz"
                },
                "latlong": {
                    "lat": 47.166,
                    "long": 9.555373
                },
                "topLevelDomain": "li",
                "fipsCode": "LS",
                "phoneCode": ["423"],
                "currencies": ["CHF"],
                "languages": ["de-LI"]
            },
            "LT": {
                "name": "Lithuania",
                "capital": "Vilnius",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "LT",
                    "alpha3": "LTU",
                    "numeric": "440"
                },
                "timezone": {
                    "capital": "Europe/Vilnius"
                },
                "latlong": {
                    "lat": 55.169438,
                    "long": 23.881275
                },
                "topLevelDomain": "lt",
                "fipsCode": "LH",
                "phoneCode": ["370"],
                "currencies": ["LTL"],
                "languages": ["lt", "ru", "pl"]
            },
            "LU": {
                "name": "Luxembourg",
                "capital": "Luxembourg",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "LU",
                    "alpha3": "LUX",
                    "numeric": "442"
                },
                "timezone": {
                    "capital": "Europe/Luxembourg"
                },
                "latlong": {
                    "lat": 49.815273,
                    "long": 6.129583
                },
                "topLevelDomain": "lu",
                "fipsCode": "LU",
                "phoneCode": ["352"],
                "currencies": ["EUR"],
                "languages": ["lb", "de-LU", "fr-LU"]
            },
            "MO": {
                "name": "Macao",
                "capital": "Macao",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "MO",
                    "alpha3": "MAC",
                    "numeric": "446"
                },
                "timezone": {
                    "capital": "Asia/Macau"
                },
                "latlong": {
                    "lat": 22.198745,
                    "long": 113.543873
                },
                "topLevelDomain": "mo",
                "fipsCode": "MC",
                "phoneCode": ["853"],
                "currencies": ["MOP"],
                "languages": ["zh", "zh-MO", "pt"]
            },
            "MK": {
                "name": "Macedonia",
                "capital": "Skopje",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "MK",
                    "alpha3": "MKD",
                    "numeric": "807"
                },
                "timezone": {
                    "capital": "Europe/Skopje"
                },
                "latlong": {
                    "lat": 41.608635,
                    "long": 21.745275
                },
                "topLevelDomain": "mk",
                "fipsCode": "MK",
                "phoneCode": ["389"],
                "currencies": ["MKD"],
                "languages": ["mk", "sq", "tr", "rmm", "sr"]
            },
            "MG": {
                "name": "Madagascar",
                "capital": "Antananarivo",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "MG",
                    "alpha3": "MDG",
                    "numeric": "450"
                },
                "timezone": {
                    "capital": "Indian/Antananarivo"
                },
                "latlong": {
                    "lat": -18.766947,
                    "long": 46.869107
                },
                "topLevelDomain": "mg",
                "fipsCode": "MA",
                "phoneCode": ["261"],
                "currencies": ["MGA"],
                "languages": ["fr-MG", "mg"]
            },
            "MW": {
                "name": "Malawi",
                "capital": "Lilongwe",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "MW",
                    "alpha3": "MWI",
                    "numeric": "454"
                },
                "timezone": {
                    "capital": "Africa/Blantyre"
                },
                "latlong": {
                    "lat": -13.254308,
                    "long": 34.301525
                },
                "topLevelDomain": "mw",
                "fipsCode": "MI",
                "phoneCode": ["265"],
                "currencies": ["MWK"],
                "languages": ["ny", "yao", "tum", "swk"]
            },
            "MY": {
                "name": "Malaysia",
                "capital": "Kuala Lumpur",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "MY",
                    "alpha3": "MYS",
                    "numeric": "458"
                },
                "timezone": {
                    "capital": "Asia/Kuala_Lumpur"
                },
                "latlong": {
                    "lat": 4.210484,
                    "long": 101.975766
                },
                "topLevelDomain": "my",
                "fipsCode": "MY",
                "phoneCode": ["60"],
                "currencies": ["MYR"],
                "languages": ["ms-MY", "en", "zh", "ta", "te", "ml", "pa", "th"]
            },
            "MV": {
                "name": "Maldives",
                "capital": "Male",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "MV",
                    "alpha3": "MDV",
                    "numeric": "462"
                },
                "timezone": {
                    "capital": "Indian/Maldives"
                },
                "latlong": {
                    "lat": 3.202778,
                    "long": 73.22068
                },
                "topLevelDomain": "mv",
                "fipsCode": "MV",
                "phoneCode": ["960"],
                "currencies": ["MVR"],
                "languages": ["dv", "en"]
            },
            "ML": {
                "name": "Mali",
                "capital": "Bamako",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "ML",
                    "alpha3": "MLI",
                    "numeric": "466"
                },
                "timezone": {
                    "capital": "Africa/Bamako"
                },
                "latlong": {
                    "lat": 17.570692,
                    "long": -3.996166
                },
                "topLevelDomain": "ml",
                "fipsCode": "ML",
                "phoneCode": ["223"],
                "currencies": ["XOF"],
                "languages": ["fr-ML", "bm"]
            },
            "MT": {
                "name": "Malta",
                "capital": "Valletta",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "MT",
                    "alpha3": "MLT",
                    "numeric": "470"
                },
                "timezone": {
                    "capital": "Europe/Malta"
                },
                "latlong": {
                    "lat": 35.937496,
                    "long": 14.375416
                },
                "topLevelDomain": "mt",
                "fipsCode": "MT",
                "phoneCode": ["356"],
                "currencies": ["EUR"],
                "languages": ["mt", "en-MT"]
            },
            "MH": {
                "name": "Marshall Islands",
                "capital": "Majuro",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "MH",
                    "alpha3": "MHL",
                    "numeric": "584"
                },
                "timezone": {
                    "capital": "Pacific/Majuro"
                },
                "latlong": {
                    "lat": 7.131474,
                    "long": 171.184478
                },
                "topLevelDomain": "mh",
                "fipsCode": "RM",
                "phoneCode": ["692"],
                "currencies": ["USD"],
                "languages": ["mh", "en-MH"]
            },
            "MQ": {
                "name": "Martinique",
                "capital": "Fort-de-France",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "MQ",
                    "alpha3": "MTQ",
                    "numeric": "474"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": 14.641528,
                    "long": -61.024174
                },
                "topLevelDomain": "",
                "fipsCode": "MB",
                "phoneCode": ["596"],
                "currencies": ["EUR"],
                "languages": ["fr-MQ"]
            },
            "MR": {
                "name": "Mauritania",
                "capital": "Nouakchott",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "MR",
                    "alpha3": "MRT",
                    "numeric": "478"
                },
                "timezone": {
                    "capital": "Africa/Nouakchott"
                },
                "latlong": {
                    "lat": 21.00789,
                    "long": -10.940835
                },
                "topLevelDomain": "mr",
                "fipsCode": "MR",
                "phoneCode": ["222"],
                "currencies": ["MRO"],
                "languages": ["ar-MR", "fuc", "snk", "fr", "mey", "wo"]
            },
            "MU": {
                "name": "Mauritius",
                "capital": "Port Louis",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "MU",
                    "alpha3": "MUS",
                    "numeric": "480"
                },
                "timezone": {
                    "capital": "Indian/Mauritius"
                },
                "latlong": {
                    "lat": -20.348404,
                    "long": 57.552152
                },
                "topLevelDomain": "mu",
                "fipsCode": "MP",
                "phoneCode": ["230"],
                "currencies": ["MUR"],
                "languages": ["en-MU", "bho", "fr"]
            },
            "YT": {
                "name": "Mayotte",
                "capital": "Mamoudzou",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "YT",
                    "alpha3": "MYT",
                    "numeric": "175"
                },
                "timezone": {
                    "capital": "Indian/Mayotte"
                },
                "latlong": {
                    "lat": -12.8275,
                    "long": 45.166244
                },
                "topLevelDomain": "yt",
                "fipsCode": "MF",
                "phoneCode": ["262"],
                "currencies": ["EUR"],
                "languages": ["fr-YT"]
            },
            "MX": {
                "name": "Mexico",
                "capital": "Mexico City",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "MX",
                    "alpha3": "MEX",
                    "numeric": "484"
                },
                "timezone": {
                    "capital": "America/Mexico_City"
                },
                "latlong": {
                    "lat": 23.634501,
                    "long": -102.552784
                },
                "topLevelDomain": "mx",
                "fipsCode": "MX",
                "phoneCode": ["52"],
                "currencies": ["MXN"],
                "languages": ["es-MX"]
            },
            "FM": {
                "name": "Micronesia",
                "capital": "Palikir",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "FM",
                    "alpha3": "FSM",
                    "numeric": "583"
                },
                "timezone": {
                    "capital": "Pacific/Pohnpei"
                },
                "latlong": {
                    "lat": 7.425554,
                    "long": 150.550812
                },
                "topLevelDomain": "fm",
                "fipsCode": "FM",
                "phoneCode": ["691"],
                "currencies": ["USD"],
                "languages": ["en-FM", "chk", "pon", "yap", "kos", "uli", "woe", "nkr", "kpg"]
            },
            "MD": {
                "name": "Moldova",
                "capital": "Chisinau",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "MD",
                    "alpha3": "MDA",
                    "numeric": "498"
                },
                "timezone": {
                    "capital": "Europe/Chisinau"
                },
                "latlong": {
                    "lat": 47.411631,
                    "long": 28.369885
                },
                "topLevelDomain": "md",
                "fipsCode": "MD",
                "phoneCode": ["373"],
                "currencies": ["MDL"],
                "languages": ["ro", "ru", "gag", "tr"]
            },
            "MC": {
                "name": "Monaco",
                "capital": "Monaco",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "MC",
                    "alpha3": "MCO",
                    "numeric": "492"
                },
                "timezone": {
                    "capital": "Europe/Monaco"
                },
                "latlong": {
                    "lat": 43.750298,
                    "long": 7.412841
                },
                "topLevelDomain": "mc",
                "fipsCode": "MN",
                "phoneCode": ["377"],
                "currencies": ["EUR"],
                "languages": ["fr-MC", "en", "it"]
            },
            "MN": {
                "name": "Mongolia",
                "capital": "Ulan Bator",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "MN",
                    "alpha3": "MNG",
                    "numeric": "496"
                },
                "timezone": {
                    "capital": "Asia/Ulaanbaatar"
                },
                "latlong": {
                    "lat": 46.862496,
                    "long": 103.846656
                },
                "topLevelDomain": "mn",
                "fipsCode": "MG",
                "phoneCode": ["976"],
                "currencies": ["MNT"],
                "languages": ["mn", "ru"]
            },
            "ME": {
                "name": "Montenegro",
                "capital": "Podgorica",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "ME",
                    "alpha3": "MNE",
                    "numeric": "499"
                },
                "timezone": {
                    "capital": "Europe/Podgorica"
                },
                "latlong": {
                    "lat": 42.708678,
                    "long": 19.37439
                },
                "topLevelDomain": "me",
                "fipsCode": "MJ",
                "phoneCode": ["382"],
                "currencies": ["EUR"],
                "languages": ["sr", "hu", "bs", "sq", "hr", "rom"]
            },
            "MS": {
                "name": "Montserrat",
                "capital": "Plymouth",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "MS",
                    "alpha3": "MSR",
                    "numeric": "500"
                },
                "timezone": {
                    "capital": "America/Montserrat"
                },
                "latlong": {
                    "lat": 16.742498,
                    "long": -62.187366
                },
                "topLevelDomain": "ms",
                "fipsCode": "MH",
                "phoneCode": ["1-664"],
                "currencies": ["XCD"],
                "languages": ["en-MS"]
            },
            "MA": {
                "name": "Morocco",
                "capital": "Rabat",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "MA",
                    "alpha3": "MAR",
                    "numeric": "504"
                },
                "timezone": {
                    "capital": "Africa/Casablanca"
                },
                "latlong": {
                    "lat": 31.791702,
                    "long": -7.09262
                },
                "topLevelDomain": "ma",
                "fipsCode": "MO",
                "phoneCode": ["212"],
                "currencies": ["MAD"],
                "languages": ["ar-MA", "ber", "fr"]
            },
            "MZ": {
                "name": "Mozambique",
                "capital": "Maputo",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "MZ",
                    "alpha3": "MOZ",
                    "numeric": "508"
                },
                "timezone": {
                    "capital": "Africa/Maputo"
                },
                "latlong": {
                    "lat": -18.665695,
                    "long": 35.529562
                },
                "topLevelDomain": "mz",
                "fipsCode": "MZ",
                "phoneCode": ["258"],
                "currencies": ["MZN"],
                "languages": ["pt-MZ", "vmw"]
            },
            "MM": {
                "name": "Myanmar [Burma]",
                "capital": "Nay Pyi Taw",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "MM",
                    "alpha3": "MMR",
                    "numeric": "104"
                },
                "timezone": {
                    "capital": "Asia/Rangoon"
                },
                "latlong": {
                    "lat": 21.913965,
                    "long": 95.956223
                },
                "topLevelDomain": "mm",
                "fipsCode": "BM",
                "phoneCode": ["95"],
                "currencies": ["MMK"],
                "languages": ["my"]
            },
            "NA": {
                "name": "Namibia",
                "capital": "Windhoek",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "NA",
                    "alpha3": "NAM",
                    "numeric": "516"
                },
                "timezone": {
                    "capital": "Africa/Windhoek"
                },
                "latlong": {
                    "lat": -22.95764,
                    "long": 18.49041
                },
                "topLevelDomain": "na",
                "fipsCode": "WA",
                "phoneCode": ["264"],
                "currencies": ["NAD"],
                "languages": ["en-NA", "af", "de", "hz", "naq"]
            },
            "NR": {
                "name": "Nauru",
                "capital": "Yaren",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "NR",
                    "alpha3": "NRU",
                    "numeric": "520"
                },
                "timezone": {
                    "capital": "Pacific/Nauru"
                },
                "latlong": {
                    "lat": -0.522778,
                    "long": 166.931503
                },
                "topLevelDomain": "nr",
                "fipsCode": "NR",
                "phoneCode": ["674"],
                "currencies": ["AUD"],
                "languages": ["na", "en-NR"]
            },
            "NP": {
                "name": "Nepal",
                "capital": "Kathmandu",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "NP",
                    "alpha3": "NPL",
                    "numeric": "524"
                },
                "timezone": {
                    "capital": "Asia/Kathmandu"
                },
                "latlong": {
                    "lat": 28.394857,
                    "long": 84.124008
                },
                "topLevelDomain": "np",
                "fipsCode": "NP",
                "phoneCode": ["977"],
                "currencies": ["NPR"],
                "languages": ["ne", "en"]
            },
            "NL": {
                "name": "Netherlands",
                "capital": "Amsterdam",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "NL",
                    "alpha3": "NLD",
                    "numeric": "528"
                },
                "timezone": {
                    "capital": "Europe/Amsterdam"
                },
                "latlong": {
                    "lat": 52.132633,
                    "long": 5.291266
                },
                "topLevelDomain": "nl",
                "fipsCode": "NL",
                "phoneCode": ["31"],
                "currencies": ["EUR"],
                "languages": ["nl-NL", "fy-NL"]
            },
            "NC": {
                "name": "New Caledonia",
                "capital": "Noumea",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "NC",
                    "alpha3": "NCL",
                    "numeric": "540"
                },
                "timezone": {
                    "capital": "Pacific/Noumea"
                },
                "latlong": {
                    "lat": -20.904305,
                    "long": 165.618042
                },
                "topLevelDomain": "nc",
                "fipsCode": "NC",
                "phoneCode": ["687"],
                "currencies": ["XPF"],
                "languages": ["fr-NC"]
            },
            "NZ": {
                "name": "New Zealand",
                "capital": "Wellington",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "NZ",
                    "alpha3": "NZL",
                    "numeric": "554"
                },
                "timezone": {
                    "capital": "Pacific/Auckland"
                },
                "latlong": {
                    "lat": -40.900557,
                    "long": 174.885971
                },
                "topLevelDomain": "nz",
                "fipsCode": "NZ",
                "phoneCode": ["64"],
                "currencies": ["NZD"],
                "languages": ["en-NZ", "mi"]
            },
            "NI": {
                "name": "Nicaragua",
                "capital": "Managua",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "NI",
                    "alpha3": "NIC",
                    "numeric": "558"
                },
                "timezone": {
                    "capital": "America/Managua"
                },
                "latlong": {
                    "lat": 12.865416,
                    "long": -85.207229
                },
                "topLevelDomain": "ni",
                "fipsCode": "NU",
                "phoneCode": ["505"],
                "currencies": ["NIO"],
                "languages": ["es-NI", "en"]
            },
            "NE": {
                "name": "Niger",
                "capital": "Niamey",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "NE",
                    "alpha3": "NER",
                    "numeric": "562"
                },
                "timezone": {
                    "capital": "Africa/Niamey"
                },
                "latlong": {
                    "lat": 17.607789,
                    "long": 8.081666
                },
                "topLevelDomain": "ne",
                "fipsCode": "NG",
                "phoneCode": ["227"],
                "currencies": ["XOF"],
                "languages": ["fr-NE", "ha", "kr", "dje"]
            },
            "NG": {
                "name": "Nigeria",
                "capital": "Abuja",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "NG",
                    "alpha3": "NGA",
                    "numeric": "566"
                },
                "timezone": {
                    "capital": "Africa/Lagos"
                },
                "latlong": {
                    "lat": 9.081999,
                    "long": 8.675277
                },
                "topLevelDomain": "ng",
                "fipsCode": "NI",
                "phoneCode": ["234"],
                "currencies": ["NGN"],
                "languages": ["en-NG", "ha", "yo", "ig", "ff"]
            },
            "NU": {
                "name": "Niue",
                "capital": "Alofi",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "NU",
                    "alpha3": "NIU",
                    "numeric": "570"
                },
                "timezone": {
                    "capital": "Pacific/Niue"
                },
                "latlong": {
                    "lat": -19.054445,
                    "long": -169.867233
                },
                "topLevelDomain": "nu",
                "fipsCode": "NE",
                "phoneCode": ["683"],
                "currencies": ["NZD"],
                "languages": ["niu", "en-NU"]
            },
            "NF": {
                "name": "Norfolk Island",
                "capital": "Kingston",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "NF",
                    "alpha3": "NFK",
                    "numeric": "574"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": -29.040835,
                    "long": 167.954712
                },
                "topLevelDomain": "",
                "fipsCode": "NF",
                "phoneCode": ["672"],
                "currencies": ["AUD"],
                "languages": ["en-NF"]
            },
            "KP": {
                "name": "North Korea",
                "capital": "Pyongyang",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "KP",
                    "alpha3": "PRK",
                    "numeric": "408"
                },
                "timezone": {
                    "capital": "Asia/Pyongyang"
                },
                "latlong": {
                    "lat": 40.339852,
                    "long": 127.510093
                },
                "topLevelDomain": "kp",
                "fipsCode": "KN",
                "phoneCode": ["850"],
                "currencies": ["KPW"],
                "languages": ["ko-KP"]
            },
            "MP": {
                "name": "Northern Mariana Islands",
                "capital": "Saipan",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "MP",
                    "alpha3": "MNP",
                    "numeric": "580"
                },
                "timezone": {
                    "capital": "Pacific/Saipan"
                },
                "latlong": {
                    "lat": 17.33083,
                    "long": 145.38469
                },
                "topLevelDomain": "mp",
                "fipsCode": "CQ",
                "phoneCode": ["1-670"],
                "currencies": ["USD"],
                "languages": ["fil", "tl", "zh", "ch-MP", "en-MP"]
            },
            "NO": {
                "name": "Norway",
                "capital": "Oslo",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "NO",
                    "alpha3": "NOR",
                    "numeric": "578"
                },
                "timezone": {
                    "capital": "Europe/Oslo"
                },
                "latlong": {
                    "lat": 60.472024,
                    "long": 8.468946
                },
                "topLevelDomain": "no",
                "fipsCode": "NO",
                "phoneCode": ["47"],
                "currencies": ["NOK"],
                "languages": ["no", "nb", "nn", "se", "fi"]
            },
            "OM": {
                "name": "Oman",
                "capital": "Muscat",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "OM",
                    "alpha3": "OMN",
                    "numeric": "512"
                },
                "timezone": {
                    "capital": "Asia/Muscat"
                },
                "latlong": {
                    "lat": 21.512583,
                    "long": 55.923255
                },
                "topLevelDomain": "om",
                "fipsCode": "MU",
                "phoneCode": ["968"],
                "currencies": ["OMR"],
                "languages": ["ar-OM", "en", "bal", "ur"]
            },
            "PK": {
                "name": "Pakistan",
                "capital": "Islamabad",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "PK",
                    "alpha3": "PAK",
                    "numeric": "586"
                },
                "timezone": {
                    "capital": "Asia/Karachi"
                },
                "latlong": {
                    "lat": 30.375321,
                    "long": 69.345116
                },
                "topLevelDomain": "pk",
                "fipsCode": "PK",
                "phoneCode": ["92"],
                "currencies": ["PKR"],
                "languages": ["ur-PK", "en-PK", "pa", "sd", "ps", "brh"]
            },
            "PW": {
                "name": "Palau",
                "capital": "Melekeok",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "PW",
                    "alpha3": "PLW",
                    "numeric": "585"
                },
                "timezone": {
                    "capital": "Pacific/Palau"
                },
                "latlong": {
                    "lat": 7.51498,
                    "long": 134.58252
                },
                "topLevelDomain": "pw",
                "fipsCode": "PS",
                "phoneCode": ["680"],
                "currencies": ["USD"],
                "languages": ["pau", "sov", "en-PW", "tox", "ja", "fil", "zh"]
            },
            "PS": {
                "name": "Palestine",
                "capital": "East Jerusalem",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "PS",
                    "alpha3": "PSE",
                    "numeric": "275"
                },
                "timezone": {
                    "capital": "Asia/Hebron"
                },
                "latlong": {
                    "lat": 31.952162,
                    "long": 35.233154
                },
                "topLevelDomain": "ps",
                "fipsCode": "WE",
                "phoneCode": ["970"],
                "currencies": ["ILS"],
                "languages": ["ar-PS"]
            },
            "PA": {
                "name": "Panama",
                "capital": "Panama City",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "PA",
                    "alpha3": "PAN",
                    "numeric": "591"
                },
                "timezone": {
                    "capital": "America/Panama"
                },
                "latlong": {
                    "lat": 8.537981,
                    "long": -80.782127
                },
                "topLevelDomain": "pa",
                "fipsCode": "PM",
                "phoneCode": ["507"],
                "currencies": ["PAB"],
                "languages": ["es-PA", "en"]
            },
            "PG": {
                "name": "Papua New Guinea",
                "capital": "Port Moresby",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "PG",
                    "alpha3": "PNG",
                    "numeric": "598"
                },
                "timezone": {
                    "capital": "Pacific/Port_Moresby"
                },
                "latlong": {
                    "lat": -6.314993,
                    "long": 143.95555
                },
                "topLevelDomain": "pg",
                "fipsCode": "PP",
                "phoneCode": ["675"],
                "currencies": ["PGK"],
                "languages": ["en-PG", "ho", "meu", "tpi"]
            },
            "PY": {
                "name": "Paraguay",
                "capital": "Asuncion",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "PY",
                    "alpha3": "PRY",
                    "numeric": "600"
                },
                "timezone": {
                    "capital": "America/Asuncion"
                },
                "latlong": {
                    "lat": -23.442503,
                    "long": -58.443832
                },
                "topLevelDomain": "py",
                "fipsCode": "PA",
                "phoneCode": ["595"],
                "currencies": ["PYG"],
                "languages": ["es-PY", "gn"]
            },
            "PE": {
                "name": "Peru",
                "capital": "Lima",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "PE",
                    "alpha3": "PER",
                    "numeric": "604"
                },
                "timezone": {
                    "capital": "America/Lima"
                },
                "latlong": {
                    "lat": -9.189967,
                    "long": -75.015152
                },
                "topLevelDomain": "pe",
                "fipsCode": "PE",
                "phoneCode": ["51"],
                "currencies": ["PEN"],
                "languages": ["es-PE", "qu", "ay"]
            },
            "PH": {
                "name": "Philippines",
                "capital": "Manila",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "PH",
                    "alpha3": "PHL",
                    "numeric": "608"
                },
                "timezone": {
                    "capital": "Asia/Manila"
                },
                "latlong": {
                    "lat": 12.879721,
                    "long": 121.774017
                },
                "topLevelDomain": "ph",
                "fipsCode": "RP",
                "phoneCode": ["63"],
                "currencies": ["PHP"],
                "languages": ["tl", "en-PH", "fil", "ceb", "tgl", "ilo", "hil", "war", "pam", "bik", "bcl", "pag", "mrw", "tsg", "mdh", "cbk", "krj", "sgd", "msb", "akl", "ibg", "yka", "mta", "abx"]
            },
            "PN": {
                "name": "Pitcairn Islands",
                "capital": "Adamstown",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "PN",
                    "alpha3": "PCN",
                    "numeric": "612"
                },
                "timezone": {
                    "capital": "Pacific/Pitcairn"
                },
                "latlong": {
                    "lat": -24.703615,
                    "long": -127.439308
                },
                "topLevelDomain": "pn",
                "fipsCode": "PC",
                "phoneCode": ["870"],
                "currencies": ["NZD"],
                "languages": ["en-PN"]
            },
            "PL": {
                "name": "Poland",
                "capital": "Warsaw",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "PL",
                    "alpha3": "POL",
                    "numeric": "616"
                },
                "timezone": {
                    "capital": "Europe/Warsaw"
                },
                "latlong": {
                    "lat": 51.919438,
                    "long": 19.145136
                },
                "topLevelDomain": "pl",
                "fipsCode": "PL",
                "phoneCode": ["48"],
                "currencies": ["PLN"],
                "languages": ["pl"]
            },
            "PT": {
                "name": "Portugal",
                "capital": "Lisbon",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "PT",
                    "alpha3": "PRT",
                    "numeric": "620"
                },
                "timezone": {
                    "capital": "Europe/Lisbon"
                },
                "latlong": {
                    "lat": 39.399872,
                    "long": -8.224454
                },
                "topLevelDomain": "pt",
                "fipsCode": "PO",
                "phoneCode": ["351"],
                "currencies": ["EUR"],
                "languages": ["pt-PT", "mwl"]
            },
            "PR": {
                "name": "Puerto Rico",
                "capital": "San Juan",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "PR",
                    "alpha3": "PRI",
                    "numeric": "630"
                },
                "timezone": {
                    "capital": "America/Puerto_Rico"
                },
                "latlong": {
                    "lat": 18.220833,
                    "long": -66.590149
                },
                "topLevelDomain": "pr",
                "fipsCode": "RQ",
                "phoneCode": ["1-787", "1-939"],
                "currencies": ["USD"],
                "languages": ["en-PR", "es-PR"]
            },
            "QA": {
                "name": "Qatar",
                "capital": "Doha",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "QA",
                    "alpha3": "QAT",
                    "numeric": "634"
                },
                "timezone": {
                    "capital": "Asia/Qatar"
                },
                "latlong": {
                    "lat": 25.354826,
                    "long": 51.183884
                },
                "topLevelDomain": "qa",
                "fipsCode": "QA",
                "phoneCode": ["974"],
                "currencies": ["QAR"],
                "languages": ["ar-QA", "es"]
            },
            "CG": {
                "name": "Republic of the Congo",
                "capital": "Brazzaville",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "CG",
                    "alpha3": "COG",
                    "numeric": "178"
                },
                "timezone": {
                    "capital": "Africa/Brazzaville"
                },
                "latlong": {
                    "lat": -0.228021,
                    "long": 15.827659
                },
                "topLevelDomain": "cg",
                "fipsCode": "CF",
                "phoneCode": ["242"],
                "currencies": ["XAF"],
                "languages": ["fr-CG", "kg", "ln-CG"]
            },
            "RE": {
                "name": "Réunion",
                "capital": "Saint-Denis",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "RE",
                    "alpha3": "REU",
                    "numeric": "638"
                },
                "timezone": {
                    "capital": "Indian/Reunion"
                },
                "latlong": {
                    "lat": -21.115141,
                    "long": 55.536384
                },
                "topLevelDomain": "re",
                "fipsCode": "RE",
                "phoneCode": ["262"],
                "currencies": ["EUR"],
                "languages": ["fr-RE"]
            },
            "RO": {
                "name": "Romania",
                "capital": "Bucharest",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "RO",
                    "alpha3": "ROU",
                    "numeric": "642"
                },
                "timezone": {
                    "capital": "Europe/Bucharest"
                },
                "latlong": {
                    "lat": 45.943161,
                    "long": 24.96676
                },
                "topLevelDomain": "ro",
                "fipsCode": "RO",
                "phoneCode": ["40"],
                "currencies": ["RON"],
                "languages": ["ro", "hu", "rom"]
            },
            "RU": {
                "name": "Russia",
                "capital": "Moscow",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "RU",
                    "alpha3": "RUS",
                    "numeric": "643"
                },
                "timezone": {
                    "capital": "Europe/Moscow"
                },
                "latlong": {
                    "lat": 61.52401,
                    "long": 105.318756
                },
                "topLevelDomain": "ru",
                "fipsCode": "RS",
                "phoneCode": ["7"],
                "currencies": ["RUB"],
                "languages": ["ru", "tt", "xal", "cau", "ady", "kv", "ce", "tyv", "cv", "udm", "tut", "mns", "bua", "myv", "mdf", "chm", "ba", "inh", "tut", "kbd", "krc", "av", "sah", "nog"]
            },
            "RW": {
                "name": "Rwanda",
                "capital": "Kigali",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "RW",
                    "alpha3": "RWA",
                    "numeric": "646"
                },
                "timezone": {
                    "capital": "Africa/Kigali"
                },
                "latlong": {
                    "lat": -1.940278,
                    "long": 29.873888
                },
                "topLevelDomain": "rw",
                "fipsCode": "RW",
                "phoneCode": ["250"],
                "currencies": ["RWF"],
                "languages": ["rw", "en-RW", "fr-RW", "sw"]
            },
            "BL": {
                "name": "Saint Barthélemy",
                "capital": "Gustavia",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "BL",
                    "alpha3": "BLM",
                    "numeric": "652"
                },
                "timezone": {
                    "capital": "America/St_Barthelemy"
                },
                "latlong": {
                    "lat": 17.9139222,
                    "long": -62.8338521
                },
                "topLevelDomain": "gp",
                "fipsCode": "TB",
                "phoneCode": ["590"],
                "currencies": ["EUR"],
                "languages": ["fr"]
            },
            "SH": {
                "name": "Saint Helena",
                "capital": "Jamestown",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "SH",
                    "alpha3": "SHN",
                    "numeric": "654"
                },
                "timezone": {
                    "capital": "Atlantic/St_Helena"
                },
                "latlong": {
                    "lat": -24.143474,
                    "long": -10.030696
                },
                "topLevelDomain": "sh",
                "fipsCode": "SH",
                "phoneCode": ["290"],
                "currencies": ["SHP"],
                "languages": ["en-SH"]
            },
            "KN": {
                "name": "Saint Kitts and Nevis",
                "capital": "Basseterre",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "KN",
                    "alpha3": "KNA",
                    "numeric": "659"
                },
                "timezone": {
                    "capital": "America/St_Kitts"
                },
                "latlong": {
                    "lat": 17.357822,
                    "long": -62.782998
                },
                "topLevelDomain": "kn",
                "fipsCode": "SC",
                "phoneCode": ["1-869"],
                "currencies": ["XCD"],
                "languages": ["en-KN"]
            },
            "LC": {
                "name": "Saint Lucia",
                "capital": "Castries",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "LC",
                    "alpha3": "LCA",
                    "numeric": "662"
                },
                "timezone": {
                    "capital": "America/St_Lucia"
                },
                "latlong": {
                    "lat": 13.909444,
                    "long": -60.978893
                },
                "topLevelDomain": "lc",
                "fipsCode": "ST",
                "phoneCode": ["1-758"],
                "currencies": ["XCD"],
                "languages": ["en-LC"]
            },
            "MF": {
                "name": "Saint Martin",
                "capital": "Marigot",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "MF",
                    "alpha3": "MAF",
                    "numeric": "663"
                },
                "timezone": {
                    "capital": "America/Marigot"
                },
                "latlong": {
                    "lat": 18.0858547,
                    "long": -63.0618597
                },
                "topLevelDomain": "gp",
                "fipsCode": "RN",
                "phoneCode": ["590"],
                "currencies": ["EUR"],
                "languages": ["fr"]
            },
            "PM": {
                "name": "Saint Pierre and Miquelon",
                "capital": "Saint-Pierre",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "PM",
                    "alpha3": "SPM",
                    "numeric": "666"
                },
                "timezone": {
                    "capital": "America/Miquelon"
                },
                "latlong": {
                    "lat": 46.941936,
                    "long": -56.27111
                },
                "topLevelDomain": "pm",
                "fipsCode": "SB",
                "phoneCode": ["508"],
                "currencies": ["EUR"],
                "languages": ["fr-PM"]
            },
            "VC": {
                "name": "Saint Vincent and the Grenadines",
                "capital": "Kingstown",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "VC",
                    "alpha3": "VCT",
                    "numeric": "670"
                },
                "timezone": {
                    "capital": "America/St_Vincent"
                },
                "latlong": {
                    "lat": 12.984305,
                    "long": -61.287228
                },
                "topLevelDomain": "vc",
                "fipsCode": "VC",
                "phoneCode": ["1-784"],
                "currencies": ["XCD"],
                "languages": ["en-VC", "fr"]
            },
            "WS": {
                "name": "Samoa",
                "capital": "Apia",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "WS",
                    "alpha3": "WSM",
                    "numeric": "882"
                },
                "timezone": {
                    "capital": "Pacific/Apia"
                },
                "latlong": {
                    "lat": -13.759029,
                    "long": -172.104629
                },
                "topLevelDomain": "ws",
                "fipsCode": "WS",
                "phoneCode": ["685"],
                "currencies": ["WST"],
                "languages": ["sm", "en-WS"]
            },
            "SM": {
                "name": "San Marino",
                "capital": "San Marino",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "SM",
                    "alpha3": "SMR",
                    "numeric": "674"
                },
                "timezone": {
                    "capital": "Europe/San_Marino"
                },
                "latlong": {
                    "lat": 43.94236,
                    "long": 12.457777
                },
                "topLevelDomain": "sm",
                "fipsCode": "SM",
                "phoneCode": ["378"],
                "currencies": ["EUR"],
                "languages": ["it-SM"]
            },
            "ST": {
                "name": "São Tomé and Príncipe",
                "capital": "Sao Tome",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "ST",
                    "alpha3": "STP",
                    "numeric": "678"
                },
                "timezone": {
                    "capital": "Africa/Sao_Tome"
                },
                "latlong": {
                    "lat": 0.18636,
                    "long": 6.613081
                },
                "topLevelDomain": "st",
                "fipsCode": "TP",
                "phoneCode": ["239"],
                "currencies": ["STD"],
                "languages": ["pt-ST"]
            },
            "SA": {
                "name": "Saudi Arabia",
                "capital": "Riyadh",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "SA",
                    "alpha3": "SAU",
                    "numeric": "682"
                },
                "timezone": {
                    "capital": "Asia/Riyadh"
                },
                "latlong": {
                    "lat": 23.885942,
                    "long": 45.079162
                },
                "topLevelDomain": "sa",
                "fipsCode": "SA",
                "phoneCode": ["966"],
                "currencies": ["SAR"],
                "languages": ["ar-SA"]
            },
            "SN": {
                "name": "Senegal",
                "capital": "Dakar",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "SN",
                    "alpha3": "SEN",
                    "numeric": "686"
                },
                "timezone": {
                    "capital": "Africa/Dakar"
                },
                "latlong": {
                    "lat": 14.497401,
                    "long": -14.452362
                },
                "topLevelDomain": "sn",
                "fipsCode": "SG",
                "phoneCode": ["221"],
                "currencies": ["XOF"],
                "languages": ["fr-SN", "wo", "fuc", "mnk"]
            },
            "RS": {
                "name": "Serbia",
                "capital": "Belgrade",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "RS",
                    "alpha3": "SRB",
                    "numeric": "688"
                },
                "timezone": {
                    "capital": "Europe/Belgrade"
                },
                "latlong": {
                    "lat": 44.016521,
                    "long": 21.005859
                },
                "topLevelDomain": "rs",
                "fipsCode": "RI",
                "phoneCode": ["381"],
                "currencies": ["RSD"],
                "languages": ["sr", "hu", "bs", "rom"]
            },
            "SC": {
                "name": "Seychelles",
                "capital": "Victoria",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "SC",
                    "alpha3": "SYC",
                    "numeric": "690"
                },
                "timezone": {
                    "capital": "Indian/Mahe"
                },
                "latlong": {
                    "lat": -4.679574,
                    "long": 55.491977
                },
                "topLevelDomain": "sc",
                "fipsCode": "SE",
                "phoneCode": ["248"],
                "currencies": ["SCR"],
                "languages": ["en-SC", "fr-SC"]
            },
            "SL": {
                "name": "Sierra Leone",
                "capital": "Freetown",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "SL",
                    "alpha3": "SLE",
                    "numeric": "694"
                },
                "timezone": {
                    "capital": "Africa/Freetown"
                },
                "latlong": {
                    "lat": 8.460555,
                    "long": -11.779889
                },
                "topLevelDomain": "sl",
                "fipsCode": "SL",
                "phoneCode": ["232"],
                "currencies": ["SLL"],
                "languages": ["en-SL", "men", "tem"]
            },
            "SG": {
                "name": "Singapore",
                "capital": "Singapur",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "SG",
                    "alpha3": "SGP",
                    "numeric": "702"
                },
                "timezone": {
                    "capital": "Asia/Singapore"
                },
                "latlong": {
                    "lat": 1.352083,
                    "long": 103.819836
                },
                "topLevelDomain": "sg",
                "fipsCode": "SN",
                "phoneCode": ["65"],
                "currencies": ["SGD"],
                "languages": ["cmn", "en-SG", "ms-SG", "ta-SG", "zh-SG"]
            },
            "SX": {
                "name": "Sint Maarten",
                "capital": "Philipsburg",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "SX",
                    "alpha3": "SXM",
                    "numeric": "534"
                },
                "timezone": {
                    "capital": "America/Lower_Princes"
                },
                "latlong": {
                    "lat": 18.0347188,
                    "long": -63.0681114
                },
                "topLevelDomain": "sx",
                "fipsCode": "NN",
                "phoneCode": ["599"],
                "currencies": ["ANG"],
                "languages": ["nl", "en"]
            },
            "SK": {
                "name": "Slovakia",
                "capital": "Bratislava",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "SK",
                    "alpha3": "SVK",
                    "numeric": "703"
                },
                "timezone": {
                    "capital": "Europe/Bratislava"
                },
                "latlong": {
                    "lat": 48.669026,
                    "long": 19.699024
                },
                "topLevelDomain": "sk",
                "fipsCode": "LO",
                "phoneCode": ["421"],
                "currencies": ["EUR"],
                "languages": ["sk", "hu"]
            },
            "SI": {
                "name": "Slovenia",
                "capital": "Ljubljana",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "SI",
                    "alpha3": "SVN",
                    "numeric": "705"
                },
                "timezone": {
                    "capital": "Europe/Ljubljana"
                },
                "latlong": {
                    "lat": 46.151241,
                    "long": 14.995463
                },
                "topLevelDomain": "si",
                "fipsCode": "SI",
                "phoneCode": ["386"],
                "currencies": ["EUR"],
                "languages": ["sl", "sh"]
            },
            "SB": {
                "name": "Solomon Islands",
                "capital": "Honiara",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "SB",
                    "alpha3": "SLB",
                    "numeric": "090"
                },
                "timezone": {
                    "capital": "Pacific/Guadalcanal"
                },
                "latlong": {
                    "lat": -9.64571,
                    "long": 160.156194
                },
                "topLevelDomain": "sb",
                "fipsCode": "BP",
                "phoneCode": ["677"],
                "currencies": ["SBD"],
                "languages": ["en-SB", "tpi"]
            },
            "SO": {
                "name": "Somalia",
                "capital": "Mogadishu",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "SO",
                    "alpha3": "SOM",
                    "numeric": "706"
                },
                "timezone": {
                    "capital": "Africa/Mogadishu"
                },
                "latlong": {
                    "lat": 5.152149,
                    "long": 46.199616
                },
                "topLevelDomain": "so",
                "fipsCode": "SO",
                "phoneCode": ["252"],
                "currencies": ["SOS"],
                "languages": ["so-SO", "ar-SO", "it", "en-SO"]
            },
            "ZA": {
                "name": "South Africa",
                "capital": "Pretoria",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "ZA",
                    "alpha3": "ZAF",
                    "numeric": "710"
                },
                "timezone": {
                    "capital": "Africa/Johannesburg"
                },
                "latlong": {
                    "lat": -30.559482,
                    "long": 22.937506
                },
                "topLevelDomain": "za",
                "fipsCode": "SF",
                "phoneCode": ["27"],
                "currencies": ["ZAR"],
                "languages": ["zu", "xh", "af", "nso", "en-ZA", "tn", "st", "ts", "ss", "ve", "nr"]
            },
            "GS": {
                "name": "South Georgia and the South Sandwich Islands",
                "capital": "Grytviken",
                "continent": {
                    "code": "AN"
                },
                "iso": {
                    "alpha2": "GS",
                    "alpha3": "SGS",
                    "numeric": "239"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": -54.429579,
                    "long": -36.587909
                },
                "topLevelDomain": "",
                "fipsCode": "SX",
                "phoneCode": [],
                "currencies": ["GBP"],
                "languages": ["en"]
            },
            "KR": {
                "name": "South Korea",
                "capital": "Seoul",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "KR",
                    "alpha3": "KOR",
                    "numeric": "410"
                },
                "timezone": {
                    "capital": "Asia/Seoul"
                },
                "latlong": {
                    "lat": 35.907757,
                    "long": 127.766922
                },
                "topLevelDomain": "kr",
                "fipsCode": "KS",
                "phoneCode": ["82"],
                "currencies": ["KRW"],
                "languages": ["ko-KR", "en"]
            },
            "SS": {
                "name": "South Sudan",
                "capital": "Juba",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "SS",
                    "alpha3": "SSD",
                    "numeric": "728"
                },
                "timezone": {
                    "capital": "Africa/Juba"
                },
                "latlong": {
                    "lat": 7.8626845,
                    "long": 29.6949232
                },
                "topLevelDomain": "ss",
                "fipsCode": "OD",
                "phoneCode": ["211"],
                "currencies": ["SSP"],
                "languages": ["en"]
            },
            "ES": {
                "name": "Spain",
                "capital": "Madrid",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "ES",
                    "alpha3": "ESP",
                    "numeric": "724"
                },
                "timezone": {
                    "capital": "Europe/Madrid"
                },
                "latlong": {
                    "lat": 40.463667,
                    "long": -3.74922
                },
                "topLevelDomain": "es",
                "fipsCode": "SP",
                "phoneCode": ["34"],
                "currencies": ["EUR"],
                "languages": ["es-ES", "ca", "gl", "eu", "oc"]
            },
            "LK": {
                "name": "Sri Lanka",
                "capital": "Colombo",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "LK",
                    "alpha3": "LKA",
                    "numeric": "144"
                },
                "timezone": {
                    "capital": "Asia/Colombo"
                },
                "latlong": {
                    "lat": 7.873054,
                    "long": 80.771797
                },
                "topLevelDomain": "lk",
                "fipsCode": "CE",
                "phoneCode": ["94"],
                "currencies": ["LKR"],
                "languages": ["si", "ta", "en"]
            },
            "SD": {
                "name": "Sudan",
                "capital": "Khartoum",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "SD",
                    "alpha3": "SDN",
                    "numeric": "729"
                },
                "timezone": {
                    "capital": "Africa/Khartoum"
                },
                "latlong": {
                    "lat": 12.862807,
                    "long": 30.217636
                },
                "topLevelDomain": "sd",
                "fipsCode": "SU",
                "phoneCode": ["249"],
                "currencies": ["SDG"],
                "languages": ["ar-SD", "en", "fia"]
            },
            "SR": {
                "name": "Suriname",
                "capital": "Paramaribo",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "SR",
                    "alpha3": "SUR",
                    "numeric": "740"
                },
                "timezone": {
                    "capital": "America/Paramaribo"
                },
                "latlong": {
                    "lat": 3.919305,
                    "long": -56.027783
                },
                "topLevelDomain": "sr",
                "fipsCode": "NS",
                "phoneCode": ["597"],
                "currencies": ["SRD"],
                "languages": ["nl-SR", "en", "srn", "hns", "jv"]
            },
            "SJ": {
                "name": "Svalbard and Jan Mayen",
                "capital": "Longyearbyen",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "SJ",
                    "alpha3": "SJM",
                    "numeric": "744"
                },
                "timezone": {
                    "capital": "Arctic/Longyearbyen"
                },
                "latlong": {
                    "lat": 77.553604,
                    "long": 23.670272
                },
                "topLevelDomain": "sj",
                "fipsCode": "SV",
                "phoneCode": ["47"],
                "currencies": ["NOK"],
                "languages": ["no", "ru"]
            },
            "SZ": {
                "name": "Swaziland",
                "capital": "Mbabane",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "SZ",
                    "alpha3": "SWZ",
                    "numeric": "748"
                },
                "timezone": {
                    "capital": "Africa/Mbabane"
                },
                "latlong": {
                    "lat": -26.522503,
                    "long": 31.465866
                },
                "topLevelDomain": "sz",
                "fipsCode": "WZ",
                "phoneCode": ["268"],
                "currencies": ["SZL"],
                "languages": ["en-SZ", "ss-SZ"]
            },
            "SE": {
                "name": "Sweden",
                "capital": "Stockholm",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "SE",
                    "alpha3": "SWE",
                    "numeric": "752"
                },
                "timezone": {
                    "capital": "Europe/Stockholm"
                },
                "latlong": {
                    "lat": 60.128161,
                    "long": 18.643501
                },
                "topLevelDomain": "se",
                "fipsCode": "SW",
                "phoneCode": ["46"],
                "currencies": ["SEK"],
                "languages": ["sv-SE", "se", "sma", "fi-SE"]
            },
            "CH": {
                "name": "Switzerland",
                "capital": "Berne",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "CH",
                    "alpha3": "CHE",
                    "numeric": "756"
                },
                "timezone": {
                    "capital": "Europe/Zurich"
                },
                "latlong": {
                    "lat": 46.818188,
                    "long": 8.227512
                },
                "topLevelDomain": "ch",
                "fipsCode": "SZ",
                "phoneCode": ["41"],
                "currencies": ["CHF"],
                "languages": ["de-CH", "fr-CH", "it-CH", "rm"]
            },
            "SY": {
                "name": "Syria",
                "capital": "Damascus",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "SY",
                    "alpha3": "SYR",
                    "numeric": "760"
                },
                "timezone": {
                    "capital": "Asia/Damascus"
                },
                "latlong": {
                    "lat": 34.802075,
                    "long": 38.996815
                },
                "topLevelDomain": "sy",
                "fipsCode": "SY",
                "phoneCode": ["963"],
                "currencies": ["SYP"],
                "languages": ["ar-SY", "ku", "hy", "arc", "fr", "en"]
            },
            "TW": {
                "name": "Taiwan",
                "capital": "Taipei",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "TW",
                    "alpha3": "TWN",
                    "numeric": "158"
                },
                "timezone": {
                    "capital": "Asia/Taipei"
                },
                "latlong": {
                    "lat": 23.69781,
                    "long": 120.960515
                },
                "topLevelDomain": "tw",
                "fipsCode": "TW",
                "phoneCode": ["886"],
                "currencies": ["TWD"],
                "languages": ["zh-TW", "zh", "nan", "hak"]
            },
            "TJ": {
                "name": "Tajikistan",
                "capital": "Dushanbe",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "TJ",
                    "alpha3": "TJK",
                    "numeric": "762"
                },
                "timezone": {
                    "capital": "Asia/Dushanbe"
                },
                "latlong": {
                    "lat": 38.861034,
                    "long": 71.276093
                },
                "topLevelDomain": "tj",
                "fipsCode": "TI",
                "phoneCode": ["992"],
                "currencies": ["TJS"],
                "languages": ["tg", "ru"]
            },
            "TZ": {
                "name": "Tanzania",
                "capital": "Dodoma",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "TZ",
                    "alpha3": "TZA",
                    "numeric": "834"
                },
                "timezone": {
                    "capital": "Africa/Dar_es_Salaam"
                },
                "latlong": {
                    "lat": -6.369028,
                    "long": 34.888822
                },
                "topLevelDomain": "tz",
                "fipsCode": "TZ",
                "phoneCode": ["255"],
                "currencies": ["TZS"],
                "languages": ["sw-TZ", "en", "ar"]
            },
            "TH": {
                "name": "Thailand",
                "capital": "Bangkok",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "TH",
                    "alpha3": "THA",
                    "numeric": "764"
                },
                "timezone": {
                    "capital": "Asia/Bangkok"
                },
                "latlong": {
                    "lat": 15.870032,
                    "long": 100.992541
                },
                "topLevelDomain": "th",
                "fipsCode": "TH",
                "phoneCode": ["66"],
                "currencies": ["THB"],
                "languages": ["th", "en"]
            },
            "TG": {
                "name": "Togo",
                "capital": "Lome",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "TG",
                    "alpha3": "TGO",
                    "numeric": "768"
                },
                "timezone": {
                    "capital": "Africa/Lome"
                },
                "latlong": {
                    "lat": 8.619543,
                    "long": 0.824782
                },
                "topLevelDomain": "tg",
                "fipsCode": "TO",
                "phoneCode": ["228"],
                "currencies": ["XOF"],
                "languages": ["fr-TG", "ee", "hna", "kbp", "dag", "ha"]
            },
            "TK": {
                "name": "Tokelau",
                "capital": "",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "TK",
                    "alpha3": "TKL",
                    "numeric": "772"
                },
                "timezone": {
                    "capital": "Pacific/Fakaofo"
                },
                "latlong": {
                    "lat": -8.967363,
                    "long": -171.855881
                },
                "topLevelDomain": "tk",
                "fipsCode": "TL",
                "phoneCode": ["690"],
                "currencies": ["NZD"],
                "languages": ["tkl", "en-TK"]
            },
            "TO": {
                "name": "Tonga",
                "capital": "Nuku'alofa",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "TO",
                    "alpha3": "TON",
                    "numeric": "776"
                },
                "timezone": {
                    "capital": "Pacific/Tongatapu"
                },
                "latlong": {
                    "lat": -21.178986,
                    "long": -175.198242
                },
                "topLevelDomain": "to",
                "fipsCode": "TN",
                "phoneCode": ["676"],
                "currencies": ["TOP"],
                "languages": ["to", "en-TO"]
            },
            "TT": {
                "name": "Trinidad and Tobago",
                "capital": "Port of Spain",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "TT",
                    "alpha3": "TTO",
                    "numeric": "780"
                },
                "timezone": {
                    "capital": "America/Port_of_Spain"
                },
                "latlong": {
                    "lat": 10.691803,
                    "long": -61.222503
                },
                "topLevelDomain": "tt",
                "fipsCode": "TD",
                "phoneCode": ["1-868"],
                "currencies": ["TTD"],
                "languages": ["en-TT", "hns", "fr", "es", "zh"]
            },
            "TN": {
                "name": "Tunisia",
                "capital": "Tunis",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "TN",
                    "alpha3": "TUN",
                    "numeric": "788"
                },
                "timezone": {
                    "capital": "Africa/Tunis"
                },
                "latlong": {
                    "lat": 33.886917,
                    "long": 9.537499
                },
                "topLevelDomain": "tn",
                "fipsCode": "TS",
                "phoneCode": ["216"],
                "currencies": ["TND"],
                "languages": ["ar-TN", "fr"]
            },
            "TR": {
                "name": "Turkey",
                "capital": "Ankara",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "TR",
                    "alpha3": "TUR",
                    "numeric": "792"
                },
                "timezone": {
                    "capital": "Europe/Istanbul"
                },
                "latlong": {
                    "lat": 38.963745,
                    "long": 35.243322
                },
                "topLevelDomain": "tr",
                "fipsCode": "TU",
                "phoneCode": ["90"],
                "currencies": ["TRY"],
                "languages": ["tr-TR", "ku", "diq", "az", "av"]
            },
            "TM": {
                "name": "Turkmenistan",
                "capital": "Ashgabat",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "TM",
                    "alpha3": "TKM",
                    "numeric": "795"
                },
                "timezone": {
                    "capital": "Asia/Ashgabat"
                },
                "latlong": {
                    "lat": 38.969719,
                    "long": 59.556278
                },
                "topLevelDomain": "tm",
                "fipsCode": "TX",
                "phoneCode": ["993"],
                "currencies": ["TMT"],
                "languages": ["tk", "ru", "uz"]
            },
            "TC": {
                "name": "Turks and Caicos Islands",
                "capital": "Cockburn Town",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "TC",
                    "alpha3": "TCA",
                    "numeric": "796"
                },
                "timezone": {
                    "capital": "America/Grand_Turk"
                },
                "latlong": {
                    "lat": 21.694025,
                    "long": -71.797928
                },
                "topLevelDomain": "tc",
                "fipsCode": "TK",
                "phoneCode": ["1-649"],
                "currencies": ["USD"],
                "languages": ["en-TC"]
            },
            "TV": {
                "name": "Tuvalu",
                "capital": "Funafuti",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "TV",
                    "alpha3": "TUV",
                    "numeric": "798"
                },
                "timezone": {
                    "capital": "Pacific/Funafuti"
                },
                "latlong": {
                    "lat": -7.109535,
                    "long": 177.64933
                },
                "topLevelDomain": "tv",
                "fipsCode": "TV",
                "phoneCode": ["688"],
                "currencies": ["AUD"],
                "languages": ["tvl", "en", "sm", "gil"]
            },
            "UM": {
                "name": "U.S. Minor Outlying Islands",
                "capital": "",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "UM",
                    "alpha3": "UMI",
                    "numeric": "581"
                },
                "timezone": {
                    "capital": ""
                },
                "latlong": {
                    "lat": 19.295374,
                    "long": 166.6280441
                },
                "topLevelDomain": "",
                "fipsCode": "",
                "phoneCode": ["1"],
                "currencies": ["USD"],
                "languages": ["en-UM"]
            },
            "VI": {
                "name": "U.S. Virgin Islands",
                "capital": "Charlotte Amalie",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "VI",
                    "alpha3": "VIR",
                    "numeric": "850"
                },
                "timezone": {
                    "capital": "America/St_Thomas"
                },
                "latlong": {
                    "lat": 18.335765,
                    "long": -64.896335
                },
                "topLevelDomain": "vi",
                "fipsCode": "VQ",
                "phoneCode": ["1-340"],
                "currencies": ["USD"],
                "languages": ["en-VI"]
            },
            "UG": {
                "name": "Uganda",
                "capital": "Kampala",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "UG",
                    "alpha3": "UGA",
                    "numeric": "800"
                },
                "timezone": {
                    "capital": "Africa/Kampala"
                },
                "latlong": {
                    "lat": 1.373333,
                    "long": 32.290275
                },
                "topLevelDomain": "ug",
                "fipsCode": "UG",
                "phoneCode": ["256"],
                "currencies": ["UGX"],
                "languages": ["en-UG", "lg", "sw", "ar"]
            },
            "UA": {
                "name": "Ukraine",
                "capital": "Kiev",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "UA",
                    "alpha3": "UKR",
                    "numeric": "804"
                },
                "timezone": {
                    "capital": "Europe/Kiev"
                },
                "latlong": {
                    "lat": 48.379433,
                    "long": 31.16558
                },
                "topLevelDomain": "ua",
                "fipsCode": "UP",
                "phoneCode": ["380"],
                "currencies": ["UAH"],
                "languages": ["uk", "ru-UA", "rom", "pl", "hu"]
            },
            "AE": {
                "name": "United Arab Emirates",
                "capital": "Abu Dhabi",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "AE",
                    "alpha3": "ARE",
                    "numeric": "784"
                },
                "timezone": {
                    "capital": "Asia/Dubai"
                },
                "latlong": {
                    "lat": 23.424076,
                    "long": 53.847818
                },
                "topLevelDomain": "ae",
                "fipsCode": "AE",
                "phoneCode": ["971"],
                "currencies": ["AED"],
                "languages": ["ar-AE", "fa", "en", "hi", "ur"]
            },
            "GB": {
                "name": "United Kingdom",
                "capital": "London",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "GB",
                    "alpha3": "GBR",
                    "numeric": "826"
                },
                "timezone": {
                    "capital": "Europe/London"
                },
                "latlong": {
                    "lat": 55.378051,
                    "long": -3.435973
                },
                "topLevelDomain": "uk",
                "fipsCode": "UK",
                "phoneCode": ["44"],
                "currencies": ["GBP"],
                "languages": ["en-GB", "cy-GB", "gd"]
            },
            "US": {
                "name": "United States",
                "capital": "Washington",
                "continent": {
                    "code": "NA"
                },
                "iso": {
                    "alpha2": "US",
                    "alpha3": "USA",
                    "numeric": "840"
                },
                "timezone": {
                    "capital": "America/New_York"
                },
                "latlong": {
                    "lat": 37.09024,
                    "long": -95.712891
                },
                "topLevelDomain": "us",
                "fipsCode": "US",
                "phoneCode": ["1"],
                "currencies": ["USD"],
                "languages": ["en-US", "es-US", "haw", "fr"]
            },
            "UY": {
                "name": "Uruguay",
                "capital": "Montevideo",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "UY",
                    "alpha3": "URY",
                    "numeric": "858"
                },
                "timezone": {
                    "capital": "America/Montevideo"
                },
                "latlong": {
                    "lat": -32.522779,
                    "long": -55.765835
                },
                "topLevelDomain": "uy",
                "fipsCode": "UY",
                "phoneCode": ["598"],
                "currencies": ["UYU"],
                "languages": ["es-UY"]
            },
            "UZ": {
                "name": "Uzbekistan",
                "capital": "Tashkent",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "UZ",
                    "alpha3": "UZB",
                    "numeric": "860"
                },
                "timezone": {
                    "capital": "Asia/Tashkent"
                },
                "latlong": {
                    "lat": 41.377491,
                    "long": 64.585262
                },
                "topLevelDomain": "uz",
                "fipsCode": "UZ",
                "phoneCode": ["998"],
                "currencies": ["UZS"],
                "languages": ["uz", "ru", "tg"]
            },
            "VU": {
                "name": "Vanuatu",
                "capital": "Port Vila",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "VU",
                    "alpha3": "VUT",
                    "numeric": "548"
                },
                "timezone": {
                    "capital": "Pacific/Efate"
                },
                "latlong": {
                    "lat": -15.376706,
                    "long": 166.959158
                },
                "topLevelDomain": "vu",
                "fipsCode": "NH",
                "phoneCode": ["678"],
                "currencies": ["VUV"],
                "languages": ["bi", "en-VU", "fr-VU"]
            },
            "VA": {
                "name": "Vatican City",
                "capital": "Vatican City",
                "continent": {
                    "code": "EU"
                },
                "iso": {
                    "alpha2": "VA",
                    "alpha3": "VAT",
                    "numeric": "336"
                },
                "timezone": {
                    "capital": "Europe/Vatican"
                },
                "latlong": {
                    "lat": 41.902916,
                    "long": 12.453389
                },
                "topLevelDomain": "va",
                "fipsCode": "VT",
                "phoneCode": ["379"],
                "currencies": ["EUR"],
                "languages": ["la", "it", "fr"]
            },
            "VE": {
                "name": "Venezuela",
                "capital": "Caracas",
                "continent": {
                    "code": "SA"
                },
                "iso": {
                    "alpha2": "VE",
                    "alpha3": "VEN",
                    "numeric": "862"
                },
                "timezone": {
                    "capital": "America/Caracas"
                },
                "latlong": {
                    "lat": 6.42375,
                    "long": -66.58973
                },
                "topLevelDomain": "ve",
                "fipsCode": "VE",
                "phoneCode": ["58"],
                "currencies": ["VEF"],
                "languages": ["es-VE"]
            },
            "VN": {
                "name": "Vietnam",
                "capital": "Hanoi",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "VN",
                    "alpha3": "VNM",
                    "numeric": "704"
                },
                "timezone": {
                    "capital": "Asia/Ho_Chi_Minh"
                },
                "latlong": {
                    "lat": 14.058324,
                    "long": 108.277199
                },
                "topLevelDomain": "vn",
                "fipsCode": "VM",
                "phoneCode": ["84"],
                "currencies": ["VND"],
                "languages": ["vi", "en", "fr", "zh", "km"]
            },
            "WF": {
                "name": "Wallis and Futuna",
                "capital": "Mata Utu",
                "continent": {
                    "code": "OC"
                },
                "iso": {
                    "alpha2": "WF",
                    "alpha3": "WLF",
                    "numeric": "876"
                },
                "timezone": {
                    "capital": "Pacific/Wallis"
                },
                "latlong": {
                    "lat": -13.768752,
                    "long": -177.156097
                },
                "topLevelDomain": "wf",
                "fipsCode": "WF",
                "phoneCode": ["681"],
                "currencies": ["XPF"],
                "languages": ["wls", "fud", "fr-WF"]
            },
            "EH": {
                "name": "Western Sahara",
                "capital": "El-Aaiun",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "EH",
                    "alpha3": "ESH",
                    "numeric": "732"
                },
                "timezone": {
                    "capital": "Africa/El_Aaiun"
                },
                "latlong": {
                    "lat": 24.215527,
                    "long": -12.885834
                },
                "topLevelDomain": "eh",
                "fipsCode": "WI",
                "phoneCode": ["212"],
                "currencies": ["MAD"],
                "languages": ["ar", "mey"]
            },
            "YE": {
                "name": "Yemen",
                "capital": "Sanaa",
                "continent": {
                    "code": "AS"
                },
                "iso": {
                    "alpha2": "YE",
                    "alpha3": "YEM",
                    "numeric": "887"
                },
                "timezone": {
                    "capital": "Asia/Aden"
                },
                "latlong": {
                    "lat": 15.552727,
                    "long": 48.516388
                },
                "topLevelDomain": "ye",
                "fipsCode": "YM",
                "phoneCode": ["967"],
                "currencies": ["YER"],
                "languages": ["ar-YE"]
            },
            "ZM": {
                "name": "Zambia",
                "capital": "Lusaka",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "ZM",
                    "alpha3": "ZMB",
                    "numeric": "894"
                },
                "timezone": {
                    "capital": "Africa/Lusaka"
                },
                "latlong": {
                    "lat": -13.133897,
                    "long": 27.849332
                },
                "topLevelDomain": "zm",
                "fipsCode": "ZA",
                "phoneCode": ["260"],
                "currencies": ["ZMK"],
                "languages": ["en-ZM", "bem", "loz", "lun", "lue", "ny", "toi"]
            },
            "ZW": {
                "name": "Zimbabwe",
                "capital": "Harare",
                "continent": {
                    "code": "AF"
                },
                "iso": {
                    "alpha2": "ZW",
                    "alpha3": "ZWE",
                    "numeric": "716"
                },
                "timezone": {
                    "capital": "Africa/Harare"
                },
                "latlong": {
                    "lat": -19.015438,
                    "long": 29.154857
                },
                "topLevelDomain": "zw",
                "fipsCode": "ZI",
                "phoneCode": ["263"],
                "currencies": ["ZWL"],
                "languages": ["en-ZW", "sn", "nr", "nd"]
            }
        };

        this._continentName = {
            "AF": "Africa",
            "AN": "Antarctica",
            "AS": "Asia",
            "EU": "Europe",
            "NA": "North America",
            "OC": "Oceania",
            "SA": "South America"
        };

        this._isoAlpha3_to_isoAlpha2 = {
            "AFG": "AF",
            "ALA": "AX",
            "ALB": "AL",
            "DZA": "DZ",
            "ASM": "AS",
            "AND": "AD",
            "AGO": "AO",
            "AIA": "AI",
            "ATA": "AQ",
            "ATG": "AG",
            "ARG": "AR",
            "ARM": "AM",
            "ABW": "AW",
            "AUS": "AU",
            "AUT": "AT",
            "AZE": "AZ",
            "BHS": "BS",
            "BHR": "BH",
            "BGD": "BD",
            "BRB": "BB",
            "BLR": "BY",
            "BEL": "BE",
            "BLZ": "BZ",
            "BEN": "BJ",
            "BMU": "BM",
            "BTN": "BT",
            "BOL": "BO",
            "BES": "BQ",
            "BIH": "BA",
            "BWA": "BW",
            "BVT": "BV",
            "BRA": "BR",
            "IOT": "IO",
            "VGB": "VG",
            "BRN": "BN",
            "BGR": "BG",
            "BFA": "BF",
            "BDI": "BI",
            "KHM": "KH",
            "CMR": "CM",
            "CAN": "CA",
            "CPV": "CV",
            "CYM": "KY",
            "CAF": "CF",
            "TCD": "TD",
            "CHL": "CL",
            "CHN": "CN",
            "CXR": "CX",
            "CCK": "CC",
            "COL": "CO",
            "COM": "KM",
            "COK": "CK",
            "CRI": "CR",
            "HRV": "HR",
            "CUB": "CU",
            "CUW": "CW",
            "CYP": "CY",
            "CZE": "CZ",
            "COD": "CD",
            "DNK": "DK",
            "DJI": "DJ",
            "DMA": "DM",
            "DOM": "DO",
            "TLS": "TL",
            "ECU": "EC",
            "EGY": "EG",
            "SLV": "SV",
            "GNQ": "GQ",
            "ERI": "ER",
            "EST": "EE",
            "ETH": "ET",
            "FLK": "FK",
            "FRO": "FO",
            "FJI": "FJ",
            "FIN": "FI",
            "FRA": "FR",
            "GUF": "GF",
            "PYF": "PF",
            "ATF": "TF",
            "GAB": "GA",
            "GMB": "GM",
            "GEO": "GE",
            "DEU": "DE",
            "GHA": "GH",
            "GIB": "GI",
            "GRC": "GR",
            "GRL": "GL",
            "GRD": "GD",
            "GLP": "GP",
            "GUM": "GU",
            "GTM": "GT",
            "GGY": "GG",
            "GIN": "GN",
            "GNB": "GW",
            "GUY": "GY",
            "HTI": "HT",
            "HMD": "HM",
            "HND": "HN",
            "HKG": "HK",
            "HUN": "HU",
            "ISL": "IS",
            "IND": "IN",
            "IDN": "ID",
            "IRN": "IR",
            "IRQ": "IQ",
            "IRL": "IE",
            "IMN": "IM",
            "ISR": "IL",
            "ITA": "IT",
            "CIV": "CI",
            "JAM": "JM",
            "JPN": "JP",
            "JEY": "JE",
            "JOR": "JO",
            "KAZ": "KZ",
            "KEN": "KE",
            "KIR": "KI",
            "XKX": "XK",
            "KWT": "KW",
            "KGZ": "KG",
            "LAO": "LA",
            "LVA": "LV",
            "LBN": "LB",
            "LSO": "LS",
            "LBR": "LR",
            "LBY": "LY",
            "LIE": "LI",
            "LTU": "LT",
            "LUX": "LU",
            "MAC": "MO",
            "MKD": "MK",
            "MDG": "MG",
            "MWI": "MW",
            "MYS": "MY",
            "MDV": "MV",
            "MLI": "ML",
            "MLT": "MT",
            "MHL": "MH",
            "MTQ": "MQ",
            "MRT": "MR",
            "MUS": "MU",
            "MYT": "YT",
            "MEX": "MX",
            "FSM": "FM",
            "MDA": "MD",
            "MCO": "MC",
            "MNG": "MN",
            "MNE": "ME",
            "MSR": "MS",
            "MAR": "MA",
            "MOZ": "MZ",
            "MMR": "MM",
            "NAM": "NA",
            "NRU": "NR",
            "NPL": "NP",
            "NLD": "NL",
            "NCL": "NC",
            "NZL": "NZ",
            "NIC": "NI",
            "NER": "NE",
            "NGA": "NG",
            "NIU": "NU",
            "NFK": "NF",
            "PRK": "KP",
            "MNP": "MP",
            "NOR": "NO",
            "OMN": "OM",
            "PAK": "PK",
            "PLW": "PW",
            "PSE": "PS",
            "PAN": "PA",
            "PNG": "PG",
            "PRY": "PY",
            "PER": "PE",
            "PHL": "PH",
            "PCN": "PN",
            "POL": "PL",
            "PRT": "PT",
            "PRI": "PR",
            "QAT": "QA",
            "COG": "CG",
            "REU": "RE",
            "ROU": "RO",
            "RUS": "RU",
            "RWA": "RW",
            "BLM": "BL",
            "SHN": "SH",
            "KNA": "KN",
            "LCA": "LC",
            "MAF": "MF",
            "SPM": "PM",
            "VCT": "VC",
            "WSM": "WS",
            "SMR": "SM",
            "STP": "ST",
            "SAU": "SA",
            "SEN": "SN",
            "SRB": "RS",
            "SYC": "SC",
            "SLE": "SL",
            "SGP": "SG",
            "SXM": "SX",
            "SVK": "SK",
            "SVN": "SI",
            "SLB": "SB",
            "SOM": "SO",
            "ZAF": "ZA",
            "SGS": "GS",
            "KOR": "KR",
            "SSD": "SS",
            "ESP": "ES",
            "LKA": "LK",
            "SDN": "SD",
            "SUR": "SR",
            "SJM": "SJ",
            "SWZ": "SZ",
            "SWE": "SE",
            "CHE": "CH",
            "SYR": "SY",
            "TWN": "TW",
            "TJK": "TJ",
            "TZA": "TZ",
            "THA": "TH",
            "TGO": "TG",
            "TKL": "TK",
            "TON": "TO",
            "TTO": "TT",
            "TUN": "TN",
            "TUR": "TR",
            "TKM": "TM",
            "TCA": "TC",
            "TUV": "TV",
            "UMI": "UM",
            "VIR": "VI",
            "UGA": "UG",
            "UKR": "UA",
            "ARE": "AE",
            "GBR": "GB",
            "USA": "US",
            "URY": "UY",
            "UZB": "UZ",
            "VUT": "VU",
            "VAT": "VA",
            "VEN": "VE",
            "VNM": "VN",
            "WLF": "WF",
            "ESH": "EH",
            "YEM": "YE",
            "ZMB": "ZM",
            "ZWE": "ZW"
        };
    }

    /**
     * This is a helper function to get the value based on the code and key.
     *
     * @param {string} code
     * @param {string} param
     * @param {string} key (optional)
     * @returns {*}
     * @private
     */
    _getDataByParam(code, param, key) {

        let result;

        if (code.length === 2) {
            result = this._data[code][param];
        } else if (code.length === 3) {
            result = this._data[this._isoAlpha3_to_isoAlpha2[code]][param];
        } else {
            return {error: 'Invalid code'};
        }

        if (typeof key !== 'undefined') {
            if (param === 'continent' && key === 'name') {
                result = this._continentName[result['code']];
            } else {
                result = result[key];
            }
        }

        if (typeof result === 'undefined') {
            return {error: 'No match found'};
        }

        return result;

    }

    /**
     * This will return result based on query.
     *
     * @param array data
     * @param string|object query
     * @returns {*}
     * @private
     */
    _getSearchData(data, query) {

        let
            searchParam = 'name',
            searchQuery = '',
            searchResult = [];

        if (typeof query === 'object') {
            searchParam = Object.keys(query)[0];
            searchQuery = query[searchParam];
        } else if (typeof query === 'string') {
            searchParam = 'name';
            searchQuery = query;
        } else {
            searchResult = data;
            return {
                match: searchResult.length,
                result: searchResult
            };
        }

        if (['name', 'capital', 'topLevelDomain', 'fipsCode'].indexOf(searchParam) > -1) {

            searchResult = data.filter((elem) => {
                let
                    haystack = elem[searchParam].split(' '),
                    match = [];
                if (typeof searchQuery === 'string') {
                    haystack.forEach((el) => {
                        if (el.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
                            match.push(elem);
                        }
                    });
                } else {
                    searchQuery.forEach((sqEl) => {
                        haystack.forEach((el) => {
                            if (el.toLowerCase().indexOf(sqEl.toLowerCase()) > -1) {
                                match.push(elem);
                            }
                        });
                    });
                }

                if (match.length > 0) {
                    return match;
                }
            });

        } else if (['phoneCode'].indexOf(searchParam) > -1) {

            searchResult = data.filter((elem) => {
                let
                    haystack = elem[searchParam],
                    match = [];

                if (typeof searchQuery === 'string') {
                    haystack.forEach((el) => {
                        if (el.replace(/\D/g, '') === searchQuery.replace(/\D/g, '')) {
                            match.push(elem);
                        }
                    });
                } else {
                    searchQuery.forEach((sqEl) => {
                        haystack.forEach((el) => {
                            if (el.replace(/\D/g, '') === sqEl.replace(/\D/g, '')) {
                                match.push(elem);
                            }
                        });
                    });
                }

                if (match.length > 0) {
                    return match;
                }

            });

        } else if (['currencies'].indexOf(searchParam) > -1) {

            searchResult = data.filter((elem) => {
                let
                    haystack = elem[searchParam],
                    match = [];

                if (typeof searchQuery === 'string') {
                    haystack.forEach((el) => {
                        if (el.toLowerCase() === searchQuery.toLowerCase()) {
                            match.push(elem);
                        }
                    });
                } else {
                    searchQuery.forEach((sqEl) => {
                        haystack.forEach((el) => {
                            if (el.toLowerCase() === sqEl.toLowerCase()) {
                                match.push(elem);
                            }
                        });
                    });
                }

                if (match.length > 0) {
                    return match;
                }

            });

        } else if (['languages'].indexOf(searchParam) > -1) {

            searchResult = data.filter((elem) => {
                let
                    haystack = elem[searchParam],
                    match = [];

                if (typeof searchQuery === 'string') {
                    haystack.forEach((el) => {
                        el.replace(/\W/g, ' ').split(' ').forEach((lang) => {
                            if (lang.toLowerCase() === searchQuery.toLowerCase()) {
                                match.push(elem);
                            }
                        });
                    });
                } else {
                    searchQuery.forEach((sqEl) => {
                        haystack.forEach((el) => {
                            el.replace(/\W/g, ' ').split(' ').forEach((lang) => {
                                if (lang.toLowerCase() === sqEl.toLowerCase()) {
                                    match.push(elem);
                                }
                            });
                        });
                    });
                }

                if (match.length > 0) {
                    return match;
                }

            });

        } else if ('continentCode' === searchParam) {

            searchResult = data.filter((elem) => {

                let match = [];

                if (typeof searchQuery === 'string') {
                    if (elem.continent.code.toLowerCase() === searchQuery.toLowerCase()) {
                        return elem;
                    }
                } else {
                    searchQuery.forEach((sqEl) => {
                        if (elem.continent.code.toLowerCase() === sqEl.toLowerCase()) {
                            match.push(elem);
                        }
                    });
                }

                if (match.length > 0) {
                    return match;
                }

            });

        } else if ('continentName' === searchParam) {

            searchResult = data.filter((elem) => {

                let match = [];

                if (typeof searchQuery === 'string') {
                    if (elem.continent.name.toLowerCase() === searchQuery.toLowerCase()) {
                        return elem;
                    }
                } else {
                    searchQuery.forEach((sqEl) => {
                        if (elem.continent.name.toLowerCase() === sqEl.toLowerCase()) {
                            match.push(elem);
                        }
                    });
                }

                if (match.length > 0) {
                    return match;
                }

            });

        }

        return searchResult;
    }

    /**
     * This will return country detail by country
     * iso-alpha-2 and iso-alpha-3 code.
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    get(code) {
        let result;

        if (code.length === 2) {
            result = this._data[code];
        } else if (code.length === 3) {
            result = this._data[this._isoAlpha3_to_isoAlpha2[code]];
        } else {
            return {error: 'Invalid code'};
        }

        if (typeof result === 'undefined') {
            return {error: 'No match found'};
        }

        let flag = this.flag(code);
        if (!flag.error) {
            result['flag'] = flag;
        } else {
            flag = null;
        }

        result['continent']['name'] = this._continentName[result['continent']['code']];

        return result;
    }

    /**
     * This will return the name of the country
     * iso-alpha-2 and iso-alpha-3 code.
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    name(code) {
        return this._getDataByParam(code, 'name');
    }

    /**
     * This will return the capital of the country
     * iso-alpha-2 and iso-alpha-3 code.
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    capital(code) {
        return this._getDataByParam(code, 'capital');
    }

    /**
     * This will return iso data based on country
     * iso-alpha-2 and iso-alpha-3 code
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @param {string} key (optional)
     * @returns {*}
     */
    iso(code, key) {
        return this._getDataByParam(code, 'iso', key);
    }

    /**
     * This will return image path of country flag by
     * iso-alpha-2 and iso-alpha-3 code
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    flag(code) {
        let result;

        result = this.iso(code, 'alpha2');

        if (typeof result === 'undefined') {
            return {error: 'No match found'};
        } else if (result.error) {
            return result;
        }

        // construct flag image file path
        result = this._config.flagDir + "/" + result.toLowerCase() + ".png";

        return result;
    }

    /**
     * This will return continent data based on country
     * iso-alpha-2 and iso-alpha-3 code
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @param {string} key (optional)
     * @returns {*}
     */
    continent(code, key) {
        return this._getDataByParam(code, 'continent', key);
    }

    /**
     * This will return the top level domain of the country
     * iso-alpha-2 and iso-alpha-3 code.
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    tld(code) {
        return this._getDataByParam(code, 'topLevelDomain');
    }

    /**
     * This will return timezone data based on country
     * iso-alpha-2 and iso-alpha-3 code
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    timezone(code) {
        return this._getDataByParam(code, 'timezone', 'capital');
    }

    /**
     * This will return the fips code of the country
     * iso-alpha-2 and iso-alpha-3 code.
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    fipsCode(code) {
        return this._getDataByParam(code, 'fipsCode');
    }

    /**
     * This will return the phone code of the country
     * iso-alpha-2 and iso-alpha-3 code.
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    phoneCode(code) {
        return this._getDataByParam(code, 'phoneCode');
    }

    /**
     * This will return the currencies of the country
     * iso-alpha-2 and iso-alpha-3 code.
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    currencies(code) {
        return this._getDataByParam(code, 'currencies');
    }

    /**
     * This will return the languages of the country
     * iso-alpha-2 and iso-alpha-3 code.
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @returns {*}
     */
    languages(code) {
        return this._getDataByParam(code, 'languages');
    }

    /**
     * This will return an array of countries detail.
     * @returns [{*}]
     */
    all() {
        return Object.values(this._data).map((elem) => {
            elem['continent']['name'] = this.continent(elem.iso.alpha2, 'name');
            return elem;
        });
    }

    /**
     * This will return lat long data based on country
     * iso-alpha-2 and iso-alpha-3 code
     *
     * @param {string} code iso-alpha-2 and iso-alpha-3 code
     * @param {string} key (optional)
     * @returns {*}
     */
    latlong(code, key) {
        return this._getDataByParam(code, 'latlong', key);
    }

    /**
     * This will return data based on search query.
     *
     * @param {string|object} query search query
     * @param {string} key (optional)
     * @returns {*}
     */
    search(query) {

        let searchResult = [];

        if (typeof query === 'object') {

            let searchParams = Object.keys(query);

            searchResult = this.all();

            searchParams.forEach((searchParam) => {
                // query
                let q = {};
                q[searchParam] = query[searchParam];
                searchResult = this._getSearchData(searchResult, q);
            });

        } else {
            searchResult = this._getSearchData(this.all(), query);
        }

        return {
            match: searchResult.length,
            result: searchResult
        };

    }

    /**
     * This will return HTML select element with options.
     *
     * @param {object} config (optional)
     * @returns {string}
     */
    getSelectHTML(config) {

        let
            html = "",
            selectElemAttributes = "";

        if (typeof config === 'undefined') {
            config = {
                id: '',
                name: '',
                optionValue: 'alpha2'
            };
        }

        if (typeof config.id !== 'undefined') {
            selectElemAttributes += " id='" + config.id + "'";
        }

        if (typeof config.name !== 'undefined') {
            selectElemAttributes += " name='" + config.name + "'";
        }

        if (typeof config.size !== 'undefined') {
            selectElemAttributes += " size='" + config.size + "'";
        }

        if (typeof config.required !== 'undefined' && config.required === true) {
            selectElemAttributes += " required ";
        }

        if (typeof config.firstOptionElem !== 'undefined') {
            html += '<option value="' + config.firstOptionElem.value + '">' + config.firstOptionElem.text + '</option>';
        }

        if (typeof config.selectDataAttr !== 'undefined') {
            config.selectDataAttr.forEach((dataSettings) => {
                selectElemAttributes += " " + dataSettings.name + "='" + dataSettings.value + "'";
            });
        }

        if (typeof config.countries !== 'undefined') {

            let countriesList = config.countries.list;
            let countryArrData = [];

            countriesList.forEach((code) => {

                let country;
                if (code.length === 2) {
                    country = this._data[code];
                } else if (code.length === 3) {
                    country = this._data[this._isoAlpha3_to_isoAlpha2[code]];
                }

                countryArrData.push([country.name, code, country]);

            });

            if (typeof config.countries.sort !== 'undefined') {
                if (config.countries.sort === 'ASC') {
                    countryArrData.sort();
                } else if (config.countries.sort === 'DESC') {
                    countryArrData.sort().reverse();
                }
            }

            countryArrData.forEach((countryArr) => {
                let country = countryArr[2];
                html += '<option value="' + country.iso[config.optionValue] + '">' + country.name + '</option>';
            });

        } else {
            this.all().forEach((country) => {
                html += '<option value="' + country.iso[config.optionValue] + '">' + country.name + '</option>';
            });
        }

        return '<select ' + selectElemAttributes + '>' + html + '</select>';

    }

}