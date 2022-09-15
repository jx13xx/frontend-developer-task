import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./containers/HomeScreen";
import MembersPage from "./containers/MembersPage";
import RegistrationPage from "./containers/RegistrationPage";
import { IntlProvider } from "react-intl";
import messages_en from "./translations/en.json";
import messages_de from "./translations/de.json";
const language = navigator.language.split(/[-_]/)[0];

console.log("this is the variable", language);
const messages = {
  en: messages_en,
  de: messages_de,
};

export default function App() {
  return (
    <IntlProvider locale="en" messages={messages["de"]} defaultLocale="en">
      <Switch>
        <Route path="/" component={HomeScreen} />
        <Route path="/members" component={MembersPage} />
        <Route path="/new-member" component={RegistrationPage} />
      </Switch>
    </IntlProvider>
  );
}
