import Card from "../UI/Card/Card";
import formImage from "../../assets/login-form.png";
import FormInput from "../UI/FormInput/FormInput";
import { FaUser } from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import { FaCheck } from 'react-icons/fa';

import { useTranslation } from "react-i18next";

function LoginForm() {
    const {t, i18n} = useTranslation();
    const changeLanguage = function () {
        if (i18n.language === "ar") i18n.changeLanguage("en");
        else i18n.changeLanguage("ar");
    };
    const validateEmail = function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const validatePassword = function(password) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    }
    return (
        <Card className="login-card">
            <header className="header">
                <h1>Logo</h1>
                <button className="btn btn-lang" onClick={changeLanguage}>
                    {i18n.language === "ar"? "En" : "عربي"}
                </button>
            </header>
            <div className="form-container">
                <div className="form-container_sec form-image">
                    <img src={formImage}></img>
                </div>
                <form className="form-container_sec form">
                    <h2 className="form-title">{t("form-title")}</h2>
                    <h4 className="form-title_sub">{t("form-title-sub")}</h4>
                    <div className="form-inputs">
                        <FormInput 
                            type="email" 
                            className="form-input" 
                            icon={<FaUser/>} 
                            validation={validateEmail} 
                            invalidMsg={t("emailInvalidMsg")}
                            placeholder={t("emailPlaceholder")}>
                        </FormInput>
                        <FormInput 
                            type="password" 
                            className="form-input" 
                            icon={<FaLock/>} 
                            validation={validatePassword} 
                            invalidMsg={t("passwordInvalidMsg")}
                            placeholder={t("passwordPlaceholder")}>
                        </FormInput>
                    </div>
                    <div className="form-options">
                        <input type="checkbox" className="checkbox" id="checkbox"></input>
                        <label htmlFor="checkbox">{t("rememberLabel")} <span><FaCheck className="checkicon"/></span></label>
                        <a href="#">{t("forgot-password")}</a>
                    </div>
                    <div className="form-actions">
                        <button className="btn btn-main">{t("Sign In")}</button>
                        <p>{t("new-user")} <a href="#">{t("Sign Up")}</a></p>
                    </div>
                </form>
            </div>
            <footer className="footer">
                <p>{t("copyrights")}</p>
                <p><a href="#">{t("terms")}</a> | <a href="#">{t("privacy")}</a></p>
            </footer>
        </Card>
    )
}
export default LoginForm;