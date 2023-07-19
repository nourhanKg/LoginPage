import LoginPage from "./components/Pages/LoginPage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function App() {
  const { i18n } = useTranslation();
  const [stylesheet, setStylesheet] = useState("./styles/main-ltr.css");

  useEffect(() => {
    if (i18n.language === "ar") {
      setStylesheet("./styles/main-rtl.css");
    } else {
      setStylesheet("./styles/main-ltr.css");
    }
  }, [i18n.language]);

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={stylesheet} />
      </Helmet>
      <LoginPage />
    </>
  );
}

export default App;
