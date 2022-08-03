import React from "react";
import LanguageSettingsProvider from "./Context/useContext";
import GetNavigation from "./Navigation/getNavigation";

const FirstStep_app = (): React.ReactElement => (
  <LanguageSettingsProvider>
    <GetNavigation />
  </LanguageSettingsProvider>
);

export default FirstStep_app;
