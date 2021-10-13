module.exports = {
    NO_PROJECT_NAME: {
        description: 'add a project name, we need store your src somewhere',
        code: 1000
    },
    NO_FROM_LANGUAGE: {
        description: 'We need to know the language of this file, please add a valid iso to the configuration (fromLanguage)',
        code: 1001
    },
    NO_TO_LANGUAGE: {
        description: 'We need to know to which language(s) we need to transform the data, please add a valid iso to the configuration file (toLanguage)',
        code: 1002
    },
    GOOGLE_LIMIT_REACHED: {
        description: 'The google translate api is blocking your requests, they have a limit (wait or use an vpn)',
        code: 1003
    },
    COULD_NOT_TRANSLATE: {
        description: 'Could not translate to this language',
        code: 1004
    },
    CONFIG_FILE_NOT_EXIST: {
        description: 'The config file does not exist, make sure you add the json file to the root of the project',
        code: 1005
    },
    NOT_IN_A_PROJECT: {
        description: 'It seems like this directory does not have a package.json, try to use it within a project',
        code: 1006
    },
    CONFIG_MESSAGE_FILE_NOT_EXIST: {
        description: 'The xlf message file does not exist, make sure you add the messages.xlf to the source path',
        code: 1007
    },
    MALLFORMED_XLF_FILE: {
        description: 'Seems like there is a malformed xlf file',
        code: 1008
    },
    MALLFORMED_FILES: {
        description: 'Seems like there are broken files',
        code: 1009
    },
    COULD_NOT_READ: {
        description: 'Could not read a xlf file, make sure it is not malformed',
        code: 1010
    },
    NO_TRANSLATION_STRING: {
        description: 'There was an empty string in one of the translation requests',
        code: 1011
    },
    MISSING_TARGET_TRYING_UPDATE_XLF_FROM_CSV: {
        description: 'No translation found trying to update the xlf from csv',
        code: 1012
    },
};
