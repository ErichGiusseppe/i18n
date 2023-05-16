import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobsList";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
const language = navigator.language;
function one_or_other() {
    const language = navigator.language;
    let output=localeEsMessages;
    if (language === 'es' || language === 'es-ES') {
        output=localeEsMessages;
    } else if (language === 'en' || language === 'en-US') {
        output=localeEnMessages;
    }

    return output;
  }
ReactDOM.render(
        <IntlProvider locale={language} messages= {one_or_other()}>
            <JobsList/>
        </IntlProvider>, document.getElementById("root")
);
