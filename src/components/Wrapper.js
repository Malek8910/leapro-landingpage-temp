import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Arabic from "../lang/ar.json";
import English from "../lang/en.json";
import Cookies from 'universal-cookie';


const cookies = new Cookies(null, { path: '/' });

export const Context = React.createContext();

let local = navigator.language;
let lang;

console.log(local);
console.log(cookies.get('lang'));


if (cookies.get('lang') == null) {
  cookies.set('lang', local);
} else {
  local = cookies.get('lang');
}

// let local = navigator.language;
// console.log(local);

// if (lang === null) {
//   cookies.set('lang', local);

// } else
//   local = lang;


if (local.includes("en")) {
  lang = English;
} else {
  if (local.includes("ar")) {
    lang = Arabic;
  } else {
    lang = English;
  }
}



const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);

    if (newLocale === "en") {
      setMessages(English);
      cookies.set('lang', newLocale);

    } else {
      if (newLocale === "ar") {
        setMessages(Arabic);
        cookies.set('lang', newLocale);

      } else {
        setMessages(English);
      }
    }
    window.location.reload();


  }
  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
export default Wrapper;
