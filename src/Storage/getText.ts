let language = "";

export const getText = (text: string): string => {
  let strings = {};

  switch (language) {
    case "cz":
      strings = require("./text.cz.json");
      break;
    case "eng":
      strings = require("./text.eng.json");
      break;
  }

  switch (text) {
    case "COMMON.START_SEARCH":
      return strings.startSearch;
    case "COMMON.BACK":
      return strings.back;
    case "SETTING":
      return strings.setting;
    case "CHOOSE_LANGUAGE":
      return strings.chooseLanguage;
    case "ENGLISH":
      return strings.english;
    case "CZECH":
      return strings.czech;
    case "PROFILE":
      return strings.profile;
    case "CHOOSE_THEME":
      return strings.setTheme;
    case "SCAN_BLE":
      return strings.scanBle;
    case "SCAN_CLASSIC":
      return strings.scanClasBle;
    default:
      return text;
  }
};

export const setLanguageFoTexts = async (languageFromStorage) => {
  language = languageFromStorage;
};
