import React, { useContext, useState } from "react";

export const LanguageContext = React.createContext({ language: "cz" });

const LanguageSettingsProvider = ({ children }): React.ReactElement => {
  const [language, setLanguage] = useState("eng");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageSettingsProvider;
