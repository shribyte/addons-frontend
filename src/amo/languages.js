import config from 'config';

/* eslint-disable */
export const unfilteredLanguages = {
  af: {
    English: 'Afrikaans',
    native: 'Afrikaans',
  },
  ach: {
    English: 'Acholi',
    native: 'Acholi',
  },
  ak: {
    English: 'Akan',
    native: 'Akan',
  },
  'am-et': {
    English: 'Amharic',
    native: '\u12a0\u121b\u122d\u129b',
  },
  an: {
    English: 'Aragonese',
    native: 'aragon\u00e9s',
  },
  ar: {
    English: 'Arabic',
    native: '\u0639\u0631\u0628\u064a',
  },
  as: {
    English: 'Assamese',
    native: '\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be',
  },
  ast: {
    English: 'Asturian',
    native: 'Asturianu',
  },
  az: {
    English: 'Azerbaijani',
    native: 'Az\u0259rbaycanca',
  },
  be: {
    English: 'Belarusian',
    native: '\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f',
  },
  bg: {
    English: 'Bulgarian',
    native: '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
  },
  bm: {
    English: 'Bambara',
    native: 'Bamanankan',
  },
  'bn-BD': {
    English: 'Bengali (Bangladesh)',
    native:
      '\u09ac\u09be\u0982\u09b2\u09be (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)',
  },
  'bn-IN': {
    English: 'Bengali (India)',
    native: '\u09ac\u09be\u0982\u09b2\u09be (\u09ad\u09be\u09b0\u09a4)',
  },
  bn: {
    English: 'Bengali',
    native: '\u09ac\u09be\u0982\u09b2\u09be',
  },
  br: {
    English: 'Breton',
    native: 'Brezhoneg',
  },
  brx: {
    English: 'Bodo',
    native: "\u092c\u0930'",
  },
  bs: {
    English: 'Bosnian',
    native: 'Bosanski',
  },
  ca: {
    English: 'Catalan',
    native: 'Catal\u00e0',
  },
  'ca-valencia': {
    English: 'Catalan (Valencian)',
    native: 'Catal\u00e0 (Valenci\u00e0)',
  },
  cak: {
    English: 'Kaqchikel',
    native: 'Maya Kaqchikel',
  },
  cs: {
    English: 'Czech',
    native: '\u010ce\u0161tina',
  },
  csb: {
    English: 'Kashubian',
    native: 'Kasz\u00ebbsczi',
  },
  cy: {
    English: 'Welsh',
    native: 'Cymraeg',
  },
  da: {
    English: 'Danish',
    native: 'Dansk',
  },
  dbg: {
    English: 'Debug Robot',
    native: '\u1e12\u1e17\u0180\u016d\u0260 \u0158\u01ff\u0180\u01ff\u0167',
  },
  de: {
    English: 'German',
    native: 'Deutsch',
  },
  'de-AT': {
    English: 'German (Austria)',
    native: 'Deutsch (\u00d6sterreich)',
  },
  'de-CH': {
    English: 'German (Switzerland)',
    native: 'Deutsch (Schweiz)',
  },
  'de-DE': {
    English: 'German (Germany)',
    native: 'Deutsch (Deutschland)',
  },
  dsb: {
    English: 'Lower Sorbian',
    native: 'Dolnoserb\u0161\u0107ina',
  },
  ee: {
    English: 'Ewe',
    native: 'E\u028be',
  },
  el: {
    English: 'Greek',
    native: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac',
  },
  'en-AU': {
    English: 'English (Australian)',
    native: 'English (Australian)',
  },
  'en-CA': {
    English: 'English (Canadian)',
    native: 'English (Canadian)',
  },
  'en-GB': {
    English: 'English (British)',
    native: 'English (British)',
  },
  'en-NZ': {
    English: 'English (New Zealand)',
    native: 'English (New Zealand)',
  },
  'en-US': {
    English: 'English (US)',
    native: 'English (US)',
  },
  'en-ZA': {
    English: 'English (South African)',
    native: 'English (South African)',
  },
  eo: {
    English: 'Esperanto',
    native: 'Esperanto',
  },
  es: {
    English: 'Spanish',
    native: 'Espa\u00f1ol',
  },
  'es-AR': {
    English: 'Spanish (Argentina)',
    native: 'Espa\u00f1ol (de Argentina)',
  },
  'es-CL': {
    English: 'Spanish (Chile)',
    native: 'Espa\u00f1ol (de Chile)',
  },
  'es-ES': {
    English: 'Spanish (Spain)',
    native: 'Espa\u00f1ol (de Espa\u00f1a)',
  },
  'es-MX': {
    English: 'Spanish (Mexico)',
    native: 'Espa\u00f1ol (de M\u00e9xico)',
  },
  et: {
    English: 'Estonian',
    native: 'Eesti keel',
  },
  eu: {
    English: 'Basque',
    native: 'Euskara',
  },
  fa: {
    English: 'Persian',
    native: '\u0641\u0627\u0631\u0633\u06cc',
  },
  'fa-IR': {
    English: 'Persian (Iran)',
    native: '(\u0627\u06CC\u0631\u0627\u0646) \u0641\u0627\u0631\u0633\u06CC',
  },
  ff: {
    English: 'Fulah',
    native: 'Pulaar-Fulfulde',
  },
  fi: {
    English: 'Finnish',
    native: 'suomi',
  },
  'fj-FJ': {
    English: 'Fijian',
    native: 'Vosa vaka-Viti',
  },
  fr: {
    English: 'French',
    native: 'Fran\u00e7ais',
  },
  'fur': {
    English: 'Friulian',
    native: 'Furlan',
  },
  'fur-IT': {
    English: 'Friulian',
    native: 'Furlan',
  },
  'fy-NL': {
    English: 'Frisian',
    native: 'Frysk',
  },
  ga: {
    English: 'Irish',
    native: 'Gaeilge',
  },
  'ga-IE': {
    English: 'Irish',
    native: 'Gaeilge',
  },
  gd: {
    English: 'Gaelic (Scotland)',
    native: 'G\u00e0idhlig',
  },
  gl: {
    English: 'Galician',
    native: 'Galego',
  },
  gn: {
    English: 'Guarani (Paraguay)',
    native: 'Guaran\u00cd',
  },
  gu: {
    English: 'Gujarati',
    native: '\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0',
  },
  'gu-IN': {
    English: 'Gujarati (India)',
    native:
      '\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aad\u0abe\u0ab0\u0aa4)',
  },
  ha: {
    English: 'Hausa',
    native: 'Hausa',
  },
  he: {
    English: 'Hebrew',
    native: '\u05e2\u05d1\u05e8\u05d9\u05ea',
  },
  hi: {
    English: 'Hindi',
    native: '\u0939\u093f\u0928\u094d\u0926\u0940',
  },
  'hi-IN': {
    English: 'Hindi (India)',
    native: '\u0939\u093f\u0928\u094d\u0926\u0940 (\u092d\u093e\u0930\u0924)',
  },
  hr: {
    English: 'Croatian',
    native: 'Hrvatski',
  },
  hsb: {
    English: 'Upper Sorbian',
    native: 'Hornjoserbsce',
  },
  hu: {
    English: 'Hungarian',
    native: 'magyar',
  },
  'hy-AM': {
    English: 'Armenian',
    native: '\u0540\u0561\u0575\u0565\u0580\u0565\u0576',
  },
  ia: {
    English: 'Interlingua',
    native: 'Interlingua',
  },
  id: {
    English: 'Indonesian',
    native: 'Bahasa Indonesia',
  },
  ig: {
    English: 'Igbo',
    native: 'Igbo',
  },
  is: {
    English: 'Icelandic',
    native: '\u00edslenska',
  },
  it: {
    English: 'Italian',
    native: 'Italiano',
  },
  ja: {
    English: 'Japanese',
    native: '\u65e5\u672c\u8a9e',
  },
  'ja-JP-mac': {
    English: 'Japanese',
    native: '\u65e5\u672c\u8a9e',
  },
  ka: {
    English: 'Georgian',
    native: '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8',
  },
  kab: {
    English: 'Kabyle',
    native: 'Taqbaylit',
  },
  kk: {
    English: 'Kazakh',
    native: '\u049a\u0430\u0437\u0430\u049b',
  },
  km: {
    English: 'Khmer',
    native: '\u1781\u17d2\u1798\u17c2\u179a',
  },
  kn: {
    English: 'Kannada',
    native: '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1',
  },
  ko: {
    English: 'Korean',
    native: '\ud55c\uad6d\uc5b4',
  },
  kok: {
    English: 'Konkani',
    native: '\u0915\u094b\u0902\u0915\u0928\u0940',
  },
  ku: {
    English: 'Kurdish',
    native: 'Kurd\u00ee',
  },
  ks: {
    English: 'Kashmiri',
    native: '\u0643\u0634\u0645\u06cc\u0631\u06cc',
  },
  la: {
    English: 'Latin',
    native: 'Latina',
  },
  lg: {
    English: 'Luganda',
    native: 'Luganda',
  },
  lij: {
    English: 'Ligurian',
    native: 'Ligure',
  },
  ln: {
    English: 'Lingala',
    native: 'Ling\u00e1la',
  },
  lo: {
    English: 'Lao',
    native: '\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7',
  },
  lt: {
    English: 'Lithuanian',
    native: 'lietuvi\u0173 kalba',
  },
  lv: {
    English: 'Latvian',
    native: 'Latvie\u0161u',
  },
  mai: {
    English: 'Maithili',
    native:
      '\u092e\u0948\u0925\u093f\u0932\u0940 \u09ae\u09c8\u09a5\u09bf\u09b2\u09c0',
  },
  mg: {
    English: 'Malagasy',
    native: 'Malagasy',
  },
  mi: {
    English: 'Maori (Aotearoa)',
    native: 'M\u0101ori (Aotearoa)',
  },
  mk: {
    English: 'Macedonian',
    native: '\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438',
  },
  ml: {
    English: 'Malayalam',
    native: '\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02',
  },
  mn: {
    English: 'Mongolian',
    native: '\u041c\u043e\u043d\u0433\u043e\u043b',
  },
  mr: {
    English: 'Marathi',
    native: '\u092e\u0930\u093e\u0920\u0940',
  },
  ms: {
    English: 'Malay',
    native: 'Melayu',
  },
  mt: {
    English: 'Maltese',
    native: 'Malti',
  },
  my: {
    English: 'Burmese',
    native: '\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c',
  },
  'nb-NO': {
    English: 'Norwegian (Bokm\u00e5l)',
    native: 'Norsk bokm\u00e5l',
  },
  'ne-NP': {
    English: 'Nepali',
    native: '\u0928\u0947\u092a\u093e\u0932\u0940',
  },
  'nn-NO': {
    English: 'Norwegian (Nynorsk)',
    native: 'Norsk nynorsk',
  },
  nl: {
    English: 'Dutch',
    native: 'Nederlands',
  },
  nr: {
    English: 'Ndebele, South',
    native: 'isiNdebele',
  },
  nso: {
    English: 'Northern Sotho',
    native: 'Sepedi',
  },
  oc: {
    English: 'Occitan',
    native: 'occitan',
  },
  or: {
    English: 'Oriya',
    native: '\u0b13\u0b21\u0b3c\u0b3f\u0b06',
  },
  pa: {
    English: 'Punjabi',
    native: '\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40',
  },
  'pa-IN': {
    English: 'Punjabi (India)',
    native: '\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40 (\u0a2d\u0a3e\u0a30\u0a24)',
  },
  pl: {
    English: 'Polish',
    native: 'Polski',
  },
  'pt-BR': {
    English: 'Portuguese (Brazilian)',
    native: 'Portugu\u00eas (do\u00a0Brasil)',
  },
  'pt-PT': {
    English: 'Portuguese (Portugal)',
    native: 'Portugu\u00eas (Europeu)',
  },
  ro: {
    English: 'Romanian',
    native: 'Rom\u00e2n\u0103',
  },
  rm: {
    English: 'Romansh',
    native: 'rumantsch',
  },
  ru: {
    English: 'Russian',
    native: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
  },
  rw: {
    English: 'Kinyarwanda',
    native: 'Ikinyarwanda',
  },
  sa: {
    English: 'Sanskrit',
    native: '\u0938\u0902\u0938\u094d\u0915\u0943\u0924',
  },
  sat: {
    English: 'Santali',
    native: '\u0938\u0902\u0924\u093e\u0932\u0940',
  },
  sah: {
    English: 'Sakha',
    native: '\u0421\u0430\u0445\u0430\u043b\u044b\u044b',
  },
  sc: {
    English: 'Sardinian',
    native: 'Sardu',
  },
  sco: {
    English: 'Scots',
    native: 'Scots',
  },
  si: {
    English: 'Sinhala',
    native: '\u0dc3\u0dd2\u0d82\u0dc4\u0dbd',
  },
  sk: {
    English: 'Slovak',
    native: 'sloven\u010dina',
  },
  sl: {
    English: 'Slovenian',
    native: 'Sloven\u0161\u010dina',
  },
  son: {
    English: 'Songhai',
    native: 'So\u014bay',
  },
  sq: {
    English: 'Albanian',
    native: 'Shqip',
  },
  sr: {
    English: 'Serbian',
    native: '\u0421\u0440\u043f\u0441\u043a\u0438',
  },
  'sr-Cyrl': {
    English: 'Serbian',
    native: '\u0421\u0440\u043f\u0441\u043a\u0438',
  },
  'sr-Latn': {
    English: 'Serbian',
    native: 'Srpski',
  },
  ss: {
    English: 'Siswati',
    native: 'siSwati',
  },
  st: {
    English: 'Southern Sotho',
    native: 'Sesotho',
  },
  'sv-SE': {
    English: 'Swedish',
    native: 'Svenska',
  },
  sw: {
    English: 'Swahili',
    native: 'Kiswahili',
  },
  szl: {
    English: 'Silesian',
    native: '\u015al\u014dnski',
  },
  ta: {
    English: 'Tamil',
    native: '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd',
  },
  'ta-IN': {
    English: 'Tamil (India)',
    native:
      '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe)',
  },
  'ta-LK': {
    English: 'Tamil (Sri Lanka)',
    native:
      '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8)',
  },
  te: {
    English: 'Telugu',
    native: '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41',
  },
  tg: {
    English: 'Tajik',
    native: '\u0422\u043e\u04b7\u0438\u043a\u04e3',
  },
  th: {
    English: 'Thai',
    native: '\u0e44\u0e17\u0e22',
  },
  tl: {
    English: 'Tagalog',
    native: 'Tagalog',
  },
  tn: {
    English: 'Tswana',
    native: 'Setswana',
  },
  tr: {
    English: 'Turkish',
    native: 'T\u00fcrk\u00e7e',
  },
  trs: {
    English: 'Triqui',
    native: "N\u00e1nj n\u00ef'\u00efn",
  },
  ts: {
    English: 'Tsonga',
    native: 'Xitsonga',
  },
  tsz: {
    English: 'Pur\u00e9pecha',
    native: 'Pur\u00e9pecha',
  },
  'tt-RU': {
    English: 'Tatar',
    native: 'Tatar\u00e7a',
  },
  uk: {
    English: 'Ukrainian',
    native: '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430',
  },
  ur: {
    English: 'Urdu',
    native: '\u0627\u064f\u0631\u062f\u0648',
  },
  uz: {
    English: 'Uzbek',
    native: 'O\u02bbzbek tili',
  },
  ve: {
    English: 'Venda',
    native: 'Tshiven\u1e13a',
  },
  vec: {
    English: 'Venetan',
    native: 'V\u00e8neto',
  },
  vi: {
    English: 'Vietnamese',
    native: 'Ti\u1ebfng Vi\u1ec7t',
  },
  wo: {
    English: 'Wolof',
    native: 'Wolof',
  },
  'x-testing': {
    English: 'Testing',
    native: '\u0166\u1e17\u015f\u0167\u012b\u019e\u0260',
  },
  xh: {
    English: 'Xhosa',
    native: 'isiXhosa',
  },
  yo: {
    English: 'Yoruba',
    native: 'Yor\u00f9b\u00e1',
  },
  'zh-CN': {
    English: 'Chinese (Simplified)',
    native: '\u4e2d\u6587 (\u7b80\u4f53)',
  },
  'zh-TW': {
    English: 'Chinese (Traditional)',
    native: '\u6b63\u9ad4\u4e2d\u6587 (\u7e41\u9ad4)',
  },
  zu: {
    English: 'Zulu',
    native: 'isiZulu',
  },
};
/* eslint-enable */

const supportedLanguages = config.get('langs').reduce((object, locale) => {
  if (typeof unfilteredLanguages[locale] !== 'undefined') {
    return { ...object, [locale]: unfilteredLanguages[locale] };
  }

  return object;
}, {});

export const hrefLangs = [
  ...Object.keys(config.get('hrefLangsMap')),
  ...Object.keys(supportedLanguages).filter(
    (locale) => !config.get('unsupportedHrefLangs').includes(locale),
  ),
];

export default supportedLanguages;
