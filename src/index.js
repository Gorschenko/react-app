import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { setLocale } from "yup";
import "bootstrap/dist/css/bootstrap.css";
setLocale({
    mixed: {
        required: "Поле является обязательным"
    },
    string: {
        email: "Введите валидный адресс электронной почты"
    }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
