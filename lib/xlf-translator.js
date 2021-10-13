const fs = require("fs");
const async = require("async");
const translate = require("@iamtraction/google-translate");
const errors = require("./errors");
const StringUtil = require("./utils/string.util");
const constants = require("./constants");

function XlfTranslator() {
  // constructor
}

/**
 * Read the xlf file and get the xml as string
 * @param bodies
 * @param fromLanguage
 * @param toLanguage
 * @param callback
 */
XlfTranslator.prototype.translateBody = function (
  bodies,
  fromLanguage,
  toLanguage,
  callback
) {
  if (bodies && !bodies.length) {
    return callback();
  }

  if (toLanguage.indexOf("-")) {
    toLanguage = toLanguage.split("-")[0];
  }

  const translatedBody = [];
  async.eachLimit(
    bodies,
    1,
    (item, next) => {
      const text = StringUtil.sanitize(item.source[0]);
      item.source[0] = text;

      this.translateString(
        text,
        fromLanguage,
        toLanguage,
        (err, translatedString) => {
          if (!translatedString) {
            const target = { target: [text] };
            translatedBody.push(Object.assign(target, item));
            next();
          } else {
            const target = { target: [translatedString] };
            const newTranslatedItem = Object.assign(target, item);
            translatedBody.push(newTranslatedItem);
            next(err);
          }
        }
      );
    },
    (err) => {
      if (!translatedBody.length) {
        return callback(new Error(errors.COULD_NOT_TRANSLATE.description));
      }

      if (err && err.code === "BAD_REQUEST") {
        return callback(new Error(errors.GOOGLE_LIMIT_REACHED.description));
      }

      if (err && err.statusCode === 429) {
        const limitError = new Error(errors.GOOGLE_LIMIT_REACHED.description);
        return callback(limitError);
      }

      callback(null, translatedBody);
    }
  );
};

/**
 * Translate the string with google translate
 * @param string
 * @param fromLanguage
 * @param toLanguage
 * @param callback
 */
XlfTranslator.prototype.translateString = function (
  string,
  fromLanguage,
  toLanguage,
  callback
) {
  if (!string) {
    return callback(Error(errors.NO_TRANSLATION_STRING.description));
  }

  translate(string, { from: fromLanguage, to: toLanguage })
    .then((res) => {
      if (constants.LOGGING) {
        console.info(
          `translated -> ${string} - ${res.text} to language (${toLanguage})`
        );
      }
      callback(null, res.text);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports = new XlfTranslator();
