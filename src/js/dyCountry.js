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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "AF",
                    "alpha3": "AFG",
                    "numeric": "004"
                },
                "timezone": {
                    "capital": "Asia/Kabul"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "AX",
                    "alpha3": "ALA",
                    "numeric": "248"
                },
                "timezone": {
                    "capital": ""
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "AL",
                    "alpha3": "ALB",
                    "numeric": "008"
                },
                "timezone": {
                    "capital": "Europe/Tirane"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "DZ",
                    "alpha3": "DZA",
                    "numeric": "012"
                },
                "timezone": {
                    "capital": "Africa/Algiers"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "AS",
                    "alpha3": "ASM",
                    "numeric": "016"
                },
                "timezone": {
                    "capital": "Pacific/Pago_Pago"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "AD",
                    "alpha3": "AND",
                    "numeric": "020"
                },
                "timezone": {
                    "capital": "Europe/Andorra"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "AO",
                    "alpha3": "AGO",
                    "numeric": "024"
                },
                "timezone": {
                    "capital": "Africa/Luanda"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "AI",
                    "alpha3": "AIA",
                    "numeric": "660"
                },
                "timezone": {
                    "capital": "America/Anguilla"
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
                    "code": "AN",
                    "name": "Antarctica"
                },
                "iso": {
                    "alpha2": "AQ",
                    "alpha3": "ATA",
                    "numeric": "010"
                },
                "timezone": {
                    "capital": "Antarctica/Troll"
                },
                "topLevelDomain": "aq",
                "fipsCode": "AY",
                "phoneCode": [],
                "currencies": [""],
                "languages": [""]
            },
            "AG": {
                "name": "Antigua and Barbuda",
                "capital": "St. John's",
                "continent": {
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "AG",
                    "alpha3": "ATG",
                    "numeric": "028"
                },
                "timezone": {
                    "capital": "America/Antigua"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "AR",
                    "alpha3": "ARG",
                    "numeric": "032"
                },
                "timezone": {
                    "capital": "America/Argentina/Buenos_Aires"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "AM",
                    "alpha3": "ARM",
                    "numeric": "051"
                },
                "timezone": {
                    "capital": "Asia/Yerevan"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "AW",
                    "alpha3": "ABW",
                    "numeric": "533"
                },
                "timezone": {
                    "capital": "America/Aruba"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "AU",
                    "alpha3": "AUS",
                    "numeric": "036"
                },
                "timezone": {
                    "capital": "Australia/Sydney"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "AT",
                    "alpha3": "AUT",
                    "numeric": "040"
                },
                "timezone": {
                    "capital": "Europe/Vienna"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "AZ",
                    "alpha3": "AZE",
                    "numeric": "031"
                },
                "timezone": {
                    "capital": "Asia/Baku"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "BS",
                    "alpha3": "BHS",
                    "numeric": "044"
                },
                "timezone": {
                    "capital": "America/Nassau"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "BH",
                    "alpha3": "BHR",
                    "numeric": "048"
                },
                "timezone": {
                    "capital": "Asia/Bahrain"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "BD",
                    "alpha3": "BGD",
                    "numeric": "050"
                },
                "timezone": {
                    "capital": "Asia/Dhaka"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "BB",
                    "alpha3": "BRB",
                    "numeric": "052"
                },
                "timezone": {
                    "capital": "America/Barbados"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "BY",
                    "alpha3": "BLR",
                    "numeric": "112"
                },
                "timezone": {
                    "capital": "Europe/Minsk"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "BE",
                    "alpha3": "BEL",
                    "numeric": "056"
                },
                "timezone": {
                    "capital": "Europe/Brussels"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "BZ",
                    "alpha3": "BLZ",
                    "numeric": "084"
                },
                "timezone": {
                    "capital": "America/Belize"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "BJ",
                    "alpha3": "BEN",
                    "numeric": "204"
                },
                "timezone": {
                    "capital": "Africa/Porto-Novo"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "BM",
                    "alpha3": "BMU",
                    "numeric": "060"
                },
                "timezone": {
                    "capital": "Atlantic/Bermuda"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "BT",
                    "alpha3": "BTN",
                    "numeric": "064"
                },
                "timezone": {
                    "capital": "Asia/Thimphu"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "BO",
                    "alpha3": "BOL",
                    "numeric": "068"
                },
                "timezone": {
                    "capital": "America/La_Paz"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "BQ",
                    "alpha3": "BES",
                    "numeric": "535"
                },
                "timezone": {
                    "capital": ""
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "BA",
                    "alpha3": "BIH",
                    "numeric": "070"
                },
                "timezone": {
                    "capital": "Europe/Sarajevo"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "BW",
                    "alpha3": "BWA",
                    "numeric": "072"
                },
                "timezone": {
                    "capital": "Africa/Gaborone"
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
                    "code": "AN",
                    "name": "Antarctica"
                },
                "iso": {
                    "alpha2": "BV",
                    "alpha3": "BVT",
                    "numeric": "074"
                },
                "timezone": {
                    "capital": ""
                },
                "topLevelDomain": "",
                "fipsCode": "BV",
                "phoneCode": [],
                "currencies": ["NOK"],
                "languages": [""]
            },
            "BR": {
                "name": "Brazil",
                "capital": "Brasilia",
                "continent": {
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "BR",
                    "alpha3": "BRA",
                    "numeric": "076"
                },
                "timezone": {
                    "capital": "America/Sao_Paulo"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "IO",
                    "alpha3": "IOT",
                    "numeric": "086"
                },
                "timezone": {
                    "capital": "Indian/Chagos"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "VG",
                    "alpha3": "VGB",
                    "numeric": "092"
                },
                "timezone": {
                    "capital": "America/Tortola"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "BN",
                    "alpha3": "BRN",
                    "numeric": "096"
                },
                "timezone": {
                    "capital": "Asia/Brunei"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "BG",
                    "alpha3": "BGR",
                    "numeric": "100"
                },
                "timezone": {
                    "capital": "Europe/Sofia"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "BF",
                    "alpha3": "BFA",
                    "numeric": "854"
                },
                "timezone": {
                    "capital": "Africa/Ouagadougou"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "BI",
                    "alpha3": "BDI",
                    "numeric": "108"
                },
                "timezone": {
                    "capital": "Africa/Bujumbura"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "KH",
                    "alpha3": "KHM",
                    "numeric": "116"
                },
                "timezone": {
                    "capital": "Asia/Phnom_Penh"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "CM",
                    "alpha3": "CMR",
                    "numeric": "120"
                },
                "timezone": {
                    "capital": "Africa/Douala"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "CA",
                    "alpha3": "CAN",
                    "numeric": "124"
                },
                "timezone": {
                    "capital": "America/Toronto"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "CV",
                    "alpha3": "CPV",
                    "numeric": "132"
                },
                "timezone": {
                    "capital": "Atlantic/Cape_Verde"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "KY",
                    "alpha3": "CYM",
                    "numeric": "136"
                },
                "timezone": {
                    "capital": "America/Cayman"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "CF",
                    "alpha3": "CAF",
                    "numeric": "140"
                },
                "timezone": {
                    "capital": "Africa/Bangui"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "TD",
                    "alpha3": "TCD",
                    "numeric": "148"
                },
                "timezone": {
                    "capital": "Africa/Ndjamena"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "CL",
                    "alpha3": "CHL",
                    "numeric": "152"
                },
                "timezone": {
                    "capital": "America/Santiago"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "CN",
                    "alpha3": "CHN",
                    "numeric": "156"
                },
                "timezone": {
                    "capital": "Asia/Shanghai"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "CX",
                    "alpha3": "CXR",
                    "numeric": "162"
                },
                "timezone": {
                    "capital": "Indian/Christmas"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "CC",
                    "alpha3": "CCK",
                    "numeric": "166"
                },
                "timezone": {
                    "capital": "Indian/Cocos"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "CO",
                    "alpha3": "COL",
                    "numeric": "170"
                },
                "timezone": {
                    "capital": "America/Bogota"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "KM",
                    "alpha3": "COM",
                    "numeric": "174"
                },
                "timezone": {
                    "capital": "Indian/Comoro"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "CK",
                    "alpha3": "COK",
                    "numeric": "184"
                },
                "timezone": {
                    "capital": "Pacific/Rarotonga"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "CR",
                    "alpha3": "CRI",
                    "numeric": "188"
                },
                "timezone": {
                    "capital": "America/Costa_Rica"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "HR",
                    "alpha3": "HRV",
                    "numeric": "191"
                },
                "timezone": {
                    "capital": "Europe/Zagreb"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "CU",
                    "alpha3": "CUB",
                    "numeric": "192"
                },
                "timezone": {
                    "capital": "America/Havana"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "CW",
                    "alpha3": "CUW",
                    "numeric": "531"
                },
                "timezone": {
                    "capital": "America/Curacao"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "CY",
                    "alpha3": "CYP",
                    "numeric": "196"
                },
                "timezone": {
                    "capital": "Asia/Nicosia"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "CZ",
                    "alpha3": "CZE",
                    "numeric": "203"
                },
                "timezone": {
                    "capital": "Europe/Prague"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "CD",
                    "alpha3": "COD",
                    "numeric": "180"
                },
                "timezone": {
                    "capital": "Africa/Kinshasa"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "DK",
                    "alpha3": "DNK",
                    "numeric": "208"
                },
                "timezone": {
                    "capital": "Europe/Copenhagen"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "DJ",
                    "alpha3": "DJI",
                    "numeric": "262"
                },
                "timezone": {
                    "capital": "Africa/Djibouti"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "DM",
                    "alpha3": "DMA",
                    "numeric": "212"
                },
                "timezone": {
                    "capital": "America/Dominica"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "DO",
                    "alpha3": "DOM",
                    "numeric": "214"
                },
                "timezone": {
                    "capital": "America/Santo_Domingo"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "TL",
                    "alpha3": "TLS",
                    "numeric": "626"
                },
                "timezone": {
                    "capital": "Asia/Dili"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "EC",
                    "alpha3": "ECU",
                    "numeric": "218"
                },
                "timezone": {
                    "capital": "America/Guayaquil"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "EG",
                    "alpha3": "EGY",
                    "numeric": "818"
                },
                "timezone": {
                    "capital": "Africa/Cairo"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "SV",
                    "alpha3": "SLV",
                    "numeric": "222"
                },
                "timezone": {
                    "capital": "America/El_Salvador"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "GQ",
                    "alpha3": "GNQ",
                    "numeric": "226"
                },
                "timezone": {
                    "capital": "Africa/Malabo"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "ER",
                    "alpha3": "ERI",
                    "numeric": "232"
                },
                "timezone": {
                    "capital": "Africa/Asmara"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "EE",
                    "alpha3": "EST",
                    "numeric": "233"
                },
                "timezone": {
                    "capital": "Europe/Tallinn"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "ET",
                    "alpha3": "ETH",
                    "numeric": "231"
                },
                "timezone": {
                    "capital": "Africa/Addis_Ababa"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "FK",
                    "alpha3": "FLK",
                    "numeric": "238"
                },
                "timezone": {
                    "capital": "Atlantic/Stanley"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "FO",
                    "alpha3": "FRO",
                    "numeric": "234"
                },
                "timezone": {
                    "capital": "Atlantic/Faroe"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "FJ",
                    "alpha3": "FJI",
                    "numeric": "242"
                },
                "timezone": {
                    "capital": "Pacific/Fiji"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "FI",
                    "alpha3": "FIN",
                    "numeric": "246"
                },
                "timezone": {
                    "capital": "Europe/Helsinki"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "FR",
                    "alpha3": "FRA",
                    "numeric": "250"
                },
                "timezone": {
                    "capital": "Europe/Paris"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "GF",
                    "alpha3": "GUF",
                    "numeric": "254"
                },
                "timezone": {
                    "capital": ""
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "PF",
                    "alpha3": "PYF",
                    "numeric": "258"
                },
                "timezone": {
                    "capital": "Pacific/Tahiti"
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
                    "code": "AN",
                    "name": "Antarctica"
                },
                "iso": {
                    "alpha2": "TF",
                    "alpha3": "ATF",
                    "numeric": "260"
                },
                "timezone": {
                    "capital": ""
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "GA",
                    "alpha3": "GAB",
                    "numeric": "266"
                },
                "timezone": {
                    "capital": "Africa/Libreville"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "GM",
                    "alpha3": "GMB",
                    "numeric": "270"
                },
                "timezone": {
                    "capital": "Africa/Banjul"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "GE",
                    "alpha3": "GEO",
                    "numeric": "268"
                },
                "timezone": {
                    "capital": "Asia/Tbilisi"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "DE",
                    "alpha3": "DEU",
                    "numeric": "276"
                },
                "timezone": {
                    "capital": "Europe/Berlin"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "GH",
                    "alpha3": "GHA",
                    "numeric": "288"
                },
                "timezone": {
                    "capital": "Africa/Accra"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "GI",
                    "alpha3": "GIB",
                    "numeric": "292"
                },
                "timezone": {
                    "capital": "Europe/Gibraltar"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "GR",
                    "alpha3": "GRC",
                    "numeric": "300"
                },
                "timezone": {
                    "capital": "Europe/Athens"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "GL",
                    "alpha3": "GRL",
                    "numeric": "304"
                },
                "timezone": {
                    "capital": "America/Godthab"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "GD",
                    "alpha3": "GRD",
                    "numeric": "308"
                },
                "timezone": {
                    "capital": "America/Grenada"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "GP",
                    "alpha3": "GLP",
                    "numeric": "312"
                },
                "timezone": {
                    "capital": ""
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "GU",
                    "alpha3": "GUM",
                    "numeric": "316"
                },
                "timezone": {
                    "capital": "Pacific/Guam"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "GT",
                    "alpha3": "GTM",
                    "numeric": "320"
                },
                "timezone": {
                    "capital": "America/Guatemala"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "GG",
                    "alpha3": "GGY",
                    "numeric": "831"
                },
                "timezone": {
                    "capital": "Europe/Guernsey"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "GN",
                    "alpha3": "GIN",
                    "numeric": "324"
                },
                "timezone": {
                    "capital": "Africa/Conakry"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "GW",
                    "alpha3": "GNB",
                    "numeric": "624"
                },
                "timezone": {
                    "capital": "Africa/Bissau"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "GY",
                    "alpha3": "GUY",
                    "numeric": "328"
                },
                "timezone": {
                    "capital": "America/Guyana"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "HT",
                    "alpha3": "HTI",
                    "numeric": "332"
                },
                "timezone": {
                    "capital": "America/Port-au-Prince"
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
                    "code": "AN",
                    "name": "Antarctica"
                },
                "iso": {
                    "alpha2": "HM",
                    "alpha3": "HMD",
                    "numeric": "334"
                },
                "timezone": {
                    "capital": ""
                },
                "topLevelDomain": "",
                "fipsCode": "HM",
                "phoneCode": [],
                "currencies": ["AUD"],
                "languages": [""]
            },
            "HN": {
                "name": "Honduras",
                "capital": "Tegucigalpa",
                "continent": {
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "HN",
                    "alpha3": "HND",
                    "numeric": "340"
                },
                "timezone": {
                    "capital": "America/Tegucigalpa"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "HK",
                    "alpha3": "HKG",
                    "numeric": "344"
                },
                "timezone": {
                    "capital": "Asia/Hong_Kong"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "HU",
                    "alpha3": "HUN",
                    "numeric": "348"
                },
                "timezone": {
                    "capital": "Europe/Budapest"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "IS",
                    "alpha3": "ISL",
                    "numeric": "352"
                },
                "timezone": {
                    "capital": "Atlantic/Reykjavik"
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
                "phoneCode": ["91"],
                "currencies": ["INR"],
                "languages": ["en-IN", "hi", "bn", "te", "mr", "ta", "ur", "gu", "kn", "ml", "or", "pa", "as", "bh", "sat", "ks", "ne", "sd", "kok", "doi", "mni", "sit", "sa", "fr", "lus", "inc"]
            },
            "ID": {
                "name": "Indonesia",
                "capital": "Jakarta",
                "continent": {
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "ID",
                    "alpha3": "IDN",
                    "numeric": "360"
                },
                "timezone": {
                    "capital": "Asia/Jakarta"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "IR",
                    "alpha3": "IRN",
                    "numeric": "364"
                },
                "timezone": {
                    "capital": "Asia/Tehran"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "IQ",
                    "alpha3": "IRQ",
                    "numeric": "368"
                },
                "timezone": {
                    "capital": "Asia/Baghdad"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "IE",
                    "alpha3": "IRL",
                    "numeric": "372"
                },
                "timezone": {
                    "capital": "Europe/Dublin"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "IM",
                    "alpha3": "IMN",
                    "numeric": "833"
                },
                "timezone": {
                    "capital": "Europe/Isle_of_Man"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "IL",
                    "alpha3": "ISR",
                    "numeric": "376"
                },
                "timezone": {
                    "capital": "Asia/Jerusalem"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "IT",
                    "alpha3": "ITA",
                    "numeric": "380"
                },
                "timezone": {
                    "capital": "Europe/Rome"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "CI",
                    "alpha3": "CIV",
                    "numeric": "384"
                },
                "timezone": {
                    "capital": "Africa/Abidjan"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "JM",
                    "alpha3": "JAM",
                    "numeric": "388"
                },
                "timezone": {
                    "capital": "America/Jamaica"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "JP",
                    "alpha3": "JPN",
                    "numeric": "392"
                },
                "timezone": {
                    "capital": "Asia/Tokyo"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "JE",
                    "alpha3": "JEY",
                    "numeric": "832"
                },
                "timezone": {
                    "capital": "Europe/Jersey"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "JO",
                    "alpha3": "JOR",
                    "numeric": "400"
                },
                "timezone": {
                    "capital": "Asia/Amman"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "KZ",
                    "alpha3": "KAZ",
                    "numeric": "398"
                },
                "timezone": {
                    "capital": "Asia/Almaty"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "KE",
                    "alpha3": "KEN",
                    "numeric": "404"
                },
                "timezone": {
                    "capital": "Africa/Nairobi"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "KI",
                    "alpha3": "KIR",
                    "numeric": "296"
                },
                "timezone": {
                    "capital": "Pacific/Tarawa"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "XK",
                    "alpha3": "XKX",
                    "numeric": "0"
                },
                "timezone": {
                    "capital": "Europe/Podgorica"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "KW",
                    "alpha3": "KWT",
                    "numeric": "414"
                },
                "timezone": {
                    "capital": "Asia/Kuwait"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "KG",
                    "alpha3": "KGZ",
                    "numeric": "417"
                },
                "timezone": {
                    "capital": "Asia/Bishkek"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "LA",
                    "alpha3": "LAO",
                    "numeric": "418"
                },
                "timezone": {
                    "capital": "Asia/Vientiane"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "LV",
                    "alpha3": "LVA",
                    "numeric": "428"
                },
                "timezone": {
                    "capital": "Europe/Riga"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "LB",
                    "alpha3": "LBN",
                    "numeric": "422"
                },
                "timezone": {
                    "capital": "Asia/Beirut"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "LS",
                    "alpha3": "LSO",
                    "numeric": "426"
                },
                "timezone": {
                    "capital": "Africa/Maseru"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "LR",
                    "alpha3": "LBR",
                    "numeric": "430"
                },
                "timezone": {
                    "capital": "Africa/Monrovia"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "LY",
                    "alpha3": "LBY",
                    "numeric": "434"
                },
                "timezone": {
                    "capital": "Africa/Tripoli"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "LI",
                    "alpha3": "LIE",
                    "numeric": "438"
                },
                "timezone": {
                    "capital": "Europe/Vaduz"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "LT",
                    "alpha3": "LTU",
                    "numeric": "440"
                },
                "timezone": {
                    "capital": "Europe/Vilnius"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "LU",
                    "alpha3": "LUX",
                    "numeric": "442"
                },
                "timezone": {
                    "capital": "Europe/Luxembourg"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "MO",
                    "alpha3": "MAC",
                    "numeric": "446"
                },
                "timezone": {
                    "capital": "Asia/Macau"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "MK",
                    "alpha3": "MKD",
                    "numeric": "807"
                },
                "timezone": {
                    "capital": "Europe/Skopje"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "MG",
                    "alpha3": "MDG",
                    "numeric": "450"
                },
                "timezone": {
                    "capital": "Indian/Antananarivo"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "MW",
                    "alpha3": "MWI",
                    "numeric": "454"
                },
                "timezone": {
                    "capital": "Africa/Blantyre"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "MY",
                    "alpha3": "MYS",
                    "numeric": "458"
                },
                "timezone": {
                    "capital": "Asia/Kuala_Lumpur"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "MV",
                    "alpha3": "MDV",
                    "numeric": "462"
                },
                "timezone": {
                    "capital": "Indian/Maldives"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "ML",
                    "alpha3": "MLI",
                    "numeric": "466"
                },
                "timezone": {
                    "capital": "Africa/Bamako"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "MT",
                    "alpha3": "MLT",
                    "numeric": "470"
                },
                "timezone": {
                    "capital": "Europe/Malta"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "MH",
                    "alpha3": "MHL",
                    "numeric": "584"
                },
                "timezone": {
                    "capital": "Pacific/Majuro"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "MQ",
                    "alpha3": "MTQ",
                    "numeric": "474"
                },
                "timezone": {
                    "capital": ""
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "MR",
                    "alpha3": "MRT",
                    "numeric": "478"
                },
                "timezone": {
                    "capital": "Africa/Nouakchott"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "MU",
                    "alpha3": "MUS",
                    "numeric": "480"
                },
                "timezone": {
                    "capital": "Indian/Mauritius"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "YT",
                    "alpha3": "MYT",
                    "numeric": "175"
                },
                "timezone": {
                    "capital": "Indian/Mayotte"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "MX",
                    "alpha3": "MEX",
                    "numeric": "484"
                },
                "timezone": {
                    "capital": "America/Mexico_City"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "FM",
                    "alpha3": "FSM",
                    "numeric": "583"
                },
                "timezone": {
                    "capital": "Pacific/Pohnpei"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "MD",
                    "alpha3": "MDA",
                    "numeric": "498"
                },
                "timezone": {
                    "capital": "Europe/Chisinau"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "MC",
                    "alpha3": "MCO",
                    "numeric": "492"
                },
                "timezone": {
                    "capital": "Europe/Monaco"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "MN",
                    "alpha3": "MNG",
                    "numeric": "496"
                },
                "timezone": {
                    "capital": "Asia/Ulaanbaatar"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "ME",
                    "alpha3": "MNE",
                    "numeric": "499"
                },
                "timezone": {
                    "capital": "Europe/Podgorica"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "MS",
                    "alpha3": "MSR",
                    "numeric": "500"
                },
                "timezone": {
                    "capital": "America/Montserrat"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "MA",
                    "alpha3": "MAR",
                    "numeric": "504"
                },
                "timezone": {
                    "capital": "Africa/Casablanca"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "MZ",
                    "alpha3": "MOZ",
                    "numeric": "508"
                },
                "timezone": {
                    "capital": "Africa/Maputo"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "MM",
                    "alpha3": "MMR",
                    "numeric": "104"
                },
                "timezone": {
                    "capital": "Asia/Rangoon"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "NA",
                    "alpha3": "NAM",
                    "numeric": "516"
                },
                "timezone": {
                    "capital": "Africa/Windhoek"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "NR",
                    "alpha3": "NRU",
                    "numeric": "520"
                },
                "timezone": {
                    "capital": "Pacific/Nauru"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "NP",
                    "alpha3": "NPL",
                    "numeric": "524"
                },
                "timezone": {
                    "capital": "Asia/Kathmandu"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "NL",
                    "alpha3": "NLD",
                    "numeric": "528"
                },
                "timezone": {
                    "capital": "Europe/Amsterdam"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "NC",
                    "alpha3": "NCL",
                    "numeric": "540"
                },
                "timezone": {
                    "capital": "Pacific/Noumea"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "NZ",
                    "alpha3": "NZL",
                    "numeric": "554"
                },
                "timezone": {
                    "capital": "Pacific/Auckland"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "NI",
                    "alpha3": "NIC",
                    "numeric": "558"
                },
                "timezone": {
                    "capital": "America/Managua"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "NE",
                    "alpha3": "NER",
                    "numeric": "562"
                },
                "timezone": {
                    "capital": "Africa/Niamey"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "NG",
                    "alpha3": "NGA",
                    "numeric": "566"
                },
                "timezone": {
                    "capital": "Africa/Lagos"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "NU",
                    "alpha3": "NIU",
                    "numeric": "570"
                },
                "timezone": {
                    "capital": "Pacific/Niue"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "NF",
                    "alpha3": "NFK",
                    "numeric": "574"
                },
                "timezone": {
                    "capital": ""
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "KP",
                    "alpha3": "PRK",
                    "numeric": "408"
                },
                "timezone": {
                    "capital": "Asia/Pyongyang"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "MP",
                    "alpha3": "MNP",
                    "numeric": "580"
                },
                "timezone": {
                    "capital": "Pacific/Saipan"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "NO",
                    "alpha3": "NOR",
                    "numeric": "578"
                },
                "timezone": {
                    "capital": "Europe/Oslo"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "OM",
                    "alpha3": "OMN",
                    "numeric": "512"
                },
                "timezone": {
                    "capital": "Asia/Muscat"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "PK",
                    "alpha3": "PAK",
                    "numeric": "586"
                },
                "timezone": {
                    "capital": "Asia/Karachi"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "PW",
                    "alpha3": "PLW",
                    "numeric": "585"
                },
                "timezone": {
                    "capital": "Pacific/Palau"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "PS",
                    "alpha3": "PSE",
                    "numeric": "275"
                },
                "timezone": {
                    "capital": "Asia/Hebron"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "PA",
                    "alpha3": "PAN",
                    "numeric": "591"
                },
                "timezone": {
                    "capital": "America/Panama"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "PG",
                    "alpha3": "PNG",
                    "numeric": "598"
                },
                "timezone": {
                    "capital": "Pacific/Port_Moresby"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "PY",
                    "alpha3": "PRY",
                    "numeric": "600"
                },
                "timezone": {
                    "capital": "America/Asuncion"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "PE",
                    "alpha3": "PER",
                    "numeric": "604"
                },
                "timezone": {
                    "capital": "America/Lima"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "PH",
                    "alpha3": "PHL",
                    "numeric": "608"
                },
                "timezone": {
                    "capital": "Asia/Manila"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "PN",
                    "alpha3": "PCN",
                    "numeric": "612"
                },
                "timezone": {
                    "capital": "Pacific/Pitcairn"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "PL",
                    "alpha3": "POL",
                    "numeric": "616"
                },
                "timezone": {
                    "capital": "Europe/Warsaw"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "PT",
                    "alpha3": "PRT",
                    "numeric": "620"
                },
                "timezone": {
                    "capital": "Europe/Lisbon"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "PR",
                    "alpha3": "PRI",
                    "numeric": "630"
                },
                "timezone": {
                    "capital": "America/Puerto_Rico"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "QA",
                    "alpha3": "QAT",
                    "numeric": "634"
                },
                "timezone": {
                    "capital": "Asia/Qatar"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "CG",
                    "alpha3": "COG",
                    "numeric": "178"
                },
                "timezone": {
                    "capital": "Africa/Brazzaville"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "RE",
                    "alpha3": "REU",
                    "numeric": "638"
                },
                "timezone": {
                    "capital": "Indian/Reunion"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "RO",
                    "alpha3": "ROU",
                    "numeric": "642"
                },
                "timezone": {
                    "capital": "Europe/Bucharest"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "RU",
                    "alpha3": "RUS",
                    "numeric": "643"
                },
                "timezone": {
                    "capital": "Europe/Moscow"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "RW",
                    "alpha3": "RWA",
                    "numeric": "646"
                },
                "timezone": {
                    "capital": "Africa/Kigali"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "BL",
                    "alpha3": "BLM",
                    "numeric": "652"
                },
                "timezone": {
                    "capital": "America/St_Barthelemy"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "SH",
                    "alpha3": "SHN",
                    "numeric": "654"
                },
                "timezone": {
                    "capital": "Atlantic/St_Helena"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "KN",
                    "alpha3": "KNA",
                    "numeric": "659"
                },
                "timezone": {
                    "capital": "America/St_Kitts"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "LC",
                    "alpha3": "LCA",
                    "numeric": "662"
                },
                "timezone": {
                    "capital": "America/St_Lucia"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "MF",
                    "alpha3": "MAF",
                    "numeric": "663"
                },
                "timezone": {
                    "capital": "America/Marigot"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "PM",
                    "alpha3": "SPM",
                    "numeric": "666"
                },
                "timezone": {
                    "capital": "America/Miquelon"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "VC",
                    "alpha3": "VCT",
                    "numeric": "670"
                },
                "timezone": {
                    "capital": "America/St_Vincent"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "WS",
                    "alpha3": "WSM",
                    "numeric": "882"
                },
                "timezone": {
                    "capital": "Pacific/Apia"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "SM",
                    "alpha3": "SMR",
                    "numeric": "674"
                },
                "timezone": {
                    "capital": "Europe/San_Marino"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "ST",
                    "alpha3": "STP",
                    "numeric": "678"
                },
                "timezone": {
                    "capital": "Africa/Sao_Tome"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "SA",
                    "alpha3": "SAU",
                    "numeric": "682"
                },
                "timezone": {
                    "capital": "Asia/Riyadh"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "SN",
                    "alpha3": "SEN",
                    "numeric": "686"
                },
                "timezone": {
                    "capital": "Africa/Dakar"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "RS",
                    "alpha3": "SRB",
                    "numeric": "688"
                },
                "timezone": {
                    "capital": "Europe/Belgrade"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "SC",
                    "alpha3": "SYC",
                    "numeric": "690"
                },
                "timezone": {
                    "capital": "Indian/Mahe"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "SL",
                    "alpha3": "SLE",
                    "numeric": "694"
                },
                "timezone": {
                    "capital": "Africa/Freetown"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "SG",
                    "alpha3": "SGP",
                    "numeric": "702"
                },
                "timezone": {
                    "capital": "Asia/Singapore"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "SX",
                    "alpha3": "SXM",
                    "numeric": "534"
                },
                "timezone": {
                    "capital": "America/Lower_Princes"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "SK",
                    "alpha3": "SVK",
                    "numeric": "703"
                },
                "timezone": {
                    "capital": "Europe/Bratislava"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "SI",
                    "alpha3": "SVN",
                    "numeric": "705"
                },
                "timezone": {
                    "capital": "Europe/Ljubljana"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "SB",
                    "alpha3": "SLB",
                    "numeric": "090"
                },
                "timezone": {
                    "capital": "Pacific/Guadalcanal"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "SO",
                    "alpha3": "SOM",
                    "numeric": "706"
                },
                "timezone": {
                    "capital": "Africa/Mogadishu"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "ZA",
                    "alpha3": "ZAF",
                    "numeric": "710"
                },
                "timezone": {
                    "capital": "Africa/Johannesburg"
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
                    "code": "AN",
                    "name": "Antarctica"
                },
                "iso": {
                    "alpha2": "GS",
                    "alpha3": "SGS",
                    "numeric": "239"
                },
                "timezone": {
                    "capital": ""
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "KR",
                    "alpha3": "KOR",
                    "numeric": "410"
                },
                "timezone": {
                    "capital": "Asia/Seoul"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "SS",
                    "alpha3": "SSD",
                    "numeric": "728"
                },
                "timezone": {
                    "capital": "Africa/Juba"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "ES",
                    "alpha3": "ESP",
                    "numeric": "724"
                },
                "timezone": {
                    "capital": "Europe/Madrid"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "LK",
                    "alpha3": "LKA",
                    "numeric": "144"
                },
                "timezone": {
                    "capital": "Asia/Colombo"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "SD",
                    "alpha3": "SDN",
                    "numeric": "729"
                },
                "timezone": {
                    "capital": "Africa/Khartoum"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "SR",
                    "alpha3": "SUR",
                    "numeric": "740"
                },
                "timezone": {
                    "capital": "America/Paramaribo"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "SJ",
                    "alpha3": "SJM",
                    "numeric": "744"
                },
                "timezone": {
                    "capital": "Arctic/Longyearbyen"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "SZ",
                    "alpha3": "SWZ",
                    "numeric": "748"
                },
                "timezone": {
                    "capital": "Africa/Mbabane"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "SE",
                    "alpha3": "SWE",
                    "numeric": "752"
                },
                "timezone": {
                    "capital": "Europe/Stockholm"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "CH",
                    "alpha3": "CHE",
                    "numeric": "756"
                },
                "timezone": {
                    "capital": "Europe/Zurich"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "SY",
                    "alpha3": "SYR",
                    "numeric": "760"
                },
                "timezone": {
                    "capital": "Asia/Damascus"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "TW",
                    "alpha3": "TWN",
                    "numeric": "158"
                },
                "timezone": {
                    "capital": "Asia/Taipei"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "TJ",
                    "alpha3": "TJK",
                    "numeric": "762"
                },
                "timezone": {
                    "capital": "Asia/Dushanbe"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "TZ",
                    "alpha3": "TZA",
                    "numeric": "834"
                },
                "timezone": {
                    "capital": "Africa/Dar_es_Salaam"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "TH",
                    "alpha3": "THA",
                    "numeric": "764"
                },
                "timezone": {
                    "capital": "Asia/Bangkok"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "TG",
                    "alpha3": "TGO",
                    "numeric": "768"
                },
                "timezone": {
                    "capital": "Africa/Lome"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "TK",
                    "alpha3": "TKL",
                    "numeric": "772"
                },
                "timezone": {
                    "capital": "Pacific/Fakaofo"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "TO",
                    "alpha3": "TON",
                    "numeric": "776"
                },
                "timezone": {
                    "capital": "Pacific/Tongatapu"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "TT",
                    "alpha3": "TTO",
                    "numeric": "780"
                },
                "timezone": {
                    "capital": "America/Port_of_Spain"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "TN",
                    "alpha3": "TUN",
                    "numeric": "788"
                },
                "timezone": {
                    "capital": "Africa/Tunis"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "TR",
                    "alpha3": "TUR",
                    "numeric": "792"
                },
                "timezone": {
                    "capital": "Europe/Istanbul"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "TM",
                    "alpha3": "TKM",
                    "numeric": "795"
                },
                "timezone": {
                    "capital": "Asia/Ashgabat"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "TC",
                    "alpha3": "TCA",
                    "numeric": "796"
                },
                "timezone": {
                    "capital": "America/Grand_Turk"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "TV",
                    "alpha3": "TUV",
                    "numeric": "798"
                },
                "timezone": {
                    "capital": "Pacific/Funafuti"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "UM",
                    "alpha3": "UMI",
                    "numeric": "581"
                },
                "timezone": {
                    "capital": ""
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "VI",
                    "alpha3": "VIR",
                    "numeric": "850"
                },
                "timezone": {
                    "capital": "America/St_Thomas"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "UG",
                    "alpha3": "UGA",
                    "numeric": "800"
                },
                "timezone": {
                    "capital": "Africa/Kampala"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "UA",
                    "alpha3": "UKR",
                    "numeric": "804"
                },
                "timezone": {
                    "capital": "Europe/Kiev"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "AE",
                    "alpha3": "ARE",
                    "numeric": "784"
                },
                "timezone": {
                    "capital": "Asia/Dubai"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "GB",
                    "alpha3": "GBR",
                    "numeric": "826"
                },
                "timezone": {
                    "capital": "Europe/London"
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
                    "code": "NA",
                    "name": "North America"
                },
                "iso": {
                    "alpha2": "US",
                    "alpha3": "USA",
                    "numeric": "840"
                },
                "timezone": {
                    "capital": "America/New_York"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "UY",
                    "alpha3": "URY",
                    "numeric": "858"
                },
                "timezone": {
                    "capital": "America/Montevideo"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "UZ",
                    "alpha3": "UZB",
                    "numeric": "860"
                },
                "timezone": {
                    "capital": "Asia/Tashkent"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "VU",
                    "alpha3": "VUT",
                    "numeric": "548"
                },
                "timezone": {
                    "capital": "Pacific/Efate"
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
                    "code": "EU",
                    "name": "Europe"
                },
                "iso": {
                    "alpha2": "VA",
                    "alpha3": "VAT",
                    "numeric": "336"
                },
                "timezone": {
                    "capital": "Europe/Vatican"
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
                    "code": "SA",
                    "name": "South America"
                },
                "iso": {
                    "alpha2": "VE",
                    "alpha3": "VEN",
                    "numeric": "862"
                },
                "timezone": {
                    "capital": "America/Caracas"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "VN",
                    "alpha3": "VNM",
                    "numeric": "704"
                },
                "timezone": {
                    "capital": "Asia/Ho_Chi_Minh"
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
                    "code": "OC",
                    "name": "Oceania"
                },
                "iso": {
                    "alpha2": "WF",
                    "alpha3": "WLF",
                    "numeric": "876"
                },
                "timezone": {
                    "capital": "Pacific/Wallis"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "EH",
                    "alpha3": "ESH",
                    "numeric": "732"
                },
                "timezone": {
                    "capital": "Africa/El_Aaiun"
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
                    "code": "AS",
                    "name": "Asia"
                },
                "iso": {
                    "alpha2": "YE",
                    "alpha3": "YEM",
                    "numeric": "887"
                },
                "timezone": {
                    "capital": "Asia/Aden"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "ZM",
                    "alpha3": "ZMB",
                    "numeric": "894"
                },
                "timezone": {
                    "capital": "Africa/Lusaka"
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
                    "code": "AF",
                    "name": "Africa"
                },
                "iso": {
                    "alpha2": "ZW",
                    "alpha3": "ZWE",
                    "numeric": "716"
                },
                "timezone": {
                    "capital": "Africa/Harare"
                },
                "topLevelDomain": "zw",
                "fipsCode": "ZI",
                "phoneCode": ["263"],
                "currencies": ["ZWL"],
                "languages": ["en-ZW", "sn", "nr", "nd"]
            }
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
            result = result[key];
        }

        if (typeof result === 'undefined') {
            return {error: 'No match found'};
        }

        return result;

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

}