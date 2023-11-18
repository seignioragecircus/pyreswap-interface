import { t } from '@lingui/macro'
import MISO from '@sushiswap/miso/exports/all.json'
import { NATIVE_PAYMENT_TOKEN } from 'app/features/miso/context/constants'
import {
  AuctionPaymentCurrencyInfo,
  AuctionStatus,
  AuctionTemplate,
  RawAuctionInfo,
} from 'app/features/miso/context/types'
import { CHAIN_KEY, ChainId, NATIVE, Token } from 'sushi-sdk-ftm'

// @ts-ignore TYPE NEEDS FIXING
export const AuctionStatusById = (i18n) => ({
  1: i18n._(t`LIVE`),
  2: i18n._(t`UPCOMING`),
  3: i18n._(t`FINISHED`),
})

// @ts-ignore TYPE NEEDS FIXING
export const AuctionTitleByTemplateId = (i18n) => ({
  1: i18n._(t`Crowdsale`),
  2: i18n._(t`Dutch Auction`),
  3: i18n._(t`Batch Auction`),
})

// @ts-ignore TYPE NEEDS FIXING
export const AuctionHelperTextByTemplateId = (i18n) => ({
  1: i18n._(t`Fixed price with fixed amount`),
  2: i18n._(t`Price discovery that linearly declines from ceiling to floor price`),
  3: i18n._(t`Valuation discovery with a minimum threshold and uncapped raise`),
})

// @ts-ignore TYPE NEEDS FIXING
export const AuctionPriceHelperTextByTemplateId = (i18n) => ({
  1: i18n._(t`Fixed price, doesn't change over time`),
  2: i18n._(
    t`This is the current price per token. It is calculated from the total commitments divided by the number of tokens on sale`
  ),
  3: i18n._(t`The estimated final price per token. It is calculated on a pro rata basis of the final total commitment`),
})

export const MisoAbiByTemplateId = (chainId: ChainId, templateId: AuctionTemplate) => {
  // @ts-ignore TYPE NEEDS FIXING
  return {
    // @ts-ignore TYPE NEEDS FIXING
    1: MISO[chainId]?.[CHAIN_KEY[chainId]]?.contracts.Crowdsale.abi,
    // @ts-ignore TYPE NEEDS FIXING
    2: MISO[chainId]?.[CHAIN_KEY[chainId]]?.contracts.DutchAuction.abi,
    // @ts-ignore TYPE NEEDS FIXING
    3: MISO[chainId]?.[CHAIN_KEY[chainId]]?.contracts.BatchAuction.abi,
  }[templateId]
}

export const ISO_COUNTRIES = {
  AF: 'Afghanistan',
  AX: 'Aland Islands',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua And Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia',
  BA: 'Bosnia And Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  CV: 'Cape Verde',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CG: 'Congo',
  CD: 'Congo, Democratic Republic',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  CI: "Cote D'Ivoire",
  HR: 'Croatia',
  CU: 'Cuba',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  ET: 'Ethiopia',
  FK: 'Falkland Islands (Malvinas)',
  FO: 'Faroe Islands',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island & Mcdonald Islands',
  VA: 'Holy See (Vatican City State)',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran, Islamic Republic Of',
  IQ: 'Iraq',
  IE: 'Ireland',
  IM: 'Isle Of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KR: 'Korea',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: "Lao People's Democratic Republic",
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libyan Arab Jamahiriya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macao',
  MK: 'Macedonia',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia, Federated States Of',
  MD: 'Moldova',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  AN: 'Netherlands Antilles',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestinian Territory, Occupied',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  RE: 'Reunion',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  BL: 'Saint Barthelemy',
  SH: 'Saint Helena',
  KN: 'Saint Kitts And Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin',
  PM: 'Saint Pierre And Miquelon',
  VC: 'Saint Vincent And Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome And Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia And Sandwich Isl.',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SD: 'Sudan',
  SR: 'Suriname',
  SJ: 'Svalbard And Jan Mayen',
  SZ: 'Swaziland',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad And Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks And Caicos Islands',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  US: 'United States',
  UM: 'United States Outlying Islands',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela',
  VN: 'Viet Nam',
  VG: 'Virgin Islands, British',
  VI: 'Virgin Islands, U.S.',
  WF: 'Wallis And Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
}

// @ts-ignore TYPE NEEDS FIXING
export function getCountryName(countryCode) {
  if (ISO_COUNTRIES.hasOwnProperty(countryCode)) {
    // @ts-ignore TYPE NEEDS FIXING
    return ISO_COUNTRIES[countryCode]
  } else {
    return countryCode
  }
}

export const getNativeOrToken = (chainId: ChainId, paymentCurrencyInfo: AuctionPaymentCurrencyInfo) => {
  return paymentCurrencyInfo.addr === NATIVE_PAYMENT_TOKEN
    ? // @ts-ignore TYPE NEEDS FIXING
      NATIVE[chainId]
    : new Token(
        chainId,
        paymentCurrencyInfo.addr,
        paymentCurrencyInfo.decimals.toNumber(),
        paymentCurrencyInfo.symbol,
        paymentCurrencyInfo.name
      )
}

export const getStatusByTimestamp = (blockTimestamp: number, auctionInfo: RawAuctionInfo, auctionEnded?: boolean) => {
  const startTime = auctionInfo.startTime.toNumber()
  const endTime = auctionInfo.endTime.toNumber()

  if (typeof auctionEnded !== 'undefined' && auctionEnded) return AuctionStatus.FINISHED
  if (blockTimestamp >= startTime && blockTimestamp <= endTime && !auctionInfo.finalized) return AuctionStatus.LIVE
  if (blockTimestamp < startTime && !auctionInfo.finalized) return AuctionStatus.UPCOMING
  return AuctionStatus.FINISHED
}
