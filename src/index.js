import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App/App";
import { setLocale } from "yup";
import configureStore from "store/store";
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
const store = configureStore();

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
