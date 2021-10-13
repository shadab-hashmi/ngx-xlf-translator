# ng-xlf-translator

This tool can be used to automate i18n translations with google translate.
It is primarily used for creating translation templates in csv so that translators can edit the files in numbers/excel.

## Getting Started

### Installing

Simply use npm to install the package globally

```
# Install global so it can be called from anywhere
$ npm install -g xlf-translator
```

### Usage

Create a `tranlator.config.json` file in the root of your project, make sure the messages.xlf is provided in the config file. Then run it once.
This will generate all the translations
as `message.(language-code).xlf` and a `message.(language-code).csv` in the output directory (provided in the config file).
Now you can edit the translations in the csv (Run it again for updates).

```
// tranlator.config.json
{
  "source": "/src/locale/messages.xlf",
  "outputPath": "/src/locale",
  "fromLanguage": "en",
  "toLanguage": [
    "nl",
    "en",
    "de",
    "fr"
  ]
}

```

In the terminal we can enter

```
$ translate
```

This starts the google translator (if not yet exist). It will create the translation files in the messages directory.
In translations/csv/ we can edit the files as csv. When done hit `translate` again for reindexing.

## Built With

- [@iamtraction/google-translate](https://www.npmjs.com/package/@iamtraction/google-translate) - Used translate the files
- [node-xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - Used for editing xml
- [csvtojson](https://www.npmjs.com/package/csvtojson) - Convert csv to json
- [json2csv](https://www.npmjs.com/package/json2csv) - Convert json to csv

## Author

- **Shadab Hashmi** - _Initial work_ - [ngx-xlf-translator](https://github.com/shadabhashmi/ngx-xlf-translator)

## Todo

1. Tests

## Other

Example language codes

```
'auto': 'Automatic'``
'af': 'Afrikaans'
'sq': 'Albanian'
'am': 'Amharic'
'ar': 'Arabic'
'hy': 'Armenian'
'az': 'Azerbaijani'
'eu': 'Basque'
'be': 'Belarusian'
'bn': 'Bengali'
'bs': 'Bosnian'
'bg': 'Bulgarian'
'ca': 'Catalan'
'ceb': 'Cebuano'
'ny': 'Chichewa'
'zh-cn': 'Chinese Simplified'
'zh-tw': 'Chinese Traditional'
'co': 'Corsican'
'hr': 'Croatian'
'cs': 'Czech'
'da': 'Danish'
'nl': 'Dutch'
'en': 'English'
'eo': 'Esperanto'
'et': 'Estonian'
'tl': 'Filipino'
'fi': 'Finnish'
'fr': 'French'
'fy': 'Frisian'
'gl': 'Galician'
'ka': 'Georgian'
'de': 'German'
'el': 'Greek'
'gu': 'Gujarati'
'ht': 'Haitian Creole'
'ha': 'Hausa'
'haw': 'Hawaiian'
'iw': 'Hebrew'
'hi': 'Hindi'
'hmn': 'Hmong'
'hu': 'Hungarian'
'is': 'Icelandic'
'ig': 'Igbo'
'id': 'Indonesian'
'ga': 'Irish'
'it': 'Italian'
'ja': 'Japanese'
'jw': 'Javanese'
'kn': 'Kannada'
'kk': 'Kazakh'
'km': 'Khmer'
'ko': 'Korean'
'ku': 'Kurdish (Kurmanji)'
'ky': 'Kyrgyz'
'lo': 'Lao'
'la': 'Latin'
'lv': 'Latvian'
'lt': 'Lithuanian'
'lb': 'Luxembourgish'
'mk': 'Macedonian'
'mg': 'Malagasy'
'ms': 'Malay'
'ml': 'Malayalam'
'mt': 'Maltese'
'mi': 'Maori'
'mr': 'Marathi'
'mn': 'Mongolian'
'my': 'Myanmar (Burmese)'
'ne': 'Nepali'
'no': 'Norwegian'
'ps': 'Pashto'
'fa': 'Persian'
'pl': 'Polish'
'pt': 'Portuguese'
'ma': 'Punjabi'
'ro': 'Romanian'
'ru': 'Russian'
'sm': 'Samoan'
'gd': 'Scots Gaelic'
'sr': 'Serbian'
'st': 'Sesotho'
'sn': 'Shona'
'sd': 'Sindhi'
'si': 'Sinhala'
'sk': 'Slovak',
'sl': 'Slovenian'
'so': 'Somali'
'es': 'Spanish'
'su': 'Sundanese'
'sw': 'Swahili'
'sv': 'Swedish'
'tg': 'Tajik'
'ta': 'Tamil'
'te': 'Telugu'
'th': 'Thai'
'tr': 'Turkish'
'uk': 'Ukrainian'
'ur': 'Urdu'
'uz': 'Uzbek'
'vi': 'Vietnamese'
'cy': 'Welsh'
'xh': 'Xhosa'
'yi': 'Yiddish'
'yo': 'Yoruba'
'zu': 'Zulu'
```
